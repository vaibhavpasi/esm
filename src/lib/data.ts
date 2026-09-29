import type {
  NavItem, ServiceItem, StatItem, NoticeItem, EventItem,
  GalleryImage, OfficeBearerItem, MemberData, GrievanceData,
  DownloadItem, ContactInfo, BenefitCard,
} from './types';

// ── Navigation ──
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Welfare Services', href: '/services' },
  { label: 'Membership', href: '/membership' },
  { label: 'Notices', href: '/notices' },
  { label: 'Events', href: '/events' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Grievance', href: '/grievance' },
  { label: 'Contact', href: '/contact' },
];

// ── Services ──
export const services: ServiceItem[] = [
  {
    id: 'pension-orop',
    icon: '🏛️',
    title: 'Pension & OROP Assistance',
    description: 'Guidance and support for pension-related matters, One Rank One Pension queries, and benefit claims for ex-servicemen and their families.',
    href: '/services#pension-orop',
  },
  {
    id: 'welfare-schemes',
    icon: '📋',
    title: 'Government Welfare Schemes',
    description: 'Information and assistance regarding Central and State Government welfare schemes available for veterans, war widows, and dependents.',
    href: '/services#welfare-schemes',
  },
  {
    id: 'documentation',
    icon: '📄',
    title: 'Documentation Support',
    description: 'Help with preparing, verifying, and submitting official documents, applications, and forms required for various welfare benefits.',
    href: '/services#documentation',
  },
  {
    id: 'medical',
    icon: '🏥',
    title: 'Medical & Welfare Assistance',
    description: 'Support for ECHS-related queries, medical facility access, health camps, and referral assistance for veteran healthcare needs.',
    href: '/services#medical',
  },
  {
    id: 'grievance',
    icon: '⚖️',
    title: 'Grievance Assistance',
    description: 'A dedicated channel to raise and track welfare-related concerns, complaints, and requests with proper follow-up and resolution support.',
    href: '/grievance',
  },
  {
    id: 'legal',
    icon: '📜',
    title: 'Legal / Administrative Guidance',
    description: 'Basic guidance on legal and administrative matters relevant to ex-servicemen, including canteen, land, and settlement-related queries.',
    href: '/services#legal',
  },
  {
    id: 'family',
    icon: '👨‍👩‍👧‍👦',
    title: 'Family & Dependent Support',
    description: 'Welfare support and information for families, dependents, and war widows of ex-servicemen, including education and employment guidance.',
    href: '/services#family',
  },
  {
    id: 'community',
    icon: '🤝',
    title: 'Veteran Community Support',
    description: 'Building a strong veteran community through regular meetings, social events, networking opportunities, and peer support programs.',
    href: '/services#community',
  },
];

// ── Statistics ──
export const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Registered Members', icon: '👥' },
  { value: 100, suffix: '+', label: 'Welfare Cases Supported', icon: '✅' },
  { value: 50, suffix: '+', label: 'Community Activities', icon: '📅' },
  { value: 10, suffix: '+', label: 'Years of Service', icon: '🏆' },
];

// ── Benefits / Why Join ──
export const benefits: BenefitCard[] = [
  {
    icon: '📢',
    title: 'Access to Welfare Information',
    description: 'Stay informed about the latest government schemes, pension updates, OROP developments, and welfare benefits available for veterans.',
  },
  {
    icon: '🛡️',
    title: 'Assistance & Guidance',
    description: 'Get personalised support for pension queries, documentation, medical assistance, and administrative matters from experienced volunteers.',
  },
  {
    icon: '🤝',
    title: 'Community Connection',
    description: 'Connect with fellow ex-servicemen, share experiences, participate in community events, and build a supportive veteran network in Nashik.',
  },
  {
    icon: '🔔',
    title: 'Updates & Notifications',
    description: 'Receive timely notifications about association meetings, government circulars, important deadlines, and upcoming veteran events.',
  },
];

