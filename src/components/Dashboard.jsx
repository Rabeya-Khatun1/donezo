import React from 'react';
import {
  LayoutDashboard, CheckSquare, Calendar, BarChart2, Users,
  Settings, HelpCircle, LogOut, Search, Bell, Mail,
} from 'lucide-react';
import donezo from "../assets/donezo.png";
import { Link, Outlet, useLocation } from 'react-router';
import downloadLogo from '../assets/download logo.png'

const DonezoDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkStyle = (path) => {
    const active = currentPath === path;
    return `relative flex items-center gap-3 px-4 py-3.5 rounded-r-2xl transition-all ${active
        ? "bg-[#f1f8f5] text-[#0e3e2b] font-semibold"
        : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
      }`;
  };

  return (
    <div className="flex gap-4 min-h-screen bg-white p-4 font-sans text-slate-800">
      <aside className="w-[300px] bg-[#f3f4f6] border-r border-gray-100 flex flex-col py-6 px-4 rounded-2xl">
        <div className="flex items-center gap-1 mb-5">
          <img src={donezo} alt="Donezo Logo" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">Donezo</span>
        </div>

        <nav className="flex-1 space-y-1 py-5">
          <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest px-4">
            Menu
          </p>
          <Link to="/" className={getLinkStyle("/")}>
            {currentPath === "/" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <LayoutDashboard size={20} />
            <span className="text-sm tracking-tight">Dashboard</span>
          </Link>
          <Link to="/tasks" className={`flex items-center justify-between px-4 py-3.5 rounded-r-2xl transition-all ${getLinkStyle("/tasks")}`}>
            {currentPath === "/tasks" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}

            <div className="flex items-center gap-3">
              <CheckSquare size={20} />
              <span className="text-sm tracking-tight">Tasks</span>
            </div>

            <span className="bg-[#0e3e2b] text-white text-[10px] px-1.5 py-0.5 rounded-lg font-bold">
              12+
            </span>
          </Link>
          <Link to="/calendar" className={getLinkStyle("/calendar")}>
            {currentPath === "/calendar" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <Calendar size={20} />
            <span className="text-sm tracking-tight">Calendar</span>
          </Link>
          <Link to="/analytics" className={getLinkStyle("/analytics")}>
            {currentPath === "/analytics" && (
              <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
            )}
            <BarChart2 size={20} />
            <span className="text-sm tracking-tight">Analytics</span>
          </Link>
          <Link to="/team" className={getLinkStyle("/team")}>
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
              { to: "/logout", icon: <LogOut size={20} />, label: "Logout" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className={getLinkStyle(item.to)}>
                {currentPath === item.to && (
                  <span className="absolute left-0 top-2 bottom-2 w-2 bg-green-600 rounded-r-full"></span>
                )}
                {item.icon}
                <span className="text-sm tracking-tight">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="mt-auto mx-2 w-[250px] bg-[#0e3e2b] rounded-3xl p-5 text-white relative overflow-hidden group">
          <div className="relative z-10 flex flex-col space-y-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4 border border-white/20 shadow-xl">
              <img src={downloadLogo} alt="" />
            </div>

            <h3 className="text-2xl ">
              Download our Mobile App
            </h3>
            <p className="text-[11px] text-gray-400 font-light">
              Get easy in another way
            </p>

            <button className="bg-[#1d6349] hover:bg-[#247a5a] text-sm mt-8 py-3 px-6 rounded-4xl w-full active:scale-95 shadow-lg">
              Download
            </button>
          </div>
        </div>
      </aside>

      <div className="flex flex-col flex-1 gap-4 bg-white">
        <header className="flex justify-between items-center py-5 px-4 rounded-2xl bg-[#f3f4f6]">
          <div className="relative w-[450px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search task"
              className="w-full bg-white border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-green-800 outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 border bg-gray-200 px-1.5 py-0.5 rounded uppercase">⌘ F</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-white rounded-full border border-gray-100 hover:bg-gray-50"><Mail size={20} /></button>
            <button className="p-2.5 bg-white rounded-full border border-gray-100 hover:bg-gray-50"><Bell size={20} /></button>
            <div className="flex items-center gap-3 ml-2 border-l pl-6 border-gray-100">
              <div className='w-12 h-12 rounded-full bg-pink-200 flex flex-col justify-center items-center'>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" className="w-8 h-8 rounded-full " alt="Avatar" />
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">Totok Michael</p>
                <p className="text-[10px] text-gray-400">tmichael20@mail.com</p>
              </div>

            </div>
          </div>
        </header>

        <main className="flex-1 p-5 bg-[#f3f4f6] overflow-y-auto py-5 rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DonezoDashboard;