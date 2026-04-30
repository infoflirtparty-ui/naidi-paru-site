'use client';
import { useEffect, useState, useMemo } from 'react';

// Romantic, matchmaking-themed symbols (no playing card suits)
const SYMBOLS = [
  { char: '♥', color: '#FF4D8D', weight: 4 },   // heart (most common)
  { char: '♥', color: '#F9A8D4', weight: 3 },
  { char: '❤', color: '#FF4D8D', weight: 2 },
  { char: '✦', color: '#D4AF37', weight: 3 },   // 4-point gold sparkle
  { char: '✧', color: '#D4AF37', weight: 2 },
  { char: '✨', color: '#D4AF37', weight: 2 },
  { char: '·', color: '#D4AF37', weight: 3 },
  { char: '·', color: '#FF4D8D', weight: 2 },
];

// Weighted random picker
function pickSymbol() {
  const total = SYMBOLS.reduce((s, x) => s + x.weight, 0);
  let r = Math.random() * total;
  for (const s of SYMBOLS) {
    r -= s.weight;
    if (r <= 0) return s;
  }
  return SYMBOLS[0];
}

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => {
    const sym = pickSymbol();
    return {
      id: i,
      char: sym.char,
      color: sym.color,
      left: Math.random() * 100,
      size: 10 + Math.random() * 22,
      duration: 14 + Math.random() * 18,
      delay: -Math.random() * 30,
      drift: (Math.random() - 0.5) * 120,
      rotate: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.35,
    };
  });
}

export function FloatingBg({ density = 'normal' }) {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);

  const count = density === 'low' ? 14 : density === 'high' ? 40 : 26;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    setMounted(true);
  }, []);

  const particles = useMemo(() => generateParticles(count), [count]);

  if (!mounted || reduced) return null;

  return (
    <div aria-hidden="true" style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      overflow: 'hidden',
    }}>
      {particles.map(p => (
        <span key={p.id} style={{
          position: 'absolute',
          left: `${p.left}%`,
          bottom: '-10%',
          fontSize: p.size,
          color: p.color,
          opacity: p.opacity,
          textShadow: `0 0 ${p.size}px ${p.color}`,
          animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          '--drift': `${p.drift}px`,
          '--rotate': `${p.rotate}deg`,
          willChange: 'transform',
          userSelect: 'none',
        }}>{p.char}</span>
      ))}
    </div>
  );
}

