import React from 'react';
import { Play, Plus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
    ArrowUpRight
} from 'lucide-react';
import DashboardNav from '../headers/DashboardNav';
import useDashboard from '../../Hooks/useDashboard'
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import OverviewCard from './dashboard/OverviewCard';
import AnalyticsBarChart from '../charts/AnalyticsChart';
import Reminders from './dashboard/Reminders';
import User from './dashboard/User';
import Progress from './dashboard/Progress';
import Projects from './dashboard/Projects';

const Home = () => {

    const {dashboard, loading, error} = useDashboard()
  const overview = dashboard?.overview || {};
  const analytics = dashboard?.analytics || [];
  const users = dashboard?.users || [];
  const products = dashboard?.products || [];

    // const COLORS = ['#0e3e2b', '#e5e7eb'];
    // const data = [
    //     { name: 'Completed', value: 41 },
    //     { name: 'Remaining', value: 59 },
    // ];

  if(loading) return <Loading></Loading>;
    if(error) return <Error></Error>;

    return (
        <>
        <DashboardNav
        title={"Dashboard"}
        subTitle={"Plan, prioritize, and accomplish your tasks with ease"}/>

            <OverviewCard overview={overview}/>

    <div className=" grid xl:grid-cols-4 gap-2 ">
        <div className="xl:col-span-3 space-y-2">
          <div className="grid md:grid-cols-3 gap-2">
    
            <div className="md:col-span-2">
              <AnalyticsBarChart analytics={analytics} />
            </div>

            <div className="col-span-1">
              <Reminders />
            </div>
          </div>

    
          <div className="flex gap-2 flex-col md:flex-row">
  
            <div className="md:w-1/2">
              <User users={users} />
            </div>
   
            <div className="md:w-1/2">
              <Progress analytics={analytics} />
            </div>
          </div>
        </div>


    <div className="space-y-4 flex xl:flex-col flex-col md:flex-row md:gap-2 xl:gap-0">
  {products?.length > 0 && (
    <div className="md:w-1/2 xl:w-full">
      <Projects products={products} />
    </div>
  )}
  <div className="border">Tracker</div>
</div>
      </div>

        </>
    );
};

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
        <span className={`text-[9px] font-bold px-3 py-1 rounded-lg ${status === 'Completed' ? 'bg-green-50 text-green-600' :
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

export default Home;


            // <div className="hidden grid grid-cols-12 gap-6"

            //     {/* Team Collaboration */}
            //     <div className="col-span-7 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
            //         <div className="flex justify-between items-center mb-6">
            //             <h3 className="font-bold">Team Collaboration</h3>
            //             <button className="text-xs font-bold border border-gray-100 px-3 py-1.5 rounded-xl">+ Add Member</button>
            //         </div>
            //         <div className="space-y-5">
            //             <TeamRow name="Alexandra Deff" task="Github Project Repository" status="Completed" />
            //             <TeamRow name="Edwin Adenike" task="Integrate User Authentication" status="In Progress" />
            //             <TeamRow name="Isaac Oluwatemilorun" task="Develop Search and Filter" status="Pending" />
            //             <TeamRow name="David Oshodi" task="Responsive Layout" status="In Progress" />
            //         </div>
            //     </div>

            //     {/* Bottom Row - Project Progress & Reminders */}
            //     <div className="col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 flex flex-col items-center">
            //         <h3 className="font-bold w-full text-left mb-2">Project Progress</h3>
            //         <div className="relative w-48 h-48">
            //             <ResponsiveContainer width="100%" height="100%">
            //                 <PieChart>
            //                     <Pie data={data} innerRadius={60} outerRadius={80} startAngle={180} endAngle={0} dataKey="value">
            //                         {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />)}
            //                     </Pie>
            //                 </PieChart>
            //             </ResponsiveContainer>
            //             <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            //                 <span className="text-4xl font-black">41%</span>
            //                 <span className="text-[10px] text-gray-400 font-bold uppercase">Project Ended</span>
            //             </div>
            //         </div>
            //         <div className="flex gap-2 mt-2">
            //             <LegendItem label="Completed" color="bg-[#0e3e2b]" />
            //             <LegendItem label="In Progress" color="bg-[#53b88a]" />
            //             <LegendItem label="Pending" color="bg-gray-200" isDashed />
            //         </div>
            //     </div>

            //     <div className="col-span-4 bg-[#0e3e2b] rounded-[2.5rem] p-8 text-white flex flex-col justify-between">
            //         <div>
            //             <h3 className="text-sm font-medium text-gray-300 mb-6">Reminders</h3>
            //             <p className="text-2xl font-bold leading-tight mb-2">Meeting with Arc Company</p>
            //             <p className="text-xs text-gray-400 mb-8">Time: 02.00 pm - 04.00 pm</p>
            //         </div>
            //         <button className="bg-white/10 hover:bg-white/20 transition-all py-4 rounded-[1.5rem] flex items-center justify-center gap-3 font-bold">
            //             <Play size={18} fill="white" /> Start Meeting
            //         </button>
            //     </div>

            //     <div className="col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
            //         <div className="flex justify-between items-center mb-6">
            //             <h3 className="font-bold">Project</h3>
            //             <button className="text-[10px] font-bold border px-2 py-1 rounded-lg">+ New</button>
            //         </div>
            //         <div className="space-y-6">
            //             <ProjectItem title="Develop API Endpoints" date="Nov 26, 2024" icon="⚡" />
            //             <ProjectItem title="Onboarding Flow" date="Nov 29, 2024" icon="🌊" />
            //             <ProjectItem title="Build Dashboard" date="Nov 30, 2024" icon="🎨" />
            //         </div>
            //     </div>

            // </div>