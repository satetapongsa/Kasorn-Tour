import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="px-6 md:px-10 max-w-[1920px] mx-auto w-full">
            <div className="flex h-[72px] items-center justify-between gap-6">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center bg-primary text-white rounded">
                        <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                    </div>
                    <h2 className="text-[19px] font-black tracking-tight text-slate-900 dark:text-white uppercase mt-0.5 whitespace-nowrap">KASORN TOUR</h2>
                </Link>
                
                {/* Main Nav */}
                <nav className="hidden xl:flex items-center gap-6 xl:gap-8 mx-4">
                    <Link className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`} to="/">Home</Link>
                    <Link className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/destinations' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`} to="/tours">Destinations</Link>
                    <Link className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname.startsWith('/tour') ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`} to="/tours">Tours</Link>
                    <Link className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/luxury-concierge' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`} to="/luxury-concierge">Luxury Concierge</Link>
                    <Link className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`} to="/about">About</Link>
                </nav>
                
                {/* Search and Profile */}
                <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4 shrink-0">
                    <div className="hidden md:flex relative w-full max-w-[400px] transition-all">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input className="block w-full rounded bg-slate-50 dark:bg-slate-800/50 py-2.5 pl-11 pr-3 text-sm font-medium placeholder:text-slate-500 focus:ring-0 outline-none transition-all border-none" placeholder="Search experiences..." type="text" />
                    </div>
                    
                    <Link to="/admin" className="hidden sm:flex items-center justify-center rounded bg-slate-50 dark:bg-slate-800/50 px-5 py-2.5 text-sm font-extrabold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all gap-2">
                        <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                        Admin
                    </Link>
                    
                    <div className="h-10 w-10 overflow-hidden rounded-full flex-shrink-0 cursor-pointer hover:ring-2 ring-slate-100 transition-all ml-1">
                        <img className="h-full w-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGkJzoipuoEFpgtxjfPGCRtfPG_hAT-kJ2a1VgGmp25lqJ2rRw7MK03dLLcakhtqQJnGale6E1_4B8-pSWaErUues64yno1tKbz80RKUJJ9_pJt0BSVLoPwrPDYEuWQ6tA7OXKm6OTzpOgnOOI2u430ayVd8UDwbmPEM3s07chE8tgBl8AE21MWJOyhsQQNoFnhBSOAXJUv6NOCKWRSNnPxk1abv2HTLeJfCluAeOQGTW1YaE5juH2AWACcvsAzm4AKXn-ZzV-wVs" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
