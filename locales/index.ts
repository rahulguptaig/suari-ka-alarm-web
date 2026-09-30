export const languages = {
  en: 'English',
  hin: 'Hinglish',
  hi: 'हिंदी (Hindi)',
  bhoj: 'भोजपुरी (Bhojpuri)',
};

export type LanguageCode = keyof typeof languages;

export const translations = {
  en: {
    nav_docs: 'Docs',
    nav_github: 'GitHub',
    nav_admin: 'Admin Panel',
    hero_title: 'Your Smart AI Companion',
    hero_subtitle: 'A smart alarm app with Suari AI — manage studies, tasks, and syllabus all in one place with your personal AI buddy.',
    btn_download: 'Download APK',
    btn_view_docs: 'View Docs',
  },
  hin: {
    nav_docs: 'Docs',
    nav_github: 'GitHub',
    nav_admin: 'Admin Panel',
    hero_title: 'Tera Smart AI Companion',
    hero_subtitle: 'Ek smart alarm app jisme Suari AI hai — padhai, tasks, syllabus sab kuch ek jagah manage karo with your personal AI buddy.',
    btn_download: 'APK Download Karo',
    btn_view_docs: 'Docs Dekho',
  },
  hi: {
    nav_docs: 'दस्तावेज़',
    nav_github: 'गिटहब',
    nav_admin: 'एडमिन पैनल',
    hero_title: 'आपका स्मार्ट एआई साथी',
    hero_subtitle: 'सुआरी एआई के साथ एक स्मार्ट अलार्म ऐप — पढ़ाई, कार्य और पाठ्यक्रम सब कुछ एक जगह प्रबंधित करें।',
    btn_download: 'APK डाउनलोड करें',
    btn_view_docs: 'दस्तावेज़ देखें',
  },
  bhoj: {
    nav_docs: 'कागजात',
    nav_github: 'गिटहब',
    nav_admin: 'एडमिन पैनल',
    hero_title: 'रउवा स्मार्ट एआई साथी',
    hero_subtitle: 'सुआरी एआई के साथे एगो स्मार्ट अलार्म ऐप — पढ़ाई, काम अवुरी सिलेबस सब एके जगह संभालीं।',
    btn_download: 'APK डाउनलोड करीं',
    btn_view_docs: 'कागजात देखीं',
  },
};

export const t = (lang: LanguageCode, key: keyof typeof translations['en']) => {
  return translations[lang]?.[key] || translations['en'][key] || key;
};