// ── Notices (Sample Data) ──
export const notices: NoticeItem[] = [
  {
    id: 'n1',
    title: 'Annual General Meeting — September 2026',
    date: '2026-09-15',
    category: 'Meeting',
    description: 'All members are requested to attend the Annual General Meeting scheduled at the Association Hall. Agenda includes review of welfare activities and election of new office bearers.',
    publishStatus: 'published',
  },
  {
    id: 'n2',
    title: 'OROP Arrears — Latest Update from DESW',
    date: '2026-09-10',
    category: 'Pension / OROP',
    description: 'Important update regarding the latest OROP arrears disbursement schedule released by the Department of Ex-Servicemen Welfare.',
    pdfUrl: '#',
    publishStatus: 'published',
  },
  {
    id: 'n3',
    title: 'Urgent: ECHS Card Renewal Deadline Extended',
    date: '2026-09-05',
    category: 'Urgent',
    description: 'The deadline for ECHS smart card renewal has been extended until 31st December 2026. Members are advised to complete the renewal at the earliest.',
    isUrgent: true,
    publishStatus: 'published',
  },
  {
    id: 'n4',
    title: 'Welfare Camp — Free Health Check-up for Veterans',
    date: '2026-08-28',
    category: 'Welfare',
    description: 'A free medical check-up camp for veterans and their families will be organised in collaboration with the District Military Hospital, Nashik.',
    publishStatus: 'published',
  },
  {
    id: 'n5',
    title: 'Government Circular: Revised Pension Rates 2026',
    date: '2026-08-20',
    category: 'Government Update',
    description: 'Circular regarding revised pension and family pension rates effective from 1st July 2026 as per the 8th Central Pay Commission recommendations.',
    pdfUrl: '#',
    publishStatus: 'published',
  },
  {
    id: 'n6',
    title: 'Association Office Bearers — New Appointments',
    date: '2026-08-15',
    category: 'Association Notice',
    description: 'Notification regarding the appointment of new office bearers for the term 2026–2028 following the recently concluded elections.',
    publishStatus: 'published',
  },
];

