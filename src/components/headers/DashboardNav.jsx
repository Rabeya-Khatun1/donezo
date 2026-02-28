import React from "react";
import { Plus } from "lucide-react";
import Button from "../buttons/Buttons";


const DashboardNav = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 md:mb-2 text-slate-800">
          {title || "Dashboard"}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm">
          {subTitle || "Plan, prioritize, and accomplish your tasks with ease."}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-3 w-full md:w-auto">
        <Button
          text="Add Project"
          variant="primary"
          icon={Plus}
          className="flex-1 md:flex-none py-2 px-3 text-sm"
          onClick={() => console.log("Projects Added Successfully")}
        />
        <Button
          text="Import Data"
          variant="secondary"
          className="flex-1 md:flex-none py-2 px-3 text-sm"
          onClick={() => console.log("Data Imported")}
        />
      </div>
    </div>
  );
};

export default DashboardNav;