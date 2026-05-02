import Link from 'next/link';
import { Reveal, Counter, FAQItem, StickyCTA } from './components';
import { FloatingBg, LoadingScreen, SectionSpark } from './FloatingBg';
import { VideoCard, PressCardLink } from './VideoCard';

export const metadata = {
  title: 'Агентство знакомств Асем Альмурзиевой — персональный подбор пары',
  description: 'Закрытая система подбора пары для серьёзных отношений. 10 лет на рынке. 172 созданные пары. Гарантия результата.',
};

const WHATSAPP_URL = 'https://wa.me/77014681100?text=Здравствуйте!%20Хочу%20узнать%20о%20подборе%20пары';
const TALLY_URL = 'https://tally.so/r/VLJNAg';

// Brand mark — interlocking rings
function BrandRings({ size = 36 }) {
  const w = size, h = Math.round(size * 0.75);
  return (
    <svg width={w} height={h} viewBox="0 0 56 42" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brG1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D4AF37"/>
          <stop offset="1" stopColor="#B8860B"/>
        </linearGradient>
        <linearGradient id="brG2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF4D8D"/>
          <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
      <circle cx="18" cy="21" r="14" stroke="url(#brG1)" strokeWidth="3" fill="none"/>
      <circle cx="38" cy="21" r="14" stroke="url(#brG2)" strokeWidth="3" fill="none"/>
    </svg>
  );
}

