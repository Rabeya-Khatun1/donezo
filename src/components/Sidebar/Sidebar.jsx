import React from 'react';
import donezo from "../../assets/donezo.png";
import { Link, useLocation, useNavigate } from 'react-router';
import downloadLogo from '../../assets/download logo.png'
import { LayoutDashboard, CheckSquare, Calendar, BarChart2, Users, Settings, HelpCircle, LogOut, X } from 'lucide-react';
import Button from '../buttons/Buttons';
import vector from '../../assets/vector1.png'

const Sidebar = ({ isOpen, setIsOpen }) => {

  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkStyle = (path) => {
    const active = currentPath === path;
    return `relative flex items-center gap-3 px-4 py-3.5 rounded-r-2xl transition-all ${active
      ? "bg-[#f1f8f5] text-[#0e3e2b] font-bold"
      : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
      }`;
  };


const handleLogout = () => {
  localStorage.removeItem("token"); 
  window.location.href = "/login"; 
};

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-[#f3f4f6] border-r border-gray-100 flex flex-col py-6 px-4 rounded-2xl h-screen
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center justify-between mb-5 flex-shrink-0">
          <div className="flex items-center gap-1">
            <img src={donezo} alt="Donezo Logo" className="w-8 h-8" />
            <Link to={'/'} onClick={() => setIsOpen(false)}>
              <span className="text-xl font-bold tracking-tight">Donezo</span>
            </Link>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-1 text-gray-500">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto space-y-1 py-5">
          <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest px-4">
            Menu
          </p>
          <Link to="/" className={getLinkStyle("/")} onClick={() => setIsOpen(false)}>
            {currentPath === "/" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <LayoutDashboard size={20} />
            <span className="text-sm tracking-tight">Dashboard</span>
          </Link>
          <Link to="/tasks" className={getLinkStyle("/tasks")} onClick={() => setIsOpen(false)}>
            {currentPath === "/tasks" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <div className="flex items-center gap-3 w-full justify-between">
              <div className="flex items-center gap-3">
                <CheckSquare size={20} />
                <span className="text-sm tracking-tight">Tasks</span>
              </div>
              <span className="bg-[#0e3e2b] text-white text-[10px] px-1.5 py-0.5 rounded-lg font-bold">
                12+
              </span>
            </div>
          </Link>
          <Link to="/calendar" className={getLinkStyle("/calendar")} onClick={() => setIsOpen(false)}>
            {currentPath === "/calendar" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <Calendar size={20} />
            <span className="text-sm tracking-tight">Calendar</span>
          </Link>
          <Link to="/analytics" className={getLinkStyle("/analytics")} onClick={() => setIsOpen(false)}>
            {currentPath === "/analytics" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <BarChart2 size={20} />
            <span className="text-sm tracking-tight">Analytics</span>
          </Link>
          <Link to="/team" className={getLinkStyle("/team")} onClick={() => setIsOpen(false)}>
            {currentPath === "/team" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <Users size={20} />
            <span className="text-sm tracking-tight">Team</span>
          </Link>
          <div className="pt-8">
            <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest px-4">
              General
            </p>
            {[
              { to: "/settings", icon: <Settings size={20} />, label: "Settings" },
              { to: "/help", icon: <HelpCircle size={20} />, label: "Help" },
           
            ].map((item) => (
              <Link key={item.to} to={item.to} className={getLinkStyle(item.to)} onClick={() => setIsOpen(false)}>
                {currentPath === item.to && (
                  <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
                )}
                {item.icon}
                <span className="text-sm tracking-tight">{item.label}</span>
              </Link>
            ))}
            <button onClick={handleLogout} className='flex gap-2 text-red-500 m-2'>  <LogOut size={20} /> Logout</button>
          </div>
        </nav>

        <div className="mt-auto flex-shrink-0 bg-[#0e3e2b] rounded-3xl p-5 text-white relative overflow-hidden hidden sm:block" style={{ backgroundImage: `url(${vector})` }}>
          <div className="relative z-10 flex flex-col space-y-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4 border border-white/20 shadow-xl">
              <img src={downloadLogo} alt="" />
            </div>
            <h3 className="text-xl">Download our Mobile App</h3>
            <p className="text-[11px] text-gray-400 font-light">Get easy in another way</p>
            <Button
              text="Download"
              variant="primary"
              className="w-full h-7"
              onClick={() => console.log("Meeting Started")}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;