import React from "react";
import { Plus } from "lucide-react";
import Button from "../buttons/Buttons";


const DashboardNav = ({ title, subTitle }) => {
  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">{title || "Dashboard"}</h1>
        <p className="text-gray-400 text-sm mb-1">{subTitle || "Plan, prioritize, and accomplish your tasks with ease."}</p>
      </div>
      <div className="flex gap-3">
        <Button
          text="Add Project"
          variant="primary"
          icon={Plus}
          onClick={() => console.log("Projects Added Successfully")}
        />
        <Button
          text="Import Data"
          variant="secondary"
          onClick={() => console.log("Data Imported")}
        />
      </div>
    </div>
  );
};

export default DashboardNav;
