import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sideboard from '../Components/Sideboard/Sideboard';
import DashBoardMain from '../Components/Features/DashBoardMain';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='bg-neutral-700'>
        <Navbar />
      </div>
      <div className='flex flex-1 overflow-hidden max-h-screen'>
        <Sideboard />
        <div className='flex-1 overflow-y-auto '>
          <DashBoardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
