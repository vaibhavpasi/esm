'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { sampleMembers, notices, events, downloads, sampleGrievances } from '@/lib/data';
import { formatDate } from '@/lib/hooks';
import VeteranIdCard from '@/components/VeteranIdCard';

export default function MemberPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const member = sampleMembers[0];

  if (!loggedIn) {
    return (
      <>
        <Navbar />
        <main id="main-content">
          <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Member Portal</h1>
              <p className="text-white/70 text-lg">Access your membership details, submit grievances, and stay updated.</p>
            </div>
          </section>
          <div className="max-w-md mx-auto px-4 py-16">
            <div className="premium-card p-8">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-6 text-center">Member Login</h2>
              <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }} className="space-y-5">
                <div>
                  <label htmlFor="member-svc" className="form-label">Service Number</label>
                  <input type="text" id="member-svc" className="form-input" placeholder="e.g. JC-123456" required />
                </div>
                <div>
                  <label htmlFor="member-mobile" className="form-label">Registered Mobile Number</label>
                  <input type="tel" id="member-mobile" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-lg">
                  Sign In
                </button>
              </form>
              <p className="text-center text-sm text-navy-500 mt-4">
                Not a member? <Link href="/membership" className="text-saffron-600 font-semibold hover:underline">Apply for Membership</Link>
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingElements />
      </>
    );
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'grievances', label: 'Grievances', icon: '📝' },
    { id: 'notices', label: 'Notices', icon: '📋' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'downloads', label: 'Downloads', icon: '📄' },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gray-50">
        {/* Welcome Bar */}
        <div className="bg-navy-800 text-white py-6 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Welcome back,</p>
              <h1 className="font-heading text-xl font-bold">{member.fullName}</h1>
            </div>
            <button onClick={() => setLoggedIn(false)} className="px-4 py-2 rounded-xl text-sm font-semibold border border-white/30 text-white/80 hover:bg-white/10 transition-all">
              Sign Out
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id ? 'bg-navy-700 text-white shadow-md' : 'bg-white text-navy-600 hover:bg-navy-50 border border-gray-200'
                }`}
              >
                <span aria-hidden="true">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-b from-slate-100 to-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
                <p className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-4">
                  Official Veteran Membership Identity Card
                </p>
                <VeteranIdCard
                  fullName={member.fullName}
                  rank={member.rank}
                  serviceNumber={member.serviceNumber}
                  regiment={member.regiment}
                  bloodGroup="B +ve"
                  membershipId="ESM-NSK-2026-0001"
                  membershipType="Life Member"
                  validUntil="Life Time (P)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="premium-card p-6">
                  <h2 className="font-heading font-bold text-navy-800 mb-4">Membership Details</h2>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Name', member.fullName],
                    ['Rank', member.rank],
                    ['Service No.', member.serviceNumber],
                    ['Regiment', member.regiment],
                    ['Status', member.membershipStatus],
                    ['Member Since', formatDate(member.joinDate)],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <dt className="text-navy-500">{label}</dt>
                      <dd className="font-semibold text-navy-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="premium-card p-6">
                <h2 className="font-heading font-bold text-navy-800 mb-4">Contact Information</h2>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Mobile', member.mobileNumber],
                    ['Email', member.email],
                    ['Address', member.address],
                    ['City', member.city],
                    ['PIN Code', member.pincode],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <dt className="text-navy-500">{label}</dt>
                      <dd className="font-semibold text-navy-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="premium-card p-6 md:col-span-2">
                <h2 className="font-heading font-bold text-navy-800 mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200 transition-all">
                    📄 Download Membership Card
                  </button>
                  <Link href="/grievance" className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
                    📝 Submit Grievance
                  </Link>
                  <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-military-100 text-military-700 hover:bg-military-200 transition-all">
                    ✏️ Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

          {/* Grievances Tab */}
          {activeTab === 'grievances' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-heading font-bold text-navy-800">My Grievances</h2>
                <Link href="/grievance" className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
                  + New Grievance
                </Link>
              </div>
              {sampleGrievances.map((g) => (
                <div key={g.id} className="premium-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-navy-800">{g.referenceNumber}</span>
                    <span className={`badge ${g.status === 'Resolved' ? 'badge-military' : 'badge-saffron'}`}>{g.status}</span>
                  </div>
                  <p className="text-navy-600 text-sm mb-1">{g.issueType} — {g.serviceCategory}</p>
                  <p className="text-navy-500 text-xs">{formatDate(g.submittedDate)}</p>
                </div>
              ))}
            </div>
          )}

          {/* Notices Tab */}
          {activeTab === 'notices' && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-navy-800 mb-4">Association Notices</h2>
              {notices.map((n) => (
                <div key={n.id} className="premium-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge badge-navy">{n.category}</span>
                    <time className="text-xs text-navy-400">{formatDate(n.date)}</time>
                  </div>
                  <h3 className="font-semibold text-navy-800">{n.title}</h3>
                  <p className="text-navy-600 text-sm mt-1">{n.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-navy-800 mb-4">Events</h2>
              {events.map((e) => (
                <div key={e.id} className="premium-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`badge ${e.isUpcoming ? 'badge-saffron' : 'badge-navy'}`}>{e.isUpcoming ? 'Upcoming' : 'Past'}</span>
                    <time className="text-xs text-navy-400">{formatDate(e.date)} — {e.time}</time>
                  </div>
                  <h3 className="font-semibold text-navy-800">{e.title}</h3>
                  <p className="text-navy-600 text-sm mt-1">{e.location}</p>
                </div>
              ))}
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-navy-800 mb-4">Documents</h2>
              {downloads.map((d) => (
                <div key={d.id} className="premium-card p-4 flex items-center gap-4">
                  <span className="text-2xl" aria-hidden="true">📄</span>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-800 text-sm">{d.title}</p>
                    <p className="text-navy-500 text-xs">{d.fileType} — {d.fileSize}</p>
                  </div>
                  <a href={d.url} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200">Download</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
