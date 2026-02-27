import React from 'react';
import { Play, Plus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
    ArrowUpRight
} from 'lucide-react';

const Home = () => {

    const cards = [
        { title: "Total Projects", value: "24", change: "Increased from last month", theme: "dark" },
        { title: "Ended Projects", value: "10", change: "Increased from last month", theme: "light" },
        { title: "Running Projects", value: "12", change: "Increased from last month", theme: "light" },
        { title: "Pending Project", value: "2", change: "On Discuss", theme: "light" },
    ]

    const COLORS = ['#0e3e2b', '#e5e7eb'];
    const data = [
        { name: 'Completed', value: 41 },
        { name: 'Remaining', value: 59 },
    ];

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight mb-2">Dashboard</h1>
                    <p className="text-gray-400 text-sm mb-1">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gradient-to-t from-[#059669] via-[#0e3e2b] to-[#0e3e2b] hover:from-[#047857] hover:to-[#051a12] text-white px-7 py-3 rounded-full flex items-center gap-2 font-semibold text-sm transition-all duration-500 shadow-[0_10px_20px_-10px_rgba(5,150,105,0.5)] active:scale-95 cursor-pointer border-none">
                        <Plus size={18} strokeWidth={3} />
                        <span>Add Project</span>
                    </button>
                    <button className="bg-white border border-[#0e3e2b]-200 px-5 py-3 rounded-4xl font-semibold text-sm shadow-sm">
                        Import Data
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-5 rounded-2xl shadow-sm relative overflow-hidden hover:shadow-md ${card.theme === 'dark'
                                ? 'bg-gradient-to-t from-[#059669] via-[#0e3e2b] to-[#0e3e2b] text-white'
                                : 'bg-white text-[#0e3e2b]-900 border border-gray-100'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <span className={`text-xl ${card.theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                {card.title}
                            </span>
                            <div className={`p-2 rounded-full border ${card.theme === 'dark' ? ' bg-white' : 'border-gray-100'
                                }`}>
                                <ArrowUpRight size={16} className={card.theme === 'dark' ? 'text-gray-800' : 'text-slate-900'} />
                            </div>
                        </div>

                        <p className="text-5xl mb-4 font-semibold">{card.value}</p>
                        <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-medium ${card.theme === 'dark' ? 'text-green-300' : 'text-green-600'
                                }`}>
                                <span className="bg-green-500/10 px-1.5 py-0.5 rounded-md mr-1 border border-green-500/20 text-[9px]">
                                    {card.title === "Pending Project" ? "●" : "5 ▲"}
                                </span>
                                {card.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden grid grid-cols-12 gap-6">

                {/* Project Analytics */}
                <div className="col-span-5 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
                    <h3 className="font-bold mb-8">Project Analytics</h3>
                    <div className="flex items-end justify-between h-36 px-2 gap-4">
                        {[35, 75, 55, 95, 60, 45, 30].map((h, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 flex-1">
                                <div
                                    className={`w-full rounded-full transition-all duration-500 ${i === 3 ? 'bg-[#0e3e2b]' : i < 3 ? 'bg-[#53b88a]' : 'bg-gray-100 border-2 border-dashed border-gray-300'}`}
                                    style={{ height: `${h}%` }}
                                ></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">{['s', 'm', 't', 'w', 't', 'f', 's'][i]}</span>
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
                        <Play size={18} fill="white" /> Start Meeting
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