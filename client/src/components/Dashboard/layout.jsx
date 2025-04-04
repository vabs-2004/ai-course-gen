import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Avatar from './components/avatar';
import Sidebar from './components/Sidebar';
import AddCourse from './components/AddCourse';
import UserCourseList from './components/UserCourseList';

function Dashboard() {
    const [extended, setExtended] = useState(false);
    const location = useLocation();
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <Sidebar extended={extended} setExtended={setExtended} />
      </div>

      {/* Main Content (Includes Avatar + Dynamic Page Content) */}
      <div className="flex-1 md:ml-64 p-5">
        <Avatar extended={extended} setExtended={setExtended} />
        {location.pathname === "/dashboard" && (
          <>
          <AddCourse />
          <UserCourseList />
          </>
          )}
        <Outlet />  {/* 🚀 This loads child pages dynamically */}
        
      </div>
      
    </div>
  );
}

export default Dashboard;
