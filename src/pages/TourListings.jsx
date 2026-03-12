import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function TourListings() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">

    {/* Top Navigation Bar */}
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Header */}
        <div className="mb-8 flex flex-col gap-4">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                <Link className="hover:text-primary" to="/tours">Home</Link>
                <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-300">Thailand Tours</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">Luxury
                        Thailand Tours</h1>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Exquisite handpicked journeys across the
                        Land of Smiles.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="text-slate-500">Sort by:</span>
                    <select className="bg-transparent border-none focus:ring-0 text-primary cursor-pointer font-bold">
                        <option>Recommended</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
                <div
                    className="sticky top-24 space-y-8 rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div>
                        <h3
                            className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">filter_list</span>
                            Filters
                        </h3>
                        {/* Price Range */}
                        <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                            <button
                                className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                                Price Range
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="mt-4 space-y-2">
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Under $2,000
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    $2,000 - $5,000
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    $5,000+
                                </label>
                            </div>
                        </div>
                        {/* Duration */}
                        <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                            <button
                                className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                                Duration
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="mt-4 space-y-2">
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    1 - 3 Days
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    4 - 7 Days
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    8 - 14 Days
                                </label>
                            </div>
                        </div>
                        {/* Regions */}
                        <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                            <button
                                className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                                Region
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="mt-4 space-y-2">
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Bangkok &amp; Central
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Chiang Mai &amp; North
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Phuket &amp; Islands
                                </label>
                            </div>
                        </div>
                        {/* Experience Type */}
                        <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                            <button
                                className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                                Experience Type
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="mt-4 space-y-2">
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Adventure
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Culinary
                                </label>
                                <label
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox" />
                                    Wellness &amp; Spa
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-full bg-primary py-3 rounded text-sm font-bold text-white uppercase tracking-widest hover:bg-primary/90 transition-all">
                        Apply Filters
                    </button>
                    <button
                        className="w-full text-slate-400 text-xs font-semibold uppercase tracking-widest hover:text-slate-600 text-center">
                        Clear All
                    </button>
                </div>
            </aside>
            {/* Main Listings Area */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tour Card 1 */}
                    <div
                        className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="Traditional Thai temple in golden sunset light"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqtIux59-4Gk31pr-dHza82bdRx_5mxeXSgvbQKlijwpPdlafXAiB3HSbMpQiP_grDxc7JZFVPbvcy2aE70J9fvqzdb9B2oINghwUpv4cdk1Jay0vK3mDCwDKVTtQch1JFyF_2IIc96Cen6tbemD4Prz8uCq5W1655Pwm1PLE5TNrQ_3JfwwUk4Vu8F_6qcDbC0Ql5Mt4Z3vByKfo04yi9wIjUUMGZ7h7a3g5UD9tcoWe2M5Fh-Yzt8EPSSl4B-fQYpQR5zwoKbMk" />
                            <div
                                className="absolute top-4 left-4 rounded bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                                Best Seller
                            </div>
                            <button
                                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-red-500 transition-all">
                                <span className="material-symbols-outlined text-lg">favorite</span>
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                <span className="material-symbols-outlined text-sm">timer</span>
                                10 Days
                                <span className="mx-1 text-slate-300">•</span>
                                <span className="material-symbols-outlined text-sm">group</span>
                                Max 8 People
                            </div>
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                Royal Heritage: Bangkok &amp; Ayutthaya</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                                Private chauffeur-driven exploration of ancient Siamese capitals with exclusive
                                after-hours temple access and fine dining.
                            </p>
                            <div
                                className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                        Starting from</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">$3,450</p>
                                </div>
                                <Link to="/tour/1"
                                    className="block text-center rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">View Details</Link>
                            </div>
                        </div>
                    </div>
                    {/* Tour Card 2 */}
                    <div
                        className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="Crystal clear turquoise water at Phi Phi Islands"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_e1saqMjoS1YAXPtLghBfDtPktqwlTX5lDN7OSuPakNlnrPJXdfn2718_fSMB9HpcR_S21cpv8owACr79z7c_iCC9e1mnZSB1G8XuxV36tPUiliHsdYUFkwqQMgQAsgimBz8nw1nXrWG66Dc0JAKF7F5rFiipuDh7q83kKpOwWvuPYZ2i3o4uNka6qEnlKcysWOZjYOMzt_YKO5LfHzM_PcL6Orb3bUwDvsAHGDllBiIbw8Dec7DlgpCKilZYCapY8EMbnkm2rQ" />
                            <div
                                className="absolute top-4 left-4 rounded bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                                Wellness
                            </div>
                            <button
                                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-red-500 transition-all">
                                <span className="material-symbols-outlined text-lg">favorite</span>
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                <span className="material-symbols-outlined text-sm">timer</span>
                                7 Days
                                <span className="mx-1 text-slate-300">•</span>
                                <span className="material-symbols-outlined text-sm">pool</span>
                                Private Villa
                            </div>
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                Andaman Sanctuary: Phuket &amp; Phi Phi</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                                Sail on a private yacht between hidden lagoons, staying at the world's most exclusive
                                eco-resorts.
                            </p>
                            <div
                                className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                        Starting from</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">$5,120</p>
                                </div>
                                <Link to="/tour/1"
                                    className="block text-center rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">View Details</Link>
                            </div>
                        </div>
                    </div>
                    {/* Tour Card 3 */}
                    <div
                        className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="Lush green tea plantations in Chiang Mai hills"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN50V0vXWM_M3mT7lG1E0vmrkcmwcVR432jiVZbIwlvdQ8jWCdR6u8O_l0qs8hT57QOmt6o0ax_Y4a6lTw3lyY-I5DfntzzJl7a-fA121CpbMJHUqJixobEzeEJp_LwsFI8nYiX99uV-7oCTvd587zBxADS1agkdSLeYID3JR2rjNTFty-MJzn2n_1bWCYNpzAAUTq-j-x2YBZbiCc3U85dZEvA0qImDk8AExegC6fhjWbyoVqltGJW4Rwpf6NlU9n8YZWjUTBjU" />
                            <div
                                className="absolute top-4 left-4 rounded bg-amber-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                                Exclusive
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                <span className="material-symbols-outlined text-sm">timer</span>
                                12 Days
                                <span className="mx-1 text-slate-300">•</span>
                                <span className="material-symbols-outlined text-sm">restaurant</span>
                                Michelin Star Dining
                            </div>
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                Lanna Luxury: The Northern Escape</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                                A curated journey through Chiang Mai's artisanal heritage, elephant sanctuaries, and
                                private mountain retreats.
                            </p>
                            <div
                                className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                        Starting from</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">$4,890</p>
                                </div>
                                <Link to="/tour/1"
                                    className="block text-center rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">View Details</Link>
                            </div>
                        </div>
                    </div>
                    {/* Tour Card 4 */}
                    <div
                        className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="Luxurious floating breakfast in a turquoise pool"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZOrFxAJ4PAt4JbtGdFXxWQlkbYpRCT20mHShyF_bSdKcDLvLK9TZynF8lBuvsbI6jOJYjWdbVq2ylon84rSVbsXfhBGU6MQr57mBsRC3hKhPCncJTaf901X2XS98qhVAVCtgGeUnbslZKjBfanGWCD4M_cSWthxdKhMY1FHpmeGT9nZNSYMZcihWOVfu967jBtrKTx8uDavVcHTia3qRzcxGEiqLHSBzi8-JqFiE21Pm3hJyQq-0STAN7UUrcBHJCh0V_rtCsAI" />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                <span className="material-symbols-outlined text-sm">timer</span>
                                14 Days
                                <span className="mx-1 text-slate-300">•</span>
                                <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                                Private Jets
                            </div>
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                Ultimate Thailand: Coast to Coast</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                                Our most comprehensive itinerary. Cross the country in uncompromising luxury, from the
                                Golden Triangle to Koh Samui.
                            </p>
                            <div
                                className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                        Starting from</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">$8,200</p>
                                </div>
                                <Link to="/tour/1"
                                    className="block text-center rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className="mt-12 flex items-center justify-center gap-2">
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 dark:border-slate-800 text-slate-400">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="h-10 w-10 rounded bg-primary text-sm font-bold text-white">1</button>
                    <button
                        className="h-10 w-10 rounded border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-400 hover:border-primary transition-colors">2</button>
                    <button
                        className="h-10 w-10 rounded border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-400 hover:border-primary transition-colors">3</button>
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 dark:border-slate-800 text-slate-400 hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    </main>
    {/* Footer */}
    <Footer />

    </div>
  );
}
