'use client';
import { useState } from 'react';

// Lite YouTube card — shows thumbnail + play button, clicks to load iframe with autoplay
export function VideoCard({ id, title, channel, big = false }) {
  const [active, setActive] = useState(false);

  // Try maxresdefault first, fallback to hqdefault.
  // Note: YouTube returns a 120x90 grey placeholder (HTTP 200) when maxres
  // isn't available, so we detect this via naturalWidth in onLoad.
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const handleImgLoad = (e) => {
    if (e.target.naturalWidth <= 120) {
      setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
    }
  };
  const handleImgError = () => {
    setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
  };

  return (
    <div className="glass" style={{
      borderRadius: 18, overflow: 'hidden',
      borderColor: 'rgba(212,175,55,0.2)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s ease, box-shadow 0.3s ease',
      cursor: active ? 'default' : 'pointer',
    }}>
      <div
        style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', background: '#0E0D17' }}
        onClick={() => !active && setActive(true)}
        className={!active ? 'video-thumb' : ''}>
        {!active ? (
          <>
            <img
              src={src}
              alt={title}
              onLoad={handleImgLoad}
              onError={handleImgError}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 50%, rgba(10,10,20,0.55) 100%)', pointerEvents: 'none' }} />
            {/* Big play button */}
            <button
              aria-label={`Play: ${title}`}
              onClick={(e) => { e.stopPropagation(); setActive(true); }}
              style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: big ? 78 : 64, height: big ? 78 : 64, borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)',
                border: '3px solid rgba(255,255,255,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 12px 40px rgba(212,175,55,0.5), 0 0 0 8px rgba(255,255,255,0.05)',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="play-btn"
            >
              <svg width={big ? 28 : 24} height={big ? 28 : 24} viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            {/* YT badge */}
            <div style={{
              position: 'absolute', top: 12, left: 12,
              padding: '3px 10px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
              color: 'white', borderRadius: 6, fontSize: 10, fontWeight: 800, letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              YOUTUBE
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        )}
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{channel}</div>
        <div className="font-display" style={{ fontSize: big ? 16 : 14, color: '#F5E9CF', fontWeight: 600, lineHeight: 1.35 }}>{title}</div>
      </div>
    </div>
  );
}

// Real-link press card — clickable to actual article
export function PressCardLink({ src, outlet, title, sub, href, gradient }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass switcher-link" style={{
      borderRadius: 20, overflow: 'hidden',
      borderColor: 'rgba(212,175,55,0.16)',
      display: 'flex', gap: 0, color: 'white', textDecoration: 'none',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease, box-shadow 0.3s ease',
    }}>
      <div style={{
        width: 160, flexShrink: 0, position: 'relative', overflow: 'hidden',
        background: src ? '#0E0D17' : (gradient || 'linear-gradient(135deg, #1A1825, #2A1F35)'),
      }}>
        {src ? (
          <img src={src} alt={outlet} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span className="font-display" style={{ fontSize: 64, fontWeight: 800, fontStyle: 'italic', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.05em', opacity: 0.85 }}>
              {outlet[0]}
            </span>
            <div style={{ position: 'absolute', bottom: 10, left: 12, fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', fontWeight: 700 }}>{outlet}</div>
          </div>
        )}
      </div>
      <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', flexShrink: 0 }} />
          <span style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{outlet}</span>
        </div>
        <div className="font-display" style={{ fontSize: 15, color: '#F5E9CF', fontWeight: 600, lineHeight: 1.35, marginBottom: sub ? 6 : 0, fontStyle: 'italic' }}>{title}</div>
        {sub && <div style={{ fontSize: 12, color: '#A0A0C0', lineHeight: 1.5 }}>{sub}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 11, color: '#D4AF37', fontWeight: 600 }}>
          <span>Читать статью</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </a>
  );
}
