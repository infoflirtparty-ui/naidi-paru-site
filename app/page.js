import Link from 'next/link';
import { Reveal, Counter, FAQItem, StickyCTA } from './components';
import { FloatingBg, LoadingScreen, SectionSpark } from './FloatingBg';
import { VideoCard, PressCardLink } from './VideoCard';

export const metadata = {
  title: 'Агентство знакомств Асем Альмурзиевой — персональный подбор пары',
  description: 'Закрытая система подбора пары для серьёзных отношений. 10 лет на рынке. 172 созданные пары. Гарантия результата.',
};

const WHATSAPP_URL = 'https://wa.me/77016746622?text=Здравствуйте!%20Хочу%20узнать%20о%20подборе%20пары';
const TALLY_URL = 'https://tally.so/r/VLJNAg';
const INSTAGRAM_URL = 'https://www.instagram.com/bai_kyzy?igsh=NGkzM2QxY2dvZnU1&utm_source=qr';

function BrandRings({ size = 36 }) {
  const w = size, h = Math.round(size * 0.75);
  return (
    <svg width={w} height={h} viewBox="0 0 56 42" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brG1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E5C158"/>
          <stop offset="1" stopColor="#8B6914"/>
        </linearGradient>
      </defs>
      <circle cx="18" cy="21" r="14" stroke="url(#brG1)" strokeWidth="2.5" fill="none"/>
      <circle cx="38" cy="21" r="14" stroke="url(#brG1)" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 18, color = '#08080B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18, color = '#E8D9B8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function AgencyLanding() {
  return (
    <div style={{ color: '#E8D9B8', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <LoadingScreen />

      {/* Ambient golden orbs */}
      <div className="ambient" style={{ top: '-10%', left: '-10%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 70%)', zIndex: 0 }} />
      <div className="ambient" style={{ top: '30%', right: '-15%', width: 650, height: 650, background: 'radial-gradient(circle, rgba(184,131,11,0.18), transparent 70%)', zIndex: 0, animationDelay: '-10s' }} />
      <div className="ambient" style={{ top: '60%', left: '-10%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(229,193,88,0.12), transparent 70%)', zIndex: 0, animationDelay: '-16s' }} />
      <div className="ambient" style={{ bottom: '0%', right: '10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,105,20,0.18), transparent 70%)', zIndex: 0, animationDelay: '-22s' }} />

      <FloatingBg density="low" />

      {/* Decorative gold edge frame (desktop only) */}
      <div className="gold-edge left" />
      <div className="gold-edge right" />

      {/* === LUXURY STICKY HEADER === */}
      <header className="lux-header">
        <div className="lux-header-inner">
          <a href="#top" className="lux-brand">
            <BrandRings size={36} />
            <div className="lux-brand-text">
              <span className="lux-brand-tag">Агентство знакомств</span>
              <span className="lux-brand-name">Асем Альмурзиева</span>
            </div>
          </a>
          <div className="lux-contact">
            <a href={`tel:+77016746622`} className="lux-phone">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +7 701 674 66 22
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lux-cta">
              <WhatsAppIcon size={13} />
              Написать
            </a>
          </div>
        </div>
      </header>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 920, margin: '0 auto', padding: '0 24px' }} id="top">

        {/* Hero brand intro (centered, ceremonial) */}
        <div style={{ padding: '40px 0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <BrandRings size={58} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#B8932F', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 8 }}>
              Агентство знакомств · est. с 2015
            </div>
            <div className="font-display" style={{ fontSize: 26, fontWeight: 500, color: '#F5F2E8', letterSpacing: '0.01em' }}>
              Асем Альмурзиева
            </div>
          </div>
          <div className="ornament" style={{ marginTop: 8 }}>
            <div className="line" />
            <div className="diamond" />
            <div className="line right" />
          </div>
        </div>

        {/* 1. HERO */}
        <section className="fade-in" style={{ padding: '40px 0 72px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '8px 22px', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.3)', fontSize: 13, color: '#D4AF37', marginBottom: 36, fontWeight: 600, letterSpacing: '0.22em' }}>
            ЗАКРЫТАЯ СИСТЕМА
          </div>

          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(36px, 8vw, 60px)', fontWeight: 600, lineHeight: 1.05, marginBottom: 28, letterSpacing: '-0.025em', color: '#F5F2E8' }}>
            Персональный подбор пары<br/>
            для <em style={{ color: '#D4AF37', fontStyle: 'italic', fontWeight: 600 }}>серьёзных отношений</em>
          </h1>

          <hr className="gold-divider" style={{ maxWidth: 100, margin: '0 auto 32px' }} />

          <p style={{ fontSize: 18, color: '#F5F2E8', lineHeight: 1.55, maxWidth: 620, margin: '0 auto 16px', fontWeight: 500, letterSpacing: '0.005em' }}>
            Это не сайт знакомств.
          </p>
          <p style={{ fontSize: 17, color: '#C8C8D0', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 18px' }}>
            Это закрытая система подбора <span style={{ color: '#F5F2E8', fontWeight: 500 }}>идеальной пары под ваш уровень жизни</span> с гарантией.
          </p>
          <p className="font-display" style={{ fontSize: 17, color: '#D4AF37', lineHeight: 1.6, maxWidth: 580, margin: '0 auto 44px', fontStyle: 'italic', letterSpacing: '0.005em' }}>
            Мы экономим вам месяцы жизни и приводим к результату быстрее
          </p>

          {/* Hero stats — MASSIVE numbers for WOW */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, maxWidth: 620, margin: '0 auto 44px', background: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.22)' }}>
            {[
              { value: 10, suffix: ' лет', label: 'на рынке' },
              { value: 172, suffix: '', label: 'созданные пары' },
              { value: 344, suffix: '', label: 'соединённые судьбы' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '28px 12px 22px', textAlign: 'center', background: '#0E0E13',
              }}>
                <div className="font-display" style={{ fontSize: 'clamp(38px, 9vw, 56px)', fontWeight: 600, color: '#D4AF37', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 12, color: '#B8932F', marginTop: 14, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '22px 48px', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 16px 56px rgba(212,175,55,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            <WhatsAppIcon size={18} />
            Написать менеджеру
          </a>
          <p style={{ marginTop: 18, fontSize: 13, color: '#9A9AA5', letterSpacing: '0.16em' }}>WHATSAPP · ОТВЕТ В ТЕЧЕНИЕ ЧАСА</p>
        </section>

        {/* 2. STATUS BLOCK */}
        <Reveal>
          <section style={{ padding: '50px 0', position: 'relative' }}>
            <SectionSpark />
            <div className="surface" style={{ padding: 38 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginBottom: 28 }}>
                <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(212,175,55,0.45)', boxShadow: '0 12px 40px rgba(212,175,55,0.22)' }}>
                  <img src="/asem.jpg" alt="Асем Альмурзиева" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: '#B8932F', fontWeight: 600, letterSpacing: '0.22em', marginBottom: 10, textTransform: 'uppercase' }}>Статус эксперта</div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5.2vw, 32px)', fontWeight: 600, color: '#F5F2E8', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                    Главная сваха <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>Казахстана</em>
                  </h2>
                </div>
              </div>

              <hr className="gold-divider" style={{ marginBottom: 22 }} />

              <p style={{ fontSize: 17, color: '#F5F2E8', lineHeight: 1.65, marginBottom: 22, fontWeight: 400 }}>
                <span style={{ fontWeight: 600 }}>Асем Альмурзиева</span> — главная сваха Казахстана, которой доверяют мужчины высокого уровня.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, fontSize: 15.5, color: '#C8C8D0', lineHeight: 1.65 }}>
                  <span style={{ color: '#D4AF37', fontSize: 18, lineHeight: 1.4, flexShrink: 0, fontFamily: 'serif', marginTop: -2 }}>—</span>
                  <span>Её приглашают <span style={{ color: '#F5F2E8', fontWeight: 500 }}>крупнейшие СМИ Казахстана</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, fontSize: 15.5, color: '#C8C8D0', lineHeight: 1.65 }}>
                  <span style={{ color: '#D4AF37', fontSize: 18, lineHeight: 1.4, flexShrink: 0, fontFamily: 'serif', marginTop: -2 }}>—</span>
                  <span>Работает с <span style={{ color: '#F5F2E8', fontWeight: 500 }}>предпринимателями, руководителями и публичными людьми</span></span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. О НАС ГОВОРЯТ */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: 32 }}>
              <SectionLabel>О нас пишут и говорят</SectionLabel>
              <h2 className="font-display" style={{ fontSize: 'clamp(26px, 5.4vw, 34px)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#F5F2E8', marginBottom: 14 }}>
                Видеоинтервью и публикации в СМИ
              </h2>
              <p style={{ fontSize: 15, color: '#9A9AA5', lineHeight: 1.65, maxWidth: 600 }}>
                Нажмите, чтобы посмотреть видео или прочитать статью.
              </p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <VideoCard
                big
                id="UMpcqWd2z5c"
                channel="Аман Есен · подкаст"
                title="Сваха №1 в Казахстане. Асем Альмурзиева — как перестать выбирать абьюзеров"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 32 }}>
              <VideoCard id="B3eEIb5dxlw" channel="Almaty TV" title="Каково быть свахой в Казахстане?" />
              <VideoCard id="hcvzPsigwxM" channel="Агентство Знакомств" title="Агентство эксклюзивных знакомств Асем Альмурзиевой" />
              <VideoCard id="z5yrWPIp0n4" channel="Адина Сабирова · подкаст" title="Где познакомиться с достойным/ой партнёром в Алматы?" />
              <VideoCard id="tTj5EzRysq4" channel="Адина Сабирова · подкаст" title="Вечеринки знакомств в Алматы — Flirt Party" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <PressCardLink href="https://www.nur.kz/society/1781811-kazahstanskaa-svaha-rasskazala-kakie-devuski-nravatsa-millioneram/" src="/media/press-nur.jpg" outlet="NUR.KZ" title="«Главная сваха страны Асем Альмурзиева рассказала, какие девушки нравятся миллионерам»" />
              <PressCardLink href="https://www.zakon.kz/sovety/4960582-kak-nayti-muzha-millionera.html" src="/media/press-zakon.jpg" outlet="zakon.kz" title="«Как найти мужа-миллионера. Казахстанские реалии»" sub="Сваха, которой доверяют свою судьбу крупные миллионеры Казахстана" />
              <PressCardLink href="https://www.styleofeurasia.com/news/item/1762-marry-a-millionaire" src="/media/press-eurasia.jpg" outlet="Style of Eurasia" title="«Marry a Millionaire»" sub="Казахстанская сваха нашла эксклюзивный способ выдачи невест замуж за миллионеров" />
              <PressCardLink href="https://the-steppe.com/lyudi/brachnoe-agentsvo" outlet="The Steppe" title="«Свахи 80 lvl: Найти свою любовь через агентство знакомств»" sub="Большое интервью о том, как работает агентство эксклюзивных знакомств" />
            </div>
          </section>
        </Reveal>

        {/* 4. КАК ЭТО РАБОТАЕТ */}
        <Reveal>
          <section style={{ padding: '70px 0' }}>
            <SectionLabel>Как это работает</SectionLabel>
            <p className="font-display" style={{ fontSize: 16, color: '#9A9AA5', lineHeight: 1.65, marginBottom: 32, maxWidth: 600, fontStyle: 'italic' }}>
              Минимализм. Без воды.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.22)' }}>
              {[
                'Вы оставляете запрос',
                'Мы изучаем ваши критерии',
                'Подбираем женщин из закрытой базы',
                'Организуем встречи',
              ].map((t, i) => (
                <div key={i} style={{ background: '#0E0E13', padding: '32px 26px' }}>
                  <div className="font-display" style={{ fontSize: 36, fontWeight: 500, color: '#D4AF37', letterSpacing: '-0.02em', marginBottom: 18, fontStyle: 'italic', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#F5F2E8', lineHeight: 1.45 }}>{t}</div>
                </div>
              ))}
            </div>
            <p className="font-display" style={{ marginTop: 36, fontSize: 'clamp(20px, 4.4vw, 26px)', fontStyle: 'italic', color: '#F5F2E8', textAlign: 'center', lineHeight: 1.4, fontWeight: 500 }}>
              Вы не ищете. <em style={{ color: '#D4AF37' }}>Мы делаем всё за вас.</em>
            </p>
          </section>
        </Reveal>

        {/* 5. РЕЗУЛЬТАТЫ */}
        <Reveal>
          <section style={{ padding: '70px 0', position: 'relative' }}>
            <SectionSpark />
            <SectionLabel>Результаты</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5.6vw, 38px)', fontWeight: 600, lineHeight: 1.12, marginBottom: 32, letterSpacing: '-0.02em', color: '#F5F2E8' }}>
              Результаты, за которыми<br/>
              <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>к нам приходят</em>
            </h2>

            <div className="surface" style={{ padding: 38 }}>
              <div style={{ fontSize: 12, color: '#B8932F', fontWeight: 700, letterSpacing: '0.22em', marginBottom: 28, textTransform: 'uppercase' }}>За 10 лет работы</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 32 }}>
                {[
                  ['172', 'пары, которые построили семью'],
                  ['344', 'человека нашли друг друга'],
                  ['тысячи', 'проведённых знакомств'],
                ].map(([num, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 26, paddingBottom: i < 2 ? 22 : 0, borderBottom: i < 2 ? '1px solid rgba(212,175,55,0.12)' : 'none' }}>
                    <div className="font-display" style={{ fontSize: 'clamp(36px, 7vw, 50px)', fontWeight: 600, color: '#D4AF37', letterSpacing: '-0.03em', minWidth: 110, lineHeight: 1, fontStyle: 'italic' }}>{num}</div>
                    <div style={{ fontSize: 16, color: '#F5F2E8', lineHeight: 1.5, fontWeight: 400 }}>{text}</div>
                  </div>
                ))}
              </div>

              <hr className="gold-divider" style={{ margin: '28px 0' }} />

              <p className="font-display" style={{ fontSize: 19, color: '#F5F2E8', lineHeight: 1.4, fontWeight: 500, marginBottom: 8 }}>
                Мы не продаём процесс.
              </p>
              <p className="font-display" style={{ fontSize: 22, color: '#D4AF37', lineHeight: 1.4, fontStyle: 'italic', fontWeight: 500 }}>
                Мы даём результат.
              </p>
            </div>

            <div style={{ marginTop: 22, padding: 32, background: 'linear-gradient(135deg, rgba(212,175,55,0.06), transparent)', border: '1px solid rgba(212,175,55,0.22)', textAlign: 'center' }}>
              <p className="font-display" style={{ fontSize: 'clamp(17px, 3.8vw, 20px)', color: '#F5F2E8', lineHeight: 1.5, marginBottom: 12, fontWeight: 500 }}>
                Нас выбирают не потому что «интересно».
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#D4AF37', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.4, marginBottom: 18 }}>
                Нас выбирают потому что это работает.
              </p>
              <p style={{ fontSize: 14, color: '#9A9AA5', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
                Именно поэтому наши клиенты готовы платить за результат, а не тратить годы на самостоятельный поиск.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 6. ГЛАВНЫЙ СМЫСЛ */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Главный смысл</SectionLabel>
            <div className="surface" style={{ padding: 38 }}>
              <p className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 30px)', fontWeight: 600, lineHeight: 1.25, color: '#F5F2E8', marginBottom: 10, letterSpacing: '-0.02em' }}>
                Вы платите не за знакомства.
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(20px, 4.4vw, 24px)', fontWeight: 500, color: '#9A9AA5', marginBottom: 32, lineHeight: 1.35 }}>
                Вы платите за:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { num: 'I', title: 'Экономию времени', desc: 'Месяцы и годы, которые вы бы потратили на самостоятельный поиск.' },
                  { num: 'II', title: 'Точный подбор', desc: 'Только женщины, которые соответствуют вашим критериям.' },
                  { num: 'III', title: 'Выход в отношения без лишних этапов', desc: 'Никаких многомесячных переписок и догадок.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: 26, alignItems: 'flex-start' }}>
                    <div className="font-display" style={{ fontSize: 28, color: '#D4AF37', fontStyle: 'italic', fontWeight: 500, minWidth: 42, lineHeight: 1.05, paddingTop: 4 }}>{item.num}</div>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 600, color: '#F5F2E8', marginBottom: 8, letterSpacing: '-0.005em' }}>{item.title}</div>
                      <p style={{ fontSize: 15, color: '#9A9AA5', lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 7. ПАКЕТЫ */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Пакеты услуг</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <Package
                vip
                tag="Премиум · VIP"
                title="Подбор под ключ"
                subtitle="Для мужчин, которым важен результат"
                includes={[
                  'Неограниченное количество знакомств',
                  'Персональный подбор',
                  'Сопровождение',
                  'Приоритетная работа',
                ]}
                guarantee="Если мы не подберём женщин под ваши критерии — мы возвращаем деньги."
                guaranteeFoot="Основано на 10-летнем опыте и 172 созданных парах."
                price="от 2 500 000 тг"
                cta="Написать менеджеру"
                href={WHATSAPP_URL}
              />

              <Package
                tag="Лично с Асем"
                title="Работа лично с главной свахой"
                subtitle="Вы работаете напрямую с Асем"
                includes={[
                  'Прямое участие Асем в подборе',
                  'Доступ к более сильным кандидаткам',
                  'Глубокий анализ совместимости',
                  'Корректировка стратегии в отношениях',
                ]}
                price="от 5 000 000 тг"
                cta="Начать с Асем"
                href={WHATSAPP_URL}
              />

              <Package
                tag="За количество знакомств"
                title="Знакомства по фиксированной цене"
                subtitle="Для тех, кто хочет начать"
                includes={[
                  'Подбор под критерии',
                  'Оплата за количество знакомств',
                ]}
                guarantee="Каждая девушка соответствует вашим критериям."
                tiers={[
                  { label: '3 знакомства', price: '255 000 тг' },
                  { label: '5 знакомств', price: '365 000 тг' },
                ]}
                extra="Лично с Асем: +30% к стоимости пакета"
                cta="Написать менеджеру"
                href={WHATSAPP_URL}
              />
            </div>
          </section>
        </Reveal>

        {/* 8. ПРО ДЕВУШЕК */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Про девушек</SectionLabel>
            <div className="surface" style={{ padding: 38 }}>
              <h3 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 30px)', fontWeight: 600, lineHeight: 1.25, marginBottom: 32, color: '#F5F2E8', letterSpacing: '-0.02em' }}>
                Все женщины в нашей базе:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.22)' }}>
                {[
                  { num: '01', t: 'Проходят отбор' },
                  { num: '02', t: 'Настроены на семью' },
                  { num: '03', t: 'Реальные' },
                  { num: '04', t: 'Соответствуют уровню' },
                ].map(it => (
                  <div key={it.t} style={{ padding: '28px 18px 24px', background: '#0E0E13', textAlign: 'center' }}>
                    <div className="font-display" style={{ fontSize: 22, color: '#D4AF37', fontStyle: 'italic', marginBottom: 14, fontWeight: 500 }}>{it.num}</div>
                    <div style={{ fontSize: 15, color: '#F5F2E8', fontWeight: 500, letterSpacing: '0.005em' }}>{it.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 9. ДЛЯ КОГО */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Для кого</SectionLabel>
            <div className="surface" style={{ padding: 38 }}>
              <p style={{ fontSize: 14, color: '#B8932F', marginBottom: 26, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Для мужчин, которые:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  'Ценят своё время',
                  'Хотят серьёзные отношения',
                  'Не готовы тратить месяцы на поиск',
                ].map(t => (
                  <div key={t} className="font-display" style={{ display: 'flex', gap: 18, fontSize: 'clamp(18px, 4vw, 22px)', color: '#F5F2E8', lineHeight: 1.4, fontWeight: 500, alignItems: 'baseline' }}>
                    <span style={{ color: '#D4AF37', flexShrink: 0, fontStyle: 'italic', fontSize: 22 }}>—</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 10. ИСТОРИИ КЛИЕНТОВ */}
        <Reveal>
          <section style={{ padding: '70px 0', position: 'relative' }}>
            <SectionSpark />
            <SectionLabel>Истории клиентов</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 5.4vw, 34px)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#F5F2E8', marginBottom: 32 }}>
              Что говорят наши клиенты
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {STORIES.map((s, i) => (
                <Reveal key={i} delay={i * 70}>
                  <Story story={s} />
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* 11. FAQ */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Частые вопросы</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem accent="#D4AF37" q="Вы берёте всех клиентов?" a="Нет. Мы работаем только с теми, кто проходит предварительный отбор. Это гарантирует качество с обеих сторон." />
              <FAQItem accent="#D4AF37" q="Вы гарантируете результат?" a="По пакету «Премиум»: если мы не подберём женщин под ваши критерии — возвращаем деньги. Сами отношения зависят от взаимной симпатии, но шансы в нашей среде в разы выше." />
              <FAQItem accent="#D4AF37" q="Как вы проверяете женщин?" a="Личное интервью, проверка документов, оценка психологической стабильности и серьёзности намерений. Случайных людей у нас нет." />
              <FAQItem accent="#D4AF37" q="Конфиденциально ли это?" a="Абсолютно. Все данные клиентов защищены. Информация о вас не передаётся никому, кроме отобранных под вас кандидаток." />
              <FAQItem accent="#D4AF37" q="Можно ли вернуть деньги?" a="По пакету «Премиум» — да, если мы не подобрали кандидаток. По остальным пакетам услуга носит нематериальный характер." />
            </div>
          </section>
        </Reveal>

        {/* 12. ЗАКРЫТИЕ */}
        <Reveal>
          <section style={{ padding: '90px 0 60px', textAlign: 'center', position: 'relative' }}>
            <SectionSpark />
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5.4vw, 38px)', fontWeight: 600, lineHeight: 1.2, marginBottom: 22, color: '#F5F2E8', letterSpacing: '-0.025em' }}>
              Вы можете продолжать<br/>искать сами
            </h2>
            <p className="font-display" style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 600, fontStyle: 'italic', marginBottom: 18, color: '#D4AF37', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Или доверить это профессионалам
            </p>
            <p style={{ fontSize: 16, color: '#9A9AA5', marginBottom: 44, lineHeight: 1.6, letterSpacing: '0.02em' }}>
              И получить результат быстрее
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '24px 60px', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 18px 64px rgba(212,175,55,0.45)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              <WhatsAppIcon size={20} />
              Написать менеджеру
            </a>
            <p style={{ marginTop: 20, fontSize: 13, color: '#9A9AA5', letterSpacing: '0.18em' }}>+7 701 674 66 22 · WHATSAPP</p>
          </section>
        </Reveal>

        {/* CROSS-LINKS */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ fontSize: 12, color: '#B8932F', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>Дополнительные направления</div>
            </div>
            <div style={{ display: 'grid', gap: 1, gridTemplateColumns: '1fr', background: 'rgba(212,175,55,0.18)', border: '1px solid rgba(212,175,55,0.22)' }}>
              <ServiceLink href="/men" badge="Для мужчин" title="Найди Пару" subtitle="Telegram-приложение · 10 000 ₸ за 30 анкет" />
              <ServiceLink href="/asem" badge="Для девушек" title="Программа Асем" subtitle="Стать женщиной, которую выбирают · от 37 500 ₸/мес" />
            </div>
          </section>
        </Reveal>

        {/* SMALL: бесплатная анкета */}
        <Reveal>
          <section style={{ padding: '24px 0 48px' }}>
            <div style={{ padding: 22, border: '1px dashed rgba(212,175,55,0.18)', textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
              <p style={{ fontSize: 13, color: '#9A9AA5', lineHeight: 1.7, marginBottom: 10, letterSpacing: '0.03em' }}>
                Если вы пока не готовы к персональному сопровождению —
              </p>
              <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#D4AF37', textDecoration: 'underline', textDecorationColor: 'rgba(212,175,55,0.3)', textUnderlineOffset: 5, letterSpacing: '0.04em', fontWeight: 500 }}>
                заполните бесплатную анкету
                <span style={{ fontSize: 11 }}>›</span>
              </a>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '50px 0 130px', borderTop: '1px solid rgba(212,175,55,0.15)', marginTop: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <BrandRings size={36} />
              <div style={{ fontSize: 11, color: '#B8932F', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Агентство знакомств</div>
              <div className="font-display" style={{ fontSize: 19, fontWeight: 500, color: '#F5F2E8', letterSpacing: '0.02em' }}>Асем Альмурзиева</div>
            </div>

            <div>
              <div style={{ fontSize: 12, color: '#9A9AA5', fontWeight: 600, letterSpacing: '0.24em', marginBottom: 18, textTransform: 'uppercase' }}>Контакты</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#D4AF37', textDecoration: 'none', padding: '12px 22px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <WhatsAppIcon size={14} color="#D4AF37" />
                  WhatsApp
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#E8D9B8', textDecoration: 'none', padding: '12px 22px', background: 'rgba(232,217,184,0.04)', border: '1px solid rgba(232,217,184,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <InstagramIcon size={14} />
                  Instagram
                </a>
                <a href="https://t.me/Naidiparu2_bot" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#9A9AA5', textDecoration: 'none', padding: '12px 22px', background: 'rgba(122,122,133,0.05)', border: '1px solid rgba(122,122,133,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Telegram
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 13, flexWrap: 'wrap', color: '#9A9AA5', letterSpacing: '0.04em' }}>
              <Link href="/men" style={{ color: '#9A9AA5', textDecoration: 'none' }}>Для мужчин</Link>
              <span>·</span>
              <Link href="/asem" style={{ color: '#9A9AA5', textDecoration: 'none' }}>Для девушек</Link>
              <span>·</span>
              <Link href="/oferta" style={{ color: '#9A9AA5', textDecoration: 'none' }}>Публичная оферта</Link>
              <span>·</span>
              <Link href="/privacy" style={{ color: '#9A9AA5', textDecoration: 'none' }}>Конфиденциальность</Link>
            </div>

            <p style={{ fontSize: 12, color: '#6B6B73', letterSpacing: '0.08em' }}>© {new Date().getFullYear()} Агентство знакомств Асем Альмурзиевой</p>
          </div>
        </footer>
      </div>

      <StickyCTA href={WHATSAPP_URL} label="Написать менеджеру" accent="#D4AF37" accentTo="#8B6914" textColor="#08080B" />
    </div>
  );
}

const STORIES = [
  { name: 'Ерлан', age: 39, role: 'инвестор, Алматы', lang: 'ru', before: 'Не было времени на знакомства, устал от случайных встреч', after: 'Через 3 недели познакомился с девушкой, с которой сейчас строю серьёзные отношения', quote: 'Я не верил в такие сервисы. Решил попробовать из-за рекомендаций. Понравилось, что не тратится время на пустые переписки — сразу дают девушек моего уровня. Сейчас общаюсь с одной, и это впервые за долгое время, когда мне спокойно и интересно.' },
  { name: 'Нурлан', age: 44, role: 'владелец строительной компании, Астана', lang: 'ru', before: 'Развод, 2 года без нормальных отношений', after: 'Встретил женщину, с которой хочу семью', quote: 'Для меня было важно, чтобы девушка понимала мой образ жизни и уровень ответственности. Через агентство познакомился с женщиной, с которой совпали ценности. Без лишних игр, всё по-взрослому.' },
  { name: 'Thomas', age: 52, role: 'real estate investor, Berlin', lang: 'en', before: 'Tried dating apps, wasted time', after: 'Met a woman aligned with my lifestyle', quote: 'What I appreciated is the filtering. No unnecessary conversations, no randomness. The introduction was precise. We met quickly, and it made sense from the first meeting.' },
  { name: 'Julien', age: 38, role: 'entrepreneur, Paris', lang: 'en', before: 'Busy schedule, no time for dating', after: 'Met a woman I actually see long-term potential with', quote: 'This is not about "dating". It\'s more like a curated introduction. That\'s the difference. You meet someone who already fits your criteria.' },
  { name: 'Daniel', age: 45, role: 'investment fund partner, Dubai', lang: 'en', before: 'Private lifestyle, no interest in apps', after: 'Met a woman through private introduction', quote: 'I don\'t use public platforms. This felt different — more private, more aligned with my level. Worth it.' },
];

function Story({ story }) {
  const beforeLabel = story.lang === 'en' ? 'BEFORE' : 'ДО';
  const afterLabel = story.lang === 'en' ? 'AFTER' : 'ПОСЛЕ';
  return (
    <div className="surface" style={{ padding: 32 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 22, paddingBottom: 20, borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="font-display" style={{ fontSize: 24, fontWeight: 600, color: '#F5F2E8', letterSpacing: '-0.01em' }}>
          {story.name}, <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>{story.age}</span>
        </div>
        <div style={{ fontSize: 13, color: '#9A9AA5', letterSpacing: '0.06em' }}>{story.role}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: '#9A9AA5', fontWeight: 700, letterSpacing: '0.22em', minWidth: 64, paddingTop: 4 }}>{beforeLabel}</span>
          <p style={{ fontSize: 15, color: '#C8C8D0', lineHeight: 1.65, flex: 1, minWidth: 200 }}>{story.before}</p>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.22em', minWidth: 64, paddingTop: 4 }}>{afterLabel}</span>
          <p style={{ fontSize: 15, color: '#F5F2E8', lineHeight: 1.65, flex: 1, minWidth: 200 }}>{story.after}</p>
        </div>
      </div>

      <hr className="gold-divider" style={{ marginBottom: 22 }} />

      <p className="font-display" style={{ fontSize: 16, color: '#E8D9B8', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 400 }}>
        «{story.quote}»
      </p>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ marginBottom: 26, display: 'flex', alignItems: 'center', gap: 18 }}>
      <div style={{ width: 44, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
      <h2 style={{ fontSize: 13, fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.22em' }}>{children}</h2>
    </div>
  );
}

function ServiceLink({ href, badge, title, subtitle }) {
  return (
    <Link href={href} className="lift" style={{
      display: 'block', padding: 26, background: '#0E0E13',
      textDecoration: 'none', color: '#E8D9B8',
      border: '1px solid rgba(212,175,55,0.05)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: '#B8932F', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{badge}</div>
          <div className="font-display" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6, color: '#F5F2E8', letterSpacing: '-0.01em' }}>{title}</div>
          <div style={{ fontSize: 14, color: '#9A9AA5' }}>{subtitle}</div>
        </div>
        <span style={{ fontSize: 22, color: '#D4AF37', flexShrink: 0, fontFamily: 'serif', fontStyle: 'italic' }}>›</span>
      </div>
    </Link>
  );
}

function Package({ tag, title, subtitle, includes, guarantee, guaranteeFoot, tiers, extra, price, cta, vip, href }) {
  return (
    <div className="surface" style={{
      position: 'relative',
      borderColor: vip ? 'rgba(212,175,55,0.45)' : 'rgba(212,175,55,0.14)',
      boxShadow: vip ? '0 28px 72px rgba(212,175,55,0.2), inset 0 0 0 1px rgba(212,175,55,0.18)' : '0 14px 44px rgba(0,0,0,0.4)',
    }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      {vip && (
        <div style={{ position: 'absolute', top: 24, right: 28, fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          ★ Основной
        </div>
      )}

      <div style={{ padding: 36 }}>
        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.28em', marginBottom: 14, textTransform: 'uppercase' }}>{tag}</div>
          <h3 className="font-display" style={{ fontSize: 'clamp(22px, 4.6vw, 28px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F2E8', marginBottom: 10 }}>
            {title}
          </h3>
          <p style={{ fontSize: 15, color: '#9A9AA5', lineHeight: 1.6 }}>{subtitle}</p>
        </div>

        <hr className="gold-divider" style={{ marginBottom: 26 }} />

        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 11, color: '#9A9AA5', fontWeight: 700, letterSpacing: '0.24em', marginBottom: 18, textTransform: 'uppercase' }}>Что входит</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {includes.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, fontSize: 15, color: '#F5F2E8', lineHeight: 1.55 }}>
                <span style={{ color: '#D4AF37', fontSize: 16, lineHeight: 1.4, flexShrink: 0, fontFamily: 'serif', marginTop: -1 }}>—</span>{f}
              </div>
            ))}
          </div>
        </div>

        {guarantee && (
          <div style={{ marginBottom: 26, padding: 22, background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.25)' }}>
            <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.28em', marginBottom: 12, textTransform: 'uppercase' }}>Гарантия</div>
            <p className="font-display" style={{ fontSize: 15, color: '#F5F2E8', fontStyle: 'italic', lineHeight: 1.6, fontWeight: 500 }}>
              {guarantee}
            </p>
            {guaranteeFoot && (
              <p style={{ fontSize: 13, color: '#9A9AA5', marginTop: 12, lineHeight: 1.6 }}>
                {guaranteeFoot}
              </p>
            )}
          </div>
        )}

        {tiers && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 18, border: '1px solid rgba(212,175,55,0.22)' }}>
            {tiers.map((t, i) => (
              <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: '#0E0E13', borderTop: i > 0 ? '1px solid rgba(212,175,55,0.12)' : 'none' }}>
                <span style={{ fontSize: 15, color: '#F5F2E8', fontWeight: 500 }}>{t.label}</span>
                <span className="font-display" style={{ fontSize: 20, color: '#D4AF37', fontWeight: 600, letterSpacing: '-0.01em' }}>{t.price}</span>
              </div>
            ))}
          </div>
        )}

        {extra && (
          <div style={{ padding: 16, background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.22)', fontSize: 14, color: '#D4AF37', marginBottom: 26, fontWeight: 500, letterSpacing: '0.02em' }}>
            <span style={{ fontStyle: 'italic', marginRight: 8 }}>+</span> {extra}
          </div>
        )}

        {price && (
          <div style={{ padding: '22px 24px', background: 'rgba(212,175,55,0.04)', borderTop: '1px solid rgba(212,175,55,0.22)', borderBottom: '1px solid rgba(212,175,55,0.22)', marginBottom: 26, textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#9A9AA5', fontWeight: 700, letterSpacing: '0.24em', marginBottom: 8, textTransform: 'uppercase' }}>Стоимость</div>
            <div className="font-display" style={{ fontSize: 'clamp(26px, 5.4vw, 34px)', fontWeight: 600, color: '#D4AF37', letterSpacing: '-0.02em', fontStyle: 'italic' }}>{price}</div>
          </div>
        )}

        <a href={href || WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 18, textAlign: 'center', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.18em', textTransform: 'uppercase', boxShadow: '0 12px 36px rgba(212,175,55,0.4)' }}>
          <WhatsAppIcon size={16} />
          {cta}
        </a>
      </div>
    </div>
  );
}
