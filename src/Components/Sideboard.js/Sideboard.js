import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Data,Pages,Others} from '../../Data/Data'
import { RxHamburgerMenu } from "react-icons/rx";



const Sideboard = () => {
  

const [sidebarOpen, setSidebarOpen] = useState(false);
const [activeEmpDropdownIndex, setActiveEMpDropdownIndex] = useState(null);
const [activePageDropdownIndex, setActivePageDropdownIndex] = useState(null);
const [activeLink,setActiveLink] = useState('');

const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen) 

const handleEmpClick = (index) => setActiveEMpDropdownIndex(activeEmpDropdownIndex === index ? null : index)
const handlePageClick = (index) => setActivePageDropdownIndex(activePageDropdownIndex === index ? null : index)

const handleActiveLink = (id)=>{
setActiveLink(id);
}
  return (
    <>
  <aside className='w-fit h-auto '>
  <div className={`bg-gray-700 text-gray-200 px-3 h-full max-sm:hidden ${sidebarOpen ? 'w-20 duration-300 h-[100%]' : 'w-52 duration-300'} flex flex-col min-h-screen font-semibold`}>
  
      
 
  <div className='flex gap-3'>

  <div className={`${sidebarOpen ? 'hidden duration-200':'block'}`}>
  <Link to= '/dashboard'>
     <h1 className={`text-light pt-5 px-3 underline text-xl cursor-pointer`}>Dashboard</h1>
  </Link >
      </div>
      
      <div
        className={`cursor-pointer  border-dark-purple ${
          !sidebarOpen ? "pt-5 " : "px-12 rotate-180 duration-300 text-white "
        }`}
        onClick={handleToggleSidebar}
      >
        <RxHamburgerMenu
         
          fontSize="1.5rem"
          className=" bg-none mt-1"
        />
      </div>
     
      </div>
    
  <div className={`flex-col gap-5 ${sidebarOpen ? " ":" "}` }>
  <div className='text-left pt-5 pb-3 px-3 b '>
  <h1 className={`text-lg ${sidebarOpen ? "hidden":"block "}`}>Employees</h1>
  </div> 
  <div className=''>
   {
    Data.map((value,index)=>(
      <div key={value.id} className=''>
      <ul className=''>
         
      <li className='flex'>
    <Link to ={value.path}>
  
      <div className='p-1 mx-2 pt-1 flex justify-center items-start gap-3 hover:font-bold hover:text-gray-50'>
      
         <div className={`p-1 ${sidebarOpen ?'text-2xl hover:text-white':''}`}>
         {value.icon()}
          </div>
          <div className={ `${sidebarOpen ? 'hidden' : 'block'}`}>
           {value.title}
          </div>
        
         
            
          <div className=''>
           
          <button onClick={()=>handleEmpClick(index)}>
            {value.dropdown  && (
            <span className={`${sidebarOpen ? 'hidden': 'block'}`}>{activeEmpDropdownIndex === index ? '▲' : '▼'}</span>
            )}
            </button> 
          </div>
             
          </div> 
          </Link> 
          </li>
        </ul>
          
          
       <div className={`m-2 mx-1 px-2 font-thin ${sidebarOpen ? " hidden":"block "}`} >
        {value.dropdown && activeEmpDropdownIndex === index && (
          <ul className='px-3'>
             {value.items.map((dropdownItem) => (
               
               <li key={dropdownItem.id} >
               <Link to= {dropdownItem.path} 
               onClick={()=> handleActiveLink(dropdownItem.id)}>
              
             <button 
             className={ `${activeLink === value.id ? 'bg-gray-500': 'bg-transparent'} hover:text-gray-100 hover:font-light`}>{dropdownItem.title}</button>
            </Link>
             </li>
              
            ))}
           </ul>         
            )}
       </div>
      </div>
))
}
  </div>
</div>

                       
        

     
    


<div className={`flex-col gap-5 ${sidebarOpen ? "hidden":" "}` }>
  <div className='text-left pt-5 pb-3 px-3 '>
  <h1 className='text-lg'>PAGES</h1>
  </div> 
  <div className=''>
   {
    Pages.map((value,index)=>(
      <div key={value.id} className=''>
        <ul className=''>
         
          <li className='flex '>
          
     <div className='p-1 mx-2 pt-1 flex justify-center items-start gap-3'>
         <div className='pt-1'>
         {value.icon()}
          </div>
          <div className=''>
          {value.Title}
          </div>

          <div className='pt-1 px-1'>
          <button onClick={()=>handlePageClick(index)}>
            {value.dropDown  && (
            <span className=''>{activePageDropdownIndex === index ? '▲' : '▼'}</span>
            )}
            </button>
          </div>
          
          </div> 
          </li>
        </ul>
        <div className='m-2 mx-1 px-2 font-thin '>
        {value.dropDown && activePageDropdownIndex === index && (
          <ul className='px-3 h-fit text-white'>
             {value.items.map((val) => (
            <li key={val.id}>
           <button className='h-fit '> {val.Title}</button>
             </li>
                       
            ))}
           </ul>
            )}
</div>
      </div>
    ))
   }
</div>
</div>


<div className={`flex-col gap-5 ${sidebarOpen ? "hidden":" "} h-fit ` }>
  <div className='text-left pt-5 pb-3 px-3  '>
  <h1 className='text-lg'>OTTHERS</h1>
  </div> 
  <div className=''>
   {
    Others.map((value,index)=>(
      <div key={value.id} className=''>
      <ul className=''>
         
      <li className='flex'>
          
      <div className='p-1 mx-2 pt-1 flex justify-center items-start gap-3'>

         <div className='pt-1'>
         {value.icon()}
          </div>
          <div className=''>
           {value.Title}
          </div>

          <div className=''>
          <button onClick={()=>handleEmpClick(index)}>
            {value.dropdown  && (
            <span className=''>{activeEmpDropdownIndex === index ? '▲' : '▼'}</span>
            )}
            </button>
             
          </div>
          </div> 
          </li>
        </ul>
          
          
       <div className='m-2 mx-1 px-2 font-thin'>
        {value.dropdown && activeEmpDropdownIndex === index && (
          <ul className='px-3 '>
             {value.items.map((dropdownItem) => (
            <li key={dropdownItem.id}>
           <button>{dropdownItem.title}</button>
             </li>
                       
            ))}
           </ul>
            )}
</div>
        
      </div>
    ))
   }
  </div>
</div>

  </div>
       
  </aside> 
    </>
  )
}

export default Sideboard