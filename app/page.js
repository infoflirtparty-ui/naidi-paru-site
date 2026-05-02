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

// Brand mark — interlocking rings (gold only, restrained)
function BrandRings({ size = 36 }) {
  const w = size, h = Math.round(size * 0.75);
  return (
    <svg width={w} height={h} viewBox="0 0 56 42" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brG1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D4AF37"/>
          <stop offset="1" stopColor="#8B6914"/>
        </linearGradient>
      </defs>
      <circle cx="18" cy="21" r="14" stroke="url(#brG1)" strokeWidth="2" fill="none"/>
      <circle cx="38" cy="21" r="14" stroke="url(#brG1)" strokeWidth="2" fill="none"/>
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
    <div style={{ background: '#08080B', color: '#E8D9B8', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <LoadingScreen />

      {/* Restrained ambient — gold only, no pink */}
      <div className="ambient" style={{ top: '-10%', left: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(212,175,55,0.16), transparent 70%)', zIndex: 0 }} />
      <div className="ambient" style={{ top: '40%', right: '-15%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)', zIndex: 0, animationDelay: '-10s' }} />
      <div className="ambient" style={{ bottom: '0%', left: '15%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,105,20,0.18), transparent 70%)', zIndex: 0, animationDelay: '-16s' }} />

      <FloatingBg density="low" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 880, margin: '0 auto', padding: '0 22px' }}>

        {/* Top nav */}
        <nav style={{ padding: '24px 0 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <BrandRings size={42} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 10, color: '#8B6914', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
              Агентство знакомств
            </div>
            <div className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#E8D9B8', letterSpacing: '0.02em', marginTop: 4 }}>
              Асем Альмурзиева
            </div>
          </div>
        </nav>

        {/* 1. HERO */}
        <section className="fade-in" style={{ padding: '36px 0 56px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 2, fontSize: 10, color: '#D4AF37', marginBottom: 28, fontWeight: 600, letterSpacing: '0.3em' }}>ЗАКРЫТАЯ СИСТЕМА</div>

          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(30px, 7vw, 50px)', fontWeight: 500, lineHeight: 1.08, marginBottom: 22, letterSpacing: '-0.025em', color: '#F5F2E8' }}>
            Персональный подбор пары<br/>
            для <em style={{ color: '#D4AF37', fontStyle: 'italic', fontWeight: 600 }}>серьёзных отношений</em>
          </h1>

          <hr className="gold-divider" style={{ maxWidth: 80, margin: '0 auto 26px' }} />

          <p style={{ fontSize: 15, color: '#E8D9B8', lineHeight: 1.55, maxWidth: 580, margin: '0 auto 14px', fontWeight: 500, letterSpacing: '0.01em' }}>
            Это не сайт знакомств.
          </p>
          <p style={{ fontSize: 14, color: '#A0A0A8', lineHeight: 1.75, maxWidth: 600, margin: '0 auto 14px' }}>
            Это закрытая система подбора <span style={{ color: '#E8D9B8' }}>идеальной пары под ваш уровень жизни</span> с гарантией.
          </p>
          <p className="font-display" style={{ fontSize: 13, color: '#8B6914', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 32px', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            Мы экономим вам месяцы жизни и приводим к результату быстрее
          </p>

          {/* Key stats — strict gold borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, maxWidth: 540, margin: '0 auto 36px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.18)' }}>
            {[
              { value: 10, suffix: ' лет', label: 'на рынке' },
              { value: 172, suffix: '', label: 'созданные пары' },
              { value: 344, suffix: '', label: 'соединённые судьбы' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '20px 8px', textAlign: 'center', background: '#0E0E13',
              }}>
                <div className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 30px)', fontWeight: 600, color: '#D4AF37', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 9, color: '#8B6914', marginTop: 8, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 40px', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 14, fontWeight: 700, borderRadius: 0, textDecoration: 'none', boxShadow: '0 14px 50px rgba(212,175,55,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <WhatsAppIcon size={16} />
            Написать менеджеру
          </a>
          <p style={{ marginTop: 14, fontSize: 11, color: '#7A7A85', letterSpacing: '0.15em' }}>WHATSAPP · ОТВЕТ В ТЕЧЕНИЕ ЧАСА</p>
        </section>

        {/* 2. STATUS BLOCK */}
        <Reveal>
          <section style={{ padding: '40px 0', position: 'relative' }}>
            <SectionSpark />
            <div className="surface" style={{ padding: 32, borderRadius: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 22 }}>
                <div style={{ width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(212,175,55,0.4)', boxShadow: '0 8px 32px rgba(212,175,55,0.2)' }}>
                  <img src="/asem.jpg" alt="Асем Альмурзиева" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 9, color: '#8B6914', fontWeight: 600, letterSpacing: '0.28em', marginBottom: 8, textTransform: 'uppercase' }}>Статус эксперта</div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(20px, 4.4vw, 26px)', fontWeight: 500, color: '#F5F2E8', lineHeight: 1.18, letterSpacing: '-0.02em' }}>
                    Главная сваха <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>Казахстана</em>
                  </h2>
                </div>
              </div>

              <hr className="gold-divider" style={{ marginBottom: 18 }} />

              <p style={{ fontSize: 15, color: '#E8D9B8', lineHeight: 1.7, marginBottom: 18 }}>
                <span style={{ color: '#F5F2E8', fontWeight: 600 }}>Асем Альмурзиева</span> — главная сваха Казахстана, которой доверяют мужчины высокого уровня.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 14, color: '#A0A0A8', lineHeight: 1.6 }}>
                  <span style={{ color: '#D4AF37', fontSize: 14, lineHeight: 1.6, flexShrink: 0, fontFamily: 'serif' }}>—</span>
                  <span>Её приглашают <span style={{ color: '#E8D9B8' }}>крупнейшие СМИ Казахстана</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 14, color: '#A0A0A8', lineHeight: 1.6 }}>
                  <span style={{ color: '#D4AF37', fontSize: 14, lineHeight: 1.6, flexShrink: 0, fontFamily: 'serif' }}>—</span>
                  <span>Работает с <span style={{ color: '#E8D9B8' }}>предпринимателями, руководителями и публичными людьми</span></span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. О НАС ГОВОРЯТ */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <div style={{ marginBottom: 26 }}>
              <SectionLabel>О нас пишут и говорят</SectionLabel>
              <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4.6vw, 28px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#F5F2E8', marginBottom: 10 }}>
                Видеоинтервью и публикации в СМИ
              </h2>
              <p style={{ fontSize: 13, color: '#7A7A85', lineHeight: 1.65, maxWidth: 600 }}>
                Нажмите, чтобы посмотреть видео или прочитать статью.
              </p>
            </div>

            <div style={{ marginBottom: 14 }}>
              <VideoCard
                big
                id="UMpcqWd2z5c"
                channel="Аман Есен · подкаст"
                title="Сваха №1 в Казахстане. Асем Альмурзиева — как перестать выбирать абьюзеров"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 28 }}>
              <VideoCard id="B3eEIb5dxlw" channel="Almaty TV" title="Каково быть свахой в Казахстане?" />
              <VideoCard id="hcvzPsigwxM" channel="Агентство Знакомств" title="Агентство эксклюзивных знакомств Асем Альмурзиевой" />
              <VideoCard id="z5yrWPIp0n4" channel="Адина Сабирова · подкаст" title="Где познакомиться с достойным/ой партнёром в Алматы?" />
              <VideoCard id="tTj5EzRysq4" channel="Адина Сабирова · подкаст" title="Вечеринки знакомств в Алматы — Flirt Party" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <PressCardLink href="https://www.nur.kz/society/1781811-kazahstanskaa-svaha-rasskazala-kakie-devuski-nravatsa-millioneram/" src="/media/press-nur.jpg" outlet="NUR.KZ" title="«Главная сваха страны Асем Альмурзиева рассказала, какие девушки нравятся миллионерам»" />
              <PressCardLink href="https://www.zakon.kz/sovety/4960582-kak-nayti-muzha-millionera.html" src="/media/press-zakon.jpg" outlet="zakon.kz" title="«Как найти мужа-миллионера. Казахстанские реалии»" sub="Сваха, которой доверяют свою судьбу крупные миллионеры Казахстана" />
              <PressCardLink href="https://www.styleofeurasia.com/news/item/1762-marry-a-millionaire" src="/media/press-eurasia.jpg" outlet="Style of Eurasia" title="«Marry a Millionaire»" sub="Казахстанская сваха нашла эксклюзивный способ выдачи невест замуж за миллионеров" />
              <PressCardLink href="https://the-steppe.com/lyudi/brachnoe-agentsvo" outlet="The Steppe" title="«Свахи 80 lvl: Найти свою любовь через агентство знакомств»" sub="Большое интервью о том, как работает агентство эксклюзивных знакомств" />
            </div>
          </section>
        </Reveal>

        {/* 4. КАК ЭТО РАБОТАЕТ */}
        <Reveal>
          <section style={{ padding: '60px 0' }}>
            <SectionLabel>Как это работает</SectionLabel>
            <p style={{ fontSize: 13, color: '#7A7A85', lineHeight: 1.65, marginBottom: 26, maxWidth: 600, fontStyle: 'italic' }}>
              Минимализм. Без воды.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.18)' }}>
              {[
                'Вы оставляете запрос',
                'Мы изучаем ваши критерии',
                'Подбираем женщин из закрытой базы',
                'Организуем встречи',
              ].map((t, i) => (
                <div key={i} style={{ background: '#0E0E13', padding: 24 }}>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 500, color: '#D4AF37', letterSpacing: '0', marginBottom: 14, fontStyle: 'italic' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#E8D9B8', lineHeight: 1.4 }}>{t}</div>
                </div>
              ))}
            </div>
            <p className="font-display" style={{ marginTop: 28, fontSize: 'clamp(18px, 4vw, 22px)', fontStyle: 'italic', color: '#F5F2E8', textAlign: 'center', lineHeight: 1.4, fontWeight: 400 }}>
              Вы не ищете. <em style={{ color: '#D4AF37' }}>Мы делаем всё за вас.</em>
            </p>
          </section>
        </Reveal>

        {/* 5. РЕЗУЛЬТАТЫ */}
        <Reveal>
          <section style={{ padding: '60px 0', position: 'relative' }}>
            <SectionSpark />
            <SectionLabel>Результаты</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5.2vw, 34px)', fontWeight: 500, lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em', color: '#F5F2E8' }}>
              Результаты, за которыми<br/>
              <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>к нам приходят</em>
            </h2>

            <div className="surface" style={{ padding: 32 }}>
              <div style={{ fontSize: 10, color: '#8B6914', fontWeight: 600, letterSpacing: '0.28em', marginBottom: 22, textTransform: 'uppercase' }}>За 10 лет работы</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 26 }}>
                {[
                  ['172', 'пары, которые построили семью'],
                  ['344', 'человека нашли друг друга'],
                  ['тысячи', 'проведённых знакомств'],
                ].map(([num, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 22, paddingBottom: i < 2 ? 18 : 0, borderBottom: i < 2 ? '1px solid rgba(212,175,55,0.1)' : 'none' }}>
                    <div className="font-display" style={{ fontSize: 'clamp(28px, 6vw, 38px)', fontWeight: 500, color: '#D4AF37', letterSpacing: '-0.03em', minWidth: 90, lineHeight: 1, fontStyle: 'italic' }}>{num}</div>
                    <div style={{ fontSize: 14, color: '#E8D9B8', lineHeight: 1.5 }}>{text}</div>
                  </div>
                ))}
              </div>

              <hr className="gold-divider" style={{ margin: '24px 0' }} />

              <p className="font-display" style={{ fontSize: 17, color: '#E8D9B8', lineHeight: 1.4, fontWeight: 400, marginBottom: 6 }}>
                Мы не продаём процесс.
              </p>
              <p className="font-display" style={{ fontSize: 20, color: '#D4AF37', lineHeight: 1.4, fontStyle: 'italic', fontWeight: 500 }}>
                Мы даём результат.
              </p>
            </div>

            <div style={{ marginTop: 18, padding: 26, background: 'linear-gradient(135deg, rgba(212,175,55,0.06), transparent)', border: '1px solid rgba(212,175,55,0.18)', textAlign: 'center' }}>
              <p className="font-display" style={{ fontSize: 'clamp(15px, 3.4vw, 18px)', color: '#E8D9B8', lineHeight: 1.5, marginBottom: 10 }}>
                Нас выбирают не потому что «интересно».
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(16px, 3.6vw, 20px)', color: '#D4AF37', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.4, marginBottom: 16 }}>
                Нас выбирают потому что это работает.
              </p>
              <p style={{ fontSize: 12, color: '#7A7A85', lineHeight: 1.65, maxWidth: 540, margin: '0 auto' }}>
                Именно поэтому наши клиенты готовы платить за результат, а не тратить годы на самостоятельный поиск.
              </p>
            </div>
          </section>
        </Reveal>

        {/* 6. ГЛАВНЫЙ СМЫСЛ */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Главный смысл</SectionLabel>
            <div className="surface" style={{ padding: 32 }}>
              <p className="font-display" style={{ fontSize: 'clamp(20px, 4.6vw, 26px)', fontWeight: 500, lineHeight: 1.3, color: '#F5F2E8', marginBottom: 8, letterSpacing: '-0.02em' }}>
                Вы платите не за знакомства.
              </p>
              <p className="font-display" style={{ fontSize: 'clamp(17px, 4vw, 21px)', fontWeight: 400, color: '#A0A0A8', marginBottom: 26, lineHeight: 1.4 }}>
                Вы платите за:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { num: 'I', title: 'Экономию времени', desc: 'Месяцы и годы, которые вы бы потратили на самостоятельный поиск.' },
                  { num: 'II', title: 'Точный подбор', desc: 'Только женщины, которые соответствуют вашим критериям.' },
                  { num: 'III', title: 'Выход в отношения без лишних этапов', desc: 'Никаких многомесячных переписок и догадок.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                    <div className="font-display" style={{ fontSize: 22, color: '#D4AF37', fontStyle: 'italic', fontWeight: 500, minWidth: 32, lineHeight: 1.1, paddingTop: 4 }}>{item.num}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#F5F2E8', marginBottom: 6, letterSpacing: '-0.005em' }}>{item.title}</div>
                      <p style={{ fontSize: 13, color: '#7A7A85', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 7. ПАКЕТЫ */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Пакеты услуг</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Про девушек</SectionLabel>
            <div className="surface" style={{ padding: 32 }}>
              <h3 className="font-display" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 500, lineHeight: 1.25, marginBottom: 22, color: '#F5F2E8', letterSpacing: '-0.02em' }}>
                Все женщины в нашей базе:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.18)' }}>
                {[
                  { num: '01', t: 'Проходят отбор' },
                  { num: '02', t: 'Настроены на семью' },
                  { num: '03', t: 'Реальные' },
                  { num: '04', t: 'Соответствуют уровню' },
                ].map(it => (
                  <div key={it.t} style={{ padding: 22, background: '#0E0E13', textAlign: 'center' }}>
                    <div className="font-display" style={{ fontSize: 18, color: '#D4AF37', fontStyle: 'italic', marginBottom: 10, fontWeight: 500 }}>{it.num}</div>
                    <div style={{ fontSize: 13, color: '#E8D9B8', fontWeight: 500, letterSpacing: '0.01em' }}>{it.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 9. ДЛЯ КОГО */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Для кого</SectionLabel>
            <div className="surface" style={{ padding: 32 }}>
              <p style={{ fontSize: 12, color: '#8B6914', marginBottom: 20, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Для мужчин, которые:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Ценят своё время',
                  'Хотят серьёзные отношения',
                  'Не готовы тратить месяцы на поиск',
                ].map(t => (
                  <div key={t} className="font-display" style={{ display: 'flex', gap: 16, fontSize: 'clamp(15px, 3.4vw, 18px)', color: '#F5F2E8', lineHeight: 1.4, fontWeight: 400 }}>
                    <span style={{ color: '#D4AF37', flexShrink: 0, fontStyle: 'italic' }}>—</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 10. ИСТОРИИ КЛИЕНТОВ — replaced from doc */}
        <Reveal>
          <section style={{ padding: '60px 0', position: 'relative' }}>
            <SectionSpark />
            <SectionLabel>Истории клиентов</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4.6vw, 28px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#F5F2E8', marginBottom: 26 }}>
              Что говорят наши клиенты
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Частые вопросы</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
          <section style={{ padding: '70px 0 50px', textAlign: 'center', position: 'relative' }}>
            <SectionSpark />
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 500, lineHeight: 1.25, marginBottom: 18, color: '#F5F2E8', letterSpacing: '-0.02em' }}>
              Вы можете продолжать<br/>искать сами
            </h2>
            <p className="font-display" style={{ fontSize: 'clamp(22px, 4.6vw, 28px)', fontWeight: 500, fontStyle: 'italic', marginBottom: 14, color: '#D4AF37', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Или доверить это профессионалам
            </p>
            <p style={{ fontSize: 13, color: '#7A7A85', marginBottom: 38, lineHeight: 1.6, letterSpacing: '0.05em' }}>
              И получить результат быстрее
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '22px 56px', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 14, fontWeight: 700, borderRadius: 0, textDecoration: 'none', boxShadow: '0 16px 64px rgba(212,175,55,0.4)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              <WhatsAppIcon size={18} />
              Написать менеджеру
            </a>
            <p style={{ marginTop: 16, fontSize: 11, color: '#7A7A85', letterSpacing: '0.18em' }}>+7 701 674 66 22 · WHATSAPP</p>
          </section>
        </Reveal>

        {/* CROSS-LINKS */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 22 }}>
              <div style={{ fontSize: 9, color: '#8B6914', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 10 }}>Дополнительные направления</div>
            </div>
            <div style={{ display: 'grid', gap: 1, gridTemplateColumns: '1fr', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.18)' }}>
              <ServiceLink href="/men" badge="Для мужчин" title="Найди Пару" subtitle="Telegram-приложение · 10 000 ₸ за 30 анкет" />
              <ServiceLink href="/asem" badge="Для девушек" title="Программа Асем" subtitle="Стать женщиной, которую выбирают · от 37 500 ₸/мес" />
            </div>
          </section>
        </Reveal>

        {/* SMALL: бесплатная анкета */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div style={{ padding: 18, border: '1px dashed rgba(212,175,55,0.15)', textAlign: 'center', maxWidth: 540, margin: '0 auto' }}>
              <p style={{ fontSize: 11, color: '#7A7A85', lineHeight: 1.65, marginBottom: 8, letterSpacing: '0.05em' }}>
                Если вы пока не готовы к персональному сопровождению —
              </p>
              <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#A0A0A8', textDecoration: 'underline', textDecorationColor: 'rgba(212,175,55,0.2)', textUnderlineOffset: 4, letterSpacing: '0.05em' }}>
                заполните бесплатную анкету
                <span style={{ fontSize: 9 }}>›</span>
              </a>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '40px 0 110px', borderTop: '1px solid rgba(212,175,55,0.12)', marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <BrandRings size={32} />
              <div style={{ fontSize: 10, color: '#8B6914', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase' }}>Агентство знакомств</div>
              <div className="font-display" style={{ fontSize: 17, fontWeight: 500, color: '#E8D9B8', letterSpacing: '0.02em' }}>Асем Альмурзиева</div>
            </div>

            <div>
              <div style={{ fontSize: 10, color: '#7A7A85', fontWeight: 600, letterSpacing: '0.28em', marginBottom: 14, textTransform: 'uppercase' }}>Контакты</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#D4AF37', textDecoration: 'none', padding: '10px 18px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <WhatsAppIcon size={13} color="#D4AF37" />
                  WhatsApp
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#E8D9B8', textDecoration: 'none', padding: '10px 18px', background: 'rgba(232,217,184,0.04)', border: '1px solid rgba(232,217,184,0.15)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <InstagramIcon size={13} />
                  Instagram
                </a>
                <a href="https://t.me/Naidiparu2_bot" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#7A7A85', textDecoration: 'none', padding: '10px 18px', background: 'rgba(122,122,133,0.04)', border: '1px solid rgba(122,122,133,0.18)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Telegram
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, fontSize: 11, flexWrap: 'wrap', color: '#7A7A85', letterSpacing: '0.05em' }}>
              <Link href="/men" style={{ color: '#7A7A85', textDecoration: 'none' }}>Для мужчин</Link>
              <span>·</span>
              <Link href="/asem" style={{ color: '#7A7A85', textDecoration: 'none' }}>Для девушек</Link>
              <span>·</span>
              <Link href="/oferta" style={{ color: '#7A7A85', textDecoration: 'none' }}>Публичная оферта</Link>
              <span>·</span>
              <Link href="/privacy" style={{ color: '#7A7A85', textDecoration: 'none' }}>Конфиденциальность</Link>
            </div>

            <p style={{ fontSize: 10, color: '#4A4A54', letterSpacing: '0.1em' }}>© {new Date().getFullYear()} Агентство знакомств Асем Альмурзиевой</p>
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
    <div className="surface" style={{ padding: 28 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18, paddingBottom: 16, borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="font-display" style={{ fontSize: 22, fontWeight: 500, color: '#F5F2E8', letterSpacing: '-0.01em' }}>
          {story.name}, <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>{story.age}</span>
        </div>
        <div style={{ fontSize: 11, color: '#7A7A85', letterSpacing: '0.08em' }}>{story.role}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 9, color: '#7A7A85', fontWeight: 700, letterSpacing: '0.18em', minWidth: 56, paddingTop: 4 }}>{beforeLabel}</span>
          <p style={{ fontSize: 13, color: '#A0A0A8', lineHeight: 1.6 }}>{story.before}</p>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 9, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.18em', minWidth: 56, paddingTop: 4 }}>{afterLabel}</span>
          <p style={{ fontSize: 13, color: '#E8D9B8', lineHeight: 1.6 }}>{story.after}</p>
        </div>
      </div>

      <hr className="gold-divider" style={{ marginBottom: 18 }} />

      <p className="font-display" style={{ fontSize: 14, color: '#E8D9B8', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 400 }}>
        «{story.quote}»
      </p>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 36, height: 1, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
      <h2 style={{ fontSize: 10, fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.32em' }}>{children}</h2>
    </div>
  );
}

function ServiceLink({ href, badge, title, subtitle }) {
  return (
    <Link href={href} className="lift" style={{
      display: 'block', padding: 22, background: '#0E0E13',
      textDecoration: 'none', color: '#E8D9B8',
      border: '1px solid rgba(212,175,55,0.05)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, color: '#8B6914', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 6 }}>{badge}</div>
          <div className="font-display" style={{ fontSize: 17, fontWeight: 500, marginBottom: 4, color: '#F5F2E8', letterSpacing: '-0.01em' }}>{title}</div>
          <div style={{ fontSize: 12, color: '#7A7A85' }}>{subtitle}</div>
        </div>
        <span style={{ fontSize: 18, color: '#D4AF37', flexShrink: 0, fontFamily: 'serif', fontStyle: 'italic' }}>›</span>
      </div>
    </Link>
  );
}

function Package({ tag, title, subtitle, includes, guarantee, guaranteeFoot, tiers, extra, price, cta, vip, href }) {
  return (
    <div className="surface" style={{
      position: 'relative',
      borderColor: vip ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.12)',
      boxShadow: vip ? '0 24px 64px rgba(212,175,55,0.18), inset 0 0 0 1px rgba(212,175,55,0.15)' : '0 12px 40px rgba(0,0,0,0.4)',
    }}>
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      {vip && (
        <div style={{ position: 'absolute', top: 18, right: 22, fontSize: 9, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
          ★ Основной
        </div>
      )}

      <div style={{ padding: 30 }}>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 9, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.32em', marginBottom: 10, textTransform: 'uppercase' }}>{tag}</div>
          <h3 className="font-display" style={{ fontSize: 'clamp(20px, 4.4vw, 26px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F5F2E8', marginBottom: 6 }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: '#7A7A85', lineHeight: 1.6 }}>{subtitle}</p>
        </div>

        <hr className="gold-divider" style={{ marginBottom: 22 }} />

        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 9, color: '#7A7A85', fontWeight: 600, letterSpacing: '0.28em', marginBottom: 14, textTransform: 'uppercase' }}>Что входит</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {includes.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 13.5, color: '#E8D9B8', lineHeight: 1.55 }}>
                <span style={{ color: '#D4AF37', fontSize: 12, lineHeight: 1.4, flexShrink: 0, fontFamily: 'serif' }}>—</span>{f}
              </div>
            ))}
          </div>
        </div>

        {guarantee && (
          <div style={{ marginBottom: 22, padding: 18, background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.22)' }}>
            <div style={{ fontSize: 9, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.32em', marginBottom: 10, textTransform: 'uppercase' }}>Гарантия</div>
            <p className="font-display" style={{ fontSize: 13, color: '#E8D9B8', fontStyle: 'italic', lineHeight: 1.6 }}>
              {guarantee}
            </p>
            {guaranteeFoot && (
              <p style={{ fontSize: 11, color: '#7A7A85', marginTop: 10, lineHeight: 1.55 }}>
                {guaranteeFoot}
              </p>
            )}
          </div>
        )}

        {tiers && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 14, border: '1px solid rgba(212,175,55,0.18)' }}>
            {tiers.map((t, i) => (
              <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#0E0E13', borderTop: i > 0 ? '1px solid rgba(212,175,55,0.1)' : 'none' }}>
                <span style={{ fontSize: 13, color: '#E8D9B8', fontWeight: 500 }}>{t.label}</span>
                <span className="font-display" style={{ fontSize: 17, color: '#D4AF37', fontWeight: 500, letterSpacing: '-0.01em' }}>{t.price}</span>
              </div>
            ))}
          </div>
        )}

        {extra && (
          <div style={{ padding: 14, background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.18)', fontSize: 12, color: '#D4AF37', marginBottom: 22, fontWeight: 500, letterSpacing: '0.02em' }}>
            <span style={{ fontStyle: 'italic', marginRight: 6 }}>+</span> {extra}
          </div>
        )}

        {price && (
          <div style={{ padding: '18px 22px', background: 'rgba(212,175,55,0.04)', borderTop: '1px solid rgba(212,175,55,0.18)', borderBottom: '1px solid rgba(212,175,55,0.18)', marginBottom: 22, textAlign: 'center' }}>
            <div style={{ fontSize: 9, color: '#7A7A85', fontWeight: 700, letterSpacing: '0.28em', marginBottom: 6, textTransform: 'uppercase' }}>Стоимость</div>
            <div className="font-display" style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 500, color: '#D4AF37', letterSpacing: '-0.02em', fontStyle: 'italic' }}>{price}</div>
          </div>
        )}

        <a href={href || WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 16, textAlign: 'center', background: 'linear-gradient(180deg, #E5C158, #B8932F)', color: '#08080B', fontSize: 12, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.16em', textTransform: 'uppercase', boxShadow: '0 10px 32px rgba(212,175,55,0.35)' }}>
          <WhatsAppIcon size={14} />
          {cta}
        </a>
      </div>
    </div>
  );
}
