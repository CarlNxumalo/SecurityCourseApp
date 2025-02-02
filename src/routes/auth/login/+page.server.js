import { fail, redirect } from "@sveltejs/kit";
import Student from "$lib/Entities/Student.js";
import StudentService from "$lib/Services/StudentService.js";

export const actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();


    // ✅ Validate inputs (basic example)
    if (!email || !password) {
      return fail(400, { error: "All fields are required" });
    }

    // TODO: Save user to your database
    let student = null
    try {
        
        const studentService = new StudentService();
        student = await studentService.login(email, password);
    } catch (error) {
        console.log("Failed to login user")
        return fail(400, {error: "Failed to login user"})
    }

    if(!(student instanceof Student)){
        console.log("Incorrect email or password")
        return fail(400, { 
            error: "Incorrect email or password",
            value: email  // Preserve entered email
        });
    }


    //save userID in cookie
    cookies.set('id', student.id+'', {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 *3 // 1 hour
    });
    console.log(student)

    // ✅ Redirect on success
    throw redirect(303, "/dashboard"); // Change to your desired page
  }
};
