export const ssr = true;
export const csr = true;
export async function load({ parent , params}) {

    let data = await parent()
    const courseID  = Number(params.id)
    console.log(courseID)
    let course;
    if(!data){
        
    }
    for (let i = 0; i < data.courses.length; i++) {
        if(data.courses[i].courseID == courseID)
        {
            course = data.courses[i]
        }
        
    }
	return{
        course: course
    };
}
