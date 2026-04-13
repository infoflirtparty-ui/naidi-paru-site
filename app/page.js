import Link from 'next/link';
import { Reveal, Counter } from './components';

export const metadata = {
  title: 'Найди Пару — два пути к отношениям',
  description: 'Закрытая платформа знакомств для мужчин · Программа трансформации для женщин от Асем.',
};

export default function HubLanding() {
  return (
    <div style={{ background: '#0C0C1D', color: 'white', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated blobs */}
      <div className="blob" style={{ top: '-10%', left: '-15%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(255,77,141,0.25), transparent 70%)', zIndex: 0 }} />
      <div className="blob blob-2" style={{ top: '30%', right: '-20%', width: 650, height: 650, background: 'radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)', zIndex: 0 }} />
      <div className="blob" style={{ bottom: '-10%', left: '20%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)', zIndex: 0, animationDelay: '-12s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', padding: '0 20px' }}>

        {/* Minimal nav */}
        <nav style={{ padding: '20px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #FF4D8D, #A855F7, #D4AF37)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 8px 24px rgba(255,77,141,0.3)' }}>🤍</div>
            <span style={{ fontWeight: 700, fontSize: 17 }}>Найди Пару</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="fade-in" style={{ padding: '50px 0 40px', textAlign: 'center' }}>
          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(255,77,141,0.08)', border: '1px solid rgba(255,77,141,0.25)', borderRadius: 20, fontSize: 12, color: '#FF4D8D', marginBottom: 28, fontWeight: 700, letterSpacing: '0.1em' }}>🤍 ВЫБЕРИ СВОЙ ПУТЬ</div>

          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(40px, 9vw, 68px)', fontWeight: 800, lineHeight: 1.02, marginBottom: 22, letterSpacing: '-0.035em' }}>
            Два пути к <em style={{ background: 'linear-gradient(135deg, #FF4D8D, #A855F7, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 800 }}>счастью</em>
          </h1>

          <p style={{ fontSize: 17, color: '#A0A0C0', lineHeight: 1.55, maxWidth: 560, margin: '0 auto 40px' }}>
            Серьёзная платформа знакомств для мужчин<br/>
            и авторская программа трансформации для женщин
          </p>
        </section>

        {/* TWO PATHS — main CTAs */}
        <section style={{ padding: '20px 0 40px' }}>
          <div style={{ display: 'grid', gap: 18, gridTemplateColumns: '1fr' }}>
            <Reveal delay={0}>
              <PathCard
                href="/men"
                badge="ДЛЯ МУЖЧИН"
                title="Найди Пару"
                subtitle="Закрытая платформа знакомств"
                desc="Только проверенные девушки, которые хотят серьёзных отношений. Без охотниц за деньгами и случайных людей."
                features={['✓ Ручная проверка каждой анкеты', '✓ Подбор под твои критерии', '✓ 30 анкет за 10 000 ₸']}
                gradient="linear-gradient(135deg, #FF4D8D, #A855F7)"
                accent="#FF4D8D"
                icon="🔥"
                cta="Узнать больше"
              />
            </Reveal>

            <Reveal delay={120}>
              <PathCard
                href="/asem"
                badge="ДЛЯ ДЕВУШЕК"
                title="Программа Асем"
                subtitle="Стать женщиной, которую выбирают"
                desc="Авторская система трансформации от Асем. После программы женщины выходят в отношения и создают семью."
                features={['✓ Уроки, разборы, практика', '✓ Личные знакомства с мужчинами', '✓ От 37 500 ₸ в месяц']}
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                accent="#D4AF37"
                icon="✨"
                cta="Узнать больше"
                textColor="#1A1000"
              />
            </Reveal>
          </div>
        </section>

        {/* TRUST STATS */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Нам доверяют</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {[
                { value: 500, suffix: '+', label: 'Человек прошли отбор' },
                { value: 85, suffix: '%', label: 'Находят пару' },
                { value: 10, suffix: '+', label: 'Лет опыта' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '20px 10px', textAlign: 'center',
                  background: 'linear-gradient(145deg, #161630, #1A1A3E)',
                  border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16,
                }}>
                  <div style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, background: 'linear-gradient(135deg, #FF4D8D, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: '#8B8BA8', marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ABOUT */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{
              background: 'linear-gradient(145deg, #161630, #1A1A3E)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20, padding: 28,
            }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>О нас</div>
              <h2 style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 800, marginBottom: 14, lineHeight: 1.3 }}>
                Мы помогаем людям <span style={{ background: 'linear-gradient(135deg, #FF4D8D, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>находить друг друга</span>
              </h2>
              <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.65, marginBottom: 14 }}>
                Более 10 лет мы работаем в сфере серьёзных знакомств. Мы не работаем с потоком — каждый клиент проходит личный подбор или программу. Наш подход: качество вместо количества, результат вместо обещаний.
              </p>
              <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.65 }}>
                Мужчинам мы даём <strong style={{ color: '#FF4D8D' }}>доступ к проверенным анкетам девушек</strong>, женщинам — <strong style={{ color: '#D4AF37' }}>систему, после которой их выбирают</strong>.
              </p>
            </div>
          </section>
        </Reveal>

        {/* HOW TO CHOOSE */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Какое направление выбрать</div>
              <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700 }}>Зависит от того, кто ты</h3>
            </div>
            <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
              <ChooseCard
                href="/men"
                emoji="👨"
                title="Мужчина"
                desc="Ищешь девушку для отношений"
                color="#A855F7"
              />
              <ChooseCard
                href="/asem"
                emoji="👩"
                title="Девушка"
                desc="Хочешь стать той, кого выбирают"
                color="#D4AF37"
              />
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '32px 0 40px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#6B6B8D', marginBottom: 12 }}>© {new Date().getFullYear()} Найди Пару. Все права защищены.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 12 }}>
            <Link href="/men" style={{ color: '#A855F7', textDecoration: 'none' }}>Для мужчин</Link>
            <span style={{ color: '#3A3A5A' }}>·</span>
            <Link href="/asem" style={{ color: '#D4AF37', textDecoration: 'none' }}>Для девушек</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

