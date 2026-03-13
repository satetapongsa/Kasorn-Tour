import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { getTourById, createBooking } from '../services/api';

export default function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    // Booking Form State
    const [formData, setFormData] = useState({
        clientName: 'Sarah Jenkins',
        clientEmail: 'sarah.jenkins@example.com',
        phone: '+1 (555) 123-4567',
        date: '',
        guests: 2,
        specialRequests: ''
    });

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const data = await getTourById(id);
                setTour(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTour();
        window.scrollTo(0, 0);
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGuestsChange = (increment) => {
        setFormData(prev => ({ 
            ...prev, 
            guests: Math.max(1, prev.guests + increment) 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const bookingPayload = {
                tour_id: tour.id,
                tourName: tour.title,
                tourImage: tour.image,
                totalPrice: tour.price * formData.guests,
                ...formData
            };
            
            await createBooking(bookingPayload);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                navigate('/profile');
            }, 2000);
        } catch (error) {
            console.error("Booking failed", error);
            alert("Something went wrong with the booking.");
            setSubmitting(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex justify-center items-center">
                <span className="material-symbols-outlined animate-spin text-5xl text-primary">progress_activity</span>
            </div>
            <Footer />
        </div>
    );

    if (!tour) return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                <h1 className="text-3xl font-bold mb-4">Tour not found</h1>
                <button onClick={() => navigate('/tours')} className="bg-primary text-white px-6 py-2 rounded">Go Back</button>
            </div>
            <Footer />
        </div>
    );

    const subtotal = tour.price * formData.guests;
    const taxes = subtotal * 0.07;
    const total = subtotal + taxes;

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            <Navbar />
            
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Tour
                    </button>
                    <h1 className="text-3xl font-black mt-4">Complete Your Booking</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">person</span>
                                    Traveler Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                        <input required type="text" name="clientName" value={formData.clientName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                        <input required type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">event_available</span>
                                    Tour Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Travel Date</label>
                                        <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Number of Guests</label>
                                        <div className="flex items-center w-full bg-slate-50 border border-slate-200 rounded-lg p-1">
                                            <button type="button" onClick={() => handleGuestsChange(-1)} className="p-2 text-slate-500 hover:text-primary"><span className="material-symbols-outlined">remove</span></button>
                                            <div className="flex-1 text-center font-bold">{formData.guests}</div>
                                            <button type="button" onClick={() => handleGuestsChange(1)} className="p-2 text-slate-500 hover:text-primary"><span className="material-symbols-outlined">add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">assignment</span>
                                    Special Requests
                                </h3>
                                <div>
                                    <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Dietary requirements, accessibility needs, special occasions..."></textarea>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button type="submit" disabled={submitting} className={`w-full py-4 rounded-xl text-lg flex items-center justify-center gap-2 font-black uppercase tracking-widest text-white transition-all shadow-lg ${submitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 hover:shadow-primary/30 shadow-primary/20'}`}>
                                    {submitting ? 'Processing...' : 'Confirm Booking'}
                                    {!submitting && <span className="material-symbols-outlined">lock</span>}
                                </button>
                                <p className="text-center text-xs font-semibold text-slate-400 mt-4">By booking, you agree to our Terms of Service and Privacy Policy.</p>
                            </div>
                        </form>
                    </div>

                    <div className="w-full lg:w-96 shrink-0">
                        <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="h-48 relative">
                                <img src={tour.image} className="w-full h-full object-cover" alt="Tour" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-bold leading-tight">{tour.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-6">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    {tour.location}
                                </div>
                                
                                <div className="space-y-4 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500 font-medium">Price per person</span>
                                        <span className="font-bold">${tour.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500 font-medium">Guests</span>
                                        <span className="font-bold">x {formData.guests}</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between">
                                        <span className="text-slate-500 font-medium">Subtotal</span>
                                        <span className="font-bold">${subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500 font-medium">Taxes & Fees (7%)</span>
                                        <span className="font-bold">${taxes.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                                    </div>
                                </div>
                                
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                    <span className="font-black text-slate-900 text-lg">Total Due</span>
                                    <span className="font-black text-primary text-3xl">${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />

            {/* Success Popup */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center transform animate-scale-up border border-slate-200 dark:border-slate-800">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-emerald-200">
                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Booking Successful!</h2>
                        <p className="text-slate-500 font-medium">Redirecting to your profile...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
