import React, { useState, useEffect } from 'react';
import { getTours } from '../services/api';
import { createBooking } from '../services/api';

export default function AdminCreateBookingModal({ onClose, onSuccess }) {
    const [step, setStep] = useState(1); // 1 = Choose Tour, 2 = Fill Details
    const [tours, setTours] = useState([]);
    const [loadingTours, setLoadingTours] = useState(true);
    const [selectedTour, setSelectedTour] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [formData, setFormData] = useState({
        clientName: '',
        clientEmail: '',
        phone: '',
        date: '',
        guests: 1,
        specialRequests: ''
    });

    useEffect(() => {
        const fetchTours = async () => {
            setLoadingTours(true);
            try {
                const result = await getTours({ page: 1, limit: 50 });
                setTours(result.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoadingTours(false);
            }
        };
        fetchTours();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGuestsChange = (increment) => {
        setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests + increment) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const totalPrice = selectedTour.price * formData.guests;
            const payload = {
                tour_id: selectedTour.id,
                totalPrice,
                ...formData
            };
            await createBooking(payload);
            onSuccess?.();
            onClose();
        } catch (err) {
            console.error(err);
            alert('Failed to create booking. Please try again.');
            setSubmitting(false);
        }
    };

    const filteredTours = tours.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const subtotal = selectedTour ? selectedTour.price * formData.guests : 0;
    const taxes = subtotal * 0.07;
    const total = subtotal + taxes;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
                    <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">
                            {step === 1 ? 'Select a Tour' : `Book: ${selectedTour?.title}`}
                        </h2>
                        <p className="text-sm text-slate-500 mt-0.5">
                            {step === 1 ? 'Choose a tour to book for the customer' : 'Fill in customer information'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {step === 2 && (
                            <button onClick={() => setStep(1)} className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                                Change Tour
                            </button>
                        )}
                        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>

                {/* Steps indicator */}
                <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 shrink-0">
                    <div className={`flex items-center gap-2 text-sm font-bold ${step >= 1 ? 'text-primary' : 'text-slate-400'}`}>
                        <span className={`size-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>1</span>
                        Select Tour
                    </div>
                    <span className="text-slate-300 font-bold">→</span>
                    <div className={`flex items-center gap-2 text-sm font-bold ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
                        <span className={`size-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>2</span>
                        Customer Details
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Step 1: Tour Selection */}
                    {step === 1 && (
                        <div className="p-6">
                            <div className="relative mb-4">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Search tours by name or location..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                                />
                            </div>
                            {loadingTours ? (
                                <div className="flex items-center justify-center py-12">
                                    <span className="material-symbols-outlined animate-spin text-primary text-4xl">autorenew</span>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {filteredTours.map(tour => (
                                        <button
                                            key={tour.id}
                                            onClick={() => { setSelectedTour(tour); setStep(2); }}
                                            className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all text-left group"
                                        >
                                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                                                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-sm text-slate-900 dark:text-white truncate">{tour.title}</p>
                                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                                                    {tour.location}
                                                </p>
                                                <p className="text-sm font-black text-primary mt-1">${tour.price?.toLocaleString()} <span className="text-xs font-medium text-slate-400">/ person</span></p>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors shrink-0">chevron_right</span>
                                        </button>
                                    ))}
                                    {filteredTours.length === 0 && (
                                        <div className="col-span-2 py-10 text-center text-slate-400 text-sm">No tours found matching your search.</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 2: Customer Form */}
                    {step === 2 && (
                        <form id="admin-booking-form" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
                                {/* Left: Form */}
                                <div className="lg:col-span-3 p-6 space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Customer Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                                                <input required type="text" name="clientName" value={formData.clientName} onChange={handleChange}
                                                    placeholder="e.g. John Smith"
                                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                                                <input required type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange}
                                                    placeholder="customer@email.com"
                                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number *</label>
                                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                                    placeholder="+66 xx xxx xxxx"
                                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tour Details</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Travel Date *</label>
                                                <input required type="date" name="date" value={formData.date} onChange={handleChange}
                                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Number of Guests</label>
                                                <div className="flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                                                    <button type="button" onClick={() => handleGuestsChange(-1)} className="p-3 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">remove</span>
                                                    </button>
                                                    <div className="flex-1 text-center font-black text-slate-900 dark:text-white">{formData.guests}</div>
                                                    <button type="button" onClick={() => handleGuestsChange(1)} className="p-3 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Special Requests / Notes</label>
                                        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange}
                                            rows="3" placeholder="Dietary needs, accessibility requirements, hotel pickup, etc."
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none" />
                                    </div>
                                </div>

                                {/* Right: Summary */}
                                <div className="lg:col-span-2 p-6 bg-slate-50 dark:bg-slate-800/50">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Booking Summary</h3>
                                    {selectedTour && (
                                        <div className="space-y-4">
                                            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                                <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-28 object-cover" />
                                                <div className="p-3 bg-white dark:bg-slate-800">
                                                    <p className="font-bold text-sm text-slate-900 dark:text-white">{selectedTour.title}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                                                        {selectedTour.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Price per person</span>
                                                    <span className="font-bold">${selectedTour.price?.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Guests</span>
                                                    <span className="font-bold">× {formData.guests}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Subtotal</span>
                                                    <span className="font-bold">${subtotal.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Taxes & Fees (7%)</span>
                                                    <span className="font-bold">${taxes.toFixed(2)}</span>
                                                </div>
                                                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                                    <span className="font-black text-slate-900 dark:text-white">Total</span>
                                                    <span className="font-black text-primary text-xl">${total.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer */}
                {step === 2 && (
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-end gap-3 shrink-0">
                        <button onClick={onClose} type="button" className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
                            Cancel
                        </button>
                        <button
                            form="admin-booking-form"
                            type="submit"
                            disabled={submitting}
                            className={`px-6 py-2.5 rounded-xl font-black text-white text-sm flex items-center gap-2 transition-all ${submitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 shadow-md shadow-primary/30'}`}
                        >
                            {submitting ? (
                                <>
                                    <span className="material-symbols-outlined animate-spin text-[18px]">autorenew</span>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                    Create Booking
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
