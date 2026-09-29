export type Language = 'en' | 'mr' | 'hi';

export interface Translations {
  // Top bar
  helpline: string;
  emergencyMH: string;
  zspoNashik: string;
  sparshTollFree: string;
  textSize: string;
  contrast: string;
  highContrast: string;
  normalContrast: string;

  // Nav
  home: string;
  about: string;
  services: string;
  membership: string;
  notices: string;
  events: string;
  downloads: string;
  gallery: string;
  grievance: string;
  contact: string;
  search: string;
  memberPortal: string;
  adminLogin: string;

  // Hero
  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubheadline: string;
  ctaApply: string;
  ctaGrievance: string;
  ctaServices: string;
  heroTribute: string;

  // Stats
  statMembers: string;
  statCases: string;
  statActivities: string;
  statYears: string;

  // Sections
  aboutTitle: string;
  servicesTitle: string;
  whyJoinTitle: string;
  noticesTitle: string;
  eventsTitle: string;
  tributeTitle: string;
  pensionGuideTitle: string;
  nashikHubTitle: string;
  idCardTitle: string;
  contactTitle: string;
  csdTitle: string;
  veerNariTitle: string;
  medalsTitle: string;

  // Floating & Utilities
  needHelp: string;
  whatsappChat: string;
  lightDiya: string;
  diyaLit: string;
  tributesCount: string;
  printCard: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    helpline: 'Nashik Veterans Helpline: 0253-2570123',
    emergencyMH: 'MH Deolali Casualty: 0253-2491234',
    zspoNashik: 'Zilla Sainik Welfare Office Nashik',
    sparshTollFree: 'SPARSH PCDA: 1800-180-5325',
    textSize: 'Text Size',
    contrast: 'Contrast',
    highContrast: 'High Contrast',
    normalContrast: 'Normal',

    home: 'Home',
    about: 'About Us',
    services: 'Welfare Services',
    membership: 'Membership',
    notices: 'Notices',
    events: 'Events',
    downloads: 'Downloads',
    gallery: 'Gallery',
    grievance: 'Grievance',
    contact: 'Contact',
    search: 'Search',
    memberPortal: 'Member Portal',
    adminLogin: 'Admin',

    heroBadge: 'Ex-Servicemen Welfare Association of Nashik',
    heroHeadline1: 'Serving Those Who',
    heroHeadline2: 'Served the Nation',
    heroSubheadline: 'A dedicated, credible welfare platform empowering Indian Armed Forces veterans, war widows (Veer Naris), and military families across Nashik district with pension, healthcare, and community support.',
    ctaApply: 'Apply for Membership',
    ctaGrievance: 'Submit Grievance',
    ctaServices: 'Explore Services',
    heroTribute: 'Pay Tribute to Martyrs',

    statMembers: 'Registered Veterans',
    statCases: 'Welfare Cases Resolved',
    statActivities: 'Community Programs',
    statYears: 'Years of Dedication',

    aboutTitle: 'About ESM Welfare Association of Nashik',
    servicesTitle: 'Our Veteran Welfare Services',
    whyJoinTitle: 'Why Join the Association?',
    noticesTitle: 'Official Notices & Circulars',
    eventsTitle: 'Upcoming & Past Veteran Events',
    tributeTitle: 'Amar Jawan & Martyrs Tribute',
    pensionGuideTitle: 'SPARSH, Pension & Life Certificate Assistant',
    nashikHubTitle: 'Nashik District Veteran Defence Directory',
    idCardTitle: 'Official Veteran Identity Card Preview',
    contactTitle: 'Get in Touch with Association',
    csdTitle: 'CSD Canteen & Smart Card Entitlement Guide',
    veerNariTitle: 'Veer Nari & War Widows Dedicated Welfare Wing',
    medalsTitle: 'Indian Armed Forces Medals & Honors Gallery',

