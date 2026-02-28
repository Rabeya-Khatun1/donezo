import React from 'react';
import { Search, Bell, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-3 md:py-5 px-4 rounded-2xl bg-[#f3f4f6] w-full gap-2">
            
            {/* Search Section: Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:relative md:block w-[300px] lg:w-[450px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search task"
                    className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-green-800 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 border bg-gray-200 px-1.5 py-0.5 rounded uppercase hidden lg:inline">
                    ⌘ F
                </span>
            </div>

  
            <div className="md:hidden flex-1" />
            
            <div className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                    <button className="p-2 md:p-2.5 bg-white rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
                        <Mail size={18} className="md:w-5 md:h-5 text-gray-600" />
                    </button>
                    <button className="p-2 md:p-2.5 bg-white rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
                        <Bell size={18} className="md:w-5 md:h-5 text-gray-600" />
                    </button>
                </div>

                <div className="flex items-center gap-2 md:gap-3 ml-1 md:ml-2 border-l border-gray-200 pl-2 md:pl-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs md:text-sm font-bold leading-tight">Totok Michael</p>
                        <p className="text-[9px] md:text-[10px] text-gray-400 hidden md:block">tmichael20@mail.com</p>
                    </div>
                    
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-200 flex flex-col justify-center items-center flex-shrink-0">
                        <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" 
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full" 
                            alt="Avatar" 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;