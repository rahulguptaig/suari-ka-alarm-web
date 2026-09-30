"use client";
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { languages, LanguageCode } from '../locales';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(124,92,252,0.3)', borderRadius: 8, padding: '8px 12px', color: '#F0F0FF', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
      >
        🌐 {languages[language]}
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, background: '#0a0a1e', border: '1px solid rgba(124,92,252,0.3)', borderRadius: 8, padding: 4, zIndex: 1000, width: 150 }}>
          {(Object.keys(languages) as LanguageCode[]).map(lang => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', background: language === lang ? 'rgba(124,92,252,0.2)' : 'transparent', border: 'none', color: language === lang ? '#7C5CFC' : '#A0A0C0', borderRadius: 4, cursor: 'pointer', fontSize: 13 }}
            >
              {languages[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
