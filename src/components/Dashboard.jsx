import React from 'react';
import { 
  LayoutDashboard, CheckSquare, Calendar, BarChart2, Users, 
  Settings, HelpCircle, LogOut, Search, Bell, Mail, Plus, Play, MoreHorizontal, ArrowUpRight 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import donezo from "../assets/donezo.png"

const DonezoDashboard = () => {

  const data = [
    { name: 'Completed', value: 41 },
    { name: 'Remaining', value: 59 },
  ];
  const COLORS = ['#0e3e2b', '#e5e7eb'];

  return (
    <div className="flex gap-4 min-h-screen bg-white p-4 font-sans text-slate-800">
   {/* --- SIDEBAR --- */}
        <aside className="w-64 bg-[#f3f4f6] border-r border-gray-100 flex flex-col py-2 px-4 rounded-2xl">
          <div className="flex items-center gap-1 mb-5">
        <img src={donezo} alt="" />
            <span className="text-xl font-bold tracking-tight">Donezo</span>
          </div>

          <nav className="flex-1 space-y-1">
            <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">Menu</p>
            <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
            <NavItem icon={<CheckSquare size={20}/>} label="Tasks" badge="12+" />
            <NavItem icon={<Calendar size={20}/>} label="Calendar" />
            <NavItem icon={<BarChart2 size={20}/>} label="Analytics" />
            <NavItem icon={<Users size={20}/>} label="Team" />
            
            <div className="pt-8">
              <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">General</p>
              <NavItem icon={<Settings size={20}/>} label="Settings" />
              <NavItem icon={<HelpCircle size={20}/>} label="Help" />
              <NavItem icon={<LogOut size={20}/>} label="Logout" />
            </div>
          </nav>

          <div className="mt-auto bg-[#051a12] rounded-[2rem] p-6 text-white relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xs">📱</span>
                </div>
                <p className="text-sm font-semibold mb-1 leading-tight">Download our Mobile App</p>
                <p className="text-[10px] text-gray-400 mb-4">Get easy in another way</p>
                <button className="bg-[#1d6349] text-xs py-2.5 px-6 rounded-xl w-full font-bold">Download</button>
             </div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-800/20 to-transparent rounded-full border border-white/5"></div>
          </div>
        </aside>
      <div className="flex flex-col gap-4 bg-white">
 
  {/* Header */}
           <header className="flex justify-between items-center py-5 px-4 rounded-2xl bg-[#f3f4f6]">
            <div className="relative w-[450px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search task" 
                className="w-full bg-white border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-green-800"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 border bg-gray-200 px-1.5 py-0.5 rounded uppercase">⌘ F</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2.5  bg-white rounded-full border border-gray-100"><Mail size={20}/></button>
              <button className="p-2.5  bg-white rounded-full border border-gray-100"><Bell size={20}/></button>
              <div className="flex items-center gap-3 ml-2 border-l pl-6 border-gray-100">
                <div className="text-right">
                  <p className="text-sm font-bold">Totok Michael</p>
                  <p className="text-[10px] text-gray-400">tmichael20@mail.com</p>
                </div>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" className="w-10 h-10 rounded-full bg-orange-100" alt="Avatar" />
              </div>
            </div>
          </header>
        {/* --- MAIN CONTENT --- */}
        <main className=" flex-1 p-10 bg-[#f3f4f6] overflow-y-auto py-5 rounded-2xl">
          
        

          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard</h1>
              <p className="text-gray-400 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#0e3e2b] text-white px-5 py-3 rounded-2xl flex items-center gap-2 font-bold text-sm">
                <Plus size={18}/> Add Project
              </button>
              <button className="bg-white border border-gray-200 px-5 py-3 rounded-2xl font-bold text-sm shadow-sm">
                Import Data
              </button>
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Projects" value="24" change="Increased from last month" theme="dark" />
            <StatCard title="Ended Projects" value="10" change="Increased from last month" />
            <StatCard title="Running Projects" value="12" change="Increased from last month" />
            <StatCard title="Pending Project" value="2" change="On Discuss" />
          </div>

          {/* Complex Middle Section */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Project Analytics */}
            <div className="col-span-5 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
               <h3 className="font-bold mb-8">Project Analytics</h3>
               <div className="flex items-end justify-between h-36 px-2 gap-4">
                  {[35, 75, 55, 95, 60, 45, 30].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 flex-1">
                      <div 
                        className={`w-full rounded-full transition-all duration-500 ${i === 3 ? 'bg-[#0e3e2b]' : i < 3 ? 'bg-[#53b88a]' : 'bg-gray-100 border-2 border-dashed border-gray-300'}`} 
                        style={{height: `${h}%`}}
                      ></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{['s','m','t','w','t','f','s'][i]}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Team Collaboration */}
            <div className="col-span-7 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">Team Collaboration</h3>
                  <button className="text-xs font-bold border border-gray-100 px-3 py-1.5 rounded-xl">+ Add Member</button>
               </div>
               <div className="space-y-5">
                  <TeamRow name="Alexandra Deff" task="Github Project Repository" status="Completed" />
                  <TeamRow name="Edwin Adenike" task="Integrate User Authentication" status="In Progress" />
                  <TeamRow name="Isaac Oluwatemilorun" task="Develop Search and Filter" status="Pending" />
                  <TeamRow name="David Oshodi" task="Responsive Layout" status="In Progress" />
               </div>
            </div>

            {/* Bottom Row - Project Progress & Reminders */}
            <div className="col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 flex flex-col items-center">
               <h3 className="font-bold w-full text-left mb-2">Project Progress</h3>
               <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data} innerRadius={60} outerRadius={80} startAngle={180} endAngle={0} dataKey="value">
                        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                    <span className="text-4xl font-black">41%</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Project Ended</span>
                  </div>
               </div>
               <div className="flex gap-4 mt-2">
                  <LegendItem label="Completed" color="bg-[#0e3e2b]" />
                  <LegendItem label="In Progress" color="bg-[#53b88a]" />
                  <LegendItem label="Pending" color="bg-gray-200" isDashed />
               </div>
            </div>

            <div className="col-span-4 bg-[#0e3e2b] rounded-[2.5rem] p-8 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-6">Reminders</h3>
                  <p className="text-2xl font-bold leading-tight mb-2">Meeting with Arc Company</p>
                  <p className="text-xs text-gray-400 mb-8">Time: 02.00 pm - 04.00 pm</p>
                </div>
                <button className="bg-white/10 hover:bg-white/20 transition-all py-4 rounded-[1.5rem] flex items-center justify-center gap-3 font-bold">
                  <Play size={18} fill="white"/> Start Meeting
                </button>
            </div>

            <div className="col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">Project</h3>
                  <button className="text-[10px] font-bold border px-2 py-1 rounded-lg">+ New</button>
               </div>
               <div className="space-y-6">
                  <ProjectItem title="Develop API Endpoints" date="Nov 26, 2024" icon="⚡" />
                  <ProjectItem title="Onboarding Flow" date="Nov 29, 2024" icon="🌊" />
                  <ProjectItem title="Build Dashboard" date="Nov 30, 2024" icon="🎨" />
               </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

// --- Sub-components for Cleanliness ---

const NavItem = ({ icon, label, active = false, badge = null }) => (
  <div className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all ${active ? 'bg-[#f1f8f5] text-[#0e3e2b]' : 'text-gray-400 hover:text-gray-600'}`}>
    <div className="flex items-center gap-3">
      <span className={active ? 'text-[#0e3e2b]' : 'text-gray-400'}>{icon}</span>
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </div>
    {badge && <span className="bg-[#0e3e2b] text-white text-[10px] px-1.5 py-0.5 rounded-lg font-bold">{badge}</span>}
  </div>
);

const StatCard = ({ title, value, change, theme = 'light' }) => (
  <div className={`p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden ${theme === 'dark' ? 'bg-[#0e3e2b] text-white' : 'bg-white text-slate-900 border border-gray-50'}`}>
    <div className="flex justify-between items-start mb-6">
      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{title}</span>
      <div className={`p-2 rounded-full border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
        <ArrowUpRight size={16} />
      </div>
    </div>
    <p className="text-5xl font-black mb-4 tracking-tighter">{value}</p>
    <div className="flex items-center gap-2">
       <span className={`text-[10px] font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>📈 {change}</span>
    </div>
  </div>
);

const TeamRow = ({ name, task, status }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-100 border border-white shadow-sm overflow-hidden">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt="" />
      </div>
      <div>
        <p className="text-xs font-bold">{name}</p>
        <p className="text-[10px] text-gray-400 tracking-tight">Working on <span className="font-bold text-gray-500">{task}</span></p>
      </div>
    </div>
    <span className={`text-[9px] font-bold px-3 py-1 rounded-lg ${
      status === 'Completed' ? 'bg-green-50 text-green-600' : 
      status === 'Pending' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'
    }`}>{status}</span>
  </div>
);

const LegendItem = ({ label, color, isDashed }) => (
  <div className="flex items-center gap-1.5">
    <div className={`w-3 h-3 rounded-full ${color} ${isDashed ? 'opacity-30' : ''}`}></div>
    <span className="text-[10px] font-bold text-gray-400">{label}</span>
  </div>
);

const ProjectItem = ({ title, date, icon }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg shadow-sm border border-gray-100">{icon}</div>
    <div>
      <p className="text-xs font-bold leading-tight">{title}</p>
      <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">Due date: {date}</p>
    </div>
  </div>
);

export default DonezoDashboard;