export const languages = {
  en: 'English',
  hin: 'Hinglish',
  hi: 'हिंदी (Hindi)',
  bhoj: 'भोजपुरी (Bhojpuri)',
};

export type LanguageCode = keyof typeof languages;

export const translations = {
  en: {
    // Nav
    nav_docs: 'Docs',
    nav_github: 'GitHub',
    nav_admin: 'Admin Panel',
    nav_overview: 'Overview',
    nav_getting_started: 'Getting Started',
    nav_alarms: 'Alarms',
    nav_ai: 'Suari AI',
    nav_todos: 'Todos',
    nav_syllabus: 'Syllabus Tracker',
    
    // Landing
    hero_title: 'Your Smart AI Companion',
    hero_subtitle: 'A smart alarm app with Suari AI — manage studies, tasks, and syllabus all in one place with your personal AI buddy.',
    btn_download: 'Download APK',
    btn_view_docs: 'View Docs',
    
    // Admin
    dashboard: 'Dashboard',
    total_users: 'Users',
    total_alarms: 'Alarms',
    total_todos: 'Todos'
  },
  hin: {
    nav_docs: 'Docs',
    nav_github: 'GitHub',
    nav_admin: 'Admin Panel',
    nav_overview: 'Overview',
    nav_getting_started: 'Shuru Karein',
    nav_alarms: 'Alarms',
    nav_ai: 'Suari AI',
    nav_todos: 'Todos',
    nav_syllabus: 'Syllabus',
    hero_title: 'Tera Smart AI Companion',
    hero_subtitle: 'Ek smart alarm app jisme Suari AI hai — padhai, tasks, syllabus sab kuch ek jagah manage karo with your personal AI buddy.',
    btn_download: 'APK Download Karo',
    btn_view_docs: 'Docs Dekho',
    dashboard: 'Dashboard',
    total_users: 'Users',
    total_alarms: 'Alarms',
    total_todos: 'Todos'
  },
  hi: {
    nav_docs: 'दस्तावेज़',
    nav_github: 'गिटहब',
    nav_admin: 'एडमिन पैनल',
    nav_overview: 'अवलोकन',
    nav_getting_started: 'शुरुआत करें',
    nav_alarms: 'अलार्म',
    nav_ai: 'सुआरी एआई',
    nav_todos: 'कार्य',
    nav_syllabus: 'पाठ्यक्रम',
    hero_title: 'आपका स्मार्ट एआई साथी',
    hero_subtitle: 'सुआरी एआई के साथ एक स्मार्ट अलार्म ऐप — पढ़ाई, कार्य और पाठ्यक्रम सब कुछ एक जगह प्रबंधित करें।',
    btn_download: 'APK डाउनलोड करें',
    btn_view_docs: 'दस्तावेज़ देखें',
    dashboard: 'डैशबोर्ड',
    total_users: 'उपयोगकर्ता',
    total_alarms: 'अलार्म',
    total_todos: 'कार्य'
  },
  bhoj: {
    nav_docs: 'कागजात',
    nav_github: 'गिटहब',
    nav_admin: 'एडमिन पैनल',
    nav_overview: 'झलक',
    nav_getting_started: 'सुरु करीं',
    nav_alarms: 'अलार्म',
    nav_ai: 'सुआरी एआई',
    nav_todos: 'काम',
    nav_syllabus: 'सिलेबस',
    hero_title: 'रउवा स्मार्ट एआई साथी',
    hero_subtitle: 'सुआरी एआई के साथे एगो स्मार्ट अलार्म ऐप — पढ़ाई, काम अवुरी सिलेबस सब एके जगह संभालीं।',
    btn_download: 'APK डाउनलोड करीं',
    btn_view_docs: 'कागजात देखीं',
    dashboard: 'डैशबोर्ड',
    total_users: 'यूजर',
    total_alarms: 'अलार्म',
    total_todos: 'काम'
  },
};

export const t = (lang: LanguageCode, key: keyof typeof translations['en']) => {
  return translations[lang]?.[key] || translations['en'][key] || key;
};
