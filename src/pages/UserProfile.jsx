import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getBookings } from '../services/api';

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('bookings');
    const [isEditing, setIsEditing] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [loadingBookings, setLoadingBookings] = useState(true);

    useEffect(() => {
        const fetchUserBookings = async () => {
            try {
                const allBookings = await getBookings();
                // Filter for user ID 1 (mock current user)
                const userBkgs = allBookings.filter(b => b.user_id === 1);
                setBookings(userBkgs);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoadingBookings(false);
            }
        };
        fetchUserBookings();
    }, []);

    const initialUser = {
        name: 'Sarah Jenkins',
        email: 'sarah.jenkins@example.com',
        phone: '+1 (555) 123-4567',
        memberSince: 'October 2023',
        status: 'VIP Member',
        nationality: 'American',
        dob: '1985-04-12',
        passport: '•••••4829 (USA)',
        emergencyContact: 'John Jenkins (+1 555-987-6543)',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGkJzoipuoEFpgtxjfPGCRtfPG_hAT-kJ2a1VgGmp25lqJ2rRw7MK03dLLcakhtqQJnGale6E1_4B8-pSWaErUues64yno1tKbz80RKUJJ9_pJt0BSVLoPwrPDYEuWQ6tA7OXKm6OTzpOgnOOI2u430ayVd8UDwbmPEM3s07chE8tgBl8AE21MWJOyhsQQNoFnhBSOAXJUv6NOCKWRSNnPxk1abv2HTLeJfCluAeOQGTW1YaE5juH2AWACcvsAzm4AKXn-ZzV-wVs'
    };

    const [user, setUser] = useState(initialUser);
    const [formData, setFormData] = useState(initialUser);

    const handleEdit = () => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = () => {
        setUser(formData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Bookings are fetched dynamically now

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                {/* Profile Header */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="size-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg shrink-0 relative z-10">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left relative z-10 w-full">
                        {isEditing ? (
                            <div className="space-y-4 animate-fade-in w-full text-left">
                                <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-6 w-full">
                                    <div className="w-full md:w-auto flex-1">
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full md:w-80 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-lg font-bold focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                        <button onClick={handleCancel} className="flex-1 md:flex-none px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                                        <button onClick={handleSave} className="flex-1 md:flex-none px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Save Changes</button>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</label>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Nationality</label>
                                        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Date of Birth</label>
                                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Passport Info</label>
                                        <input type="text" name="passport" value={formData.passport} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Emergency Contact</label>
                                        <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col md:flex-row gap-4 justify-between items-center md:items-start w-full">
                                    <div>
                                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                            <h1 className="text-3xl font-black text-slate-900 dark:text-white">{user.name}</h1>
                                            <span className="bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full">{user.status}</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">Member since {user.memberSince}</p>
                                    </div>
                                    
                                    <button 
                                        onClick={handleEdit}
                                        title="Click to edit your profile settings"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors cursor-pointer shrink-0"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                        Edit Profile
                                    </button>
                                </div>
                                
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Email Address">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">mail</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Phone Number">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">call</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Nationality">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">public</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.nationality}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Date of Birth">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">cake</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.dob}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Passport Information">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">badge</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.passport}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group" title="Emergency Contact">
                                        <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform cursor-pointer">medical_services</span>
                                        <span className="truncate cursor-pointer hover:text-primary transition-colors">{user.emergencyContact}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Nav */}
                    <div className="w-full lg:w-64 shrink-0">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-28">
                            <nav className="flex flex-col">
                                <button 
                                    onClick={() => setActiveTab('bookings')}
                                    className={`flex items-center gap-3 px-6 py-4 text-left font-bold transition-colors ${activeTab === 'bookings' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50'}`}
                                >
                                    <span className="material-symbols-outlined">luggage</span>
                                    My Bookings
                                </button>
                                <button 
                                    onClick={() => setActiveTab('saved')}
                                    className={`flex items-center gap-3 px-6 py-4 text-left font-bold transition-colors border-t border-slate-100 dark:border-slate-800 ${activeTab === 'saved' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50'}`}
                                >
                                    <span className="material-symbols-outlined">favorite</span>
                                    Saved Tours
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {activeTab === 'bookings' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Booking History</h2>
                                
                                {loadingBookings ? (
                                    <div className="flex justify-center py-10">
                                        <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
                                    </div>
                                ) : bookings.length === 0 ? (
                                    <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                                        <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">event_busy</span>
                                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">No bookings found</h3>
                                    </div>
                                ) : (
                                    bookings.map((booking) => (
                                        <div key={booking.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row transition-shadow hover:shadow-md">
                                            <div className="sm:w-64 h-48 sm:h-auto shrink-0 relative">
                                                <img src={booking.tourImage || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1470&auto=format&fit=crop'} alt={booking.tourName} className="w-full h-full object-cover" />
                                                <div className="absolute top-3 left-3">
                                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white shadow-sm ${booking.status === 'Upcoming' ? 'bg-blue-600' : 'bg-green-600'}`}>
                                                        {booking.status}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-6 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2">{booking.tourName || booking.tour /* backwards compat with older objects */}</h3>
                                                        <span className="text-sm text-slate-500 font-medium shrink-0 ml-4">ID: {booking.id}</span>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                            <span className="material-symbols-outlined text-[18px] text-slate-400">calendar_month</span>
                                                            <span className="font-semibold">{booking.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                            <span className="material-symbols-outlined text-[18px] text-slate-400">group</span>
                                                            <span className="font-semibold">{booking.guests} Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                                                    <div>
                                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Amount</p>
                                                        <p className="text-xl font-black text-primary">${booking.totalPrice?.toLocaleString() || booking.price}</p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <Link to={`/tour/${booking.tour_id || 1}`} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                                                            View Tour
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {activeTab === 'saved' && (
                            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="size-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-4xl text-slate-300">favorite</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No saved tours yet</h3>
                                <p className="text-slate-500 mb-6 max-w-sm mx-auto">Explore our incredible destinations and tap the heart icon to save them for later.</p>
                                <Link to="/tours" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                                    Explore Destinations
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
