import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../headers/Navbar';
import { Menu } from 'lucide-react';

const DonezoDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-white p-2 md:p-4 gap-4 font-sans text-slate-800 overflow-x-hidden">
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex flex-col flex-1 min-w-0 gap-4">
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 bg-[#f3f4f6] rounded-xl text-gray-700"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1">
            <Navbar />
          </div>
        </div>

        <main className="flex-1 w-full p-4 md:p-6 bg-[#f3f4f6] overflow-y-auto rounded-2xl shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DonezoDashboard;