// Creative initial loading screen — shows on first page load
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem('loader_seen');
    if (seen) {
      setVisible(false);
      return;
    }

    // Wait for minimum display time, then fade out
    const minTime = setTimeout(() => setFading(true), 1600);
    const unmount = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('loader_seen', '1');
    }, 2100);

    return () => {
      clearTimeout(minTime);
      clearTimeout(unmount);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'radial-gradient(ellipse at center, #12111D 0%, #0A0A14 70%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.5s ease',
      pointerEvents: fading ? 'none' : 'auto',
    }}>
      {/* Floating background decorations inside loader */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { char: '♥', color: '#FF4D8D', top: '18%', left: '14%', size: 30, delay: '0s' },
          { char: '✦', color: '#D4AF37', top: '24%', right: '16%', size: 22, delay: '0.3s' },
          { char: '♥', color: '#F9A8D4', bottom: '24%', left: '18%', size: 20, delay: '0.6s' },
          { char: '✧', color: '#D4AF37', bottom: '20%', right: '20%', size: 26, delay: '0.2s' },
          { char: '✨', color: '#D4AF37', top: '50%', left: '8%', size: 16, delay: '0.5s' },
          { char: '✨', color: '#FF4D8D', top: '50%', right: '10%', size: 16, delay: '0.8s' },
        ].map((p, i) => (
          <span key={i} style={{
            position: 'absolute',
            top: p.top, bottom: p.bottom, left: p.left, right: p.right,
            fontSize: p.size, color: p.color,
            textShadow: `0 0 ${p.size}px ${p.color}`,
            opacity: 0,
            animation: `loaderFade 2s ease-out ${p.delay} forwards`,
          }}>{p.char}</span>
        ))}
      </div>

      {/* Central mark with rotating rings */}
      <div style={{ position: 'relative', width: 140, height: 140, marginBottom: 24 }}>
        {/* Outer rotating gradient ring */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(212,175,55,0.6) 90deg, transparent 180deg, rgba(255,77,141,0.6) 270deg, transparent 360deg)',
          animation: 'loaderRotate 3s linear infinite',
          filter: 'blur(1px)',
        }} />

        {/* Inner counter-rotating ring */}
        <div style={{
          position: 'absolute', inset: 8,
          borderRadius: '50%',
          background: 'conic-gradient(from 180deg, transparent 0deg, rgba(255,77,141,0.4) 60deg, transparent 120deg, rgba(212,175,55,0.4) 240deg, transparent 300deg)',
          animation: 'loaderRotateReverse 4s linear infinite',
          filter: 'blur(1px)',
        }} />

        {/* Black center mask */}
        <div style={{
          position: 'absolute', inset: 18,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #12111D 0%, #0A0A14 100%)',
          border: '1px solid rgba(212,175,55,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Brand mark — interlocking rings (symbol of union) */}
          <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style={{
            filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.55))',
            animation: 'loaderPulse 1.8s ease-in-out infinite',
          }}>
            <defs>
              <linearGradient id="ringG1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D4AF37"/>
                <stop offset="1" stopColor="#B8860B"/>
              </linearGradient>
              <linearGradient id="ringG2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FF4D8D"/>
                <stop offset="1" stopColor="#A855F7"/>
              </linearGradient>
            </defs>
            <circle cx="18" cy="21" r="14" stroke="url(#ringG1)" strokeWidth="3" fill="none"/>
            <circle cx="38" cy="21" r="14" stroke="url(#ringG2)" strokeWidth="3" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Brand label */}
      <div style={{
        fontSize: 12, fontWeight: 700, color: '#D4AF37',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        marginBottom: 8,
        opacity: 0,
        animation: 'loaderFade 0.8s ease 0.3s forwards',
        textAlign: 'center',
      }}>
        Агентство знакомств
      </div>
      <div className="font-display" style={{
        fontSize: 16, fontWeight: 600, color: '#F5E9CF',
        marginBottom: 14, fontStyle: 'italic',
        opacity: 0,
        animation: 'loaderFade 0.8s ease 0.45s forwards',
        letterSpacing: '0.02em',
      }}>
        Асем Альмурзиева
      </div>

      {/* Tagline */}
      <div style={{
        fontSize: 13, color: '#8B8BA8',
        opacity: 0,
        animation: 'loaderFade 0.8s ease 0.7s forwards',
      }}>
        подбираем достойных...
      </div>

      {/* Progress dots */}
      <div style={{
        marginTop: 28, display: 'flex', gap: 8,
        opacity: 0,
        animation: 'loaderFade 0.6s ease 0.9s forwards',
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)',
            animation: `loaderDot 1.4s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

// Section decoration — renders a few floating symbols around a section
export function SectionSpark({ variant = 'gold' }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const color = variant === 'pink' ? '#FF4D8D' : variant === 'mix' ? null : '#D4AF37';
  const sparks = variant === 'hearts'
    ? [{ c: '♥', k: '#FF4D8D' }, { c: '♥', k: '#F9A8D4' }, { c: '·', k: '#FF4D8D' }]
    : variant === 'mix'
    ? [{ c: '✦', k: '#D4AF37' }, { c: '♥', k: '#FF4D8D' }, { c: '·', k: '#D4AF37' }]
    : [{ c: '✦', k: color }, { c: '✧', k: color }, { c: '·', k: color }];

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', top: '10%', left: '5%', fontSize: 16, color: sparks[0].k, opacity: 0.35, animation: 'sparkPulse 3s ease-in-out infinite', textShadow: `0 0 12px ${sparks[0].k}` }}>{sparks[0].c}</span>
      <span style={{ position: 'absolute', top: '20%', right: '8%', fontSize: 14, color: sparks[1].k, opacity: 0.3, animation: 'sparkPulse 3.5s ease-in-out 0.5s infinite', textShadow: `0 0 10px ${sparks[1].k}` }}>{sparks[1].c}</span>
      <span style={{ position: 'absolute', bottom: '15%', left: '12%', fontSize: 12, color: sparks[2].k, opacity: 0.25, animation: 'sparkPulse 4s ease-in-out 1s infinite', textShadow: `0 0 8px ${sparks[2].k}` }}>{sparks[2].c}</span>
      <span style={{ position: 'absolute', bottom: '20%', right: '15%', fontSize: 14, color: sparks[0].k, opacity: 0.3, animation: 'sparkPulse 3.2s ease-in-out 1.5s infinite', textShadow: `0 0 10px ${sparks[0].k}` }}>{sparks[0].c}</span>
    </div>
  );
}
