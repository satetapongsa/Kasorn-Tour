import React from 'react';
import AdminLayout from '../components/AdminLayout';

export default function AdminCustomers() {
  const customers = [
    { name: 'Sarah Miller', email: 'sarah.miller@example.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', spent: '$4,250.00', lastBooking: 'Oct 24, 2023', status: 'VIP' },
    { name: 'John Doe', email: 'johndoe88@example.com', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150', spent: '$1,250.00', lastBooking: 'Oct 25, 2023', status: 'Active' },
    { name: 'Ben Chen', email: 'ben.chen.design@example.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', spent: '$890.00', lastBooking: 'Oct 22, 2023', status: 'Active' },
    { name: 'Emma Watson', email: 'emmawatson_real@example.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', spent: '$12,400.00', lastBooking: 'Oct 28, 2023', status: 'VIP' },
    { name: 'Mike Kelly', email: 'mike.k@example.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', spent: '$320.00', lastBooking: 'Sep 15, 2023', status: 'Inactive' },
    { name: 'Lisa Ray', email: 'lisa.ray99@example.com', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', spent: '$2,100.00', lastBooking: 'Nov 01, 2023', status: 'Active' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Database</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Manage client profiles, tier levels, and history</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                    Add Customer
                </button>
            </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Customers</p>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mt-1">8,492</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active This Month</p>
                  <h4 className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">342</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">VIP Members</p>
                  <h4 className="text-3xl font-black text-amber-500 mt-1">156</h4>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">New Signups</p>
                  <h4 className="text-3xl font-black text-blue-600 dark:text-blue-400 mt-1">45</h4>
                </div>
            </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="flex-1 min-w-[250px] relative">
                <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">search</span>
                <input type="text" placeholder="Search by name, email..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Tier:</span>
              <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium outline-none focus:border-primary cursor-pointer">
                  <option>All Tiers</option>
                  <option>VIP</option>
                  <option>Active</option>
                  <option>Inactive</option>
              </select>
            </div>
        </div>

        {/* Customer List */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <th className="px-6 py-4">Customer Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4">Total Spent</th>
                            <th className="px-6 py-4">Last Booking</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {customers.map((c, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer">
                              <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                      <div className="size-10 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-700 shadow-sm">
                                          <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                                      </div>
                                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{c.name}</div>
                                  </div>
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-500">{c.email}</td>
                              <td className="px-6 py-4 text-center">
                                  {c.status === 'VIP' && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50 uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-[14px]">stars</span> VIP
                                    </span>
                                  )}
                                  {c.status === 'Active' && (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100/50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50">
                                        Active
                                    </span>
                                  )}
                                  {c.status === 'Inactive' && (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">
                                        Inactive
                                    </span>
                                  )}
                              </td>
                              <td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">{c.spent}</td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{c.lastBooking}</td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center justify-center gap-2">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10 tooltip" title="View Profile">
                                        <span className="material-symbols-outlined text-[20px]">person_search</span>
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
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Showing 1 to 6 of 8,492 customers</p>
                <div className="flex items-center gap-1">
                    <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 text-slate-600 transition-colors" disabled>
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button className="min-w-[32px] h-8 flex items-center justify-center bg-primary text-white rounded-md text-sm font-bold shadow-md shadow-primary/20">1</button>
                    <button className="min-w-[32px] h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-sm font-bold transition-colors">2</button>
                    <span className="text-slate-400 px-2 font-bold select-none">...</span>
                    <button className="min-w-[32px] h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-sm font-bold transition-colors">145</button>
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
