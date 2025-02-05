import StudentService from "$lib/Services/StudentService";
import Student from "$lib/Entities/Student.js";
import {fail} from "@sveltejs/kit";

export const actions = {
  reset: async ({ request, cookies }) => {
    try 
    {
        const formData = await request.formData();
        const passwordCurrent = formData.get("passwordCurrent")?.toString();
        const passwordNew = formData.get("passwordNew")?.toString();
        const passwordConfirm = formData.get("passwordConfirm")?.toString();

        // ✅ Validate inputs (basic example)
        if (!passwordNew || !passwordCurrent || !passwordConfirm) {
            console.log("All fields are required")
            return fail(400, { error: "All fields are required"});
        }
        const studentService = new StudentService()
        await studentService.resetPassword(Number(cookies.get('id')), passwordCurrent, passwordNew, passwordConfirm) 
        return {
            success: "Password has been succesfully reset"
        }   
        } 
    catch (error) {
        console.log(error)
        return fail(400, { error: error.message});
    }
  }
};
