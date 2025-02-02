import CourseService from '$lib/Services/CourseService.js';
import InvoiceService from '$lib/Services/InvoiceService.js';
import Invoice from '$lib/Entities/Invoice.js';
import { fail } from '@sveltejs/kit';

export async function load({cookies}) {
    //Add a check if the user has a pending invoice so can't register.  ALert Flowbite

    //get user data
    const courseService = new CourseService();
    const unregisteredCourses = await courseService.getCoursesNotForStudent(Number(cookies.get('id')))
	return {
		courses: unregisteredCourses.map(course => course.toJSON())
	};
}

function generateEFTReference() {
    const prefix = "INV"; // Fixed prefix for clarity
    const randomPart = Math.random().toString(36).substring(2, 9).toUpperCase(); // Random 7 characters
    return `${prefix}${randomPart}`;
}

export const actions = {
    register: async ({ request, cookies }) => {
      const formData = await request.formData();
  
      const slectedCoursesS = formData.get("slectedCourses")?.toString();
      const total = formData.get("total")?.toString();
      const slectedCourses = slectedCoursesS.split(",").map(Number);

  
      // ✅ Validate inputs (basic example)
      if (!slectedCoursesS) {
          console.log("Student did not enroll in any courses")
        return fail(400, { error: "Student did not enroll in any courses" });
      }

      // TODO: Save user to your database
      try {
        const invoiceService = new InvoiceService()
        const invoice = new Invoice(null, Number(cookies.get('id')), Number(total), generateEFTReference(), 'pending', new Date())
        await invoiceService.createInvoice(slectedCourses, invoice)
        
      } catch (error) {
          console.log("Failed to create invoice: "+error)
          return fail(400, {error: "Failed to create invoice"})
      }
    }
};