// WhatsApp icon
function WhatsAppIcon({ size = 18, color = '#1A1000' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function AgencyLanding() {
  return (
    <div style={{ background: '#0A0A14', color: 'white', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <LoadingScreen />

      {/* Atmospheric blobs */}
      <div className="blob" style={{ top: '-10%', left: '-10%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 70%)', zIndex: 0 }} />
      <div className="blob blob-2" style={{ top: '40%', right: '-20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,77,141,0.15), transparent 70%)', zIndex: 0 }} />
      <div className="blob" style={{ bottom: '10%', left: '15%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)', zIndex: 0, animationDelay: '-14s' }} />

      <FloatingBg density="normal" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', padding: '0 20px' }}>

        {/* Top nav */}
        <nav style={{ padding: '20px 0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <BrandRings size={44} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              Агентство знакомств
            </div>
            <div className="font-display" style={{ fontSize: 18, fontWeight: 600, color: '#F5E9CF', fontStyle: 'italic', letterSpacing: '0.01em', marginTop: 2 }}>
              Асем Альмурзиева
            </div>
          </div>
        </nav>

        {/* 1. HERO */}
        <section className="fade-in" style={{ padding: '32px 0 50px', textAlign: 'center' }}>
          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, fontSize: 11, color: '#D4AF37', marginBottom: 22, fontWeight: 700, letterSpacing: '0.18em' }}>ЗАКРЫТАЯ СИСТЕМА ПОДБОРА</div>

          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(28px, 6.5vw, 46px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 18, letterSpacing: '-0.025em', color: '#F5E9CF' }}>
            Персональный подбор пары<br/>
            <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 700 }}>для серьёзных отношений</em>
          </h1>

          <p style={{ fontSize: 16, color: '#D4D4E8', lineHeight: 1.55, maxWidth: 580, margin: '0 auto 14px', fontWeight: 500 }}>
            Это не сайт знакомств.
          </p>
          <p style={{ fontSize: 15, color: '#A0A0C0', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 14px' }}>
            Это закрытая система подбора <strong style={{ color: '#F5E9CF' }}>идеальной пары под ваш уровень жизни</strong> с гарантией.
          </p>
          <p className="font-display" style={{ fontSize: 14, color: '#D4AF37', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 32px', fontStyle: 'italic' }}>
            Мы экономим вам месяцы жизни и приводим к результату быстрее
          </p>

          {/* Key stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, maxWidth: 540, margin: '0 auto 32px' }}>
            {[
              { value: 10, suffix: ' лет', label: 'на рынке' },
              { value: 172, suffix: '', label: 'созданные пары' },
              { value: 344, suffix: '', label: 'соединённые судьбы' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '14px 6px', textAlign: 'center',
                background: 'linear-gradient(145deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))',
                border: '1px solid rgba(212,175,55,0.18)', borderRadius: 14,
              }}>
                <div className="font-display" style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 10, color: '#8B8BA8', marginTop: 6, lineHeight: 1.3, letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 36px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 15, fontWeight: 800, borderRadius: 14, textDecoration: 'none', boxShadow: '0 12px 40px rgba(212,175,55,0.4)', letterSpacing: '0.01em' }}>
            <WhatsAppIcon size={18} />
            Написать менеджеру
          </a>
          <p style={{ marginTop: 12, fontSize: 12, color: '#6B6B8D' }}>WhatsApp · ответ в течение часа</p>
        </section>

        {/* 2. STATUS BLOCK — right after hero */}
        <Reveal>
          <section style={{ padding: '40px 0', position: 'relative' }}>
            <SectionSpark variant="gold" />
            <div className="glass" style={{ padding: 30, borderRadius: 24, borderColor: 'rgba(212,175,55,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
                <div style={{ width: 88, height: 88, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 10px 32px rgba(212,175,55,0.3)' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
                    <img src="/asem.jpg" alt="Асем Альмурзиева" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.18em', marginBottom: 4 }}>СТАТУС ЭКСПЕРТА</div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700, color: '#F5E9CF', lineHeight: 1.2, letterSpacing: '-0.015em' }}>
                    Главная сваха Казахстана
                  </h2>
                </div>
              </div>

              <p style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.7, marginBottom: 12 }}>
                <strong style={{ color: '#F5E9CF' }}>Асем Альмурзиева</strong> — главная сваха Казахстана, которой доверяют мужчины высокого уровня.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: '#D4D4E8' }}>
                  <span style={{ color: '#D4AF37', fontSize: 18, lineHeight: 1.3, flexShrink: 0 }}>✦</span>
                  <span>Её приглашают <strong style={{ color: '#F5E9CF' }}>крупнейшие СМИ Казахстана</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: '#D4D4E8' }}>
                  <span style={{ color: '#D4AF37', fontSize: 18, lineHeight: 1.3, flexShrink: 0 }}>✦</span>
                  <span>Работает с <strong style={{ color: '#F5E9CF' }}>предпринимателями, руководителями и публичными людьми</strong></span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. О НАС ГОВОРЯТ — videos + press */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ marginBottom: 22 }}>
              <SectionLabel accent="#D4AF37">О нас пишут и говорят</SectionLabel>
              <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4.5vw, 28px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#F5E9CF', marginBottom: 8 }}>
                Видеоинтервью и публикации в СМИ
              </h2>
              <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.6, maxWidth: 600 }}>
                Нажмите, чтобы посмотреть видео или прочитать статью.
              </p>
            </div>

            {/* Video gallery */}
            <div style={{ marginBottom: 16 }}>
              <VideoCard
                big
                id="UMpcqWd2z5c"
                channel="Аман Есен · подкаст"
                title="Сваха №1 в Казахстане. Асем Альмурзиева — как перестать выбирать абьюзеров"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 28 }}>
              <VideoCard id="B3eEIb5dxlw" channel="Almaty TV" title="Каково быть свахой в Казахстане?" />
              <VideoCard id="hcvzPsigwxM" channel="Агентство Знакомств" title="Агентство эксклюзивных знакомств Асем Альмурзиевой" />
              <VideoCard id="z5yrWPIp0n4" channel="Адина Сабирова · подкаст" title="Где познакомиться с достойным/ой партнёром в Алматы?" />
              <VideoCard id="tTj5EzRysq4" channel="Адина Сабирова · подкаст" title="Вечеринки знакомств в Алматы — Flirt Party" />
            </div>

            {/* Press articles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <PressCardLink
                href="https://www.nur.kz/society/1781811-kazahstanskaa-svaha-rasskazala-kakie-devuski-nravatsa-millioneram/"
                src="/media/press-nur.jpg" outlet="NUR.KZ"
                title="«Главная сваха страны Асем Альмурзиева рассказала, какие девушки нравятся миллионерам»"
              />
              <PressCardLink
                href="https://www.zakon.kz/sovety/4960582-kak-nayti-muzha-millionera.html"
                src="/media/press-zakon.jpg" outlet="zakon.kz"
                title="«Как найти мужа-миллионера. Казахстанские реалии»"
                sub="Сваха, которой доверяют свою судьбу крупные миллионеры Казахстана"
              />
              <PressCardLink
                href="https://www.styleofeurasia.com/news/item/1762-marry-a-millionaire"
                src="/media/press-eurasia.jpg" outlet="Style of Eurasia"
                title="«Marry a Millionaire»"
                sub="Казахстанская сваха нашла эксклюзивный способ выдачи невест замуж за миллионеров"
              />
              <PressCardLink
                href="https://the-steppe.com/lyudi/brachnoe-agentsvo"
                outlet="The Steppe"
                title="«Свахи 80 lvl: Найти свою любовь через агентство знакомств»"
                sub="Большое интервью о том, как работает агентство эксклюзивных знакомств"
              />
            </div>
          </section>
        </Reveal>

        {/* 4. КАК ЭТО РАБОТАЕТ — minimalist 4 steps */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Как это работает</SectionLabel>
            <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.65, marginBottom: 22, maxWidth: 600 }}>
              Минимализм. Без воды.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { n: '1', t: 'Вы оставляете запрос' },
                { n: '2', t: 'Мы изучаем ваши критерии' },
                { n: '3', t: 'Подбираем женщин из закрытой базы' },
                { n: '4', t: 'Организуем встречи' },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="glass" style={{ padding: 20, borderRadius: 16, borderColor: 'rgba(212,175,55,0.15)', height: '100%' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #D4AF37, #B8860B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#1A1000', marginBottom: 14, boxShadow: '0 6px 20px rgba(212,175,55,0.3)' }}>{s.n}</div>
                    <div className="font-display" style={{ fontSize: 15, fontWeight: 600, color: '#F5E9CF', lineHeight: 1.35 }}>{s.t}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="font-display" style={{ marginTop: 24, fontSize: 'clamp(18px, 4vw, 22px)', fontStyle: 'italic', color: '#F5E9CF', textAlign: 'center', lineHeight: 1.4 }}>
              Вы не ищете. <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>Мы делаем всё за вас.</em>
            </p>
          </section>
        </Reveal>

        {/* 5. РЕЗУЛЬТАТЫ */}
        <Reveal>
          <section style={{ padding: '50px 0', position: 'relative' }}>
            <SectionSpark variant="hearts" />
            <SectionLabel accent="#D4AF37">Результаты</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 22, letterSpacing: '-0.02em', color: '#F5E9CF' }}>
              Результаты, за которыми<br/>
              <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>к нам приходят</em>
            </h2>

            <div className="glass" style={{ padding: 28, borderRadius: 22, borderColor: 'rgba(212,175,55,0.22)' }}>
              <div style={{ fontSize: 12, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 18, textTransform: 'uppercase' }}>За 10 лет работы</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {[
                  ['172', 'пары, которые построили семью'],
                  ['344', 'человека нашли друг друга'],
                  ['тысячи', 'проведённых знакомств'],
                ].map(([num, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <div className="font-display" style={{ fontSize: 'clamp(28px, 6vw, 38px)', fontWeight: 800, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em', minWidth: 80, lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.4 }}>{text}</div>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)', margin: '20px 0' }} />

              <p className="font-display" style={{ fontSize: 17, color: '#F5E9CF', lineHeight: 1.4, fontWeight: 500, marginBottom: 6 }}>
                Мы не продаём процесс.
              </p>
              <p className="font-display" style={{ fontSize: 19, color: '#D4AF37', lineHeight: 1.4, fontStyle: 'italic', fontWeight: 700 }}>
                Мы даём результат.
              </p>
            </div>

            {/* Reinforcement */}
            <div style={{ marginTop: 16, padding: 22, background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 18, textAlign: 'center' }}>
              <p className="font-display" style={{ fontSize: 'clamp(15px, 3.4vw, 18px)', color: '#F5E9CF', lineHeight: 1.45, marginBottom: 8 }}>
                Нас выбирают не потому что «интересно».
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(16px, 3.6vw, 19px)', color: '#D4AF37', fontStyle: 'italic', fontWeight: 700, lineHeight: 1.4, marginBottom: 14 }}>
                Нас выбирают потому что это работает.
              </p>
              <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>
                Именно поэтому наши клиенты готовы платить за результат, а не тратить годы на самостоятельный поиск.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 6. ГЛАВНЫЙ СМЫСЛ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Главный смысл</SectionLabel>
            <div className="glass" style={{ padding: 30, borderRadius: 22, borderColor: 'rgba(212,175,55,0.18)' }}>
              <p className="font-display" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 700, lineHeight: 1.3, color: '#F5E9CF', marginBottom: 6, letterSpacing: '-0.02em' }}>
                Вы платите не за знакомства.
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 600, color: '#A0A0C0', marginBottom: 22, lineHeight: 1.35 }}>
                Вы платите за:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '⏱', title: 'Экономию времени', desc: 'Месяцы и годы, которые вы бы потратили на самостоятельный поиск' },
                  { icon: '🎯', title: 'Точный подбор', desc: 'Только женщины, которые соответствуют вашим критериям' },
                  { icon: '💍', title: 'Выход в отношения без лишних этапов', desc: 'Никаких многомесячных переписок и догадок' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(255,77,141,0.1))', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#F5E9CF', marginBottom: 4 }}>{item.title}</div>
                      <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 7. ПАКЕТЫ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Пакеты услуг</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {/* PREMIUM / VIP — main focus */}
              <Package
                vip
                icon="👑"
                tag="ПРЕМИУМ / VIP"
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
                accent="#D4AF37"
                gradient="linear-gradient(135deg, #D4AF37, #B8860B)"
                textColor="#1A1000"
                href={WHATSAPP_URL}
                ctaIcon="whatsapp"
              />

              {/* Personal with Asem */}
              <Package
                icon="✦"
                tag="ЛИЧНО С АСЕМ"
                title="Работа лично с Асем"
                subtitle="Вы работаете напрямую с главной свахой страны"
                includes={[
                  'Прямое участие Асем в подборе',
                  'Доступ к более сильным кандидаткам',
                  'Глубокий анализ совместимости',
                  'Корректировка стратегии в отношениях',
                ]}
                price="от 5 000 000 тг"
                cta="Начать с Асем"
                accent="#FF4D8D"
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                textColor="#1A1000"
                href={WHATSAPP_URL}
                ctaIcon="whatsapp"
              />

              {/* Pay-per-introduction */}
              <Package
                icon="◎"
                tag="ЗА КОЛИЧЕСТВО ЗНАКОМСТВ"
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
                accent="#A855F7"
                gradient="linear-gradient(135deg, #A855F7, #FF4D8D)"
                textColor="white"
                href={WHATSAPP_URL}
                ctaIcon="whatsapp"
              />
            </div>
          </section>
        </Reveal>

        {/* 8. ПРО ДЕВУШЕК */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel accent="#FF4D8D">Про девушек</SectionLabel>
            <div className="glass" style={{ padding: 28, borderRadius: 22, borderColor: 'rgba(255,77,141,0.18)' }}>
              <h3 className="font-display" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 18, color: '#F5E9CF', letterSpacing: '-0.02em' }}>
                Все женщины в нашей базе:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                {[
                  { icon: '🔍', t: 'проходят отбор' },
                  { icon: '💍', t: 'настроены на семью' },
                  { icon: '✓', t: 'реальные' },
                  { icon: '👑', t: 'соответствуют уровню' },
                ].map(it => (
                  <div key={it.t} style={{ padding: 16, borderRadius: 14, background: 'rgba(255,77,141,0.05)', border: '1px solid rgba(255,77,141,0.15)', textAlign: 'center' }}>
                    <div style={{ fontSize: 26, marginBottom: 8 }}>{it.icon}</div>
                    <div style={{ fontSize: 13, color: '#F5E9CF', fontWeight: 600 }}>{it.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 9. ДЛЯ КОГО */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Для кого</SectionLabel>
            <div className="glass" style={{ padding: 28, borderRadius: 22 }}>
              <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 16 }}>Для мужчин, которые:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'ценят своё время',
                  'хотят серьёзные отношения',
                  'не готовы тратить месяцы на поиск',
                ].map(t => (
                  <div key={t} className="font-display" style={{ display: 'flex', gap: 14, fontSize: 'clamp(15px, 3.4vw, 17px)', color: '#F5E9CF', lineHeight: 1.4 }}>
                    <span style={{ color: '#D4AF37', flexShrink: 0 }}>✦</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 10. КЕЙСЫ */}
        <Reveal>
          <section style={{ padding: '40px 0', position: 'relative' }}>
            <SectionSpark variant="hearts" />
            <SectionLabel>Истории клиентов</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { initial: 'А', color: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', name: 'Алия', age: 34, title: 'предприниматель', before: '5 лет не могла построить отношения', after: 'Через 2 месяца — знакомство с будущим мужем' },
                { initial: 'Д', color: 'linear-gradient(135deg, #FF4D8D, #A855F7)', name: 'Дана', age: 41, title: 'директор компании', before: '3 развода, устала от поиска', after: 'Встретила партнёра уровня, о котором давно мечтала' },
                { initial: 'Ж', color: 'linear-gradient(135deg, #A855F7, #D4AF37)', name: 'Жанель', age: 38, title: 'финансист', before: 'разочарована в мужчинах после 30', after: 'Замужем, сыну 8 месяцев' },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="glass" style={{ padding: 22, borderRadius: 18, borderColor: 'rgba(212,175,55,0.12)' }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 54, height: 54, borderRadius: 14, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, flexShrink: 0, boxShadow: '0 6px 20px rgba(212,175,55,0.25)' }}>{c.initial}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#F5E9CF' }}>{c.name}, {c.age}</div>
                        <div style={{ fontSize: 12, color: '#8B8BA8', marginTop: 2, marginBottom: 12 }}>{c.title}</div>
                        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.55, marginBottom: 8 }}>
                          <span style={{ color: '#F87171', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginRight: 8, textTransform: 'uppercase' }}>До:</span>{c.before}
                        </p>
                        <p style={{ fontSize: 13, color: '#D4D4E8', lineHeight: 1.55 }}>
                          <span style={{ color: '#4ADE80', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginRight: 8, textTransform: 'uppercase' }}>После:</span>{c.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* 11. FAQ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Частые вопросы</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem accent="#D4AF37" q="Вы берёте всех клиентов?" a="Нет. Мы работаем только с теми, кто проходит предварительный отбор. Это гарантирует качество с обеих сторон." />
              <FAQItem accent="#D4AF37" q="Вы гарантируете результат?" a="Да. По пакету «Премиум»: если мы не подберём женщин под ваши критерии — возвращаем деньги. Сами отношения зависят от взаимной симпатии, но шансы в нашей среде в разы выше." />
              <FAQItem accent="#D4AF37" q="Как вы проверяете женщин?" a="Личное интервью, проверка документов, оценка психологической стабильности и серьёзности намерений. Случайных людей у нас нет." />
              <FAQItem accent="#D4AF37" q="Конфиденциально ли это?" a="Абсолютно. Все данные клиентов защищены. Информация о вас не передаётся никому, кроме отобранных под вас кандидаток." />
              <FAQItem accent="#D4AF37" q="Можно ли вернуть деньги?" a="По пакету «Премиум» — да, если мы не подобрали кандидаток. По остальным пакетам услуга носит нематериальный характер." />
            </div>
          </section>
        </Reveal>

        {/* 12. ЗАКРЫТИЕ */}
        <Reveal>
          <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
            <SectionSpark variant="gold" />
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 16, color: '#F5E9CF', letterSpacing: '-0.02em' }}>
              Вы можете продолжать<br/>искать сами
            </h2>
            <p className="font-display" style={{ fontSize: 'clamp(22px, 4.5vw, 28px)', fontWeight: 700, fontStyle: 'italic', marginBottom: 12, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Или доверить это профессионалам
            </p>
            <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 36, lineHeight: 1.6 }}>
              И получить результат быстрее
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '22px 48px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 16, fontWeight: 800, borderRadius: 18, textDecoration: 'none', boxShadow: '0 16px 56px rgba(212,175,55,0.45)', letterSpacing: '0.02em' }}>
              <WhatsAppIcon size={20} />
              Написать менеджеру
            </a>
            <p style={{ marginTop: 14, fontSize: 12, color: '#6B6B8D' }}>+7 701 468 1100 · WhatsApp</p>
          </section>
        </Reveal>

        {/* CROSS-LINKS to other services */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Дополнительные направления</div>
              <p style={{ fontSize: 14, color: '#A0A0C0', maxWidth: 500, margin: '0 auto', lineHeight: 1.55 }}>
                Помимо персонального подбора у нас есть ещё два направления
              </p>
            </div>
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr' }}>
              <ServiceLink href="/men" badge="ДЛЯ МУЖЧИН" title="Найди Пару" subtitle="Telegram-приложение · 10 000 ₸ за 30 анкет" icon="♥" gradient="linear-gradient(135deg, #FF4D8D, #A855F7)" accent="#FF4D8D" />
              <ServiceLink href="/asem" badge="ДЛЯ ДЕВУШЕК" title="Программа Асем" subtitle="Стать женщиной, которую выбирают · от 37 500 ₸/мес" icon="✦" gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)" accent="#D4AF37" />
            </div>
          </section>
        </Reveal>

        {/* SMALL: бесплатная анкета — careful section */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div style={{ padding: 16, border: '1px dashed rgba(255,255,255,0.08)', borderRadius: 14, textAlign: 'center', maxWidth: 540, margin: '0 auto' }}>
              <p style={{ fontSize: 11, color: '#6B6B8D', lineHeight: 1.55, marginBottom: 8 }}>
                Если вы пока не готовы к персональному сопровождению —
              </p>
              <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#A0A0C0', textDecoration: 'underline', textDecorationColor: 'rgba(160,160,192,0.3)', textUnderlineOffset: 4 }}>
                заполните бесплатную анкету
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '32px 0 110px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <BrandRings size={32} />
              <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Агентство знакомств</div>
              <div className="font-display" style={{ fontSize: 16, fontWeight: 600, color: '#F5E9CF', fontStyle: 'italic' }}>Асем Альмурзиева</div>
            </div>

            <div>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>Контакты</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#25D366', textDecoration: 'none', padding: '8px 14px', background: 'rgba(37,211,102,0.08)', borderRadius: 10, border: '1px solid rgba(37,211,102,0.25)' }}>
                  <WhatsAppIcon size={14} color="#25D366" />
                  WhatsApp
                </a>
                <a href="https://t.me/Naidiparu2_bot" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#0088CC', textDecoration: 'none', padding: '8px 14px', background: 'rgba(0,136,204,0.08)', borderRadius: 10, border: '1px solid rgba(0,136,204,0.25)' }}>
                  Telegram
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, fontSize: 12, flexWrap: 'wrap' }}>
              <Link href="/men" style={{ color: '#A855F7', textDecoration: 'none' }}>Для мужчин</Link>
              <span style={{ color: '#3A3A5A' }}>·</span>
              <Link href="/asem" style={{ color: '#D4AF37', textDecoration: 'none' }}>Для девушек</Link>
              <span style={{ color: '#3A3A5A' }}>·</span>
              <Link href="/oferta" style={{ color: '#6B6B8D', textDecoration: 'none' }}>Публичная оферта</Link>
              <span style={{ color: '#3A3A5A' }}>·</span>
              <Link href="/privacy" style={{ color: '#6B6B8D', textDecoration: 'none' }}>Конфиденциальность</Link>
            </div>

            <p style={{ fontSize: 11, color: '#6B6B8D' }}>© {new Date().getFullYear()} Агентство знакомств Асем Альмурзиевой</p>
          </div>
        </footer>
      </div>

      {/* Sticky CTA — WhatsApp */}
      <StickyCTA href={WHATSAPP_URL} label="Написать менеджеру" accent="#D4AF37" accentTo="#B8860B" textColor="#1A1000" />
    </div>
  );
}

