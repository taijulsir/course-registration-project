import './App.css'
import Courses from './Courses/Courses'
import Purchase from './Purchase Courses/Purchase'
function App() {


  return (
    <>
      
      <h1 className='text-[#1C1B1B] text-[32px] font-bold text-center mt-[50px]'>Course Registration</h1>
     
     <div className='md:flex md:mx-10 lg:mx-[60px] mx-5'>
     <Courses></Courses>
     <Purchase></Purchase>
     </div>
       
    </>
  )
}

export default App
