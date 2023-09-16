/* eslint-disable react/prop-types */
import dollarSign from '../assets/dollar-sign 1.svg'
import readingSign from '../assets/Frame.png'
const Course = ({course,handleSelectBtn}) => {
   const {image,title,details,price,reading_time} =course;
    return (
        <>
        <div className="h-[400px] w-[312px] mx-auto  p-4 mt-8 space-y-4 bg-white shadow-xl rounded-lg">
            <div>
                <img className='lg:w-[300px] w-full' src={image} alt="" />
            </div>
            <h3 className='text-[18px] font-bold'>{title}</h3>
            <p className='text-[#1C1B1B]  text-opacity-60'><small>{details}</small></p>

            <div className='flex gap-4 lg:gap-12 '>
                <div className='flex gap-3 md:gap-0'>
                <img src={dollarSign} alt="DollarSign" />
                <h3 className='text-[#1C1B1B]  text-opacity-60'>Price: {price}</h3>
                </div>
                <div className='flex gap-3 md:gap-0'>
                    <img src={readingSign} alt="ReadingSign" />
                    <h3 className='text-[#1C1B1B]  text-opacity-60'>Credit: {reading_time}hr</h3>
                </div>
            </div>
            <div className='border border-[#2F80ED] bg-[#2F80ED] text-white text-center rounded-lg font-bold py-2'>
                <button onClick={()=>handleSelectBtn(course)} className=''>Select</button>
            </div>

        </div>
        </>
    );
 };
 
 export default Course;