    needHelp: 'Need Help?',
    whatsappChat: 'WhatsApp Support',
    lightDiya: 'Light a Diya in Homage',
    diyaLit: 'Tribute Paid with Reverence',
    tributesCount: 'Tributes Paid by Citizens & Veterans',
    printCard: 'Download / Print ID Card',
  },
  mr: {
    helpline: 'नाशिक माजी सैनिक हेल्पलाइन: 0253-2570123',
    emergencyMH: 'मिलिटरी हॉस्पिटल देवळाली कॅज्युअल्टी: 0253-2491234',
    zspoNashik: 'जिल्हा सैनिक कल्याण कार्यालय नाशिक',
    sparshTollFree: 'स्पर्श (SPARSH) पेन्शन: 1800-180-5325',
    textSize: 'अक्षर आकार',
    contrast: 'कॉन्ट्रास्ट',
    highContrast: 'उच्च कॉन्ट्रास्ट',
    normalContrast: 'सामान्य',

    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    services: 'कल्याणकारी सेवा',
    membership: 'सदस्यत्व',
    notices: 'सूचना व परिपत्रके',
    events: 'कार्यक्रम',
    downloads: 'डाउनलोड्स',
    gallery: 'छायाचित्रे',
    grievance: 'तक्रार निवारण',
    contact: 'संपर्क',
    search: 'शोधा',
    memberPortal: 'माजी सैनिक पोर्टल',
    adminLogin: 'प्रशासक लॉगिन',

    heroBadge: 'माजी सैनिक कल्याण संस्था, नाशिक जिल्हा',
    heroHeadline1: 'देशाची सेवा करणाऱ्यांची',
    heroHeadline2: 'कृतज्ञतापूर्वक सेवा',
    heroSubheadline: 'नाशिक जिल्ह्यातील भारतीय सशस्त्र सेना दलातील निवृत्त सैनिक, वीर नारी आणि सैनिकी कुटुंबियांसाठी पेन्शन, आरोग्य (ECHS) आणि कायदेशीर सहाय्य पुरवणारी विश्वासू संस्था.',
    ctaApply: 'सदस्यत्वासाठी अर्ज करा',
    ctaGrievance: 'तक्रार नोंदवा',
    ctaServices: 'सेवा पहा',
    heroTribute: 'शहीदांना आदरांजली',

    statMembers: 'नोंदणीकृत माजी सैनिक',
    statCases: 'सोडवलेले कल्याणकारी प्रश्न',
    statActivities: 'आयोजित सामाजिक उपक्रम',
    statYears: 'वर्षे अविरत सेवा',

    aboutTitle: 'माजी सैनिक कल्याण संस्था नाशिक बद्दल',
    servicesTitle: 'माजी सैनिकांसाठी कल्याणकारी योजना',
    whyJoinTitle: 'संस्थेचे सदस्य का व्हावे?',
    noticesTitle: 'महत्त्वाच्या सूचना व सरकारी जी.आर.',
    eventsTitle: 'सैनिक मेळावे व आगामी कार्यक्रम',
    tributeTitle: 'अमर जवान ज्योती — वीर स्मरण व श्रद्धांजली',
    pensionGuideTitle: 'स्पर्श (SPARSH) पेन्शन व जीवन प्रमाण सहाय्यक',
    nashikHubTitle: 'नाशिक जिल्हा सैनिक संपर्क व सुविधा केंद्र',
    idCardTitle: 'डिजिटल माजी सैनिक ओळखपत्र नमुना',
    contactTitle: 'संस्थेशी संपर्क साधा',
    csdTitle: 'सी.एस.डी. कॅन्टीन व वाहन खरेदी पात्रता मार्गदर्शिका',
    veerNariTitle: 'वीर नारी व युद्ध विधवा विशेष कल्याण प्रभाग',
    medalsTitle: 'भारतीय सेना शौर्य व सेवा पदके दालन',

    needHelp: 'मदत हवी आहे?',
    whatsappChat: 'व्हॉट्सॲप संपर्क',
    lightDiya: 'आदरपूर्वक दीप प्रज्वलन करा',
    diyaLit: 'आपली आदरांजली अर्पण केली आहे',
    tributesCount: 'नागरिक व माजी सैनिकांकडून अर्पण श्रद्धांजली',
    printCard: 'ओळखपत्र डाउनलोड / प्रिंट करा',
  },
  hi: {
    helpline: 'नासिक पूर्व सैनिक हेल्पलाइन: 0253-2570123',
    emergencyMH: 'सैन्य अस्पताल देवलाली इमरजेंसी: 0253-2491234',
    zspoNashik: 'जिला सैनिक कल्याण कार्यालय नासिक',
    sparshTollFree: 'स्पर्श (SPARSH) पेंशन: 1800-180-5325',
    textSize: 'फ़ॉन्ट आकार',
    contrast: 'कंट्रास्ट',
    highContrast: 'हाई कंट्रास्ट',
    normalContrast: 'सामान्य',

    home: 'होम',
    about: 'हमारे बारे में',
    services: 'कल्याणकारी सेवाएं',
    membership: 'सदस्यता',
    notices: 'सूचनाएं व परिपत्र',
    events: 'आयोजन व कार्यक्रम',
    downloads: 'डाउनलोड्स',
    gallery: 'गैलरी',
    grievance: 'शिकायत निवारण',
    contact: 'संपर्क',
    search: 'खोजें',
    memberPortal: 'सदस्य पोर्टल',
    adminLogin: 'प्रशासक',

    heroBadge: 'पूर्व सैनिक कल्याण संघ, नासिक जिला',
    heroHeadline1: 'राष्ट्र के रक्षकों की',
    heroHeadline2: 'समर्पित सेवा',
    heroSubheadline: 'नासिक जिले के भारतीय सशस्त्र बलों के पूर्व सैनिकों, वीर नारियों और सैन्य परिवारों के पेंशन, चिकित्सा (ECHS), कानूनी व सामाजिक कल्याण हेतु एक विश्वसनीय संस्था।',
    ctaApply: 'सदस्यता हेतु आवेदन करें',
    ctaGrievance: 'शिकायत दर्ज करें',
    ctaServices: 'सेवाएं देखें',
    heroTribute: 'शहीदों को श्रद्धांजलि',

    statMembers: 'पंजीकृत पूर्व सैनिक',
    statCases: 'सुलझाए गए कल्याणकारी मामले',
    statActivities: 'आयोजित सामुदायिक कार्यक्रम',
    statYears: 'वर्षों की समर्पित सेवा',

    aboutTitle: 'पूर्व सैनिक कल्याण संघ नासिक के बारे में',
    servicesTitle: 'पूर्व सैनिक कल्याणकारी सेवाएं',
    whyJoinTitle: 'संघ से क्यों जुड़ें?',
    noticesTitle: 'आधिकारिक सूचनाएं व आदेश',
    eventsTitle: 'आगामी व पूर्व सैनिक कार्यक्रम',
    tributeTitle: 'अमर जवान व शहीद श्रद्धांजलि',
    pensionGuideTitle: 'स्पर्श (SPARSH) पेंशन व जीवन प्रमाण पत्र मार्गदर्शिका',
    nashikHubTitle: 'नासिक जिला सैनिक सुविधा एवं संपर्क केंद्र',
    idCardTitle: 'डिजिटल पूर्व सैनिक पहचान पत्र पूर्वावलोकन',
    contactTitle: 'संघ से संपर्क करें',
    csdTitle: 'सीएसडी कैंटीन एवं वाहन पात्रता मार्गदर्शिका',
    veerNariTitle: 'वीर नारी एवं युद्ध विधवा विशेष कल्याण प्रभाग',
    medalsTitle: 'भारतीय सशस्त्र बल पदक एवं शौर्य दीर्घा',

    needHelp: 'सहायता चाहिए?',
    whatsappChat: 'व्हाट्सएप सहायता',
    lightDiya: 'श्रद्धा सुमन व दीप प्रज्वलित करें',
    diyaLit: 'श्रद्धांजलि सादर समर्पित',
    tributesCount: 'नागरिकों एवं पूर्व सैनिकों द्वारा दी गई श्रद्धांजलि',
    printCard: 'पहचान पत्र डाउनलोड / प्रिंट करें',
  },
};
