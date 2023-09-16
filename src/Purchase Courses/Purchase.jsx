/* eslint-disable react/prop-types */

import  './Purchase.css'

const Purchase = ({purchase,totalPrice,readingTime,remainingHour}) => {
    return (
        <div className="w-[312px] mx-auto mt-8 p-6 h-[380px]   bg-[#FFFFFF] shadow-xl  rounded-lg">

            <h3 className="text-[#2F80ED] text-lg font-bold custom-border pb-4 ">Credit Hour Remaining {remainingHour}  hr</h3>

            

            <h1 className="text-[18px] text-[#1C1B1B] font-bold py-4">Course Name </h1>
            
            <ol className="list-decimal list-inside bg-white border p-2 rounded-lg pb-4">
            {
                purchase.map(courselist =>  <li className="text-base text-[#1C1B1B] text-opacity-60" key={courselist.id}>{courselist.title}</li>)
            }
            </ol>
            

            <h1 className="text-[#1C1B1B] text-opacity-80 text-base
             font-semibold custom-border py-4">Total Credit Hour:{readingTime}hr </h1>


            <h1 className="text-[#1C1B1B] text-opacity-80 text-lg
             font-bold pt-4">Total price: {totalPrice} USD</h1>
            
        </div>
    );
};

export default Purchase;