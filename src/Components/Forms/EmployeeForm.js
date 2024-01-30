import React from 'react'
import Button from '../Button'
import { FaPlus } from "react-icons/fa6";
import Input from '../Input';
import { useForm } from 'react-hook-form';


const EmployeeForm = () => {
  
  const {register,handleSubmit} =useForm();

  const employeeData =(data)=>{
    console.log(data);
  }
  return (
   <>
   <div className='font-lg text-start'>
   <div className='w-full flex justify-between items-center  px-3 max-sm:flex-wrap '>
      <div className='max-sm:text-center max-md:flex-1'>
      <h1 className='text-4xl  mt-6 pt-5 pb-2 px-12 p-2  max-md:p-1 max-md:mx-6 max-md:text-2xl md:3xl max-md:text-center'>
      Employee
      </h1>
      <div className=''>
      <p className='font-light  text:xs  pb-2 mx-6  px-7 max-sm:px-2 max-md:text-center'>
      Dashboard / <span>Employee</span>
       </p>
      </div>
      </div>
        
        <div className='mx-5 max-md:text-center max-sm:mx-auto'>
          <Button className='flex justify-between items-center gap-2 hover:bg-blue-700 rounded-xl max-md:text-sm max-sm:px-1 max-sm:py-1 '>
            <div>
            <FaPlus/>
            </div>

            <div>
              <h2>
              Add Employee
              </h2>
              </div>
            </Button>
        </div>
      </div>
      
      <div className='border-b mt-2 mx-6'>
      </div>

    <div className=''>
    <form onSubmit={handleSubmit(employeeData)} className='mt-8 mx-4 w-auto'>
           <div className='flex items-center w-full justify-evenly mx-auto gap-x-6 max-md:flex-wrap max-md:mt-3 max-md:gap-2'>

           
            <div className='w-full'>
                <Input
                className = "w-fit"
                placeholder="Employee ID"
                type="number"
                
                {...register("number", {
                    
                   

                })}
                />
              </div>
              <div className='w-full'>
                <Input
                className = "w-fit"
                placeholder="Employee ID"
                type="number"
                
                {...register("number", {
                    
                   

                })}
                />
              </div>
              <div className='w-full'>
              <Input
              className = "w-fit"
                placeholder="Employee ID"
                type="dropdown"
                {...register("number", {
                })}
                />
                </div>
               
                <div className='px-3'>
                  <Button className='text-lg hover:bg-orange-500  bg-orange-400 '>
                    search
                  </Button>
                </div>
                
                
                
              </div>
         </form>       
    </div> 
     
           
    
       </div>  
     
   
   </>
  )
}

export default EmployeeForm