function SectionLabel({ children, accent = '#A0A0C0' }) {
  return (
    <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 32, height: 1.5, background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      <h2 style={{ fontSize: 11, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: '0.25em' }}>{children}</h2>
    </div>
  );
}

function ServiceLink({ href, badge, title, subtitle, icon, gradient, accent }) {
  return (
    <Link href={href} className="switcher-link glass" style={{
      display: 'block', padding: 18, borderRadius: 16,
      textDecoration: 'none', color: 'white',
      borderColor: `${accent}22`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0, boxShadow: `0 8px 24px ${accent}55`, color: 'white' }}>{icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, color: accent, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 2 }}>{badge}</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{title}</div>
          <div style={{ fontSize: 12, color: '#8B8BA8' }}>{subtitle}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B8D" strokeWidth="2" style={{ flexShrink: 0 }}>
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </Link>
  );
}

function Package({ icon, tag, title, subtitle, includes, guarantee, guaranteeFoot, tiers, extra, price, cta, accent, gradient, textColor, vip, href, ctaIcon }) {
  return (
    <div className="glass" style={{
      padding: 0, borderRadius: 24, position: 'relative',
      borderColor: vip ? `${accent}50` : `${accent}22`,
      boxShadow: vip ? `0 24px 64px ${accent}22, 0 0 0 1px ${accent}40 inset` : '0 12px 40px rgba(0,0,0,0.3)',
      overflow: 'hidden',
    }}>
      <div style={{ height: 4, background: gradient }} />

      {vip && (
        <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 14px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', borderRadius: 20, fontSize: 9, fontWeight: 900, letterSpacing: '0.18em', boxShadow: '0 4px 14px rgba(212,175,55,0.4)' }}>
          ⭐ ОСНОВНОЙ
        </div>
      )}

      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0, boxShadow: `0 10px 28px ${accent}55`, color: textColor }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, color: accent, fontWeight: 800, letterSpacing: '0.2em', marginBottom: 4 }}>{tag}</div>
            <h3 className="font-display" style={{ fontSize: 'clamp(19px, 4vw, 24px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {title}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, marginBottom: 20 }}>{subtitle}</p>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>Что входит</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {includes.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#D4D4E8', lineHeight: 1.5 }}>
                <span style={{ color: accent, fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>

        {/* GUARANTEE block — strong visual */}
        {guarantee && (
          <div style={{ marginBottom: 18, padding: 16, background: 'linear-gradient(135deg, rgba(34,197,94,0.06), rgba(212,175,55,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 16 }}>🛡</span>
              <span style={{ fontSize: 10, color: '#4ADE80', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Гарантия</span>
            </div>
            <p className="font-display" style={{ fontSize: 13, color: '#F5E9CF', fontStyle: 'italic', lineHeight: 1.55 }}>
              {guarantee}
            </p>
            {guaranteeFoot && (
              <p style={{ fontSize: 11, color: '#8B8BA8', marginTop: 8, lineHeight: 1.5 }}>
                {guaranteeFoot}
              </p>
            )}
          </div>
        )}

        {/* Pricing tiers */}
        {tiers && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
            {tiers.map(t => (
              <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: 'rgba(168,85,247,0.06)', borderRadius: 12, border: '1px solid rgba(168,85,247,0.15)' }}>
                <span style={{ fontSize: 14, color: '#D4D4E8', fontWeight: 500 }}>{t.label}</span>
                <span style={{ fontSize: 17, color: accent, fontWeight: 800, letterSpacing: '-0.01em' }}>{t.price}</span>
              </div>
            ))}
          </div>
        )}

        {extra && (
          <div style={{ padding: 12, background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.18)', borderRadius: 10, fontSize: 12, color: '#D4AF37', marginBottom: 18, fontWeight: 500 }}>
            ✦ {extra}
          </div>
        )}

        {/* Single price */}
        {price && (
          <div style={{ padding: '16px 20px', background: 'rgba(212,175,55,0.06)', borderRadius: 14, marginBottom: 16, textAlign: 'center', border: `1px solid ${accent}25` }}>
            <div style={{ fontSize: 10, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 4, textTransform: 'uppercase' }}>Стоимость</div>
            <div className="font-display" style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, color: accent, letterSpacing: '-0.02em' }}>{price}</div>
          </div>
        )}

        {/* CTA */}
        <a href={href || WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', textAlign: 'center', borderRadius: 14, background: gradient, color: textColor, fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: `0 10px 32px ${accent}55` }}>
          {ctaIcon === 'whatsapp' && <WhatsAppIcon size={16} color={textColor} />}
          {cta} →
        </a>
      </div>
    </div>
  );
}
