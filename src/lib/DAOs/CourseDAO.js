import sql from 'mssql';
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

class CourseDAO {
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

  async getAllCourses() {
    try {
      await this.connect();
      const result = await this.pool?.request().query('SELECT * FROM Courses');
      return result?.recordset.map(record => new Course(
        record.courseID,
        record.name,
        record.path,
        record.about,
        record.price,
        record.overview
      ));
    } catch (err) {
      console.error('Error fetching courses:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {number} studentID
     */
  async getCoursesForStudent(studentID) {
    try {
      await this.connect();
      const query = `
        SELECT c.* FROM Courses c
        INNER JOIN StudentCourses sc ON c.courseID = sc.courseID
        WHERE sc.studentID = @studentID
      `;
      const result = await this.pool?.request()
        .input('studentID', sql.Int, studentID)
        .query(query);
      
      return result?.recordset.map(record => new Course(
        record.courseID,
        record.name,
        record.path,
        record.about,
        record.price,
        record.overview
      ));
    } catch (err) {
      console.error('Error fetching student courses:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  /**
     * @param {number} studentID
     */
  async getCoursesNotForStudent(studentID) {
    try {
      await this.connect();
      const query = `
        SELECT c.* FROM Courses c
        WHERE c.courseID NOT IN (
          SELECT courseID FROM StudentCourses WHERE studentID = @studentID
        )
      `;
      const result = await this.pool?.request()
        .input('studentID', sql.Int, studentID)
        .query(query);
      
      return result?.recordset.map(record => new Course(
        record.courseID,
        record.name,
        record.path,
        record.about,
        record.price,
        record.overview
      ));
      
    } catch (err) {
      console.error('Error fetching courses student does not have:', err);
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
}

export default CourseDAO;
