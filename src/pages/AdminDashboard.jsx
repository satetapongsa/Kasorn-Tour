import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getBookings, deleteBooking, getTourById } from '../services/api';
import { useNavigate } from 'react-router-dom';
import AdminCreateBookingModal from '../components/AdminCreateBookingModal';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tourCache, setTourCache] = useState({});

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await getBookings();
      const enriched = await Promise.all(data.map(async (b) => {
        let tourName = 'Unknown Tour';
        try {
          if (tourCache[b.tour_id]) {
            tourName = tourCache[b.tour_id].title;
          } else {
            const tour = await getTourById(b.tour_id);
            setTourCache(prev => ({ ...prev, [b.tour_id]: tour }));
            tourName = tour.title;
          }
        } catch (e) {}
        return { ...b, tourName, avatar: b.clientName?.substring(0, 2).toUpperCase() };
      }));
      setBookings(enriched);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((s, b) => s + (b.totalPrice || 0), 0);
  const pendingCount = bookings.filter(b => b.status?.toLowerCase() === 'upcoming' || b.status?.toLowerCase() === 'pending').length;

  const getStatusColor = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-slate-100 text-slate-700';
      case 'pending': return 'bg-amber-100 text-amber-800';
      case 'cancelled': return 'bg-rose-100 text-rose-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-[1400px] mx-auto tracking-tight relative">

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex items-center justify-center rounded-xl">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">autorenew</span>
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-[14px] text-slate-500 font-medium">Total Bookings</p>
              <h3 className="text-[28px] font-bold text-slate-900 leading-tight">{totalBookings.toLocaleString()}</h3>
              <div className="flex items-center gap-1.5 mt-3 text-emerald-600 font-medium">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span className="text-[13px]">Live data from database</span>
              </div>
            </div>
            <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
              <span className="material-symbols-outlined text-[26px]">shopping_cart</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-[14px] text-slate-500 font-medium">Revenue</p>
              <h3 className="text-[28px] font-bold text-slate-900 leading-tight">${totalRevenue.toLocaleString()}</h3>
              <div className="flex items-center gap-1.5 mt-3 text-emerald-600 font-medium">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span className="text-[13px]">All confirmed bookings</span>
              </div>
            </div>
            <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
              <span className="material-symbols-outlined text-[24px]">payments</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[14px] border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-[14px] text-slate-500 font-medium">Pending / Upcoming</p>
              <h3 className="text-[28px] font-bold text-slate-900 leading-tight">{pendingCount}</h3>
              <div className="flex items-center gap-1.5 mt-3 text-amber-500 font-medium">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="text-[13px]">Awaiting activity</span>
              </div>
            </div>
            <div className="size-12 bg-[#EEF2FF] rounded-xl text-[#1A44F2] flex items-center justify-center -mt-1">
              <span className="material-symbols-outlined text-[26px]">assignment</span>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white rounded-[14px] border border-slate-200 shadow-sm overflow-hidden mt-8">
          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[18px] font-bold text-slate-900">Recent Bookings</h2>
              <p className="text-[14px] text-slate-500 mt-0.5">Manage and monitor tour activity in real-time</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/admin/bookings')} className="h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-[14px] text-slate-700 font-semibold flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                View All
              </button>
              <button onClick={() => setShowCreateModal(true)} className="h-10 px-4 bg-[#1A44F2] hover:bg-blue-700 text-white rounded-lg text-[14px] font-semibold flex items-center gap-1.5 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                New Booking
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="bg-[#F9FAFB] text-slate-500 text-[12px] uppercase font-bold tracking-wider">
                  <th className="px-6 py-4">Booking ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Tour Destination</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.length > 0 ? bookings.slice(0, 8).map((booking) => (
                  <tr key={booking.id} onClick={() => setSelectedBooking(booking)} className="hover:bg-slate-50/60 transition-colors cursor-pointer group">
                    <td className="px-6 py-5 text-[14px] text-[#1A44F2] group-hover:underline font-medium">{booking.id}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="size-[34px] rounded-full bg-[#EEF2FF] flex items-center justify-center text-[13px] font-bold text-[#1A44F2]">
                          {booking.avatar}
                        </div>
                        <div className="text-[14px] text-slate-700 font-semibold">{booking.clientName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-[14px] text-slate-500 font-medium">{booking.tourName}</td>
                    <td className="px-6 py-5 text-[14px] text-slate-500 font-medium">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="px-6 py-5 text-[14px] text-slate-900 font-bold">${booking.totalPrice?.toLocaleString()}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button onClick={() => setSelectedBooking(booking)} className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors" title="View Details">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button onClick={() => setDeleteConfirmId(booking.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : !loading && (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-slate-400">
                      <span className="material-symbols-outlined text-5xl block mb-2 opacity-40">inbox</span>
                      No bookings yet. Customers who book tours will appear here.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {bookings.length > 8 && (
            <div className="px-6 py-4 border-t border-slate-100">
              <button onClick={() => navigate('/admin/bookings')} className="text-sm text-primary font-bold hover:underline">
                View all {bookings.length} bookings →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* View Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedBooking(null)}>
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Booking Details</h2>
                <p className="text-sm text-slate-500 font-medium">{selectedBooking.id}</p>
              </div>
              <button onClick={() => setSelectedBooking(null)} className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Info</h3>
                <div><p className="text-sm font-semibold text-slate-500">Name</p><p className="text-base font-bold text-slate-900">{selectedBooking.clientName}</p></div>
                <div><p className="text-sm font-semibold text-slate-500">Email</p><p className="text-base font-medium text-slate-900">{selectedBooking.clientEmail}</p></div>
                <div><p className="text-sm font-semibold text-slate-500">Phone</p><p className="text-base font-medium text-slate-900">{selectedBooking.phone}</p></div>
                <div><p className="text-sm font-semibold text-slate-500">Special Requests</p><p className="text-sm font-medium text-slate-800 mt-1">{selectedBooking.specialRequests || 'None'}</p></div>
              </div>
              <div className="space-y-4 md:border-l border-slate-100 md:pl-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tour Details</h3>
                <div><p className="text-sm font-semibold text-slate-500">Destination</p><p className="text-base font-bold text-slate-900">{selectedBooking.tourName}</p></div>
                <div><p className="text-sm font-semibold text-slate-500">Travel Date</p><p className="text-base font-medium text-slate-900">{new Date(selectedBooking.date).toLocaleDateString()}</p></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-sm font-semibold text-slate-500">Guests</p><p className="text-base font-bold text-slate-900">{selectedBooking.guests}</p></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Status</p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold mt-1 ${getStatusColor(selectedBooking.status)}`}>{selectedBooking.status}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-500">Total Price</p>
                  <p className="text-3xl font-black text-primary">${selectedBooking.totalPrice?.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
              <button onClick={() => { setDeleteConfirmId(selectedBooking.id); setSelectedBooking(null); }} className="px-5 py-2.5 rounded-lg border border-rose-200 text-rose-600 font-bold hover:bg-rose-50 transition-colors text-sm">
                Delete Booking
              </button>
              <button onClick={() => setSelectedBooking(null)} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm" onClick={() => setDeleteConfirmId(null)}>
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">delete_forever</span>
              </div>
              <h2 className="text-lg font-black text-slate-900 mb-1">Delete Booking?</h2>
              <p className="text-slate-500 text-sm mb-1">Booking ID: <span className="font-bold text-slate-700">{deleteConfirmId}</span></p>
              <p className="text-slate-500 text-sm">This action cannot be undone.</p>
            </div>
            <div className="px-6 pb-6 flex gap-3">
              <button onClick={() => setDeleteConfirmId(null)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm">
                Cancel
              </button>
              <button onClick={confirmDelete} className="flex-1 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors text-sm shadow-md shadow-rose-500/30">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showDeleteToast && (
        <div className="fixed top-24 right-6 z-50 bg-white border-l-4 border-rose-500 rounded-lg shadow-xl p-4 flex items-center gap-3 animate-slide-in-right">
          <span className="material-symbols-outlined text-rose-500 text-2xl">delete_sweep</span>
          <div>
            <h4 className="text-slate-900 font-bold text-sm">Delete Successful</h4>
            <p className="text-slate-500 text-xs">The booking has been removed.</p>
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

