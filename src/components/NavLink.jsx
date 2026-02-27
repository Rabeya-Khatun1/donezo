import React from 'react';

const NavLink= ({ icon, label, active = false, badge = null }) => (
  <div className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all ${active ? 'bg-[#f1f8f5] text-[#0e3e2b]' : 'text-gray-400 hover:text-gray-600'}`}>
    <div className="flex items-center gap-3">
      <span className={active ? 'text-[#0e3e2b]' : 'text-gray-400'}>{icon}</span>
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </div>
    {badge && <span className="bg-[#0e3e2b] text-white text-[10px] px-1.5 py-0.5 rounded-lg font-bold">{badge}</span>}
  </div>
);


export default NavLink;