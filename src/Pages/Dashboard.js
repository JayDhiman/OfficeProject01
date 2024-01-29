import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Sideboard from '../Components/Sideboard.js/Sideboard';
import DashBoardMain from '../Components/Features/DashBoardMain';


const Dashboard = () => {
return (
    <>    
    <div className='bg-neutral-700 max-sm:w-auto '>
    <Navbar/>
    {/* navbar */}
    </div>
    <div className='flex h-auto w-full'>
    {/*Dashboard*/}
    <Sideboard/>

    {/* Main Content */}
 
   <DashBoardMain/>
     </div>
    </>
  )
}

export default Dashboard;



