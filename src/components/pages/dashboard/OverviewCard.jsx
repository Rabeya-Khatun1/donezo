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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {cards.map((card, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <div
                        className={`relative p-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 transform hover:-translate-y-2 ${card.theme === "dark"
                            ? "bg-gradient-to-br from-[#97C05C] via-[#006442] to-[#023523] text-white shadow-lg shadow-emerald-900/10"
                            : "bg-white text-gray-800 border border-gray-100 shadow-sm"
                            }`}
                    >
                        {card.theme === "dark" && (
                            <>
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#023523] via-[#006442] to-[#005236]" />
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#A2D149] blur-[50px] opacity-40 rounded-full" />
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#008F5D] blur-2xl opacity-30 rounded-full" />
                                </div>
                            </>
                        )}

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <span className={`text-xl font-semibold ${card.theme === "dark" ? "text-white/90" : "text-gray-800"}`}>
                                    {card.title}
                                </span>
                                <motion.div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${card.theme === "dark" ? "bg-white" : "border border-gray-200 bg-white"
                                        }`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 1 }}
                                >
                                    <ArrowUpRight size={20} className={card.theme === "dark" ? "text-gray-800" : "text-gray-700"} />
                                </motion.div>
                            </div>
                            <h2 className="text-4xl font-bold mb-3">{card.value.toLocaleString()}</h2>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`flex items-center justify-center w-6 h-4 rounded-md text-[10px] border ${card.theme === "dark" ? "border-[#A2D149] text-[#A2D149]" : "border-[#6C997F] text-[#6C997F]"
                                        }`}
                                >
                                    <span>5</span>
                                    <ChevronUp size={10} />
                                </div>
                                <p className={`text-[11px] font-medium tracking-wide ${card.theme === "dark" ? "text-[#A2D149]" : "text-[#6C997F]"}`}>
                                    {card.change}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default OverviewCard;