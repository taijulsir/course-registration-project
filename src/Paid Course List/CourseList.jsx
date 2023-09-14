/* eslint-disable react/prop-types */
const CourseList = ({courselist}) => {

    return (
        <div className="bg-gray-200 pb-4">

            
            <ol className=" list-decimal list-inside">
                <li>{courselist.title}</li>
            </ol>
           
        </div>
    );
};

export default CourseList;