import bcrypt from 'bcrypt';
import Student from '$lib/Entities/Student';
import StudentDAO from '$lib/DAOs/StudentDAO';

class StudentService{
    constructor(){
        this.studentDAO = new StudentDAO()
    }
    
    /**
     * @param {string} email
     * @param {string} password
     */
    async login(email, password){
        //get user 
        const student = await this.studentDAO.getStudentByEmailAndPassword(email, password)

        if(!student){
            return null
        }

        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return null;
        }

        return student;
    }

    /**
     * @param {{ hashPassword: () => void; name: any; surname: any; email: any; password: any; phone: any; }} student
     */
    async register(student){
        if (!(student instanceof Student)) {
            throw new Error('Parameter must be an instance of the Student class to register a student.');
        }
       
        student.hashPassword();
        await this.studentDAO.addStudent(student);
    }
    /**
     * @param {Number} id
     */
    async getStudentbyID(id){
        if(typeof id !== 'number'){
            throw new Error("Parameter must be integer to get student")
        }
        const student = this.studentDAO.getStudentByID(id);
        if(!student){
            throw new Error("No student with that ID")
        }
        return student;
    }
    /**
     * @param {any} student
     */
    async updateUserProfile(student){
        if (!(student instanceof Student)) {
            throw new Error('Parameter must be an instance of the Student class to register a student.');
        }
        await this.studentDAO.updateStudent(student)
    }


    /**
     * @param {number} id
     * @param {string} passwordCurrent
     * @param {string} passwordNew
     * @param {string} passwordConfirm
     */
    async resetPassword(id, passwordCurrent, passwordNew, passwordConfirm){

        //check if new passwords match
        console.log(passwordNew + ' '+ passwordConfirm)
        if (passwordNew !== passwordConfirm) {
            console.log("Passwords do not match")
            throw new Error( "Passwords do not match");
        }

        //confrim if its the currenct password
        const studentService = new StudentService();
        let student = await studentService.getStudentbyID(id)
        if(!student){
            throw new Error("Student id is not in the system")
        }

        // @ts-ignore
        let tempStudent = await studentService.login(student.email, passwordCurrent);
        if(!tempStudent){
            throw new Error("Student current password is incorrect")
        }

        //save new student data
        student.setPassword(passwordNew)
        student.hashPassword()
        await studentService.updateUserProfile(student);
        
    }
}

export default StudentService;