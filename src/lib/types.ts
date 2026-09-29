// ── Types for ESM Welfare Association ──

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroData {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  explorerLink: { label: string; href: string };
  trustStrip: string[];
  backgroundImage: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: NoticeCategory;
  description: string;
  pdfUrl?: string;
  isUrgent?: boolean;
  publishStatus: 'published' | 'draft';
}

export type NoticeCategory =
  | 'Association Notice'
  | 'Pension / OROP'
  | 'Government Update'
  | 'Welfare'
  | 'Meeting'
  | 'Urgent';

export interface EventItem {
  id: string;
  title: string;
  titleMr?: string;
  date: string;
  time: string;
  location: string;
  locationMr?: string;
  description: string;
  fullReport?: string;
  image: string;
  galleryImages?: string[];
  category?: 'Veterans Rally' | 'Welfare Camp' | 'Medical Screening' | 'Memorial Ceremony' | 'Felicitation' | 'General Meeting';
  chiefGuests?: string[];
  attendeesCount?: string;
  outcomes?: string[];
  pressReport?: string;
  registrationLink?: string;
  isUpcoming: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

export type GalleryCategory =
  | 'Welfare Activities'
  | 'Meetings'
  | 'Veteran Events'
  | 'Felicitation Programs'
  | 'Community Events';

export interface OfficeBearerItem {
  id: string;
  name: string;
  position: string;
  photo: string;
  profile: string;
}

export interface MemberData {
  id: string;
  fullName: string;
  rank: string;
  serviceNumber: string;
  regiment: string;
  mobileNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  dateOfBirth: string;
  dateOfRetirement: string;
  membershipStatus: 'Active' | 'Pending' | 'Expired';
  photo?: string;
  joinDate: string;
}

export interface GrievanceData {
  id: string;
  referenceNumber: string;
  fullName: string;
  rank: string;
  serviceNumber: string;
  mobileNumber: string;
  email: string;
  serviceCategory: string;
  issueType: string;
  description: string;
  documentUrl?: string;
  status: GrievanceStatus;
  submittedDate: string;
  response?: string;
  assignedTo?: string;
}

export type GrievanceStatus =
  | 'Submitted'
  | 'Under Review'
  | 'In Progress'
  | 'Resolved'
  | 'Closed';

export interface DownloadItem {
  id: string;
  title: string;
  category: DownloadCategory;
  fileType: string;
  fileSize: string;
  url: string;
}

export type DownloadCategory =
  | 'Membership Forms'
  | 'Welfare Forms'
  | 'Pension / OROP Documents'
  | 'Government Circulars'
  | 'Association Documents'
  | 'Important Guidelines';

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  officeHours: string;
  mapEmbedUrl: string;
}

export interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

export interface SearchResult {
  type: 'notice' | 'event' | 'download' | 'service' | 'page';
  title: string;
  description: string;
  href: string;
}