// ── Events (Comprehensive Military Event Coverage) ──
export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Armed Forces Veterans Day & Annual Mega Rally 2026',
    titleMr: 'सशस्त्र सेना माजी सैनिक दिवस व भव्य जिल्हा मेळावा २०२६',
    date: '2026-10-14',
    time: '09:30 AM - 15:30 PM',
    location: 'Artillery Centre Parade Ground, Deolali Cantonment, Nashik',
    locationMr: 'तोफखाना केंद्र संचलन मैदान, देवळाली छावणी, नाशिक',
    category: 'Veterans Rally',
    description: 'Annual grand convention commemorating Field Marshal K.M. Cariappa, bringing together over 1,400 Indian Army, Navy, and Air Force veterans, war widows, and defence families across North Maharashtra.',
    fullReport: 'The annual Armed Forces Veterans Day rally at the prestigious Artillery Centre Deolali witnessed an extraordinary gathering of 1,450+ retired personnel. The convention commenced with a ceremonial guard of honour and floral tribute at the Regimental War Memorial. Over 75 senior veterans aged 80+ years and 24 Veer Naris were felicitated with silver plaques, ceremonial angavastrams, and welfare cheques. A dedicated SPARSH helpdesk and mobile ECHS card renewal counter functioned throughout the day, resolving more than 350 pending pension and medical queries on the spot.',
    chiefGuests: [
      'Station Commander & Commandant, School of Artillery, Deolali',
      'District Collector & District Magistrate, Nashik',
      'Commissioner of Police, Nashik City',
      'Zilla Sainik Welfare Officer (ZSWO), Nashik',
    ],
    attendeesCount: '1,450+ Veterans, Veer Naris & Families',
    outcomes: [
      '75 Senior Veterans aged 80+ felicitated with lifetime honor',
      '24 Veer Naris granted emergency welfare stipends worth ₹7.2 Lakh',
      '350+ on-spot SPARSH PPO grievance settlements',
      '180 ECHS 64-KB card applications initiated and verified',
    ],
    pressReport: 'Extensively covered by Maharashtra Times, Sakal, and Lokmat: "नाशिकच्या देवळालीत माजी सैनिकांचा विराट मेळावा; ८० पार शूरवीरांचा गौरव."',
    image: '/event-felicitation.jpg',
    galleryImages: ['/event-felicitation.jpg', '/hero-veterans.jpg', '/about-meeting.jpg'],
    isUpcoming: true,
  },
  {
    id: 'e2',
    title: 'SPARSH Migration & Digital Life Certificate (DLC) Mega Camp',
    titleMr: 'स्पर्श (SPARSH) पेन्शन व डिजिटल जीवन प्रमाण पत्र महामेळावा',
    date: '2026-10-05',
    time: '10:00 AM - 17:00 PM',
    location: 'Sainik Bhavan Conference Complex, Old Agra Road, CBS, Nashik',
    locationMr: 'सैनिक भवन संकुल, जुना आग्रा रोड, सीबीएस, नाशिक',
    category: 'Welfare Camp',
    description: 'High-tech assistance camp organized in coordination with PCDA(P) Prayagraj and India Post Payments Bank for biometric & facial recognition DLC submission.',
    fullReport: 'To prevent pension disruptions for senior jawans and elderly widows, the Association set up 12 high-speed biometric kiosks at Sainik Bhavan. Experienced technical volunteers assisted retirees who experienced mobile OTP or fingerprint mismatches. Special teams using the AadhaarFaceRD smartphone application assisted seniors with faded fingerprints. Over 480 pensioners completed their annual life certificate submission in under 5 minutes without any bank queues.',
    chiefGuests: [
      'Assistant Controller of Defence Accounts (SPARSH Liaison), PCDA(P)',
      'Lead District Manager (LDM), State Bank of India, Nashik',
      'President, ESM Welfare Association of Nashik',
    ],
    attendeesCount: '520+ Retired Pensioners',
    outcomes: [
      '480 Digital Life Certificates generated and synced with SPARSH',
      '110 Legacy PPOs successfully mapped to 12-digit SPARSH identifiers',
      'Zero pension discontinuation reported across attendees',
    ],
    pressReport: 'Featured in Daily Deshdoot: "माजी सैनिकांसाठी घरबसल्या स्पर्श पेन्शन शिबिर; ५०० पेक्षा जास्त ज्येष्ठांना दिलासा."',
    image: '/about-meeting.jpg',
    galleryImages: ['/about-meeting.jpg', '/event-felicitation.jpg', '/hero-veterans.jpg'],
    isUpcoming: true,
  },
  {
    id: 'e3',
    title: 'Kargil Vijay Diwas — Sacred Memorial & Torchlight Vigil',
    titleMr: 'कारगिल विजय दिवस — हुतात्मा शौर्य स्मरण व मशाल रॅली',
    date: '2026-07-26',
    time: '08:30 AM - 12:30 PM',
    location: 'Hutatma Smarak & Central War Memorial, Golf Club Ground, Nashik',
    locationMr: 'हुतात्मा स्मारक व मध्यवर्ती युद्ध स्मारक, गोल्फ क्लब मैदान, नाशिक',
    category: 'Memorial Ceremony',
    description: 'Solemn 27th anniversary remembrance honoring the 527 Indian Armed Forces bravehearts of Operation Vijay, with special felicitations for Kargil war wounded jawans.',
    fullReport: 'A stirring tribute took place on 26th July at the Nashik War Memorial. In the presence of serving officers of the Regiment of Artillery, battle veterans from 18 Maratha Light Infantry, 18 Grenadiers, and Bombay Sappers paid homage with a 21-gun military bugle salute. The ceremonial Amar Jawan flame was illuminated by Veer Naris of Nashik district. A photo chronicle tracing the heroic recapture of Tiger Hill and Tololing was exhibited for over 2,000 visiting NCC cadets and citizens.',
    chiefGuests: [
      'Commanding Officer, 11 Base Repair Depot, Air Force Station Ojhar',
      'Col (Retd) Rajendra S. Patil, President ESM Welfare Association',
      'Distinguished Gallantry Awardees of Nashik District',
    ],
    attendeesCount: '2,200+ Citizens, Veterans & NCC Cadets',
    outcomes: [
      'Memorial floral wreaths laid by 45 veteran contingents',
      '14 Kargil war wounded soldiers awarded financial bravery grants',
      'Pledge of National Service taken by 800 NCC & college students',
    ],
    pressReport: 'Front-page coverage in Lokmat & Sakal: "कारगिलच्या वीरांना नाशिककरांचा सलाम; अमर जवान ज्योतीसमोर शत शत नमन."',
    image: '/hero-veterans.jpg',
    galleryImages: ['/hero-veterans.jpg', '/event-felicitation.jpg', '/about-meeting.jpg'],
    isUpcoming: false,
  },
  {
    id: 'e4',
    title: 'Free Multispeciality Health & Cataract Screening Mega Camp',
    titleMr: 'मोफत महाआरोग्य, हृदय तपासणी व कॅशलेस मोतीबिंदू शस्त्रक्रिया शिबिर',
    date: '2026-06-18',
    time: '09:00 AM - 16:30 PM',
    location: 'Military Hospital (MH) Deolali & ECHS Polyclinic Premises, Nashik',
    locationMr: 'सैन्य रुग्णालय (MH) देवळाली व ईसीएचएस परिसर, नाशिक',
    category: 'Medical Screening',
    description: 'Collaborative mega diagnostic camp conducted with specialist cardiologists, oncologists, orthopedicians, and ophthalmologists from Wockhardt, Ashoka Medicover, and Tulsi Eye Hospital.',
    fullReport: 'Over 620 senior veterans, Veer Naris, and dependent spouses attended the full-day medical screening camp. Services included free 2D Echo, computerized ECG, digital HbA1c diabetic profiles, and comprehensive eye micro-checks. 84 senior veterans diagnosed with mature cataracts were scheduled for 100% cashless phacoemulsification surgery with foldable IOL under ECHS empanelment. Free mobility walking sticks and Red Cross wheelchairs were distributed to 32 handicapped retirees on the spot.',
    chiefGuests: [
      'Senior Medical Officer (SMO) & Brig IC Adm, Military Hospital Deolali',
      'Officer-in-Charge (OIC), ECHS Polyclinic Nashik',
      'Medical Directors of Wockhardt & Ashoka Medicover Hospitals',
    ],
    attendeesCount: '620+ Senior Veterans & Spouses',
    outcomes: [
      '84 Cashless Cataract surgeries sanctioned under ECHS',
      '32 Free Wheelchairs & Walker frames distributed to elderly veterans',
      'Free 30-day chronic cardiac & diabetic medicine packs distributed',
    ],
    pressReport: 'Reported in Punyanagari: "माजी सैनिकांसाठी मोफत आरोग्य शिबिर; ८० हून अधिक वृद्धांवर मोफत मोतीबिंदू शस्त्रक्रिया."',
    image: '/about-meeting.jpg',
    galleryImages: ['/about-meeting.jpg', '/event-felicitation.jpg'],
    isUpcoming: false,
  },
  {
    id: 'e5',
    title: '1971 Indo-Pak War Vijay Diwas Golden Jubilee Convention',
    titleMr: '१९७१ भारत-पाक युद्ध विजय दिवस सुवर्ण महोत्सव गौरव सोहळा',
    date: '2025-12-16',
    time: '10:00 AM - 14:00 PM',
    location: 'Dadasaheb Gaikwad Sabhagruh, Bhabha Nagar, Nashik',
    locationMr: 'दादासाहेब गायकवाड सभागृह, भाभा नगर, नाशिक',
    category: 'Felicitation',
    description: 'Historic commemoration of India\'s decisive 1971 victory leading to the liberation of Bangladesh, honoring 110 veterans who fought in the Eastern and Western sectors.',
    fullReport: 'A packed auditorium of over 1,800 veterans, serving officers, and families celebrated the historic Vijay Diwas. Rare archival footage of the surrender instrument signed by Lt Gen A.A.K. Niazi was screened. 110 veterans from the Artillery, Infantry, Armoured Corps, Indian Navy (Operation Trident veterans), and IAF bomber squadrons who took part in the 1971 war were individually escorted to the dais and presented with commemorative gold-plated medals and citation scrolls.',
    chiefGuests: [
      'Lt General (Retd) Rameshwar Yadav, PVSM, AVSM, VSM',
      'Mayor & Municipal Commissioner, Nashik Municipal Corporation',
      'President, ESM Welfare Association of Nashik',
    ],
    attendeesCount: '1,800+ Attendees',
    outcomes: [
      '110 Veterans of 1971 War honored with commemorative medals',
      '₹10 Lakh Association welfare corpus fund announced for war-wounded jawans',
      'Historic documentary on Maratha LI and Artillery in 1971 showcased',
    ],
    pressReport: 'Covered extensively across regional and national media: "१९७१ च्या वीरांचा नाशिकमध्ये गौरव; टाळ्यांच्या कडकडाटात कृतज्ञता व्यक्त."',
    image: '/event-felicitation.jpg',
    galleryImages: ['/event-felicitation.jpg', '/hero-veterans.jpg'],
    isUpcoming: false,
  },
  {
    id: 'e6',
    title: 'Veer Nari & War Widows Empowerment Sammelan',
    titleMr: 'वीर नारी व युद्ध विधवा सक्षमीकरण व मदत मेळावा',
    date: '2025-11-20',
    time: '10:30 AM - 15:00 PM',
    location: 'Association Auditorium, Canada Corner, CBS Corridor, Nashik',
    locationMr: 'असोसिएशन सभागृह, कॅनडा कॉर्नर, सीबीएस, नाशिक',
    category: 'Welfare Camp',
    description: 'Empowerment convention addressing widow pension settlement, legal succession certificates, children PMSS scholarships, and self-employment toolkits.',
    fullReport: 'The dedicated Veer Nari wing held an intensive grievance and welfare distribution drive. Representatives from the Department of Sainik Welfare and District Legal Services Authority (DLSA) provided on-spot legal succession resolutions. Financial aid cheques of ₹50,000 for daughter marriage and ₹36,000 education stipends were handed over to 28 widow families under the Raksha Mantri Discretionary Fund (RMDF). 15 industrial sewing machines and computer skill kits were distributed to young martyr widows for self-reliance.',
    chiefGuests: [
      'Mrs. Anuradha Deshmukh, Chairperson, AWWA Liaison Group',
      'Secretary, District Legal Services Authority (DLSA) Nashik',
      'Zilla Sainik Welfare Officer, Nashik',
    ],
    attendeesCount: '240+ Veer Naris & Orphaned Wards',
    outcomes: [
      '₹15.4 Lakh disbursed in PMSS education & marriage grants',
      '15 Self-employment sewing machines & training toolkits gifted',
      '100% resolution of 42 pending Ordinary Family Pension (OFP) disputes',
    ],
    pressReport: 'Published in Deshdoot & Lokmat: "वीर नारींच्या पाठीशी खंबीरपणे उभे राहण्याचा संकल्प; नाशिकमध्ये विशेष सक्षमीकरण मेळावा."',
    image: '/hero-veterans.jpg',
    galleryImages: ['/hero-veterans.jpg', '/about-meeting.jpg'],
    isUpcoming: false,
  },
];

