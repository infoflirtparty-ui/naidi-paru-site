import Link from 'next/link';

// Prominent cross-link card between the two services
export function SiteSwitcher({ target }) {
  // target: 'asem' | 'men'
  const isAsem = target === 'asem';

  const config = isAsem
    ? {
        href: '/asem',
        badge: 'Для девушек',
        title: 'Программа Асем',
        subtitle: 'Стать женщиной, которую выбирают',
        gradient: 'linear-gradient(135deg, #D4AF37, #FF4D8D)',
        borderColor: 'rgba(212,175,55,0.3)',
        bg: 'linear-gradient(145deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))',
        icon: '✨',
      }
    : {
        href: '/men',
        badge: 'Для мужчин',
        title: 'Найди Пару',
        subtitle: 'Закрытая платформа знакомств',
        gradient: 'linear-gradient(135deg, #FF4D8D, #A855F7)',
        borderColor: 'rgba(255,77,141,0.3)',
        bg: 'linear-gradient(145deg, rgba(255,77,141,0.06), rgba(168,85,247,0.03))',
        icon: '🔥',
      };

  return (
    <Link href={config.href} className="switcher-link"
      style={{
        display: 'block',
        padding: 20,
        borderRadius: 20,
        background: config.bg,
        border: `1.5px solid ${config.borderColor}`,
        textDecoration: 'none',
        color: 'white',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 54, height: 54, borderRadius: 16,
          background: config.gradient, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 26, flexShrink: 0,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        }}>{config.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{config.badge}</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{config.title}</div>
          <div style={{ fontSize: 13, color: '#A0A0C0' }}>{config.subtitle}</div>
        </div>
        <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A0A0C0" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Top navigation bar: shows "back to hub" + link to other service
export function TopNav({ current, brandLabel, brandColor = '#FF4D8D' }) {
  // current: 'men' | 'asem' | 'hub'
  const otherHref = current === 'asem' ? '/men' : '/asem';
  const otherLabel = current === 'asem' ? 'Для мужчин' : 'Для девушек';

  return (
    <nav style={{ padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      {/* Left: home + brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <Link href="/" aria-label="На главную" style={{
          width: 38, height: 38, borderRadius: 12, display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
          textDecoration: 'none',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A0A0C0" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 12,
            background: current === 'asem' ? 'linear-gradient(135deg, #D4AF37, #FF4D8D)' : 'linear-gradient(135deg, #FF4D8D, #A855F7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0,
          }}>{current === 'asem' ? '✨' : '🤍'}</div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: current === 'asem' ? '0.05em' : '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {brandLabel}
          </span>
        </div>
      </div>

      {/* Right: link to other service */}
      <Link href={otherHref}
        style={{
          fontSize: 12, color: brandColor, textDecoration: 'none',
          padding: '8px 14px',
          background: `${brandColor}15`,
          border: `1px solid ${brandColor}33`,
          borderRadius: 20, fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0,
          whiteSpace: 'nowrap',
        }}>
        {otherLabel}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
      </Link>
    </nav>
  );
}
