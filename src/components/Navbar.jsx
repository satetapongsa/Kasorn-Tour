import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Reusable Nav Links Component
  const NavLinks = ({ mobile }) => (
    <>
      <Link onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} ${mobile ? 'block py-3 border-b border-slate-100 dark:border-slate-800' : ''}`} to="/">Home</Link>
      <Link onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/tours' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} ${mobile ? 'block py-3 border-b border-slate-100 dark:border-slate-800' : ''}`} to="/tours">Destinations</Link>
      <Link onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname.startsWith('/tour/') ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} ${mobile ? 'block py-3 border-b border-slate-100 dark:border-slate-800' : ''}`} to="/tours">Tours</Link>
      <Link onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/luxury-concierge' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} ${mobile ? 'block py-3 border-b border-slate-100 dark:border-slate-800' : ''}`} to="/luxury-concierge">Luxury Concierge</Link>
      <Link onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} ${mobile ? 'block py-3 border-b border-slate-100 dark:border-slate-800' : ''}`} to="/about">About</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="px-5 md:px-10 max-w-[1920px] mx-auto w-full">
            <div className="flex h-[72px] items-center justify-between gap-6">
                
                {/* Mobile Menu Button - shows on left on small screens */}
                <button 
                  className="xl:hidden p-2 -ml-2 text-slate-600 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="material-symbols-outlined text-[28px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 mr-auto xl:mr-0">
                    <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center bg-primary text-white rounded">
                        <span className="material-symbols-outlined text-[18px] md:text-[20px]">travel_explore</span>
                    </div>
                    <h2 className="text-[16px] md:text-[19px] font-black tracking-tight text-slate-900 dark:text-white uppercase mt-0.5 whitespace-nowrap">KASORN TOUR</h2>
                </Link>
                
                {/* Desktop Main Nav */}
                <nav className="hidden xl:flex items-center gap-6 xl:gap-8 mx-4">
                    <NavLinks />
                </nav>
                
                {/* Search and Profile */}
                <div className="flex items-center justify-end gap-3 sm:gap-4 shrink-0">
                    {/* Search - Hidden on very small screens, shown as icon on medium, full bar on large */}
                    <div className="hidden lg:flex relative w-full max-w-[300px] transition-all">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input className="block w-full rounded bg-slate-50 dark:bg-slate-800/50 py-2 pl-11 pr-3 text-sm font-medium placeholder:text-slate-500 focus:ring-0 outline-none transition-all border-none" placeholder="Search..." type="text" />
                    </div>
                    <button className="lg:hidden p-2 text-slate-600 focus:outline-none">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>
                    
                    <Link to="/admin" className="hidden sm:flex items-center justify-center rounded bg-slate-50 dark:bg-slate-800/50 px-4 py-2 hover:text-primary text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all gap-1.5 shrink-0">
                        <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                        Admin
                    </Link>
                    
                    <div className="h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full flex-shrink-0 cursor-pointer hover:ring-2 ring-slate-100 transition-all ml-1">
                        <img className="h-full w-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGkJzoipuoEFpgtxjfPGCRtfPG_hAT-kJ2a1VgGmp25lqJ2rRw7MK03dLLcakhtqQJnGale6E1_4B8-pSWaErUues64yno1tKbz80RKUJJ9_pJt0BSVLoPwrPDYEuWQ6tA7OXKm6OTzpOgnOOI2u430ayVd8UDwbmPEM3s07chE8tgBl8AE21MWJOyhsQQNoFnhBSOAXJUv6NOCKWRSNnPxk1abv2HTLeJfCluAeOQGTW1YaE5juH2AWACcvsAzm4AKXn-ZzV-wVs" />
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[72px] left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-4 flex flex-col z-40 max-h-[calc(100vh-72px)] overflow-y-auto">
            <NavLinks mobile />
            
            <div className="pt-6 pb-2 sm:hidden flex flex-col gap-4">
               <Link onClick={() => setIsMobileMenuOpen(false)} to="/admin" className="flex items-center justify-center rounded bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all gap-2 w-full">
                    <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                    Admin Dashboard
               </Link>
            </div>
          </div>
        )}
    </header>
  );
}
