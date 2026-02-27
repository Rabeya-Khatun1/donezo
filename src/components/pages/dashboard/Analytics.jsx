import React from "react";
import SectionHeader from "../../headers/SectionHeaders";
import AnalyticsChart from "../../charts/AnalyticsChart";

const Analytics = ({ analytics }) => {
  return (
    <div className="box-style space-y-4">
<SectionHeader>Project Analytics</SectionHeader>
<AnalyticsChart analytics={analytics}></AnalyticsChart>
    </div>
  );
};

export default Analytics;
