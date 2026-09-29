'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would authenticate against a secure backend
    if (email && password) {
      window.location.href = '/admin/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-saffron-500 flex items-center justify-center font-bold text-white text-xl mx-auto mb-4">
            ESM
          </div>
          <h1 className="font-heading text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-white/60 text-sm mt-1">ESM Welfare Association of Nashik</p>
        </div>

        <div className="premium-card p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="admin-email" className="form-label">Email Address</label>
              <input
                type="email"
                id="admin-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="admin@esmwelfarenashik.org"
                required
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="form-label">Password</label>
              <input
                type="password"
                id="admin-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-navy-500 hover:text-saffron-500 transition-colors">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
