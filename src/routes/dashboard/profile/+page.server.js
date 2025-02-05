import Student from "$lib/Entities/Student";
import StudentService from "$lib/Services/StudentService";
import { fail } from "@sveltejs/kit";

export async function load({cookies}) {
    //get user data
    const studentService = new StudentService()
    const student = await studentService.getStudentbyID(Number(cookies.get('id')));
    return {
      student: student?.toJSON()
    };
}


export const actions = {
    update: async ({ request, cookies }) => {
      const formData = await request.formData();
  
      const name = formData.get("name")?.toString();
      const surname = formData.get("surname")?.toString();
      const email = formData.get("email")?.toString();
      const phone = formData.get("phone")?.toString();
  
  
      // ✅ Validate inputs (basic example)
      if (!name || !surname || !email || !phone) {
          console.log("All fields are required")
        return fail(400, { error: "All fields are required" });
      }

      // TODO: Save user to your database
      try {
          const studentService = new StudentService();
          const oldStudent = await studentService.getStudentbyID(Number(cookies.get('id')));
          oldStudent?.setName(name)
          oldStudent?.setSurname(surname)
          oldStudent?.setEmail(email)
          oldStudent?.setPhone(phone)
          await studentService.updateUserProfile(oldStudent);
          return {
              success: "Profile updated successfully!"
          }
      } catch (error) {
          console.log("Failed to update user")
          if(error.message.startsWith('Violation of UNIQUE KEY constraint')){
            return fail(400, {error: 'Email Address already exists'})
          }
          return fail(400, {error: error.message})
      }
    }
  };
  
