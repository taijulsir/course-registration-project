import { useState } from 'react'
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
      return alert('Already Added This')
    }
    else{
      purchase.forEach(item => {
        count += item.price;
      })
      if(time>20){
        return alert('you can not add more')
      }
      else{
        setRemainingHour(remaining)
        setReadingTime(time)
        setTotalPrice(count)
        setPurchase([...purchase,course])
      }
      
    }
    
  }
  return (
    <>
      
      <h1 className='text-[#1C1B1B] text-[32px] font-bold text-center mt-[50px]'>Course Registration</h1>
     
     <div className='md:flex md:mx-10  lg:mx-[100px]  mx-5'>
     <Courses handleSelectBtn={handleSelectBtn}></Courses>
     <Purchase purchase={purchase} totalPrice={totalPrice} remainingHour={remainingHour} readingTime ={readingTime} ></Purchase>
     </div>
       
    </>
  )
}

export default App
