'use client';
import { useEffect, useRef, useState } from 'react';

// Scroll-triggered fade-in wrapper
export function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      willChange: 'opacity, transform',
      ...style,
    }}>
      {children}
    </div>
  );
}

// Animated number that counts from 0 to target
export function Counter({ value, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    let raf;
    function tick() {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    tick();
    return () => raf && cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// FAQ accordion item
export function FAQItem({ q, a, accent = '#FF4D8D' }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: 'linear-gradient(145deg, #161630, #1A1A3E)',
      border: `1px solid ${open ? accent + '40' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: 16,
      overflow: 'hidden',
      transition: 'border-color 0.2s ease',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '18px 20px', background: 'none', border: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14,
          color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'left', cursor: 'pointer',
        }}>
        <span>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: open ? accent : 'rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? 'white' : '#A0A0C0'} strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <div style={{ padding: '0 20px 18px', fontSize: 14, color: '#A0A0C0', lineHeight: 1.6 }}>
          {a}
        </div>
      </div>
    </div>
  );
}

// Sticky CTA button on mobile, appears after scrolling
export function StickyCTA({ href, label, accent = '#FF4D8D', accentTo = '#A855F7', textColor = 'white' }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', left: 16, right: 16, bottom: 16, zIndex: 40,
      transform: show ? 'translateY(0)' : 'translateY(120px)',
      opacity: show ? 1 : 0,
      transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
      pointerEvents: show ? 'auto' : 'none',
    }}>
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          maxWidth: 420, margin: '0 auto', padding: '16px 24px',
          background: `linear-gradient(135deg, ${accent}, ${accentTo})`,
          color: textColor, fontSize: 15, fontWeight: 700,
          borderRadius: 16, textDecoration: 'none',
          boxShadow: `0 12px 40px ${accent}66, 0 0 0 1px ${accent}33`,
          backdropFilter: 'blur(10px)',
          gap: 8,
        }}>
        {label} →
      </a>
    </div>
  );
}
