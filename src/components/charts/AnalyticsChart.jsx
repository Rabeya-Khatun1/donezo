import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import SectionHeader from '../headers/SectionHeaders'

const AnalyticsBarChart = ({ analytics }) => {

    const chartData = [
        { dayLabel: "S", conversions: 0, isDummy: true },
        ...analytics.map((item) => ({
            dayLabel: new Date(item.date).toLocaleDateString('en-US', { weekday: 'narrow' }),
            conversions: item.conversions,
            fullDate: item.date,
            isDummy: false,
        })),
        { dayLabel: "S", conversions: 0, isDummy: true },
    ];

    const processedData = chartData.map(item => ({
        ...item,

        displayValue: item.conversions === 0 ? 25 : item.conversions,
        actualValue: item.conversions
    }));

    const maxValue = Math.max(...processedData.map(d => d.displayValue));
    const colors = ['#2d7a58', '#34d399', '#10b981', '#047857', '#065f46', '#059669', '#047857', '#064e3b'];

    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm ">
            <SectionHeader>Project Analytics</SectionHeader>
            <div className="h-[160px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={processedData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <pattern id="stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <rect width="2" height="15" fill="#1F2937" />
                            </pattern>
                        </defs>

                        <XAxis
                            dataKey="dayLabel"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 14, fontWeight: 700 }}
                            dy={0}
                        />

                        <YAxis hide domain={[0, maxValue + 10]} />
                        <Tooltip
                            cursor={false}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const data = payload[0].payload;
                                    return (
                                        <div className="bg-[#052c22] text-white p-3 rounded-2xl shadow-xl border-none outline-none">
                                            <p className="text-[10px] font-bold opacity-50 uppercase">
                                                {data.isDummy ? "No Data" : data.fullDate}
                                            </p>
                                            <p className="text-sm font-bold">
                                                Conversion: <span className="text-[#34d399]">{data.actualValue}%</span>
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar dataKey="displayValue" barSize={45} radius={[25, 25, 25, 25]}>
                            {processedData.map((entry, index) => {
                                const isStripe = index === 0 || index === processedData.length - 1;

                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={isStripe ? "url(#stripes)" : colors[index % colors.length]}
                                        stroke="none"
                                        strokeWidth={0}
                                        style={{ cursor: isStripe ? 'default' : 'pointer', outline: 'none' }}
                                        className={!isStripe ? "transition-all duration-500 hover:fill-[#1a4d36]" : ""}
                                    />
                                );
                            })}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsBarChart;