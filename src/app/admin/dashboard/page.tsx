'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notices, events, sampleMembers, sampleGrievances, downloads, galleryImages, officeBearers } from '@/lib/data';
import { formatDate } from '@/lib/hooks';

type AdminTab = 'dashboard' | 'members' | 'grievances' | 'notices' | 'events' | 'downloads' | 'gallery' | 'bearers' | 'contacts';

const sidebarItems: { id: AdminTab; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'members', label: 'Members', icon: '👥' },
  { id: 'grievances', label: 'Grievances', icon: '📝' },
  { id: 'notices', label: 'Notices', icon: '📋' },
  { id: 'events', label: 'Events', icon: '📅' },
  { id: 'downloads', label: 'Downloads', icon: '📄' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
  { id: 'bearers', label: 'Office Bearers', icon: '🎖️' },
  { id: 'contacts', label: 'Contact Enquiries', icon: '✉️' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`admin-sidebar fixed lg:static z-40 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center font-bold text-white text-sm">ESM</div>
            <div>
              <p className="font-heading font-bold text-white text-sm">Admin Panel</p>
              <p className="text-white/50 text-xs">ESM Welfare Nashik</p>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-1" aria-label="Admin navigation">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-white/10">
          <Link href="/" className="block text-center text-white/50 hover:text-saffron-400 text-sm transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-navy-600"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
            <h1 className="font-heading text-xl font-bold text-navy-800 capitalize">{activeTab}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-navy-500">Admin</span>
            <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center text-navy-700 font-bold text-sm">A</div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'members' && <MembersView />}
          {activeTab === 'grievances' && <GrievancesView />}
          {activeTab === 'notices' && <NoticesView />}
          {activeTab === 'events' && <EventsView />}
          {activeTab === 'downloads' && <DownloadsView />}
          {activeTab === 'gallery' && <GalleryView />}
          {activeTab === 'bearers' && <BearersView />}
          {activeTab === 'contacts' && <ContactsView />}
        </div>
      </div>
    </div>
  );
}

// ── Dashboard View ──
function DashboardView() {
  const statCards = [
    { label: 'Total Members', value: '523', icon: '👥', color: 'bg-navy-50 text-navy-700' },
    { label: 'Open Grievances', value: '12', icon: '📝', color: 'bg-saffron-50 text-saffron-700' },
    { label: 'Active Notices', value: notices.length.toString(), icon: '📋', color: 'bg-military-50 text-military-700' },
    { label: 'Upcoming Events', value: events.filter(e => e.isUpcoming).length.toString(), icon: '📅', color: 'bg-blue-50 text-blue-700' },
    { label: 'Downloads', value: downloads.length.toString(), icon: '📄', color: 'bg-purple-50 text-purple-700' },
    { label: 'Gallery Images', value: galleryImages.length.toString(), icon: '🖼️', color: 'bg-pink-50 text-pink-700' },
    { label: 'Contact Enquiries', value: '8', icon: '✉️', color: 'bg-green-50 text-green-700' },
    { label: 'Office Bearers', value: officeBearers.length.toString(), icon: '🎖️', color: 'bg-amber-50 text-amber-700' },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className={`rounded-2xl p-5 ${card.color}`}>
            <span className="text-2xl mb-2 block" aria-hidden="true">{card.icon}</span>
            <p className="text-3xl font-bold">{card.value}</p>
            <p className="text-sm opacity-70 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="premium-card p-6">
          <h3 className="font-heading font-bold text-navy-800 mb-4">Recent Grievances</h3>
          <div className="space-y-3">
            {sampleGrievances.map((g) => (
              <div key={g.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{g.referenceNumber}</p>
                  <p className="text-navy-500 text-xs">{g.fullName}</p>
                </div>
                <span className={`badge ${g.status === 'Resolved' ? 'badge-military' : g.status === 'Under Review' ? 'badge-saffron' : 'badge-navy'}`}>
                  {g.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-card p-6">
          <h3 className="font-heading font-bold text-navy-800 mb-4">Latest Notices</h3>
          <div className="space-y-3">
            {notices.slice(0, 4).map((n) => (
              <div key={n.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-navy-800 text-sm truncate">{n.title}</p>
                  <p className="text-navy-500 text-xs">{formatDate(n.date)}</p>
                </div>
                <span className="badge badge-navy">{n.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Members View ──
function MembersView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <input type="search" placeholder="Search members…" className="form-input w-64" aria-label="Search members" />
          <select className="form-input w-40" aria-label="Filter by status">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Expired</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200 transition-all">
            📤 Export Data
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
            + Add Member
          </button>
        </div>
      </div>

      <div className="premium-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-navy-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Rank</th>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Service No.</th>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Mobile</th>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-navy-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleMembers.map((m) => (
                <tr key={m.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-navy-800">{m.fullName}</td>
                  <td className="py-3 px-4 text-navy-600">{m.rank}</td>
                  <td className="py-3 px-4 text-navy-600">{m.serviceNumber}</td>
                  <td className="py-3 px-4 text-navy-600">{m.mobileNumber}</td>
                  <td className="py-3 px-4">
                    <span className={`badge ${m.membershipStatus === 'Active' ? 'badge-military' : 'badge-saffron'}`}>
                      {m.membershipStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-navy-500 hover:text-saffron-500 text-sm mr-2">Edit</button>
                    <button className="text-navy-500 hover:text-red-500 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Grievances View ──
function GrievancesView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <input type="search" placeholder="Search by reference no. or name…" className="form-input w-72" aria-label="Search grievances" />
        <select className="form-input w-40" aria-label="Filter by status">
          <option>All Status</option>
          <option>Submitted</option>
          <option>Under Review</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
      </div>

      <div className="space-y-4">
        {sampleGrievances.map((g) => (
          <div key={g.id} className="premium-card p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-heading font-bold text-navy-800">{g.referenceNumber}</span>
                  <span className={`badge ${
                    g.status === 'Resolved' ? 'badge-military' :
                    g.status === 'Under Review' ? 'badge-saffron' :
                    g.status === 'In Progress' ? 'badge-navy' : 'badge-urgent'
                  }`}>{g.status}</span>
                </div>
                <p className="text-navy-600 text-sm">{g.fullName} — {g.rank} ({g.serviceNumber})</p>
              </div>
              <time className="text-sm text-navy-400 shrink-0">{formatDate(g.submittedDate)}</time>
            </div>
            <p className="text-navy-500 text-sm mb-4"><strong>Category:</strong> {g.serviceCategory} — {g.issueType}</p>
            <p className="text-navy-600 text-sm mb-4">{g.description}</p>
            {g.assignedTo && <p className="text-navy-500 text-xs mb-4">Assigned to: {g.assignedTo}</p>}
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200 transition-all">Update Status</button>
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-saffron-100 text-saffron-700 hover:bg-saffron-200 transition-all">Add Response</button>
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-military-100 text-military-700 hover:bg-military-200 transition-all">Assign</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Notices View ──
function NoticesView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-navy-800">Manage Notices</h2>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
          + Create Notice
        </button>
      </div>
      <div className="space-y-3">
        {notices.map((n) => (
          <div key={n.id} className="premium-card p-5 flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-navy-800 text-sm truncate">{n.title}</h3>
                <span className="badge badge-navy">{n.category}</span>
                <span className={`badge ${n.publishStatus === 'published' ? 'badge-military' : 'badge-saffron'}`}>{n.publishStatus}</span>
              </div>
              <p className="text-navy-500 text-xs">{formatDate(n.date)}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200">Edit</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Events View ──
function EventsView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-navy-800">Manage Events</h2>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
          + Create Event
        </button>
      </div>
      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.id} className="premium-card p-5 flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-navy-800 text-sm">{e.title}</h3>
                <span className={`badge ${e.isUpcoming ? 'badge-saffron' : 'badge-navy'}`}>
                  {e.isUpcoming ? 'Upcoming' : 'Past'}
                </span>
              </div>
              <p className="text-navy-500 text-xs">{formatDate(e.date)} — {e.time} — {e.location}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200">Edit</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Downloads View ──
function DownloadsView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-navy-800">Manage Downloads</h2>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
          + Upload Document
        </button>
      </div>
      <div className="space-y-3">
        {downloads.map((d) => (
          <div key={d.id} className="premium-card p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="text-2xl" aria-hidden="true">📄</span>
              <div className="min-w-0">
                <p className="font-semibold text-navy-800 text-sm truncate">{d.title}</p>
                <p className="text-navy-500 text-xs">{d.category} — {d.fileType} ({d.fileSize})</p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200">Edit</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Gallery View ──
function GalleryView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-navy-800">Manage Gallery</h2>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
          + Upload Images
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img) => (
          <div key={img.id} className="premium-card overflow-hidden group relative">
            <div className="relative w-full h-40">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="p-3">
              <p className="text-navy-800 text-sm font-semibold truncate">{img.caption}</p>
              <p className="text-navy-500 text-xs">{img.category}</p>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-2 py-1 rounded bg-red-500 text-white text-xs">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Office Bearers View ──
function BearersView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-navy-800">Manage Office Bearers</h2>
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all">
          + Add Office Bearer
        </button>
      </div>
      <div className="space-y-3">
        {officeBearers.map((b) => (
          <div key={b.id} className="premium-card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-navy-200 overflow-hidden shrink-0 relative">
              <Image src={b.photo} alt={b.name} fill className="object-cover" sizes="48px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-navy-800">{b.name}</p>
              <p className="text-saffron-600 text-sm font-medium">{b.position}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200">Edit</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Contacts View ──
function ContactsView() {
  const sampleEnquiries = [
    { id: 'c1', name: 'Rajesh Kumar', phone: '9876543210', email: 'rajesh@email.com', message: 'Enquiry about membership process and eligibility criteria.', date: '2026-09-28' },
    { id: 'c2', name: 'Smt. Meena Patil', phone: '9123456789', email: 'meena@email.com', message: 'Need information about war widow benefits and assistance.', date: '2026-09-27' },
  ];

  return (
    <div>
      <h2 className="font-heading font-bold text-navy-800 mb-6">Contact Enquiries</h2>
      <div className="space-y-4">
        {sampleEnquiries.map((enq) => (
          <div key={enq.id} className="premium-card p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-semibold text-navy-800">{enq.name}</p>
                <p className="text-navy-500 text-sm">{enq.phone} — {enq.email}</p>
              </div>
              <time className="text-sm text-navy-400">{formatDate(enq.date)}</time>
            </div>
            <p className="text-navy-600 text-sm mb-4">{enq.message}</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-military-100 text-military-700 hover:bg-military-200">Mark Responded</button>
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