// ── Gallery (Sample Data) ──
export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/hero-veterans.jpg', alt: 'Veterans at community gathering', category: 'Veteran Events', caption: 'Annual Veteran Gathering 2025' },
  { id: 'g2', src: '/about-meeting.jpg', alt: 'Welfare meeting in progress', category: 'Meetings', caption: 'Association Executive Meeting' },
  { id: 'g3', src: '/event-felicitation.jpg', alt: 'Felicitation ceremony', category: 'Felicitation Programs', caption: 'Veteran Felicitation Ceremony' },
  { id: 'g4', src: '/hero-veterans.jpg', alt: 'Community event', category: 'Community Events', caption: 'Republic Day Celebrations' },
  { id: 'g5', src: '/about-meeting.jpg', alt: 'Welfare activity', category: 'Welfare Activities', caption: 'Medical Camp for Veterans' },
  { id: 'g6', src: '/event-felicitation.jpg', alt: 'Veterans event', category: 'Veteran Events', caption: 'Independence Day Programme' },
];

// ── Office Bearers (Sample Data) ──
export const officeBearers: OfficeBearerItem[] = [
  {
    id: 'ob1',
    name: 'Col (Retd) Rajendra S. Patil',
    position: 'President',
    photo: '/hero-veterans.jpg',
    profile: 'A distinguished veteran with over 30 years of service in the Indian Army. Committed to the welfare and upliftment of ex-servicemen and their families in Nashik district.',
  },
  {
    id: 'ob2',
    name: 'Brig (Retd) Suresh K. Deshmukh',
    position: 'Vice President',
    photo: '/hero-veterans.jpg',
    profile: 'Served in multiple operational areas during a decorated career spanning 28 years. Actively involved in veteran welfare initiatives and community development.',
  },
  {
    id: 'ob3',
    name: 'Maj (Retd) Anil V. Kulkarni',
    position: 'Secretary',
    photo: '/hero-veterans.jpg',
    profile: 'Managing the day-to-day operations of the Association with dedication and efficiency. Instrumental in digitising the association\'s processes and member database.',
  },
  {
    id: 'ob4',
    name: 'Capt (Retd) Deepak R. Joshi',
    position: 'Joint Secretary',
    photo: '/hero-veterans.jpg',
    profile: 'Supports the Secretary in coordinating association activities, member communications, and welfare programmes for ex-servicemen in the region.',
  },
  {
    id: 'ob5',
    name: 'Sub Maj (Retd) Prakash B. More',
    position: 'Treasurer',
    photo: '/hero-veterans.jpg',
    profile: 'Ensures transparent and accountable financial management of the association. Oversees budgeting, donations, and welfare fund allocation.',
  },
  {
    id: 'ob6',
    name: 'Hav (Retd) Ramesh T. Gaikwad',
    position: 'Executive Member',
    photo: '/hero-veterans.jpg',
    profile: 'An active contributor to the association\'s outreach and community engagement programmes. Assists in organising events and welfare camps.',
  },
];

