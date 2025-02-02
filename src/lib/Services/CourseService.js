import Course from '$lib/Entities/Course';
import CourseDAO from '$lib/DAOs/CourseDAO';

class CourseService{
    constructor(){
        this.courseDAO = new CourseDAO()
    }

    /**
     * @param {number} studentID
     */
    async getCoursesNotForStudent(studentID){
        if(!(Number.isInteger(studentID))){
            throw new Error('Student ID must be an integer');
        }
        const courses = await this.courseDAO.getCoursesNotForStudent(studentID)

        return courses;

    }
    /**
     * @param {number} studentID
     */
    async getEnrolledCoursesForSudent(studentID){
        if(!(Number.isInteger(studentID))){
            throw new Error('Student ID must be an integer');
        }
        const courses = await this.courseDAO.getCoursesForStudent(studentID)

        return courses;
    }
}

export default CourseService;

