import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
            {/* Navigation */}
            <Navbar variant="landing" />
            {/* Hero Section */}
            <main className="flex-1">
                <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuChAvahXoU_-DwjU0RfBHF1fepPewzVIanEw_zG1BIUXBGRPerwD-1HJefQRelRNUjnUG6qACY9dRafdXqA5SBLc_U9fnSeOhRpVqU7bh5Ou4F5b-AxlzlwJ26ucfZy2sPFNY-VBzTpf9qHNT_QSYYFvi_VBK9twO227Jlj2DwAmgyJdAXUk7DS8h8vEoMcw943NPRa_hBBCRr2P0vb4540XpkU_rm1dngzU_N8OuNIUstWz_da-srrmfVD1I1QaLP1WpuqwampGAg')" }}>
                    </div>
                    <div className="relative z-10 w-full max-w-5xl px-6 text-center flex flex-col items-center gap-10 mt-16">
                        <div className="flex flex-col gap-4">
                            <h1
                                className="text-white text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black leading-tight tracking-tight drop-shadow-2xl">
                                Experience the Essence of <br /> Thai Luxury
                            </h1>
                            <p className="text-white text-lg md:text-xl font-bold max-w-2xl mx-auto drop-shadow-md pb-6 leading-relaxed">
                                Bespoke journeys and white-glove service across the Land of Smiles.
                            </p>
                        </div>
                        {/* Search Bar */}
                        <div
                            className="w-full max-w-4xl bg-white p-2 rounded-lg flex flex-col md:flex-row items-center shadow-2xl">
                            <div className="flex-1 flex items-center px-4 w-full md:border-r border-slate-100">
                                <span className="material-symbols-outlined text-slate-400 mr-3">location_on</span>
                                <input
                                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 text-sm font-semibold py-4 outline-none"
                                    placeholder="Where to?" type="text" />
                            </div>
                            <div className="flex-1 flex items-center px-4 w-full md:border-r border-slate-100">
                                <span className="material-symbols-outlined text-slate-400 mr-3">calendar_today</span>
                                <input
                                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 text-sm font-semibold py-4 outline-none"
                                    placeholder="Dates" type="text" />
                            </div>
                            <div className="flex-1 flex items-center px-4 w-full">
                                <span className="material-symbols-outlined text-slate-400 mr-3">person</span>
                                <input
                                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 text-sm font-semibold py-4 outline-none"
                                    placeholder="Guests" type="text" />
                            </div>
                            <button
                                className="w-full md:w-auto bg-[#1a44f2] text-white font-bold px-10 py-4 mx-1 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px] font-bold">search</span>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* About Kasorn */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-6">
                            <div
                                className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded">
                                Establishment of Excellence</div>
                            <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight">
                                Enterprise-Grade Luxury Travel in Thailand
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                We specialize in ultra-luxury, enterprise-grade travel experiences across the kingdom.
                                Our white-glove service ensures every detail of your journey is handled with royal
                                precision, from private jet charters to exclusive access to Thailand's most sacred
                                sites.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                <div className="space-y-3">
                                    <div
                                        className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">workspace_premium</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Elite Concierge</h3>
                                    <p className="text-sm text-slate-500">24/7 dedicated experts at your service.</p>
                                </div>
                                <div className="space-y-3">
                                    <div
                                        className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">vpn_key</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Private Access</h3>
                                    <p className="text-sm text-slate-500">Exclusive entry to secluded landmarks.</p>
                                </div>
                                <div className="space-y-3">
                                    <div
                                        className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">hotel</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Curated Stays</h3>
                                    <p className="text-sm text-slate-500">Hand-picked five-star villas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img className="w-full h-full object-cover"
                                    data-alt="Luxury private villa pool overlooking the Andaman sea"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC68QxGmjAA53Zg6pgtFJ1GXMPOtO_ynJmp0ee7dYQnYNqFVSKeLQxsvOuMg2nwez5k3KVA3GROuvbtV9Hq3X5LaNu0W9h-fDkhjzbVoQ3hIEKkgNLsNjaFsRrrngONUEJP4NOVVDRdDP550dTO_paOJk7X5Zt5URo6NbXVqBG3gRYmPPrcT37T7QPUcdR-cEhVv9hZgZF--vu0CLWeStapfavslo9Or7BTcf-lz3-AJHK2jpJvh5ep7XvfWgbTY2sOiqmhaWS-XM" />
                            </div>
                            <div
                                className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-black text-primary">15+</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Years of
                                        <br />Royal Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Featured Experiences */}
                <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <div className="space-y-2">
                                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black">Featured
                                    Experiences</h2>
                                <p className="text-slate-500 dark:text-slate-400">Hand-selected itineraries for the
                                    discerning traveler.</p>
                            </div>
                            <Link className="text-primary font-bold flex items-center gap-2 hover:underline" to="/tours">
                                View all <span className="material-symbols-outlined">arrow_right_alt</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        data-alt="Traditional longtail boat in crystal clear turquoise water"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3Z6E_iiXoOYpuDIengprBI2lVwmfhirOVFvZVXyPk4_cCaswWjth6RK1hRuiU5UiubQeFedST0Sh21L0BtTwAzddresE1Fude7ppww_ctp_JGYtev0sBvo_haOENC1dXtmn4B1LqjOOxlHXA8aE1l1g2b_KTwpOONdmFEMIVebjbnzr2CCSVq8KS_3WPn19FsyvxMdnLZ8jtzSNEPvfzDxPaSQVc276t4X50V__Qq2_ZjIF39zUYnJECYPBrVdQvv-VmJZqR5hU" />
                                    <div
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-black text-slate-900">
                                        7 DAYS</div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <Link to="/tour/1"
                                            className="block text-center w-full bg-white text-primary font-bold py-3 rounded-lg shadow-xl hover:bg-slate-100">Explore
                                            Package</Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Private Island Escape
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Secluded yacht voyages through the
                                    Phi Phi archipelago.</p>
                                <div className="flex items-center gap-1 mt-3 text-primary">
                                    <span className="text-lg font-black">$4,200</span>
                                    <span className="text-xs text-slate-400 font-medium">/ person</span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        data-alt="Lush green tea plantation in Northern Thailand mountains"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnQwI-PLV0YLE0mLizijp6GxJ3IIum36MxeCEoW2FvwtMovYcQDrMOp3fB3XnKtoprNkjPpN4iezZCFFmytJFSFgmP-TrLNtsIY_xE9gL1iAho_LmhmLYMARhnptfdWQaTBh5C2T7lKMinGDEvpQHx85Rh0j0UVyFnGbGjODW1Htno9ueyorh_3wEYAZMvsZt-lftj-cifbOqJmvqC42ag099kasEnBOBRTRxC_56xCQ0SYegw-t-7usPrF_mEg6xMZ9e-qaX2eYo" />
                                    <div
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-black text-slate-900">
                                        5 DAYS</div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <Link to="/tour/1"
                                            className="block text-center w-full bg-white text-primary font-bold py-3 rounded-lg shadow-xl hover:bg-slate-100">Explore
                                            Package</Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Northern Royalty
                                    Retreat</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Experience the mist-covered
                                    mountains of Chiang Rai in luxury.</p>
                                <div className="flex items-center gap-1 mt-3 text-primary">
                                    <span className="text-lg font-black">$3,850</span>
                                    <span className="text-xs text-slate-400 font-medium">/ person</span>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        data-alt="Ancient Buddhist ruins in Ayutthaya at dawn"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArKCJCtxqTp_rqew_GU7RQHQZtGjkt-hFpcPYCwY0EKflPcl8guMXFBewUppGQ9PQ13mJo4KsPbCVSHd3fb5dMZwB2qAURQWUUx1oBEM4VK5loRFL6Y-KX-VZitSx2WB-A-Xunl2ixgd0lY4Og45o63jjTXB9b4LQWiaIAHES-kZcl21D4TEenU3ccApCgRSN9muEbFgpxoriwIXvjGBOfG42iyDiI3tua5sXANOGGxbrrsRLgiq_Our6JJzdbewag4AYFSbsoD1Y" />
                                    <div
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-black text-slate-900">
                                        4 DAYS</div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <Link to="/tour/1"
                                            className="block text-center w-full bg-white text-primary font-bold py-3 rounded-lg shadow-xl hover:bg-slate-100">Explore
                                            Package</Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ancient Capital Luxury
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">A historical journey through
                                    Ayutthaya with private curators.</p>
                                <div className="flex items-center gap-1 mt-3 text-primary">
                                    <span className="text-lg font-black">$2,900</span>
                                    <span className="text-xs text-slate-400 font-medium">/ person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div
                        className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-24 flex flex-col items-center text-center gap-8">
                        <div className="absolute top-0 right-0 p-20 opacity-10">
                            <span className="material-symbols-outlined text-[300px]">auto_awesome</span>
                        </div>
                        <h2 className="text-white text-4xl md:text-6xl font-black max-w-3xl leading-tight relative z-10">
                            Ready for a Journey Beyond Ordinary?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-xl relative z-10">
                            Speak with our master concierges to craft your perfect Thai escape today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                            <Link to="/tours"
                                className="block text-center bg-white text-primary font-black px-12 py-5 rounded-xl text-lg hover:shadow-2xl transition-all">Start
                                Your Plan</Link>
                            <Link to="/"
                                className="block text-center flex items-center justify-center border-2 border-white/30 text-white font-black px-12 py-5 rounded-xl text-lg hover:bg-white/10 transition-all">Contact
                                Concierge</Link>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer variant="landing" />
        </div>
    </div>

    </div>
  );
}
