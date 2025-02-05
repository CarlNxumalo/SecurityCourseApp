export const ssr = true;
export const csr = true;

export async function load({ parent, params }) {
  const data = await parent(); // Ensure parent data is retrieved
  const courseID = Number(params.id);
  
  if (!data?.courses || isNaN(courseID)) {
    console.error("Invalid course data or courseID");
    return { course: null };
  }

  // Find the matching course
  const course = data.courses.find(course => course.courseID === courseID);

  return {
    course
  };
}