// ── Downloads (Sample Data) ──
export const downloads: DownloadItem[] = [
  { id: 'd1', title: 'Membership Application Form', category: 'Membership Forms', fileType: 'PDF', fileSize: '245 KB', url: '#' },
  { id: 'd2', title: 'Welfare Assistance Request Form', category: 'Welfare Forms', fileType: 'PDF', fileSize: '180 KB', url: '#' },
  { id: 'd3', title: 'OROP Arrears Claim Form', category: 'Pension / OROP Documents', fileType: 'PDF', fileSize: '320 KB', url: '#' },
  { id: 'd4', title: 'Government Circular — Pension Revision 2026', category: 'Government Circulars', fileType: 'PDF', fileSize: '1.2 MB', url: '#' },
  { id: 'd5', title: 'Association Constitution & Bylaws', category: 'Association Documents', fileType: 'PDF', fileSize: '890 KB', url: '#' },
  { id: 'd6', title: 'ECHS Card Renewal Guidelines', category: 'Important Guidelines', fileType: 'PDF', fileSize: '156 KB', url: '#' },
  { id: 'd7', title: 'Grievance Submission Format', category: 'Welfare Forms', fileType: 'DOCX', fileSize: '98 KB', url: '#' },
  { id: 'd8', title: 'Ex-Servicemen Identity Card Application', category: 'Membership Forms', fileType: 'PDF', fileSize: '210 KB', url: '#' },
];

