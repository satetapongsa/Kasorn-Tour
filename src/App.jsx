import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import TourListings from './pages/TourListings';
import TourDetails from './pages/TourDetails';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminCustomers from './pages/AdminCustomers';
import AdminAnalytics from './pages/AdminAnalytics';
import LuxuryConcierge from './pages/LuxuryConcierge';
import AboutUs from './pages/AboutUs';

function AdminRoute({ element }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (isAuthenticated) {
    return element;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '887624') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-display">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm border border-slate-100">
        <div className="flex justify-center mb-6">
          <div className="size-12 bg-primary flex items-center justify-center rounded-xl text-white">
            <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">ผู้ดูแลระบบ</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">รหัสผ่าน</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรุณากรอกรหัสผ่าน"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
            เข้าสู่ระบบ
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-slate-500 hover:text-primary font-medium flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tours" element={<TourListings />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/luxury-concierge" element={<LuxuryConcierge />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<AdminRoute element={<AdminDashboard />} />} />
        <Route path="/admin/bookings" element={<AdminRoute element={<AdminBookings />} />} />
        <Route path="/admin/customers" element={<AdminRoute element={<AdminCustomers />} />} />
        <Route path="/admin/analytics" element={<AdminRoute element={<AdminAnalytics />} />} />
      </Routes>
    </Router>
  );
}

export default App;
