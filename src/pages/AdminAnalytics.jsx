import React from 'react';
import AdminLayout from '../components/AdminLayout';

export default function AdminAnalytics() {
  const revenueData = [
    { month: 'Jan', value: 30, label: '$30k' },
    { month: 'Feb', value: 45, label: '$45k' },
    { month: 'Mar', value: 40, label: '$40k' },
    { month: 'Apr', value: 60, label: '$60k' },
    { month: 'May', value: 55, label: '$55k' },
    { month: 'Jun', value: 80, label: '$80k' },
    { month: 'Jul', value: 95, label: '$95k' },
    { month: 'Aug', value: 75, label: '$75k' },
    { month: 'Sep', value: 65, label: '$65k' },
    { month: 'Oct', value: 85, label: '$85k' },
  ];

  const popularTours = [
    { name: 'Phuket Island Hopping', bookings: 450, percentage: 85, color: 'bg-primary' },
    { name: 'Luxury Yacht Escape', bookings: 320, percentage: 65, color: 'bg-indigo-500' },
    { name: 'Chiang Mai Retreat', bookings: 280, percentage: 55, color: 'bg-emerald-500' },
    { name: 'Bangkok Food Tour', bookings: 190, percentage: 40, color: 'bg-amber-500' },
    { name: 'Private Jet to Samui', bookings: 95, percentage: 20, color: 'bg-rose-500' },
  ];

  const demographics = [
    { country: 'United States', code: 'US', users: '35%', color: 'bg-primary' },
    { country: 'United Kingdom', code: 'UK', users: '20%', color: 'bg-blue-400' },
    { country: 'Australia', code: 'AU', users: '15%', color: 'bg-emerald-400' },
    { country: 'Singapore', code: 'SG', users: '12%', color: 'bg-amber-400' },
    { country: 'Others', code: 'OT', users: '18%', color: 'bg-slate-300 dark:bg-slate-600' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics Overview</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Key performance metrics and reports</p>
            </div>
            <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    Last 30 Days
                    <span className="material-symbols-outlined text-[20px] ml-2 text-slate-400">expand_more</span>
                </button>
                <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Report
                </button>
            </div>
        </div>

        {/* Top KPIs Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-500">Gross Revenue</p>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">$345.2k</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">confirmation_number</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-500">Avg. Order Value</p>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">$1,240</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <span className="material-symbols-outlined">stars</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-500">Conversion Rate</p>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">4.8%</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-500">Website Visits</p>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">52.4k</h4>
                </div>
            </div>
        </div>

        {/* Charts Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Trend Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Trend</h3>
                        <p className="text-sm text-slate-500 font-medium">Monthly revenue over the last 10 months</p>
                    </div>
                </div>
                
                {/* CSS Bar Chart */}
                <div className="h-[280px] w-full flex items-end gap-2 sm:gap-4 pt-8">
                    {revenueData.map((data, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                            {/* Tooltip */}
                            <div className="absolute -top-10 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                {data.label}
                            </div>
                            
                            {/* Bar Container */}
                            <div className="w-full relative h-[220px] flex items-end justify-center">
                                {/* Bar */}
                                <div 
                                    className="w-full max-w-[40px] bg-primary/20 group-hover:bg-primary transition-all rounded-t-sm"
                                    style={{ height: `${data.value}%` }}
                                >
                                    <div className="w-full h-1 bg-primary rounded-t-sm"></div>
                                </div>
                            </div>
                            
                            <span className="text-xs font-bold text-slate-500 mt-3">{data.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Tours Progress Bars */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Top Tour Packages</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">Based on total bookings</p>
                
                <div className="space-y-6">
                    {popularTours.map((tour, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300">{tour.name}</span>
                                <span className="font-black text-slate-900 dark:text-white">{tour.bookings}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${tour.color}`} style={{ width: `${tour.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-6 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                    View All Packages
                </button>
            </div>
            
            {/* Demographics Area / Donut Chart Alternative */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm lg:col-span-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Customer Demographics</h3>
                
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Simulated Donut Chart using Conic Gradient */}
                    <div className="relative size-48 md:size-64 shrink-0 rounded-full" style={{
                        background: `conic-gradient(
                            #1A44F2 0% 35%, 
                            #60A5FA 35% 55%, 
                            #34D399 55% 70%, 
                            #FBBF24 70% 82%, 
                            #CBD5E1 82% 100%
                        )`
                    }}>
                        {/* Inner Circle to make it a donut */}
                        <div className="absolute inset-[15%] rounded-full bg-white dark:bg-slate-900 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-slate-900 dark:text-white">8.4k</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Users</span>
                        </div>
                    </div>

                    {/* Legend / Metrics */}
                    <div className="flex-1 w-full flex flex-col justify-center gap-4">
                        {demographics.map((demo, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className={`size-3 shrink-0 rounded-full ${demo.color}`}></div>
                                <div className="flex-1 flex justify-between items-center bg-transparent">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-800 dark:text-slate-200">{demo.country}</span>
                                        <span className="text-xs font-bold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{demo.code}</span>
                                    </div>
                                    <span className="font-black text-slate-900 dark:text-white">{demo.users}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </AdminLayout>
  );
}
