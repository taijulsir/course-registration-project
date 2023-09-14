/* eslint-disable react/prop-types */
import CourseList from "../Paid Course List/CourseList";

const Purchase = ({purchase,totalPrice}) => {
    return (
        <div className="md:w-1/3 mt-8 p-6 h-[380px] lg:w-[400px] lg:ml-20 bg-slate-200">

            <h3 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining  hr</h3>

            <h1 className="text-[18px] text-[#1C1B1B] font-bold">Course Name </h1>
            <div >
            {
                purchase.map(courselist => <CourseList key={courselist.id} courselist ={courselist}> </CourseList>)
            }
            </div>

            <h1>Total Credit Hour: </h1>


            <h1 className="text-[#1C1B1B] text-opacity-80 text-lg
             font-bold">Total price: {totalPrice} USD</h1>
            
        </div>
    );
};

export default Purchase;