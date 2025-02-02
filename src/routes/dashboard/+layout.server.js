import CourseService from '$lib/Services/CourseService.js'


export async function load({cookies}) {
    //get the user courses
    const courseService = new CourseService()
    const courses = await courseService.getEnrolledCoursesForSudent(Number(cookies.get('id')))
    return{
        courses: courses?.map(course => course.toJSON())
    }
}
