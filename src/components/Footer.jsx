import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ variant = 'default' }) {
  if (variant === 'landing') {
    return (
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl">travel_explore</span>
              <h2 className="text-slate-900 dark:text-white text-xl font-extrabold uppercase tracking-tight">
                Kasorn Tour
              </h2>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premier Thai luxury tour operator providing enterprise-grade travel solutions for
              international clientele since 2008.
            </p>
            <div className="flex gap-4">
              <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl">camera</span>
              </a>
              <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Our Values</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">The Team</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/tours">Destinations</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/tours">Special Offers</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/tours">Luxury Villas</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/tours">Private Jets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/">Contact Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">FAQ</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Terms of Service</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 Kasorn Tour &amp; Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-slate-300">verified_user</span>
            <span className="material-symbols-outlined text-slate-300">credit_card</span>
            <span className="material-symbols-outlined text-slate-300">lock</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-6 w-6 items-center justify-center bg-primary text-white rounded">
                <span className="material-symbols-outlined text-sm">travel_explore</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">Kasorn Tour</h2>
            </Link>
            <p className="max-w-xs text-sm text-slate-500 leading-relaxed">
              Curating world-class luxury experiences in Thailand since 1995. Personalized service, private access, and unforgettable memories.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/tours">Destinations</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/tours">Popular Tours</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Travel Blog</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/tours">Specials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/">Support Center</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">Terms of Service</Link></li>
              <li><a className="hover:text-primary transition-colors" href="tel:+6621234567">+66 2 123 4567</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2026 Kasorn Tour. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">share</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">call</span></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
