import React from "react";
import SectionHeader from "../../headers/SectionHeaders";
import NotFound from "../../ui/NotFound";
import ProgressChart from "../../charts/ProgressChart";

const Progress = ({ analytics = [] }) => {

  if (!analytics || analytics.length === 0) return <NotFound/>;


  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <SectionHeader>
        Product Progress
      </SectionHeader>
<ProgressChart analytics={analytics}></ProgressChart>
    
      <div className="flex justify-center items-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full bg-[#002B1B]"></div>
          <span className="text-sm font-bold text-[#002B1B]">Conversion</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full bg-[#74C29B]"></div>
          <span className="text-sm font-bold text-[#002B1B]">Clicks</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-[3px]">
             {[1,2].map(i => (
               <div key={i} className="w-[3px] h-4 bg-[#1a3b32] rotate-[25deg] rounded-full"></div>
             ))}
          </div>
          <span className="text-sm font-bold text-[#002B1B] ml-1">Views</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;