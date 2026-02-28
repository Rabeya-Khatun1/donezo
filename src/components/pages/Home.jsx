import React from 'react';
import DashboardNav from '../headers/DashboardNav';
import useDashboard from '../../Hooks/useDashboard';
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import OverviewCard from './dashboard/OverviewCard';
import AnalyticsBarChart from '../charts/AnalyticsChart';
import Reminders from './dashboard/Reminders';
import User from './dashboard/User';
import Progress from './dashboard/Progress';
import Products from './dashboard/Products';
import Tracker from './dashboard/Tracker';

const Home = () => {
  const { dashboard, loading, error } = useDashboard();
  const overview = dashboard?.overview || {};
  const analytics = dashboard?.analytics || [];
  const users = dashboard?.users || [];
  const products = dashboard?.products || [];

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <DashboardNav
        title="Dashboard"
        subTitle="Plan, prioritize, and accomplish your tasks with ease"
      />

   
      <OverviewCard overview={overview} />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 min-w-0">
        
  
        <div className="xl:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AnalyticsBarChart analytics={analytics} />
            </div>
            <div className="col-span-1">
              <Reminders />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <User users={users} />
            </div>
            <div className="w-full">
              <Progress analytics={analytics} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col gap-6">
          {products?.length > 0 && (
            <div className="md:w-1/2 xl:w-full">
              <Products products={products} />
            </div>
          )}
          <div className="md:w-1/2 xl:w-full">
            <Tracker />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;