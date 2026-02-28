import React from 'react';
import SectionHeader from '../../headers/SectionHeaders';
import { Pause, Square } from 'lucide-react';
import vector from '../../../assets/vector1.png'

const Tracker = () => {
    return (
        <div className=" bg-[#003924] h-[255px] rounded-2xl p-5 border border-gray-100"  style={{ backgroundImage: `url(${vector})` }}>
            <SectionHeader className={"text-white"}>Time Tracker</SectionHeader>

            <div className="w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                <div className=" text-center">
                    <h1 className="text-white text-5xl mt-6 font-semibold ">
                        01:24:08
                    </h1>
                </div>

                <div className="relative z-10 flex gap-4 mt-6">
                    <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#003924] hover:bg-gray-100 transition-colors">
                        <Pause size={24} fill="currentColor" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-[#D63D3D] rounded-full text-white hover:bg-red-700 transition-colors">
                        <Square size={20} fill="currentColor" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tracker;