// ── Contact Info ──
export const contactInfo: ContactInfo = {
  address: 'ESM Welfare Association Office, Near Collectorate, Canada Corner, Nashik — 422002, Maharashtra, India',
  phone: '+91 253 2570123',
  whatsapp: '+91 98765 43210',
  email: 'info@esmwelfarenashik.org',
  officeHours: 'Monday – Saturday: 10:00 AM – 5:00 PM (Closed on Sundays & National Holidays)',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.007!2d73.7898!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDcnMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890',
};

// ── Sample Members ──
export const sampleMembers: MemberData[] = [
  {
    id: 'm1', fullName: 'Subedar Major (Retd) Ashok Bhonsle', rank: 'Subedar Major',
    serviceNumber: 'JC-123456', regiment: 'Maratha Light Infantry', mobileNumber: '9876543210',
    email: 'ashok.bhonsle@email.com', address: 'Plot 45, Sharanpur Road',
    city: 'Nashik', state: 'Maharashtra', pincode: '422002',
    dateOfBirth: '1960-03-15', dateOfRetirement: '2005-06-30',
    membershipStatus: 'Active', joinDate: '2016-01-15',
  },
];

// ── Sample Grievances ──
export const sampleGrievances: GrievanceData[] = [
  {
    id: 'gr1', referenceNumber: 'GRV-2026-0042',
    fullName: 'Havildar (Retd) Ram Jadhav', rank: 'Havildar',
    serviceNumber: 'IC-987654', mobileNumber: '9123456780',
    email: 'ram.jadhav@email.com', serviceCategory: 'Pension',
    issueType: 'OROP Arrears Delay', description: 'Awaiting OROP arrears since January 2026. Multiple follow-ups at ZSB office have not yielded any result.',
    status: 'Under Review', submittedDate: '2026-08-10',
    assignedTo: 'Maj (Retd) Anil V. Kulkarni',
  },
];

// ── Service Categories for Grievance Form ──
export const serviceCategories = [
  'Pension & OROP',
  'Medical / ECHS',
  'Documentation',
  'Government Schemes',
  'Legal / Administrative',
  'Family / Dependent Welfare',
  'Canteen / CSD',
  'Housing / Land',
  'Employment / Re-settlement',
  'Other',
];

export const issueTypes = [
  'Delay in Processing',
  'Incorrect Information',
  'Non-receipt of Benefits',
  'Application Rejection',
  'Documentation Issue',
  'Query / Information Needed',
  'Complaint',
  'Suggestion',
  'Other',
];
