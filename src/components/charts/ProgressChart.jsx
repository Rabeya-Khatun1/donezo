import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

const ProgressChart = ({analytics}) => {

  const conversionRate = Math.round(
    analytics.reduce((sum, item) => sum + (item.conversions || 0), 0) / analytics.length
  );
const totalViews = analytics.reduce(
  (sum, item) => sum + (item.views || 0),
  0
);
const totalClicks = analytics.reduce(
  (sum, item) => sum + (item.clicks || 0),
  0
);
const totalConversions = analytics.reduce((sum, item) => {
  const actual = (item.views * item.conversions) / 100;
  return sum + actual;
}, 0);
const pieData = [
  { name: "Views", value: totalViews },              
  { name: "Clicks", value: totalClicks },            
  { name: "Conversions", value: totalConversions },  
];


    return (
          <div className="w-full h-63 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <pattern
                id="stripePattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke="#1a3b32" 
                  strokeWidth="4"
                />
              </pattern>
            </defs>

    <Tooltip
            wrapperStyle={{ zIndex: 100 }}
            contentStyle={{
              backgroundColor: "#002B1B",
              border: "none",
              borderRadius: "12px",
              padding: "8px 14px",
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            labelStyle={{
              color: "#74C29B",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          />

<Pie
  data={pieData}
  cx="50%"
  cy="85%"
  startAngle={0}
  endAngle={180}
  innerRadius={75}
  outerRadius={120}
  dataKey="value"
  stroke="none"
  cornerRadius={50}
  paddingAngle={-25}
  minAngle={15}
>
  <Cell fill="url(#stripePattern)" />
  <Cell fill="#74C29B" />
  <Cell fill="#1F5F45" />

</Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <span className="text-[44px] font-[900] text-[#002B1B] leading-none block">
            {conversionRate}%
          </span>
          <p className="text-[#002B1B] text-[15px] font-bold mt-1">Conversion</p>
        </div>
      </div>
    );
};

export default ProgressChart;