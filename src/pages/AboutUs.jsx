import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-display selection:bg-primary/20 selection:text-primary">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Yacht in Ocean" 
                className="absolute inset-0 w-full h-full object-cover animate-pulse-slow"
            />
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
                <span className="text-white font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block drop-shadow-lg">
                    Discover Our Legacy
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6 drop-shadow-2xl">
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Unforgettable</span> Memories Since 2012
                </h1>
            </div>
          </section>

          {/* Intro Section - Overlapping Card */}
          <section className="relative z-30 -mt-20 px-6 max-w-5xl mx-auto mb-24">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 rotate-3">
                    <span className="material-symbols-outlined text-3xl">sailing</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Redefining Maritime Luxury</h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    Kasorn Tour was born from a passion for the pristine waters of the Andaman Sea and a desire to provide travelers with an unparalleled level of service. 
                    We don't just offer boat rides; we painstakingly curate bespoke maritime experiences that combine the thrill of discovery with absolute comfort and exclusivity.
                </p>
            </div>
          </section>

          {/* The Kasorn Difference (Features) */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Why Choose Us</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">The Kasorn Difference</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Feature 1 */}
                <div className="group">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=800&auto=format&fit=crop" alt="Pristine Destinations" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur text-slate-900 size-12 flex items-center justify-center rounded-xl font-bold text-xl shadow-lg">01</div>
                    </div>
                    <h4 className="text-2xl font-black mb-3">Uncharted Locations</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We take you beyond the typical tourist trails to hidden lagoons, secluded beaches, and private coves known only to our experienced local captains.</p>
                </div>

                {/* Feature 2 */}
                <div className="group md:mt-12">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop" alt="Premium Fleet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur text-slate-900 size-12 flex items-center justify-center rounded-xl font-bold text-xl shadow-lg">02</div>
                    </div>
                    <h4 className="text-2xl font-black mb-3">Immaculate Fleet</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our vessels represent the pinnacle of maritime engineering and luxury design, meticulously maintained to ensure your utmost safety and comfort.</p>
                </div>

                {/* Feature 3 */}
                <div className="group">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" alt="White Glove Service" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur text-slate-900 size-12 flex items-center justify-center rounded-xl font-bold text-xl shadow-lg">03</div>
                    </div>
                    <h4 className="text-2xl font-black mb-3">White-Glove Service</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">From the moment you contact us to your safe return, our dedicated concierge team and professional crew cater to your every conceivable need.</p>
                </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
                <div>
                    <div className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">12+</div>
                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Years of Excellence</div>
                </div>
                <div>
                    <div className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">25K</div>
                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Happy Guests</div>
                </div>
                <div>
                    <div className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">30+</div>
                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Luxury Vessels</div>
                </div>
                <div>
                    <div className="text-5xl md:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">4.9</div>
                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Average Rating</div>
                </div>
            </div>
          </section>

          {/* Letter from Founder */}
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-5/12 relative">
                    <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-900 rounded-[2rem] -z-10 transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Founder" className="w-full aspect-[4/5] object-cover rounded-[1.5rem] shadow-2xl" />
                    <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                        <span className="material-symbols-outlined text-4xl">format_quote</span>
                    </div>
                </div>
                <div className="w-full md:w-7/12">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">A Message From Our Founder</h2>
                    <blockquote className="text-2xl leading-relaxed text-slate-600 dark:text-slate-400 font-medium italic mb-8">
                        "When I started Kasorn Tour, I envisioned more than just a boat charter company. I wanted to create a gateway to the spectacular beauty of Thailand wrapped in a standard of luxury that our guests would never forget. Today, our mission remains the same: transforming journeys into lifelong memories."
                    </blockquote>
                    <div>
                        <div className="font-black text-xl text-slate-900 dark:text-white">Kasorn Sanguansuk</div>
                        <div className="text-primary font-bold">Founder & CEO</div>
                        <svg viewBox="0 0 250 80" className="h-16 mt-4 opacity-60 dark:opacity-80 text-slate-900 dark:text-white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 50 C 30 10 50 10 60 40 C 70 70 50 80 40 60 C 30 40 80 40 100 40 C 110 40 100 60 120 50 C 140 40 140 70 160 50 C 180 30 190 60 200 50 C 210 40 220 20 240 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-slate-50 dark:bg-slate-900/50 py-24 mb-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Ready to Set Sail?</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Experience the Andaman Sea like never before. Let our experts craft your perfect maritime getaway.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/tours" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                        Explore Destinations
                    </Link>
                    <button className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700">
                        Contact Concierge
                    </button>
                </div>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </div>
  );
}
