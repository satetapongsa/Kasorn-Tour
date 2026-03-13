import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getBookings, deleteBooking, getTourById } from '../services/api';
import AdminCreateBookingModal from '../components/AdminCreateBookingModal';

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tourCache, setTourCache] = useState({});

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await getBookings();
      
      // Enrich bookings with tour data based on tour_id
      const enrichedBookings = await Promise.all(data.map(async (b) => {
          let tourName = 'Unknown Tour';
          try {
              if (tourCache[b.tour_id]) {
                  tourName = tourCache[b.tour_id].title;
              } else {
                  const tour = await getTourById(b.tour_id);
                  setTourCache(prev => ({...prev, [b.tour_id]: tour}));
                  tourName = tour.title;
              }
          } catch (e) { }
          
          return {
              ...b,
              tourName,
              avatar: b.clientName.substring(0,2).toUpperCase()
          };
      }));

      setBookings(enrichedBookings);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, e) => {
      e.stopPropagation();
      setDeleteConfirmId(id);
  };

  const confirmDelete = async () => {
      const id = deleteConfirmId;
      setDeleteConfirmId(null);
      setLoading(true);
      try {
          await deleteBooking(id);
          await fetchBookings();
          setShowDeleteToast(true);
          setTimeout(() => setShowDeleteToast(false), 2000);
      } catch(e) {
          console.error(e);
          setLoading(false);
      }
  };

  const getStatusColor = (status) => {
      switch(status.toLowerCase()) {
          case 'confirmed': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400';
          case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
          case 'completed': return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400';
          case 'pending': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
          case 'cancelled': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400';
          default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400';
      }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">All Bookings</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Manage and track all customer reservations</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Export
                </button>
                <button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Create Booking
                </button>
            </div>
        </div>

        {/* Filters Panel */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="flex-1 min-w-[250px] relative">
                <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-[20px]">search</span>
                <input type="text" placeholder="Search by ID, Name or Destination..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Status:</span>
              <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium outline-none focus:border-primary cursor-pointer">
                  <option>All Statuses</option>
                  <option>Confirmed</option>
                  <option>Upcoming</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Date:</span>
              <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium outline-none focus:border-primary cursor-pointer">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                  <option>Custom Range...</option>
              </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative min-h-[300px]">
            {loading && (
                <div className="absolute inset-0 z-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined animate-spin text-primary text-4xl">autorenew</span>
                </div>
            )}
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <th className="px-6 py-4">Booking ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Tour Destination</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {bookings.length > 0 ? bookings.map((booking) => (
                          <tr key={booking.id} onClick={() => setSelectedBooking(booking)} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer">
                              <td className="px-6 py-4 text-sm font-mono font-bold text-primary group-hover:underline">{booking.id}</td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                      <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-black text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">{booking.avatar}</div>
                                      <div className="text-sm font-bold text-slate-900 dark:text-white">{booking.clientName}</div>
                                  </div>
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{booking.tourName}</td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-[16px] text-slate-400">calendar_month</span>
                                  {new Date(booking.date).toLocaleDateString()}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">${booking.totalPrice?.toLocaleString()}</td>
                              <td className="px-6 py-4">
                                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${getStatusColor(booking.status)} border-transparent`}>
                                      {booking.status}
                                  </span>
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center justify-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <button onClick={() => setSelectedBooking(booking)} className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10 tooltip" title="View Details">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                    <button onClick={(e) => handleDelete(booking.id, e)} className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-md hover:bg-rose-500/10 tooltip" title="Delete">
                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                  </div>
                              </td>
                          </tr>
                        )) : !loading && (
                            <tr>
                                <td colSpan="7" className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                                    No bookings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination Controls */}
            {bookings.length > 0 && (
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Showing {bookings.length} bookings</p>
                    <div className="flex items-center gap-1">
                        <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 text-slate-600 transition-colors" disabled>
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>
                        <button className="min-w-[32px] h-8 flex items-center justify-center bg-primary text-white rounded-md text-sm font-bold shadow-md shadow-primary/20">1</button>
                        <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 disabled:opacity-50 transition-colors" disabled>
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedBooking(null)}>
              <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Booking Details</h2>
                          <p className="text-sm text-slate-500 font-medium">{selectedBooking.id}</p>
                      </div>
                      <button onClick={() => setSelectedBooking(null)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                          <span className="material-symbols-outlined">close</span>
                      </button>
                  </div>
                  <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Info</h3>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Name</p>
                                  <p className="text-base font-bold text-slate-900 dark:text-white">{selectedBooking.clientName}</p>
                              </div>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Email</p>
                                  <p className="text-base font-medium text-slate-900 dark:text-white">{selectedBooking.clientEmail}</p>
                              </div>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Phone</p>
                                  <p className="text-base font-medium text-slate-900 dark:text-white">{selectedBooking.phone}</p>
                              </div>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Special Requests</p>
                                  <p className="text-sm font-medium text-slate-800 dark:text-slate-300 mt-1">{selectedBooking.specialRequests || 'None'}</p>
                              </div>
                          </div>
                          
                          <div className="space-y-4 md:border-l border-slate-100 dark:border-slate-800 md:pl-6">
                              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tour Details</h3>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Destination</p>
                                  <p className="text-base font-bold text-slate-900 dark:text-white">{selectedBooking.tourName}</p>
                              </div>
                              <div>
                                  <p className="text-sm font-semibold text-slate-500">Travel Date</p>
                                  <p className="text-base font-medium text-slate-900 dark:text-white">{new Date(selectedBooking.date).toLocaleDateString()}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div>
                                      <p className="text-sm font-semibold text-slate-500">Guests</p>
                                      <p className="text-base font-bold text-slate-900 dark:text-white">{selectedBooking.guests}</p>
                                  </div>
                                  <div>
                                      <p className="text-sm font-semibold text-slate-500">Status</p>
                                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${getStatusColor(selectedBooking.status)} border-transparent mt-1`}>
                                          {selectedBooking.status}
                                      </span>
                                  </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                  <p className="text-sm font-semibold text-slate-500">Total Price</p>
                                  <p className="text-3xl font-black text-primary">${selectedBooking.totalPrice?.toLocaleString()}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                      <button onClick={(e) => { handleDelete(selectedBooking.id, e); setSelectedBooking(null); }} className="px-5 py-2.5 rounded-lg border border-rose-200 text-rose-600 font-bold hover:bg-rose-50 transition-colors text-sm">
                          Delete Booking
                      </button>
                      <button onClick={() => setSelectedBooking(null)} className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm">
                          Close
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* Toast Notification */}
      {showDeleteToast && (
          <div className="fixed top-24 right-6 z-50 bg-white dark:bg-slate-800 border-l-4 border-rose-500 rounded-lg shadow-xl p-4 flex items-center gap-3 animate-slide-in-right">
              <span className="material-symbols-outlined text-rose-500 text-2xl">delete_sweep</span>
              <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">Delete Successful</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">The booking has been removed.</p>
              </div>
          </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm" onClick={() => setDeleteConfirmId(null)}>
              <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden" onClick={e => e.stopPropagation()}>
                  <div className="p-6">
                      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                          <span className="material-symbols-outlined text-2xl">delete_forever</span>
                      </div>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white mb-1">Delete Booking?</h2>
                      <p className="text-slate-500 text-sm mb-1">Booking ID: <span className="font-bold text-slate-700 dark:text-slate-300">{deleteConfirmId}</span></p>
                      <p className="text-slate-500 text-sm">This action cannot be undone.</p>
                  </div>
                  <div className="px-6 pb-6 flex gap-3">
                      <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                      >
                          Cancel
                      </button>
                      <button
                          onClick={confirmDelete}
                          className="flex-1 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors text-sm shadow-md shadow-rose-500/30"
                      >
                          Yes, Delete
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* Create Booking Modal */}
      {showCreateModal && (
        <AdminCreateBookingModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => { fetchBookings(); }}
        />
      )}
    </AdminLayout>
  );
}
