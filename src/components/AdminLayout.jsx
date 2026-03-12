import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Bookings', path: '/admin/bookings', icon: 'calendar_month' },
    { name: 'Customers', path: '/admin/customers', icon: 'group' },
    { name: 'Analytics', path: '/admin/analytics', icon: 'bar_chart' },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[260px] flex flex-col bg-white border-r border-slate-200 shrink-0">
          <div className="h-[72px] px-6 flex items-center gap-3 shrink-0">
            <Link to="/admin" className="size-10 bg-[#1A44F2] rounded-[10px] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">explore</span>
            </Link>
            <div>
              <h1 className="text-[17px] font-bold leading-tight text-slate-900">Kasorn Tour</h1>
              <p className="text-[13px] text-slate-500 font-medium">Admin Panel</p>
            </div>
          </div>
          
          <nav className="flex-1 px-4 py-6 flex flex-col gap-1.5 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-[10px] text-[15px] transition-colors ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#1A44F2] font-semibold'
                      : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[22px] ${isActive ? "text-[#1A44F2]" : "text-slate-500"}`}>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
          
          {/* Settings at Bottom */}
          <div className="p-4 border-t border-slate-200 shrink-0">
            <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-[10px] text-[15px] text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined text-[22px] text-slate-500">settings</span>
              <span>Settings</span>
            </button>
          </div>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Header */}
          <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 relative z-10">
            {/* Search */}
            <div className="relative w-full max-w-[360px] flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[20px]">search</span>
              <input
                className="w-full pl-11 pr-4 py-2.5 bg-[#F9FAFB] rounded-lg text-[14px] text-slate-700 outline-none focus:bg-slate-100 transition-colors"
                placeholder="Search bookings, customers..."
                type="text"
              />
            </div>

            {/* Right side header */}
            <div className="flex items-center gap-6">
              {/* Notification icon */}
              <button className="text-slate-500 hover:text-slate-700 relative">
                <span className="material-symbols-outlined text-[24px]">notifications</span>
                <span className="absolute top-0.5 right-0.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              
              {/* Divider */}
              <div className="h-8 w-[1px] bg-slate-200"></div>

              {/* Profile */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right">
                  <p className="text-[14px] font-bold text-slate-900 group-hover:text-[#1A44F2] transition-colors leading-tight">Alex Rivers</p>
                  <p className="text-[12px] text-slate-500 mt-0.5">Operation Manager</p>
                </div>
                <div className="size-10 rounded-full overflow-hidden bg-slate-200 shadow-sm">
                  <img
                    alt="Alex Rivers"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxM_LIuO-05DoO3K4EPD91oUaNjtgNzbVRwSUbwf5vaEg7gDAJNIYboc-obPlcUHLpaZpQZQD1L5SyaYiUF9oGQ8dC1Zx-0R8kyVYun155dMglCHiZtEuwCzEri_4MTN7K9Rl7urRhcWo-n6UXpvOy7Hu9AJc-8D8vhcuuMlbORPCRMITAmqGHhSqaim_dj002jSiMHHpsPorMnBEonGXVhFw9rxpJFgGcjtEtgwV5KGVJ9YCY8AJ2ooE61L28WOyI6k_L8WdMTyQ"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Scrollable */}
          <main className="flex-1 overflow-y-auto">
            <div className="p-8 pb-24">
              {children}
            </div>
          </main>
          
          {/* Floating Action Menu Button (from screenshot) */}
          <button className="fixed bottom-8 right-8 z-50 size-14 bg-[#1A44F2] hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(26,68,242,0.3)] transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-[30px]">menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
