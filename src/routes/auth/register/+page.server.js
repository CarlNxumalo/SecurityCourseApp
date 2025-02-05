import { fail, redirect } from "@sveltejs/kit";
import Student from "$lib/Entities/Student.js";
import StudentService from "$lib/Services/StudentService.js";

export const actions = {
  register: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const surname = formData.get("surname")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const password = formData.get("password")?.toString();
    const password2 = formData.get("password2")?.toString();


    // ✅ Validate inputs (basic example)
    if (!name || !surname || !email || !phone || !password || !password2) {
        console.log("All fields are required")
        return fail(400, { 
            error: "All fields are required", 
            fields: { name, surname, email, phone } // Exclude passwords for security reasons
        });
    }

    if (password !== password2) {
        console.log("Passwords do not match")
      return fail(400, { error: "Passwords do not match" , fields: { name, surname, email, phone }});
    }

    // TODO: Save user to your database
    try {
        const student = new Student(null, name, surname, email, password, phone);
        const studentService = new StudentService();
        await studentService.register(student);
    } catch (error) {
        console.log("Failed to register user")
        if (error.message.startsWith("Violation of UNIQUE KEY constraint")) {
            // Handle the error
            return fail(400, {error: 'Email already exists in the database'})
        }
        return fail(400, {error: error.message, fields: { name, surname, email, phone }})
      
        
    }

    // ✅ Redirect on success
    throw redirect(303, "/auth/login"); // Change to your desired page
  }
};
