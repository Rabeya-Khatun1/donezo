import React from "react";
import { Video } from "lucide-react";
import SectionHeader from "../../headers/SectionHeaders";
import Button from "../../buttons/Buttons";


const Reminders = () => {
  return (
    <div className="box-style bg-white p-3 md:p-5 rounded-2xl space-y-4">
 <SectionHeader>Reminders</SectionHeader>
      <div className="space-y-2">
        <h4 className="text-lg md:text-xl font-semibold text-[#0D442A] leading-tight">
          Meeting with Arc Company
        </h4>
        <p className="text-sm text-gray-400 tracking-tight">
          Time : 02.00 pm - 04.00 pm
        </p>
      </div>
      <div className="mt-2">
        <Button
          text="Start Meeting"
          variant="primary"
          icon={Video}
          className=" md:w-full"
          onClick={() => console.log("Meeting Started")}
        />
      </div>
    </div>
  );
};

export default Reminders;
