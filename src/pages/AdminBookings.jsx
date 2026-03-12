import React from 'react';
import AdminLayout from '../components/AdminLayout';

export default function AdminBookings() {
  const bookings = [
    { id: '#KT-9286', customer: 'Emma Watson', avatar: 'EW', tour: 'Phuket Island Hopping', date: 'Oct 28, 2023', amount: '$1,250.00', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: '#KT-9287', customer: 'Liam Neeson', avatar: 'LN', tour: 'Phi Phi VIP Cruise', date: 'Oct 29, 2023', amount: '$850.00', status: 'Pending', statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: '#KT-9288', customer: 'Sophia Turner', avatar: 'ST', tour: 'Chiang Mai Mountain Retreat', date: 'Oct 29, 2023', amount: '$320.00', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: '#KT-9289', customer: 'David Beckham', avatar: 'DB', tour: 'Private Jet to Samui', date: 'Oct 30, 2023', amount: '$5,400.00', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: '#KT-9290', customer: 'Michael Jordan', avatar: 'MJ', tour: 'Bangkok Street Food Tour', date: 'Nov 01, 2023', amount: '$120.00', status: 'Cancelled', statusColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: '#KT-9291', customer: 'Taylor Swift', avatar: 'TS', tour: 'Luxury Yacht Escape', date: 'Nov 02, 2023', amount: '$2,450.00', status: 'Pending', statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: '#KT-9292', customer: 'Chris Hemsworth', avatar: 'CH', tour: 'Krabi Rock Climbing', date: 'Nov 03, 2023', amount: '$450.00', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">All Bookings</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Manage and track all customer reservations</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Export
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Create Booking
                </button>
            </div>
        </div>

        {/* Filters Panel */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="flex-1 min-w-[250px] relative">
                <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">search</span>
                <input type="text" placeholder="Search by ID, Name or Destination..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Status:</span>
              <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium outline-none focus:border-primary cursor-pointer">
                  <option>All Statuses</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Date:</span>
              <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium outline-none focus:border-primary cursor-pointer">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                  <option>Custom Range...</option>
              </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <th className="px-6 py-4">Booking ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Tour Destination</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {bookings.map((booking, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer">
                              <td className="px-6 py-4 text-sm font-mono font-bold text-primary group-hover:underline">{booking.id}</td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                      <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-black text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">{booking.avatar}</div>
                                      <div className="text-sm font-bold text-slate-900 dark:text-white">{booking.customer}</div>
                                  </div>
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{booking.tour}</td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-[16px] text-slate-400">calendar_month</span>
                                  {booking.date}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">{booking.amount}</td>
                              <td className="px-6 py-4">
                                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${booking.statusColor} border-transparent`}>
                                      {booking.status}
                                  </span>
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center justify-center gap-2">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10 tooltip" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 tooltip" title="Edit">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                  </div>
                              </td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination Controls */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Showing 1 to 7 of 245 bookings</p>
                <div className="flex items-center gap-1">
                    <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 text-slate-600 transition-colors" disabled>
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button className="min-w-[32px] h-8 flex items-center justify-center bg-primary text-white rounded-md text-sm font-bold shadow-md shadow-primary/20">1</button>
                    <button className="min-w-[32px] h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-sm font-bold transition-colors">2</button>
                    <button className="min-w-[32px] h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-sm font-bold transition-colors">3</button>
                    <span className="text-slate-400 px-2 font-bold select-none">...</span>
                    <button className="min-w-[32px] h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-sm font-bold transition-colors">35</button>
                    <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </AdminLayout>
  );
}
