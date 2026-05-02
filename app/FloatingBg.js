'use client';
import { useEffect, useState, useMemo } from 'react';

// Minimal luxury particles — just gold dust + subtle sparks
const SYMBOLS = [
  { char: '·', color: '#D4AF37', weight: 6 },
  { char: '·', color: '#8B6914', weight: 4 },
  { char: '✦', color: '#D4AF37', weight: 1 },
];

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
      size: 8 + Math.random() * 10,
      duration: 22 + Math.random() * 24,
      delay: -Math.random() * 40,
      drift: (Math.random() - 0.5) * 80,
      opacity: 0.08 + Math.random() * 0.18,
    };
  });
}

export function FloatingBg({ density = 'low' }) {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);

  const count = density === 'low' ? 12 : density === 'high' ? 28 : 18;

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
          animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          '--drift': `${p.drift}px`,
          willChange: 'transform',
          userSelect: 'none',
        }}>{p.char}</span>
      ))}
    </div>
  );
}

// Strict luxury loading screen — gold rings + serif name only
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('loader_seen_v2');
    if (seen) {
      setVisible(false);
      return;
    }
    const minTime = setTimeout(() => setFading(true), 1700);
    const unmount = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('loader_seen_v2', '1');
    }, 2200);
    return () => {
      clearTimeout(minTime);
      clearTimeout(unmount);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'radial-gradient(ellipse at center, #14141A 0%, #08080B 75%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.5s ease',
      pointerEvents: fading ? 'none' : 'auto',
    }}>
      {/* Brand mark — slow rotating gold ring */}
      <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 28 }}>
        {/* Outer subtle gold arc */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(212,175,55,0.45) 90deg, transparent 180deg, rgba(212,175,55,0.25) 270deg, transparent 360deg)',
          animation: 'loaderRotate 4s linear infinite',
        }} />
        {/* Inner ring counter-rotating */}
        <div style={{
          position: 'absolute', inset: 6,
          borderRadius: '50%',
          background: 'conic-gradient(from 180deg, transparent 0deg, rgba(212,175,55,0.3) 60deg, transparent 120deg, rgba(212,175,55,0.5) 240deg, transparent 300deg)',
          animation: 'loaderRotateReverse 6s linear infinite',
          filter: 'blur(0.5px)',
        }} />
        {/* Center disc */}
        <div style={{
          position: 'absolute', inset: 14,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #1B1B22 0%, #08080B 100%)',
          border: '1px solid rgba(212,175,55,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Two interlocking rings — wedding/union mark */}
          <svg width="46" height="34" viewBox="0 0 56 42" fill="none" style={{
            filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.4))',
          }}>
            <defs>
              <linearGradient id="ld_g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D4AF37"/>
                <stop offset="1" stopColor="#8B6914"/>
              </linearGradient>
            </defs>
            <circle cx="18" cy="21" r="13" stroke="url(#ld_g)" strokeWidth="2" fill="none"/>
            <circle cx="38" cy="21" r="13" stroke="url(#ld_g)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Brand label — serif italic, very restrained */}
      <div style={{
        fontSize: 11, fontWeight: 600, color: '#8B6914',
        letterSpacing: '0.32em', textTransform: 'uppercase',
        marginBottom: 10,
        opacity: 0,
        animation: 'loaderFade 0.9s ease 0.3s forwards',
      }}>
        Агентство знакомств
      </div>
      <div className="font-display" style={{
        fontSize: 22, fontWeight: 500, color: '#E8D9B8',
        marginBottom: 28, letterSpacing: '0.02em',
        opacity: 0,
        animation: 'loaderFade 0.9s ease 0.45s forwards',
      }}>
        Асем Альмурзиева
      </div>

      {/* Subtle dot loader */}
      <div style={{
        display: 'flex', gap: 10,
        opacity: 0,
        animation: 'loaderFade 0.7s ease 0.7s forwards',
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 5, height: 5, borderRadius: '50%',
            background: '#D4AF37',
            animation: `loaderDot 1.6s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

// Section gold spark — tiny ambient details
export function SectionSpark() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <span className="ember" style={{ position: 'absolute', top: '12%', left: '6%', fontSize: 12, color: '#D4AF37', opacity: 0.25 }}>·</span>
      <span className="ember" style={{ position: 'absolute', top: '22%', right: '9%', fontSize: 10, color: '#D4AF37', opacity: 0.3, animationDelay: '0.5s' }}>·</span>
      <span className="ember" style={{ position: 'absolute', bottom: '18%', left: '12%', fontSize: 10, color: '#D4AF37', opacity: 0.2, animationDelay: '1s' }}>·</span>
      <span className="ember" style={{ position: 'absolute', bottom: '24%', right: '14%', fontSize: 12, color: '#D4AF37', opacity: 0.28, animationDelay: '1.5s' }}>·</span>
    </div>
  );
}
