import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses,setCourses] = useState([]);
    
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
 

    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20 ">
            {
                courses.map(course => <Course key={course.id} course ={course}></Course>)
            }
        </div>
    );
};

export default Courses;