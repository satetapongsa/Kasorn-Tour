import React from 'react';
import AdminLayout from '../components/AdminLayout';

export default function AdminDashboard() {
  const recentBookings = [
    { id: '#KT-9281', initials: 'SM', name: 'Sarah Miller', tour: 'Chiang Mai Mountain Retreat', date: 'Oct 24, 2023', amount: '$320.00', status: 'Confirmed', statusColor: 'bg-[#D1FAE5] text-[#065F46]' },
    { id: '#KT-9282', initials: 'JD', name: 'John Doe', tour: 'Phuket Island Hopping', date: 'Oct 25, 2023', amount: '$1,250.00', status: 'Pending', statusColor: 'bg-[#FEF3C7] text-[#92400E]' },
    { id: '#KT-9283', initials: 'BC', name: 'Ben Chen', tour: 'Bangkok Street Food Tour', date: 'Oct 22, 2023', amount: '$120.00', status: 'Cancelled', statusColor: 'bg-[#FEE2E2] text-[#B91C1C]' },
    { id: '#KT-9284', initials: 'EW', name: 'Emma Watson', tour: 'Ayutthaya Historical Park', date: 'Oct 26, 2023', amount: '$450.00', status: 'Confirmed', statusColor: 'bg-[#D1FAE5] text-[#065F46]' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-[1400px] mx-auto auto-rows-max tracking-tight">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-[14px] text-slate-500 font-medium">Total Bookings</p>
                    <h3 className="text-[28px] font-bold text-slate-900 leading-tight">1,284</h3>
                    <div className="flex items-center gap-1.5 mt-3 text-emerald-600 font-medium">
                        <span className="material-symbols-outlined text-[18px]">trending_up</span>
                        <span className="text-[13px]">12% from last month</span>
                    </div>
                </div>
                <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
                    <span className="material-symbols-outlined text-[26px]">shopping_cart</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-[14px] text-slate-500 font-medium">Revenue</p>
                    <h3 className="text-[28px] font-bold text-slate-900 leading-tight">$45,200</h3>
                    <div className="flex items-center gap-1.5 mt-3 text-emerald-600 font-medium">
                        <span className="material-symbols-outlined text-[18px]">trending_up</span>
                        <span className="text-[13px]">8% from last month</span>
                    </div>
                </div>
                <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
                <div className="space-y-1">
                    <p className="text-[14px] text-slate-500 font-medium">Pending Requests</p>
                    <h3 className="text-[28px] font-bold text-slate-900 leading-tight">18</h3>
                    <div className="flex items-center gap-1.5 mt-3 text-rose-600 font-medium">
                        <span className="material-symbols-outlined text-[18px] transform rotate-180">trending_up</span>
                        <span className="text-[13px]">5% vs yesterday</span>
                    </div>
                </div>
                <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
                    <span className="material-symbols-outlined text-[26px]">assignment</span>
                </div>
            </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white rounded-[14px] border border-slate-200 shadow-sm overflow-hidden mt-8">
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-[18px] font-bold text-slate-900">Recent Bookings</h2>
                    <p className="text-[14px] text-slate-500 mt-0.5">Manage and monitor tour activity in real-time</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-[14px] text-slate-700 font-semibold flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter
                    </button>
                    <button className="h-10 px-4 bg-[#1A44F2] hover:bg-blue-700 text-white rounded-lg text-[14px] font-semibold flex items-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        New Booking
                    </button>
                </div>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr className="bg-[#F9FAFB] text-slate-500 text-[12px] uppercase font-bold tracking-wider">
                            <th className="px-6 py-4 font-bold">BOOKING ID</th>
                            <th className="px-6 py-4 font-bold">CUSTOMER</th>
                            <th className="px-6 py-4 font-bold">TOUR DESTINATION</th>
                            <th className="px-6 py-4 font-bold">DATE</th>
                            <th className="px-6 py-4 font-bold">AMOUNT</th>
                            <th className="px-6 py-4 font-bold text-center">STATUS</th>
                            <th className="px-6 py-4 font-bold text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {recentBookings.map((booking, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-5 text-[14px] text-[#1A44F2] cursor-pointer hover:underline font-medium">{booking.id}</td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="size-[34px] rounded-full bg-[#F1F5F9] flex items-center justify-center text-[13px] font-bold text-slate-600">
                                            {booking.initials}
                                        </div>
                                        <div className="text-[14px] text-slate-700 font-semibold">{booking.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-[14px] text-slate-500 font-medium">{booking.tour}</td>
                                <td className="px-6 py-5 text-[14px] text-slate-500 font-medium">{booking.date}</td>
                                <td className="px-6 py-5 text-[14px] text-slate-900 font-bold">{booking.amount}</td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold ${booking.statusColor}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <button className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Minimal spacing at bottom for consistent borders matching the image layout */}
            <div className="h-4 bg-white border-t border-slate-100 hidden"></div>
        </div>

      </div>
    </AdminLayout>
  );
}