function PathCard({ href, badge, title, subtitle, desc, features, gradient, accent, icon, cta, textColor = 'white' }) {
  return (
    <Link href={href} className="switcher-link glass" style={{
      display: 'block', textDecoration: 'none', color: 'white',
      borderRadius: 28, overflow: 'hidden',
      borderColor: `${accent}2A`,
      position: 'relative',
      boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${accent}15 inset`,
    }}>
      {/* Gradient accent glow at top */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 2, background: gradient, filter: 'blur(2px)', opacity: 0.8 }} />
      {/* Gradient accent bar on left */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: gradient }} />
      {/* Ambient glow behind icon */}
      <div style={{ position: 'absolute', top: -20, right: -20, width: 200, height: 200, background: `radial-gradient(circle, ${accent}20, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ padding: 28, paddingLeft: 32, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20,
            background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30, flexShrink: 0,
            boxShadow: `0 12px 40px ${accent}66, 0 0 0 1px rgba(255,255,255,0.1) inset`,
          }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, color: accent, fontWeight: 800, letterSpacing: '0.18em', marginBottom: 6 }}>{badge}</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 700, marginBottom: 4, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{title}</h2>
            <div style={{ fontSize: 13, color: '#A0A0C0' }}>{subtitle}</div>
          </div>
        </div>

        <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.65, marginBottom: 18 }}>{desc}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
          {features.map(f => (
            <div key={f} style={{ fontSize: 13, color: '#A0A0C0', paddingLeft: 2 }}>{f}</div>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px', borderRadius: 14,
          background: gradient, color: textColor,
          fontSize: 15, fontWeight: 700,
          boxShadow: `0 10px 32px ${accent}66`,
          letterSpacing: '-0.01em',
        }}>
          {cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </Link>
  );
}

function ChooseCard({ href, emoji, title, desc, color }) {
  return (
    <Link href={href} className="switcher-link" style={{
      display: 'block', textDecoration: 'none', color: 'white',
      padding: 20, borderRadius: 18,
      background: 'linear-gradient(145deg, #161630, #1A1A3E)',
      border: `1px solid ${color}33`,
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 40, marginBottom: 10 }}>{emoji}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#8B8BA8', lineHeight: 1.4 }}>{desc}</div>
    </Link>
  );
}
