import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Courses from './Courses/Courses'
import Purchase from './Purchase Courses/Purchase'
function App() {

  const [purchase,setPurchase] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const [remainingHour,setRemainingHour] = useState([]);
  
  const handleSelectBtn = course => {

    const isExist = purchase.find(item=> item.id === course.id)

    let time = course.reading_time;
    time = readingTime + time;

    let remaining = 20 - time;
    
    let count = course.price;
    
    if(isExist){
      return toast.error('Already Added This',{
        position: "top-center",
        theme: "dark",
        autoClose: 3000
      })
    }
    else{
      purchase.forEach(item => {
        count += item.price;
      })
      if(time>20){
        return toast.error('Your Remaining Hour is Complete',{
          position: "top-center",
          theme: "colored",
          autoClose: 3000
        })
      }
      else{
        toast.success('succesfully added',{
          position: "top-center",
          theme: "colored",
          autoClose: 3000
        })
        setRemainingHour(remaining)
        setReadingTime(time)
        setTotalPrice(count)
        setPurchase([...purchase,course])
      }
      
    }
    
  }
  return (
    <>
      
      <div className='container mx-auto'>
      <h1 className='text-[#1C1B1B] text-[32px] font-bold text-center mt-[50px]'>Course Registration</h1>
      </div>
     
     <div className='md:flex container mx-auto flex-col lg:flex-row  md:gap-2 mb-20'>
     <Courses handleSelectBtn={handleSelectBtn}></Courses>
     <Purchase purchase={purchase} totalPrice={totalPrice} remainingHour={remainingHour} readingTime ={readingTime} ></Purchase>
     </div>
     <ToastContainer></ToastContainer>
       
    </>
  )
}

export default App
