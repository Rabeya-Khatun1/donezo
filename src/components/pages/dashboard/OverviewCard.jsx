import React from "react";
import { motion, easeOut } from "framer-motion";
import { ArrowUpRight, ChevronUp } from "lucide-react";

const OverviewCard = ({ overview }) => {
    const { totalUsers, activeUsers, revenue, growth } = overview || {};

    const cards = [
        { title: "Total Users", value: totalUsers || 0, change: "12% increase", theme: "dark" },
        { title: "Active Users", value: activeUsers || 0, change: "5% increase", theme: "light" },
        { title: "Revenue", value: revenue || 0, change: "8% increase", theme: "light" },
        { title: "Growth", value: growth ? `${growth}%` : "0%", change: "3% increase", theme: "light" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {cards.map((card, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <div
                        className={`relative p-4 md:p-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 transform hover:-translate-y-2 h-full ${card.theme === "dark"
                            ? "bg-gradient-to-br from-[#97C05C] via-[#006442] to-[#023523] text-white shadow-lg shadow-emerald-900/10"
                            : "bg-white text-gray-800 border border-gray-100 shadow-sm"
                            }`}
                    >
                        {card.theme === "dark" && (
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#023523] via-[#006442] to-[#005236]" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#A2D149] blur-[50px] opacity-40 rounded-full" />
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#008F5D] blur-2xl opacity-30 rounded-full" />
                            </div>
                        )}

                        <div className="relative z-10 flex flex-col h-full justify-between gap-3">
                            <div className="flex justify-between items-start">
                                <span className={`text-base md:text-lg lg:text-xl font-semibold leading-tight ${card.theme === "dark" ? "text-white/90" : "text-gray-800"}`}>
                                    {card.title}
                                </span>
                                <motion.div
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border flex-shrink-0 ${card.theme === "dark" ? "bg-white" : "border-gray-200 bg-white"}`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 1 }}
                                >
                                    <ArrowUpRight size={18} className={card.theme === "dark" ? "text-gray-800" : "text-gray-700"} />
                                </motion.div>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 truncate">
                                    {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
                                </h2>
                                
                                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                                    <div
                                        className={`flex items-center justify-center px-1.5 h-5 rounded-md text-[10px] border flex-shrink-0 ${card.theme === "dark" ? "border-[#A2D149] text-[#A2D149]" : "border-[#6C997F] text-[#6C997F]"}`}
                                    >
                                        <span className="mr-0.5">5</span>
                                        <ChevronUp size={10} />
                                    </div>
                                    <p className={`text-[10px] md:text-[11px] font-medium tracking-wide whitespace-nowrap ${card.theme === "dark" ? "text-[#A2D149]" : "text-[#6C997F]"}`}>
                                        {card.change}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default OverviewCard;