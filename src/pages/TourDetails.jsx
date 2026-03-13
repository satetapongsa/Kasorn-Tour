import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getTourById } from '../services/api';

export default function TourDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const data = await getTourById(id);
                setTour(data);
            } catch (error) {
                console.error("Failed to fetch tour", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <Navbar />
                <div className="flex-1 flex justify-center items-center">
                    <span className="material-symbols-outlined animate-spin text-5xl text-primary">progress_activity</span>
                </div>
                <Footer />
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4">Tour Not Found</h2>
                    <Link to="/tours" className="text-primary hover:underline">Return to Destinations</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="w-full px-4 md:px-10 py-6 max-w-7xl mx-auto">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-4">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back
                    </button>
                    <div className="relative h-[500px] w-full overflow-hidden rounded-xl group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('${tour.image}')` }}>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <div className="flex gap-2 mb-4">
                                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {tour.category}
                                </span>
                                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {tour.location}
                                </span>
                            </div>
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-3xl mb-4">
                                {tour.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    <span className="text-sm font-medium">{tour.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">star</span>
                                    <span className="text-sm font-medium">{tour.rating} ({tour.reviews} Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column: Details */}
                        <div className="flex-1 space-y-12">
                            {/* Navigation Tabs */}
                            <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 overflow-x-auto">
                                <span className="border-b-2 border-primary text-primary pb-4 px-1 text-sm font-bold whitespace-nowrap cursor-pointer">Overview</span>
                                <span className="border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold whitespace-nowrap cursor-pointer">Itinerary</span>
                                <span className="border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold whitespace-nowrap cursor-pointer">Inclusions</span>
                            </div>

                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">The Experience</h2>
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                        {tour.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    {tour.highlights && tour.highlights.map((hlt, idx) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">verified</span>
                                            <span className="text-sm font-bold">{hlt}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Itinerary */}
                            {tour.itinerary && tour.itinerary.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">map</span>
                                        Detailed Itinerary
                                    </h2>
                                    <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
                                        {tour.itinerary.map((item, idx) => (
                                            <div key={idx} className="relative pl-10">
                                                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}>
                                                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-white' : 'bg-slate-400'}`}></div>
                                                </div>
                                                <h4 className="font-bold text-lg">{item.time} - {item.title}</h4>
                                                <p className="text-slate-600 dark:text-slate-400 mt-2">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Right Column: Booking Widget */}
                        <div className="w-full lg:w-[400px]">
                            <div className="sticky top-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl shadow-primary/5">
                                <div className="flex items-baseline justify-between mb-6">
                                    <span className="text-sm font-medium text-slate-500 uppercase">Per Person</span>
                                    <div className="text-right">
                                        <span className="text-4xl font-black text-primary">${tour.price}</span>
                                        {tour.originalPrice && (
                                            <p className="text-sm text-slate-400 line-through">${tour.originalPrice}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Link to={`/book/${tour.id}`}
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/20 transform active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-widest">
                                        Book Now
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                    <p className="text-center text-xs font-medium text-slate-500 mt-4">
                                        Secure your spot today. Free cancellation up to 48 hours before.
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Have questions?</p>
                                    <button className="text-primary text-sm font-bold flex items-center justify-center gap-2 mx-auto hover:underline">
                                        <span className="material-symbols-outlined text-base">chat</span>
                                        Talk to an Expert
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-t border-slate-100 dark:border-slate-800 mt-8">
                    <div className="max-w-7xl mx-auto px-4 md:px-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4">Location & Departure</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    This tour takes place in beautiful {tour.location}. We provide complimentary round-trip transfers from major hotels in the area. 
                                    Once you complete your booking, our concierge will coordinate your exact pickup time.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined text-2xl">pin_drop</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg">{tour.location} Hub</h5>
                                            <p className="text-sm text-slate-500">Central meeting point & coordinated pickups</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full h-[300px] rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800">
                                <img alt="Map location" className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfMP4lndOd5fQgN-2zVwn8T5ccaKpIwnaNiPeE3O3oMuuyERvbYF1PJ38C84fyJoSZibSEw_Almx8skSftp3bf88B9QAguMpxabkDzLhtMOka4SExd4f7cE_VQ-oidtOX6qq0QPXdgfaUCMHWKWpRjd3gwKuC1HQu7tNGAtzh9yRKzdD1HvcgJKnk2V2muXM6YfzLG_nDNzuPdvmBGM2D8C5eKLWEiI_WsyIqAF0L7Iv8DSetpi-M9VXGViavVZRvla8V4mbTcRM" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
