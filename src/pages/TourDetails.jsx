import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function TourDetails() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header */}
        <Navbar />
        <main className="flex-1">
            {/* Hero Section */}
            <div className="w-full px-4 md:px-10 py-6 max-w-7xl mx-auto">
                <div className="relative h-[500px] w-full overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        data-alt="Luxury white yacht sailing in crystal clear turquoise water"
                        style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC33aBWkMd3tNtDZ44R5ZRFCHyNpxVDaHq3W5rFxJ277vbI87wjKj_OwKWDGwqk-1OLmTLZxCclo0DWD6KpIdrkWvnomfAlCPNVClp4Rnz-U6fBzXzmLoX3PijYpHjSShAlKfQ0pFloavCDhu7bwGBX8K-cl1CpnmN7RDTWaBiAmaEf1uT_eONAmrgGSeJhlyyyFYEtocBBfWfevk947eEN13BOjO-hBrX5aRviCu0kjBnN_yoztK_qKk61ri5jfs5B1iBErmLPOf4')" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                        <div className="flex gap-2 mb-4">
                            <span
                                className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Luxury
                                Experience</span>
                            <span
                                className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phi
                                Phi Islands</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl mb-4">Private Yacht
                            Escape to Phi Phi Islands</h1>
                        <div className="flex items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                <span className="text-sm font-medium">Full Day (8 Hours)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">group</span>
                                <span className="text-sm font-medium">Up to 12 Guests</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">star</span>
                                <span className="text-sm font-medium">4.9 (124 Reviews)</span>
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
                            <Link className="border-b-2 border-primary text-primary pb-4 px-1 text-sm font-bold whitespace-nowrap"
                                to="/tours">Overview</Link>
                            <Link className="border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold whitespace-nowrap"
                                to="/tours">Itinerary</Link>
                            <Link className="border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold whitespace-nowrap"
                                to="/tours">Inclusions</Link>
                            <Link className="border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 pb-4 px-1 text-sm font-bold whitespace-nowrap"
                                to="/tours">Reviews</Link>
                        </div>
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">The Experience</h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                    Set sail on an exclusive journey through the emerald waters of the Andaman Sea. Our
                                    private yacht escape offers unparalleled luxury, personalized service, and access to
                                    hidden lagoons away from the crowds.
                                </p>
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mt-4">
                                    Discover the breathtaking beauty of Maya Bay, snorkel in the vibrant coral reefs of
                                    Pileh Lagoon, and enjoy a gourmet lunch served on deck by your private chef as the
                                    sun glints off the limestone cliffs.
                                </p>
                            </div>
                        </section>
                        {/* Itinerary */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8">Detailed Itinerary</h2>
                            <div
                                className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
                                <div className="relative pl-10">
                                    <div
                                        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                    <h4 className="font-bold text-lg">08:30 AM - Departure</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">Board your luxury yacht at Royal
                                        Phuket Marina. Meet your captain and crew over a welcome drink.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div
                                        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                    </div>
                                    <h4 className="font-bold text-lg">10:00 AM - Maya Bay &amp; Pileh Lagoon</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">Explore the world-famous Maya Bay
                                        before the crowds arrive, followed by swimming in the emerald waters of Pileh
                                        Lagoon.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div
                                        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                    </div>
                                    <h4 className="font-bold text-lg">12:30 PM - Gourmet Lunch</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">Enjoy a freshly prepared Thai and
                                        International buffet on board, anchored in a secluded cove.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div
                                        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                    </div>
                                    <h4 className="font-bold text-lg">04:30 PM - Return Journey</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">Relax on the sun deck with
                                        cocktails as we cruise back to the marina during sunset.</p>
                                </div>
                            </div>
                        </section>
                        {/* Inclusions / Exclusions */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                    Inclusions
                                </h3>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-start gap-2">Private luxury yacht rental</li>
                                    <li className="flex items-start gap-2">Professional Captain and 2 Crew</li>
                                    <li className="flex items-start gap-2">Gourmet buffet lunch &amp; snacks</li>
                                    <li className="flex items-start gap-2">Snorkeling gear &amp; paddleboards</li>
                                    <li className="flex items-start gap-2">National Park entry fees</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                    Exclusions
                                </h3>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-start gap-2">Alcoholic beverages (available for purchase)</li>
                                    <li className="flex items-start gap-2">Gratuities for the crew</li>
                                    <li className="flex items-start gap-2">Personal travel insurance</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Booking Widget */}
                    <div className="w-full lg:w-[400px]">
                        <div
                            className="sticky top-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xl shadow-primary/5">
                            <div className="flex items-baseline justify-between mb-6">
                                <span className="text-sm font-medium text-slate-500 uppercase">Starting from</span>
                                <div className="text-right">
                                    <span className="text-3xl font-bold text-primary">$2,450</span>
                                    <p className="text-xs text-slate-500">per private group</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label
                                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Select
                                        Date</label>
                                    <div className="relative">
                                        <input
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
                                            type="date" />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Number
                                        of Guests</label>
                                    <select
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary">
                                        <option>1-4 Guests</option>
                                        <option>5-8 Guests (+$300)</option>
                                        <option>9-12 Guests (+$600)</option>
                                    </select>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-600 dark:text-slate-400">Base Price (4 guests)</span>
                                        <span className="font-medium">$2,450</span>
                                    </div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-600 dark:text-slate-400">Service Fee</span>
                                        <span className="font-medium">$120</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold mt-4">
                                        <span>Total Price</span>
                                        <span className="text-primary">$2,570</span>
                                    </div>
                                </div>
                                <Link to="/"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">payments</span>
                                    Confirm Booking
                                </Link>
                                <p className="text-center text-xs text-slate-500 mt-4">
                                    Free cancellation up to 48 hours before departure. No hidden fees.
                                </p>
                            </div>
                            {/* Contact Support */}
                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Need a custom
                                    itinerary?</p>
                                <button
                                    className="text-primary text-sm font-bold flex items-center justify-center gap-2 mx-auto hover:underline">
                                    <span className="material-symbols-outlined text-base">chat</span>
                                    Talk to an Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Location Section */}
            <section className="bg-slate-100 dark:bg-slate-900/50 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Location &amp; Departure</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Our tours depart from the luxury Royal
                                Phuket Marina, conveniently located just 30 minutes from Phuket International Airport.
                                Complimentary round-trip transfers from your hotel are included.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">pin_drop</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Royal Phuket Marina</h5>
                                        <p className="text-sm text-slate-500">68 Moo 2, Thepkasattri Rd, Koh Kaew, Phuket
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-1 w-full h-[300px] rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800">
                            <img alt="Map location of Phuket" className="w-full h-full object-cover"
                                data-location="Phuket, Thailand"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfMP4lndOd5fQgN-2zVwn8T5ccaKpIwnaNiPeE3O3oMuuyERvbYF1PJ38C84fyJoSZibSEw_Almx8skSftp3bf88B9QAguMpxabkDzLhtMOka4SExd4f7cE_VQ-oidtOX6qq0QPXdgfaUCMHWKWpRjd3gwKuC1HQu7tNGAtzh9yRKzdD1HvcgJKnk2V2muXM6YfzLG_nDNzuPdvmBGM2D8C5eKLWEiI_WsyIqAF0L7Iv8DSetpi-M9VXGViavVZRvla8V4mbTcRM" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* Footer */}
        <Footer />
    </div>

    </div>
  );
}
