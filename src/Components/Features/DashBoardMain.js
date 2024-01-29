import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { BiTask } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";


const DashBoardMain = () => {
    

  return (
  <>
   <main className='w-full h-fit flex bg-slate-100'>
      
      <div className={` w-full`} >
      <div className='w-full'>

       {/* heading */}

        <div className='w-full '>
          <h1 className='text-4xl  mt-6 pt-5 pb-2 px-12 p-2  max-md:p-1 max-md:mx-6 max-md:text-2xl md:3xl'>
          Welcome Admin !
          </h1>
          </div>
          <div className=''>
     
           
          <p className='font-light text:xs border-b pb-2 mx-6  px-7 max-md:px-2 '>
           Dashboard
          </p>
    
          </div>
        </div>
          

    {/* cards */}
<div className={`max-w-[100%] mt-5  pb-8 pt-8 flex md:flex-wrap max-md:flex-wrap max-md:flex-row-reverse mb-3 gap-3  justify-evenly  items-center `}>
 <div className='w-64 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>
   {/* log */} 
   <FaProjectDiagram
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>112</h1> 
     <p className='text-sm font-light'>projects</p>

      </div>
    {/* <div>Projects</div> */}
  </div>
  
  </div>
  <div className='w-64 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>
   {/* log */} 
   <RxPerson
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>40</h1> 
     <p className='text-sm font-light'>Clients</p>

      </div>
    {/* <div>Projects</div> */}
  </div>
  
  </div>
  <div className='w-64 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>
   {/* log */} 
   <BiTask 
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>23</h1> 
     <p className='text-sm font-light'>Tasks</p>

      </div>
    {/* <div>Projects</div> */}
  </div>
  
  </div>
  <div className='w-64 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>
   {/* log */} 
   <GrUserWorker
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>140</h1> 
     <p className='text-sm font-light'>Workers</p>

      </div>
    {/* <div>Projects</div> */}
  </div>
  
  </div>

  </div>

      {/* Graph section */}
      <div className='px-6 mb-5 pb-5 w-full flex  items-center  gap-5  flex-wrap' >
          <div className='w-1/2 h-96 bg-gray-100 rounded-lg shadow-xl border-2 sm:flex-1 max-sm:w-full max-sm:h-fu'>
            <p className='text-center font-semibold font-sarif'>Lorem</p>
          </div>
          <div className='w-1/2 h-96 bg-gray-100 rounded-lg shadow-xl border-2 sm:flex-1 max-sm:w-full max-sm:h-fu'>
            <p className='text-blanced text-center font-semibold'>lorem</p>
          </div>
      </div>

      
    {/* employe count  */}

  <div className={`max-w-[100%] mt-5  pb-8 pt-8 flex max-xl:flex-wrap  max-xl:gap-3 max-xl:items-center max-xl:justify-center mb-3  px-2  mx-auto items-center `}>
 <div className={`w-72 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2 `}>
  <div className='rounded-full bg-orange-100  p-2'>
   {/* log */} 
   <FaProjectDiagram
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>112</h1> 
     <p className='text-sm font-light'>projects</p>

      </div>
    
  </div>
  
  </div>
  <div className='w-72 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>

   <FaProjectDiagram
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>112</h1> 
     <p className='text-sm font-light'>projects</p>

      </div>
  
  </div>
  
  </div>
  <div className='w-72 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>

   <FaProjectDiagram
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>112</h1> 
     <p className='text-sm font-light'>projects</p>

      </div>
   
  </div>
  
  </div>
  <div className='w-72 h-32 bg-slate-100 shadow-xl rounded-lg flex gap-4 sm:flex-wrap justify-evenly items-center border-2'>
  <div className='rounded-full bg-orange-100  p-2'>
   
   <FaProjectDiagram
   color='orange'
   fontSize={25}
   className='' />
  </div>
  
  <div>
    <div className=''>
     <h1 className='mt-3 pt-2 font-bold text-xl'>112</h1> 
     <p className='text-sm font-light'>projects</p>

      </div>
  
  </div>
  
  </div>

  </div>
  

  <div className='px-6 mb-5 pb-5 w-full flex  items-center  gap-5  flex-wrap' >
          <div className='w-2/5 h-96 bg-gray-100 rounded-lg shadow-xl border-2 mx-5 max-sm:w-full max-sm:h-fu'>
            <p className='text-center font-semibold font-sarif'>Lorem</p>
          </div>
          <div className='w-2/5 h-96 bg-gray-100 rounded-lg shadow-xl border-2  max-sm:w-full max-sm:h-fu'>
            <p className='text-blanced text-center  font-semibold'>lorem</p>
          </div>
      </div>


      </div>
     </main> 
  </>
  )
}

export default DashBoardMain