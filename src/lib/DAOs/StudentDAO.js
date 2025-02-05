import sql from 'mssql';
import Student from '$lib/Entities/Student';
import bcrypt from 'bcrypt';
import {CONFIG} from '$env/static/private';

class StudentDAO {

  async connect() {
    try {
      this.pool = await sql.connect(CONFIG);
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

  async getAllStudents() {
    try {
      await this.connect();
      const result = await this.pool?.request().query('SELECT * FROM Students');
      return result?.recordset.map(record => new Student(
        record.id,
        record.name,
        record.surname,
        record.email,
        record.password,
        record.phone
      ));
    } catch (err) {
      console.error('Error fetching students:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {any} id
     */
  async getStudentByID(id) {
    try {
      await this.connect();
      const query = 'SELECT * FROM Students WHERE id = @id';
      const result = await this.pool?.request()
        .input('id', sql.Int, id)
        .query(query);

      const record = result?.recordset[0];
      if (record) {
        return new Student(
          record.id,
          record.name,
          record.surname,
          record.email,
          record.password,
          record.phone
        );
      }
      return null;
    } catch (err) {
      console.error('Error fetching student by ID:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {any} email
     * @param {string | Buffer<ArrayBufferLike>} password
     */
  async getStudentByEmailAndPassword(email, password) {
    try {
      await this.connect();
      const query = 'SELECT * FROM Students WHERE email = @Email';
      const result = await this.pool?.request()
        .input('Email', sql.NVarChar, email)
        .query(query);

      const record = result?.recordset[0];
      if (record) {
        const student = new Student(
          record.id,
          record.name,
          record.surname,
          record.email,
          record.password,
          record.phone
        );
        return student;
      }
      return null;

    } catch (err) {
      console.error('Error fetching student by email and password:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {{ hashPassword: () => void; name: any; surname: any; email: any; password: any; phone: any; }} student
     */
  async addStudent(student) {
    try {
      
      await this.connect();
      const query = `
        INSERT INTO Students (name, surname, email, password, phone) 
        VALUES (@name, @surname, @email, @password, @phone)
      `;

      const request = this.pool?.request()
        .input('name', sql.NVarChar, student.name)
        .input('surname', sql.NVarChar, student.surname)
        .input('email', sql.NVarChar, student.email)
        .input('password', sql.NVarChar, student.password)
        .input('phone', sql.NVarChar, student.phone);

      await request?.query(query);
    } catch (err) {
      console.error('Error inserting student:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {{ id: any; name: any; surname: any; email: any; password: any; phone: any; }} student
     */
  async updateStudent(student) {
    if (!student.id) throw new Error('Student ID is required for updates');

    try {
      await this.connect();
      const query = `
        UPDATE Students
        SET name = @name, surname = @surname, email = @email, password = @password, phone = @phone
        WHERE id = @id
      `;

      const request = this.pool?.request()
        .input('id', sql.Int, student.id)
        .input('name', sql.NVarChar, student.name)
        .input('surname', sql.NVarChar, student.surname)
        .input('email', sql.NVarChar, student.email)
        .input('password', sql.NVarChar, student.password)
        .input('phone', sql.NVarChar, student.phone);

      await request?.query(query);
    } catch (err) {
      console.error('Error updating student:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
  

  /**
     * @param {any} id
     */
  async deleteStudent(id) {
    if (!id) throw new Error('Student ID is required for deletion');

    try {
      await this.connect();
      const query = 'DELETE FROM Students WHERE id = @id';
      await this.pool?.request().input('id', sql.Int, id).query(query);
    } catch (err) {
      console.error('Error deleting student:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
}

export default StudentDAO;
