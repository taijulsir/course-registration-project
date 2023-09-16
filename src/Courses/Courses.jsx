/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectBtn}) => {

    const [courses,setCourses] = useState([]);
    
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
 

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ">
            {
                courses.map(course => <Course key={course.id} course ={course}
                handleSelectBtn ={handleSelectBtn}
                ></Course>)
            }
        </div>
    );
};

export default Courses;