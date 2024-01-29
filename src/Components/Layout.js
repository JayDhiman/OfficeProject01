import React from 'react'
import Navbar from './Navbar/Navbar';
import Sideboard from './Sideboard.js/Sideboard';
const Layout = ({children}) => {
    return (
    <>

    <div className='bg-neutral-700 max-sm:w-auto '>
    <Navbar/>
    {/* navbar */}
    </div>
    <div className='flex h-auto w-full'>
    {/*Dashboard*/}
    <div className='flex h-auto w-full'>

     <Sideboard/>
     
     <main className='w-full h-full flex bg-slate-100'>
     <div className='w-full h-screen'>
      
     {children}
  
     </div>
    </main>

    
    </div>
  
    
        
             
          
     </div>     
          </>
        
      );
    
}

export default Layout