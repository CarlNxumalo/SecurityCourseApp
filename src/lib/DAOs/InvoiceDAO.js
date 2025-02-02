import sql from 'mssql';
import Invoice from '$lib/Entities/Invoice';
import Course from '$lib/Entities/Course';

const config = {
  user: 'Carl',
  password: 'Carlzozo23$$',
  database: 'MayOne',
  server: 'DESKTOP-C365JJK',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  connectionTimeout: 30000,
};

class InvoiceDAO {
  async connect() {
    try {
      this.pool = await sql.connect(config);
    } catch (err) {
      console.error('Database connection failed:', err);
      throw err;
    }
  }

  async closeConnection() {
    try {
      if (this.pool) {
        await this.pool.close();
        console.log('Database connection closed');
      }
    } catch (err) {
      console.error('Error closing database connection:', err);
    }
  }

  /**
   * @param {number} studentID
   */
  async getAllInvoicesByStudent(studentID) {
    try {
      await this.connect();
  
      const query = `
        SELECT 
          i.invoiceID, 
          i.studentID, 
          i.amount, 
          i.referenceEFT, 
          i.status, 
          i.createdAt,
          (
            SELECT 
              c.courseID, 
              c.name, 
              c.path, 
              c.about, 
              c.price
            FROM InvoiceCourses ic
            INNER JOIN Courses c ON ic.courseID = c.courseID
            WHERE ic.invoiceID = i.invoiceID
            FOR JSON PATH
          ) AS courses
        FROM Invoices i
        WHERE i.studentID = @studentID;
      `;
      
      const result = await this.pool?.request()
      .input('studentID', sql.Int, studentID)
      .query(query);
      
        const invoices = result.recordset.map(invoiceData => {
          // Parse the courses JSON string for the current invoice
          const coursesData = JSON.parse(invoiceData.courses); // Parse the courses JSON string
      
          // Map coursesData to Course objects
          const courses = coursesData.map(course => new Course(
              course.courseID,
              course.name,
              course.path,
              course.about,
              course.price
          ));
          
          // Create the Invoice object
          const invoice = new Invoice(
              invoiceData.invoiceID,
              invoiceData.studentID,
              invoiceData.amount,
              invoiceData.referenceEFT,
              invoiceData.status,
              new Date(invoiceData.createdAt)
          );
          
          // Assign courses to invoiceItems
          invoice.invoiceItems = courses;
      
          return invoice; // Return the updated invoice object
      });
      return invoices;
    } catch (err) {
      console.error('Error fetching invoices:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
  
  

  /**
     * @param {number} invoiceID
     */
  async getInvoiceByID(invoiceID) {
    try {
      await this.connect();
      const query = 'SELECT * FROM Invoices WHERE invoiceID = @invoiceID';
      const result = await this.pool?.request()
        .input('invoiceID', sql.Int, invoiceID)
        .query(query);

      const record = result?.recordset[0];
      if (record) {
        return new Invoice(
          record.invoiceID,
          record.studentID,
          record.amount,
          record.referenceEFT,
          record.status,
          record.createdAt
        );
      }
      return null;
    } catch (err) {
      console.error('Error fetching invoice by ID:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {{ studentID: any; amount: any; referenceEFT: any; status: any; createdAt: any; }} invoice
     */
  async addInvoice(invoice) {
    try {
      await this.connect();
      const query = `
        INSERT INTO Invoices (studentID, amount, referenceEFT, status, createdAt) 
        VALUES (@studentID, @amount, @referenceEFT, @status, @createdAt)
      `;

      await this.pool?.request()
        .input('studentID', sql.Int, invoice.studentID)
        .input('amount', sql.Float, invoice.amount)
        .input('referenceEFT', sql.NVarChar, invoice.referenceEFT)
        .input('status', sql.NVarChar, invoice.status)
        .input('createdAt', sql.DateTime, invoice.createdAt)
        .query(query);
    } catch (err) {
      console.error('Error inserting invoice:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {{ invoiceID: any; studentID: any; amount: any; referenceEFT: any; status: any; }} invoice
     */
  async updateInvoice(invoice) {
    if (!invoice.invoiceID) throw new Error('Invoice ID is required for updates');

    try {
      await this.connect();
      const query = `
        UPDATE Invoices
        SET studentID = @studentID, amount = @amount, referenceEFT = @referenceEFT, status = @status
        WHERE invoiceID = @invoiceID
      `;

      await this.pool?.request()
        .input('invoiceID', sql.Int, invoice.invoiceID)
        .input('studentID', sql.Int, invoice.studentID)
        .input('amount', sql.Float, invoice.amount)
        .input('referenceEFT', sql.NVarChar, invoice.referenceEFT)
        .input('status', sql.NVarChar, invoice.status)
        .query(query);
    } catch (err) {
      console.error('Error updating invoice:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {number} invoiceID
     */
  async deleteInvoice(invoiceID) {
    if (!invoiceID) throw new Error('Invoice ID is required for deletion');

    try {
      await this.connect();
      const query = 'DELETE FROM Invoices WHERE invoiceID = @invoiceID';
      await this.pool?.request().input('invoiceID', sql.Int, invoiceID).query(query);
    } catch (err) {
      console.error('Error deleting invoice:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
   * @param {{ studentID: any; amount: any; referenceEFT: any; status: any; createdAt: any; }} invoice
   * @param {any} courseIDs
   */
  async addInvoiceWithItems(invoice, courseIDs) {
    try {
      await this.connect();
      const transaction = new sql.Transaction(this.pool);

      await transaction.begin();

      // Insert the invoice
      const invoiceQuery = `
        INSERT INTO Invoices (studentID, amount, referenceEFT, status, createdAt) 
        OUTPUT INSERTED.invoiceID
        VALUES (@studentID, @amount, @referenceEFT, @status, @createdAt)
      `;

      const invoiceResult = await transaction.request()
        .input('studentID', sql.Int, invoice.studentID)
        .input('amount', sql.Float, invoice.amount)
        .input('referenceEFT', sql.NVarChar, invoice.referenceEFT)
        .input('status', sql.NVarChar, invoice.status)
        .input('createdAt', sql.DateTime, invoice.createdAt)
        .query(invoiceQuery);

      const invoiceID = invoiceResult.recordset[0].invoiceID;

      // Insert invoice items (courses associated with the invoice)
      const invoiceCoursesQuery = `
        INSERT INTO InvoiceCourses (invoiceID, courseID) 
        VALUES (@invoiceID, @courseID)
      `;

      for (const courseID of courseIDs) {
        await transaction.request()
          .input('invoiceID', sql.Int, invoiceID)
          .input('courseID', sql.Int, courseID)
          .query(invoiceCoursesQuery);
      }

      await transaction.commit();
      return invoiceID;
    } catch (err) {
      console.error('Error inserting invoice with items:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
  
  /**
   * @param {number} studentID
   */
  async getStudentPendingInvoices(studentID) {
    try {
      await this.connect();
      const query = "SELECT * FROM Invoices WHERE status = 'pending' AND studentID = "+studentID;
      const result = await this.pool?.request().query(query);

      return result?.recordset.map(record => new Invoice(
        record.invoiceID,
        record.studentID,
        record.amount,
        record.referenceEFT,
        record.status,
        record.createdAt
      ));
      
    } catch (err) {
      console.error('Error fetching pending invoices:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
}

export default InvoiceDAO;
