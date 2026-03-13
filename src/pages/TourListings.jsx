import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getTours } from '../services/api';

export default function TourListings() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    // Filters state
    const [sortBy, setSortBy] = useState('recommended');
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    const regionsList = ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi', 'Pattaya', 'Samui', 'Hua Hin'];
    const typesList = ['Adventure', 'Culinary', 'Luxury', 'Wildlife', 'Cultural'];

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            try {
                const response = await getTours({
                    page: 1,
                    limit: 14, // 14 items to show original 4 + 10 more
                    regions: selectedRegions,
                    types: selectedTypes,
                    sortBy
                });
                setTours(response.data);
                setTotalPages(response.totalPages);
            } catch (error) {
                console.error("Failed to fetch tours:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
        // Scroll to top on page change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page, sortBy, selectedRegions, selectedTypes]);

    const handleRegionToggle = (region) => {
        setSelectedRegions(prev => 
            prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
        );
        setPage(1); // Reset page on filter change
    };

    const handleTypeToggle = (type) => {
        setSelectedTypes(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
        setPage(1);
    };

    const handleClearAll = () => {
        setSelectedRegions([]);
        setSelectedTypes([]);
        setSortBy('recommended');
        setPage(1);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-1 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full">
                {/* Breadcrumbs & Header */}
                <div className="mb-8 flex flex-col gap-4">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <Link className="hover:text-primary" to="/">Home</Link>
                        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                        <span className="text-slate-900 dark:text-slate-300">Destinations</span>
                    </nav>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">Explore Destinations</h1>
                            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Discover handpicked travel experiences across the Land of Smiles.</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <span className="text-slate-500">Sort by:</span>
                            <select 
                                value={sortBy}
                                onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                                className="bg-transparent border-none focus:ring-0 text-primary cursor-pointer font-bold outline-none"
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8 rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">filter_list</span>
                                    Filters
                                </h3>
                                
                                {/* Regions */}
                                <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                                    <button className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                        Region / City
                                    </button>
                                    <div className="space-y-2">
                                        {regionsList.map(region => (
                                            <label key={region} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedRegions.includes(region)}
                                                    onChange={() => handleRegionToggle(region)}
                                                    className="rounded border-slate-300 text-primary focus:ring-primary" 
                                                />
                                                {region}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Experience Type */}
                                <div className="py-4 border-t border-slate-100 dark:border-slate-800">
                                    <button className="flex w-full items-center justify-between text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                        Experience Type
                                    </button>
                                    <div className="space-y-2">
                                        {typesList.map(type => (
                                            <label key={type} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedTypes.includes(type)}
                                                    onChange={() => handleTypeToggle(type)}
                                                    className="rounded border-slate-300 text-primary focus:ring-primary" 
                                                />
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {(selectedRegions.length > 0 || selectedTypes.length > 0 || sortBy !== 'recommended') && (
                                <button
                                    onClick={handleClearAll}
                                    className="w-full text-slate-400 text-xs font-semibold uppercase tracking-widest hover:text-slate-600 text-center transition-colors">
                                    Clear All
                                </button>
                            )}
                        </div>
                    </aside>
                    
                    {/* Main Listings Area */}
                    <div className="flex-1">
                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <span className="material-symbols-outlined animate-spin text-5xl text-primary">progress_activity</span>
                            </div>
                        ) : tours.length === 0 ? (
                            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">search_off</span>
                                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">No destinations found</h3>
                                <p className="text-slate-500 mt-2">Try adjusting your filters to find more options.</p>
                                <button onClick={handleClearAll} className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90">Clear Filters</button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {tours.map(tour => {
                                        return (
                                        <div key={tour.id} className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl relative">
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <img 
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    alt={tour.title}
                                                    src={tour.image} 
                                                />
                                                {tour.badge && (
                                                    <div className={`absolute top-4 left-4 rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg ${tour.badge.color}`}>
                                                        {tour.badge.text}
                                                    </div>
                                                )}
                                                <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-red-500 transition-all z-10">
                                                    <span className="material-symbols-outlined text-lg">favorite</span>
                                                </button>
                                            </div>
                                            <div className="flex flex-1 flex-col p-6">
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                                    <span className="material-symbols-outlined text-sm">timer</span>
                                                    {tour.duration}
                                                    <span className="mx-1 text-slate-300">•</span>
                                                    <span className="material-symbols-outlined text-sm">{tour.icon2 || 'star'}</span>
                                                    {tour.text2 || `${tour.rating} (${tour.reviews})`}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                                    {tour.title}
                                                </h3>
                                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                                                    {tour.description}
                                                </p>
                                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                                                    <div>
                                                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Starting from</p>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-2xl font-black text-slate-900 dark:text-white">${tour.price.toLocaleString()}</p>
                                                            {tour.originalPrice && (
                                                                <p className="text-sm font-semibold text-slate-400 line-through">${tour.originalPrice.toLocaleString()}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <Link 
                                                        to={`/tour/${tour.id}`}
                                                        className="block text-center rounded-lg border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                </div>
                                
                            </>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
