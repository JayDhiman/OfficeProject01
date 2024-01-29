import React from 'react'
import Layout from '../../Components/Layout';

const AllEmployee = () => {
    

  return(
    
    
    <>
  <Layout>
   <div className='bg-red-300 max-md:text-lg'>
    <div className='md:text-2xl font-semibold'>
    <h1 className='mx-5 mt-5 px-4 '>Clients</h1>
    </div>

   <div className='border-b mx-4 mt-2 px-5'>
   <h2 className='font-light max-md:text-sm'> Dashboard / Clients</h2>
   </div>
   </div>

   <div className='w-auto flex gap-4 max-md:flex-wrap items-center'>
    <div className=' mx-2 w-full '>
    <input type="email"
    name="floating_email" 
    id="floating_email"
    className="block py-2.5 px-4 xl:w-72 lg:w-64 md:w-40 text-md text-gray-900 mt-5 border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 rounded-xl" 
    placeholder="First Name"
    required />
    </div>
    <div className='mx-2 w-full'>
    <input type="email"
    name="floating_email" 
    id="floating_email"
    className="block py-2.5 px-4 xl:w-72 lg:w-64 md:w-40 text-md text-gray-900 mt-5 border-0 border-b-2 border-gray-300 appearance-none dark:text-white  d focus:outline-none focus:ring-0 rounded-xl" 
    placeholder="First Name"
    required />
    </div>
    <div className='mx-2 w-full '>
    <input type="email"
    name="floating_email" 
    id="floating_email"
    className="block py-2.5 px-4 xl:w-72 lg:w-64 md:w-48 text-md text-gray-900 mt-5 border-0 border-b-2 border-gray-300 appearance-none dark:text-white  d focus:outline-none focus:ring-0 rounded-xl" 
    placeholder="First Name"
    required />
    </div>
    <div className='mx-2  w-full '>

    <button type="submit" 
     className=" mt-4 w-fit  pt-2 text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg   px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
   </div>


  </Layout>
    
    </>
  )
}

export default AllEmployee