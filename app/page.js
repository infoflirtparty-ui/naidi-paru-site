import Link from 'next/link';
import { Reveal, Counter, FAQItem, StickyCTA } from './components';
import { FloatingBg, LoadingScreen, SectionSpark } from './FloatingBg';

export const metadata = {
  title: 'Агентство знакомств Асем Альмурзиевой',
  description: 'Профессиональный подбор партнёра для успешных мужчин и женщин. Только проверенные кандидаты с серьёзными намерениями.',
};

const TALLY_URL = 'https://tally.so/r/VLJNAg';

// Brand mark — interlocking rings (symbol of union)
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

        {/* Top nav: brand mark + name + subtitle */}
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

        {/* 1. HERO — instantly clear positioning */}
        <section className="fade-in" style={{ padding: '32px 0 50px', textAlign: 'center' }}>
          {/* Asem photo as centerpiece */}
          <div style={{ position: 'relative', width: 132, height: 132, margin: '0 auto 24px' }}>
            <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: 'conic-gradient(from 0deg, #D4AF37, #FF4D8D, #A855F7, #D4AF37)', filter: 'blur(10px)', opacity: 0.45 }} />
            <div style={{ position: 'relative', width: 132, height: 132, borderRadius: '50%', overflow: 'hidden', border: '3px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 12px 48px rgba(212,175,55,0.3)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
                <img src="/asem.jpg" alt="Асем Альмурзиева" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, fontSize: 11, color: '#D4AF37', marginBottom: 22, fontWeight: 700, letterSpacing: '0.15em' }}>♥ ПОДБОР ПАРТНЁРА</div>

          {/* Clear, simple headline that ANY visitor understands in 3 seconds */}
          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(32px, 7vw, 50px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.025em', color: '#F5E9CF' }}>
            Знакомим серьёзных мужчин<br/>
            с <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 700 }}>достойными женщинами</em>
          </h1>

          <p style={{ fontSize: 16, color: '#D4D4E8', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 16px', fontWeight: 500 }}>
            Профессиональное сватовство для тех, кто состоялся в жизни и хочет встретить свою половинку
          </p>
          <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 36px' }}>
            Каждую кандидатку мы отбираем лично: характер, ценности, серьёзность намерений. Вы тратите время только на встречи, а не на поиск.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360, margin: '0 auto' }}>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '18px 36px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 15, fontWeight: 800, borderRadius: 14, textDecoration: 'none', boxShadow: '0 12px 40px rgba(212,175,55,0.4)', letterSpacing: '0.01em' }}>
              Получить кандидаток под мои критерии
            </a>
            <a href="#about" className="btn-primary"
              style={{ display: 'inline-block', padding: '14px 36px', background: 'rgba(255,255,255,0.04)', color: '#D4AF37', fontSize: 13, fontWeight: 600, borderRadius: 14, textDecoration: 'none', border: '1px solid rgba(212,175,55,0.3)' }}>
              Узнать об эксперте ↓
            </a>
          </div>
        </section>

        {/* 2. PAIN — speak to the busy, successful man */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Знакомо?</SectionLabel>
            <div className="glass" style={{ padding: 30, borderRadius: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <PainItem icon="💼" text="Вы успешны в бизнесе, но в личной жизни — пусто" />
                <PainItem icon="⏱" text="Нет времени и места для нормальных знакомств" />
                <PainItem icon="🚫" text="Лёгкие связи и охотницы за деньгами уже надоели" />
                <PainItem icon="🤷" text="Хочется серьёзную, достойную, но где её найти?" />
              </div>

              <div style={{ marginTop: 22, padding: 18, background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 14 }}>
                <p className="font-display" style={{ fontSize: 16, color: '#F5E9CF', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 6 }}>
                  Проблема не в вас.
                </p>
                <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.6 }}>
                  Проблема в том, что вокруг вас нет среды, где встречаются равные. Мы её создаём.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. SOLUTION — what we do for you, in plain words */}
        <Reveal>
          <section style={{ padding: '40px 0', position: 'relative' }}>
            <SectionSpark variant="mix" />
            <SectionLabel accent="#D4AF37">Что мы делаем</SectionLabel>

            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 30px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 18, letterSpacing: '-0.02em', color: '#F5E9CF' }}>
              Делаем за вас то, на что у вас<br/>
              <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>нет времени</em>
            </h2>

            <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr' }}>
              <Service
                icon="🔍"
                title="Находим достойных женщин"
                desc="Красивых, умных, состоявшихся. Не выпускниц инстаграм-курсов и не охотниц за деньгами."
              />
              <Service
                icon="✓"
                title="Проверяем каждую"
                desc="Характер, ценности, намерения. KYC, личное собеседование, психологическая совместимость."
              />
              <Service
                icon="📅"
                title="Организуем встречи"
                desc="Под ваше расписание. Вы только приходите и общаетесь — без неудобной переписки и догадок."
              />
              <Service
                icon="🤝"
                title="Сопровождаем до результата"
                desc="Не просто знакомим — помогаем построить отношения. До того момента, пока вы не скажете: «Я нашёл свою»."
              />
            </div>
          </section>
        </Reveal>

        {/* 4. HOW WE WORK — 8-step process */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Как мы работаем</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Вы оставляете заявку',
                'Проходите предварительный отбор',
                'Мы проводим интервью',
                'Формируем портрет идеальной партнёрши',
                'Выбираете формат работы',
                'Подбираем кандидаток лично',
                'Организуем встречи',
                'Сопровождаем до результата',
              ].map((t, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', borderRadius: 14, borderColor: 'rgba(212,175,55,0.1)' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(255,77,141,0.1))', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#D4AF37', flexShrink: 0, fontFamily: 'monospace' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.4 }}>{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* 5. PACKAGES */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Форматы работы</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <Package
                icon="👑"
                tag="ПОД КЛЮЧ"
                title="Индивидуальный подбор"
                subtitle="Для тех, кто хочет результат, а не процесс"
                includes={[
                  'Индивидуальный подбор под ваши критерии',
                  'Анализ личности и совместимости',
                  'Неограниченное число знакомств',
                  'Организация встреч под ваше расписание',
                  'Сопровождение на всех этапах',
                  'Помощь в построении отношений',
                ]}
                highlight='«Работаем до результата — пока вы не скажете: "Я встретил свою."»'
                price="от 2 500 000 тг"
                cta="Начать подбор"
                accent="#D4AF37"
                gradient="linear-gradient(135deg, #D4AF37, #B8860B)"
                textColor="#1A1000"
              />

              <Package
                vip
                icon="💎"
                tag="ЛИЧНО С АСЕМ"
                title="Личное сопровождение"
                subtitle="Лично с Асем Альмурзиевой — главной свахой страны"
                includes={[
                  'Вы работаете лично с Асем',
                  'Доступ к более сильным кандидаткам',
                  'Точный и глубокий подбор',
                  'Корректировка вашей стратегии в отношениях',
                  'Прямое участие эксперта в процессе',
                ]}
                requires={[
                  'Готовность к честной обратной связи',
                  'Готовность работать над собой',
                  'Готовность принимать решения',
                ]}
                price="от 5 000 000 тг"
                cta="Начать с Асем"
                accent="#D4AF37"
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                textColor="#1A1000"
              />

              <Package
                icon="✦"
                tag="ПО КОЛИЧЕСТВУ"
                title="Знакомства за фиксированную сумму"
                subtitle="Для тех, кто хочет начать с пробного формата"
                includes={[
                  'Вы даёте свои критерии',
                  'Мы подбираем 15–20 кандидаток',
                  'Вы выбираете, с кем познакомиться',
                  'Мы организуем встречи',
                ]}
                note="Качество кандидаток то же — вы платите за количество встреч."
                tiers={[
                  { label: '3 знакомства', price: '255 000 тг' },
                  { label: '5 знакомств', price: '365 000 тг' },
                ]}
                extra="Лично с Асем: +30% к стоимости пакета"
                cta="Выбрать формат"
                accent="#A855F7"
                gradient="linear-gradient(135deg, #A855F7, #FF4D8D)"
                textColor="white"
              />
            </div>
          </section>
        </Reveal>

        {/* 6. CASES */}
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

        {/* 7. ABOUT ASEM — credentials, media, interviews */}
        <Reveal>
          <section id="about" style={{ padding: '50px 0' }}>
            <SectionLabel accent="#D4AF37">Об эксперте</SectionLabel>

            <div className="glass" style={{ padding: 28, borderRadius: 24, borderColor: 'rgba(212,175,55,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
                <div style={{ width: 88, height: 88, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 10px 32px rgba(212,175,55,0.3)' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
                    <img src="/asem.jpg" alt="Асем Альмурзиева" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 4 }}>ОСНОВАТЕЛЬ АГЕНТСТВА</div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 700, lineHeight: 1.15, color: '#F5E9CF', letterSpacing: '-0.015em' }}>
                    Асем Альмурзиева
                  </h2>
                  <div style={{ fontSize: 13, color: '#A0A0C0', marginTop: 4, fontStyle: 'italic' }}>главная сваха страны</div>
                </div>
              </div>

              {/* Achievements grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, marginBottom: 22 }}>
                <Achievement icon="📺" label="Признанный медиаэксперт" sub="СМИ Казахстана" />
                <Achievement icon="⏳" label="10+ лет опыта" sub="в индустрии знакомств" />
                <Achievement icon="💍" label="500+ пар" sub="успешных кейсов" />
                <Achievement icon="🇰🇿" label="Казахстан" sub="и страны СНГ" />
              </div>

              <p className="font-display" style={{ fontSize: 16, color: '#F5E9CF', lineHeight: 1.55, marginBottom: 14, fontWeight: 500, fontStyle: 'italic' }}>
                «Я работаю только с теми, кто готов к результату.»
              </p>
              <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7, marginBottom: 12 }}>
                Я не беру всех подряд. Со мной работают мужчины, которые ценят свой уровень, своё время и хотят серьёзный результат.
              </p>
              <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.7 }}>
                Моя задача — не просто познакомить вас, а привести к отношениям, которые соответствуют вашему статусу и ценностям.
              </p>

            </div>
          </section>
        </Reveal>

        {/* TV INTERVIEWS gallery */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel accent="#D4AF37">📺 На телевидении</SectionLabel>
            <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, marginBottom: 20, maxWidth: 580 }}>
              Об Асем рассказывают ведущие телеканалы Казахстана. Её приглашают как эксперта по теме современных знакомств и брака.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
              <TvCard src="/media/tv-almaty.jpg" channel="Almaty TV" show='«Таңғы Studio»' caption="Сваха" />
              <TvCard src="/media/tv-khabar.jpg" channel="Хабар" show="Утреннее шоу" caption="О современном сватовстве" />
              <TvCard src="/media/tv-ntk.jpg" channel="НТК" show="Студийное интервью" caption="Эксперт по знакомствам" />
              <TvCard src="/media/tv-almaty-2.jpg" channel="Almaty TV" show='«Таңғы Studio»' caption="Главная сваха страны" />
            </div>
          </section>
        </Reveal>

        {/* PRESS coverage */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel accent="#D4AF37">🗞 Публикации в СМИ</SectionLabel>
            <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, marginBottom: 20, maxWidth: 580 }}>
              Ведущие издания Казахстана пишут об агентстве Асем как о флагмане индустрии профессиональных знакомств.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <PressCard
                src="/media/press-nur.jpg"
                outlet="NUR.KZ"
                title="«Главная сваха страны Асем Альмурзиева рассказала, какие девушки нравятся миллионерам»"
              />
              <PressCard
                src="/media/press-zakon.jpg"
                outlet="zakon.kz"
                title="«Как найти мужа-миллионера. Казахстанские реалии»"
                sub="Сваха, которой доверяют свою судьбу крупные миллионеры Казахстана"
              />
              <PressCard
                src="/media/press-eurasia.jpg"
                outlet="Style of Eurasia"
                title="«Marry a Millionaire»"
                sub="Казахстанская сваха нашла эксклюзивный способ выдачи невест замуж за миллионеров"
              />
            </div>
            <p style={{ fontSize: 11, color: '#6B6B8D', lineHeight: 1.55, marginTop: 16, fontStyle: 'italic', textAlign: 'center' }}>
              По запросу предоставим полный список публикаций и ссылки на оригиналы статей.
            </p>
          </section>
        </Reveal>

        {/* 8. FAQ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionLabel>Частые вопросы</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem accent="#D4AF37" q="Вы берёте всех клиентов?"
                a="Нет. Мы работаем только с теми, кто проходит предварительный отбор. Это гарантирует качество с обеих сторон." />
              <FAQItem accent="#D4AF37" q="Вы гарантируете результат?"
                a="Мы гарантируем профессиональный подбор и сопровождение. Сами отношения зависят от взаимной симпатии — но шансы на успех в нашей среде в разы выше." />
              <FAQItem accent="#D4AF37" q="Можно ли вернуть деньги?"
                a="Услуга носит нематериальный характер. После начала работы возврат средств не производится — но мы работаем до результата." />
              <FAQItem accent="#D4AF37" q="Конфиденциально ли это?"
                a="Абсолютно. Все данные клиентов защищены. Информация о вас не передаётся никому, кроме отобранных под вас кандидаток." />
              <FAQItem accent="#D4AF37" q="Как вы проверяете кандидаток?"
                a="Личное интервью, проверка документов, оценка психологической стабильности и серьёзности намерений. Случайных людей у нас нет." />
            </div>
          </section>
        </Reveal>

        {/* 9. FINAL CTA */}
        <Reveal>
          <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
            <SectionSpark variant="gold" />
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 16, color: '#F5E9CF', letterSpacing: '-0.02em' }}>
              Можно продолжать искать сами<br/>и тратить время
            </h2>
            <p className="font-display" style={{ fontSize: 'clamp(22px, 4.5vw, 28px)', fontWeight: 700, fontStyle: 'italic', marginBottom: 36, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              А можно — встретить ту самую<br/>уже в этом году
            </p>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '22px 56px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 17, fontWeight: 800, borderRadius: 18, textDecoration: 'none', boxShadow: '0 16px 56px rgba(212,175,55,0.45)', letterSpacing: '0.02em' }}>
              Пройти отбор →
            </a>
            <p style={{ marginTop: 18, fontSize: 13, color: '#6B6B8D' }}>Заявка занимает 3 минуты · ответим в течение суток</p>
          </section>
        </Reveal>

        {/* CROSS-LINKS to other services */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Дополнительные направления</div>
              <p style={{ fontSize: 14, color: '#A0A0C0', maxWidth: 500, margin: '0 auto', lineHeight: 1.55 }}>
                Помимо индивидуального подбора у нас есть ещё два направления
              </p>
            </div>
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr' }}>
              <ServiceLink
                href="/men"
                badge="ДЛЯ МУЖЧИН"
                title="Найди Пару"
                subtitle="Telegram-приложение · 10 000 ₸ за 30 анкет"
                icon="♥"
                gradient="linear-gradient(135deg, #FF4D8D, #A855F7)"
                accent="#FF4D8D"
              />
              <ServiceLink
                href="/asem"
                badge="ДЛЯ ДЕВУШЕК"
                title="Программа Асем"
                subtitle="Стать женщиной, которую выбирают · от 37 500 ₸/мес"
                icon="✦"
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                accent="#D4AF37"
              />
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '40px 0 110px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <BrandRings size={32} />
              <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Агентство знакомств</div>
              <div className="font-display" style={{ fontSize: 16, fontWeight: 600, color: '#F5E9CF', fontStyle: 'italic' }}>Асем Альмурзиева</div>
            </div>

            <div>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>Контакты</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <a href="https://t.me/Naidiparu2_bot" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#D4AF37', textDecoration: 'none', padding: '8px 16px', background: 'rgba(212,175,55,0.08)', borderRadius: 10, border: '1px solid rgba(212,175,55,0.2)' }}>
                  Telegram
                </a>
                <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#FF4D8D', textDecoration: 'none', padding: '8px 16px', background: 'rgba(255,77,141,0.08)', borderRadius: 10, border: '1px solid rgba(255,77,141,0.2)' }}>
                  Анкета
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 12, flexWrap: 'wrap' }}>
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

      <StickyCTA href={TALLY_URL} label="Пройти отбор" accent="#D4AF37" accentTo="#B8860B" textColor="#1A1000" />
    </div>
  );
}

function SectionLabel({ children, accent = '#A0A0C0' }) {
  return (
    <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 32, height: 1.5, background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      <h2 style={{ fontSize: 11, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: '0.25em' }}>{children}</h2>
    </div>
  );
}

function PainItem({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,77,141,0.1)', border: '1px solid rgba(255,77,141,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{icon}</div>
      <p className="font-display" style={{ fontSize: 'clamp(15px, 3.2vw, 17px)', color: '#F5E9CF', lineHeight: 1.4, fontWeight: 500, paddingTop: 6 }}>{text}</p>
    </div>
  );
}

function Service({ icon, title, desc }) {
  return (
    <div className="glass" style={{ padding: 20, borderRadius: 18, display: 'flex', gap: 16, alignItems: 'flex-start', borderColor: 'rgba(212,175,55,0.12)' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(255,77,141,0.1))', border: '1px solid rgba(212,175,55,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#F5E9CF', marginBottom: 4 }}>{title}</div>
        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

function Achievement({ icon, label, sub }) {
  return (
    <div style={{ padding: 14, borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.12)', textAlign: 'center' }}>
      <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#F5E9CF', lineHeight: 1.3 }}>{label}</div>
      <div style={{ fontSize: 10, color: '#8B8BA8', marginTop: 2, lineHeight: 1.3 }}>{sub}</div>
    </div>
  );
}

function TvCard({ src, channel, show, caption }) {
  return (
    <div className="glass switcher-link" style={{
      borderRadius: 16, overflow: 'hidden',
      borderColor: 'rgba(212,175,55,0.18)',
      cursor: 'default',
    }}>
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#0E0D17' }}>
        <img src={src} alt={`${channel} — ${show}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* gradient overlay for legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 50%, rgba(10,10,20,0.8) 100%)', pointerEvents: 'none' }} />
        {/* TV badge */}
        <div style={{ position: 'absolute', top: 10, left: 10, padding: '3px 10px', background: 'rgba(212,175,55,0.9)', color: '#1A1000', borderRadius: 14, fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          📺 ТВ
        </div>
      </div>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{channel}</div>
        <div style={{ fontSize: 13, color: '#F5E9CF', fontWeight: 600, lineHeight: 1.3 }}>{show}</div>
        {caption && <div style={{ fontSize: 11, color: '#8B8BA8', marginTop: 4, lineHeight: 1.4 }}>{caption}</div>}
      </div>
    </div>
  );
}

function PressCard({ src, outlet, title, sub }) {
  return (
    <div className="glass switcher-link" style={{
      borderRadius: 18, overflow: 'hidden',
      borderColor: 'rgba(212,175,55,0.16)',
      display: 'flex', gap: 0, cursor: 'default',
    }}>
      <div style={{ width: 130, flexShrink: 0, background: '#0E0D17', position: 'relative', overflow: 'hidden' }}>
        <img src={src} alt={outlet} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', flexShrink: 0 }} />
          <span style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{outlet}</span>
        </div>
        <div className="font-display" style={{ fontSize: 14, color: '#F5E9CF', fontWeight: 600, lineHeight: 1.35, marginBottom: sub ? 4 : 0 }}>{title}</div>
        {sub && <div style={{ fontSize: 11, color: '#8B8BA8', lineHeight: 1.45 }}>{sub}</div>}
      </div>
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

function Package({ icon, tag, title, subtitle, includes, requires, highlight, note, tiers, extra, price, cta, accent, gradient, textColor, vip }) {
  return (
    <div className="glass" style={{
      padding: 0, borderRadius: 24, position: 'relative',
      borderColor: vip ? `${accent}44` : `${accent}22`,
      boxShadow: vip ? `0 20px 60px ${accent}20, 0 0 0 1px ${accent}30 inset` : '0 12px 40px rgba(0,0,0,0.3)',
      overflow: 'hidden',
    }}>
      <div style={{ height: 3, background: gradient }} />

      {vip && (
        <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 12px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', borderRadius: 20, fontSize: 9, fontWeight: 900, letterSpacing: '0.15em' }}>
          ✦ ПРЕМИУМ
        </div>
      )}

      <div style={{ padding: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: `0 8px 24px ${accent}55`, color: 'white' }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, color: accent, fontWeight: 800, letterSpacing: '0.2em', marginBottom: 4 }}>{tag}</div>
            <h3 className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {title}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, marginBottom: 20 }}>{subtitle}</p>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>Что вы получаете</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {includes.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#D4D4E8', lineHeight: 1.5 }}>
                <span style={{ color: accent, fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>

        {requires && (
          <div style={{ marginBottom: 18, padding: 14, background: 'rgba(212,175,55,0.06)', borderRadius: 10, border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: 10, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8, textTransform: 'uppercase' }}>Главное с вашей стороны</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {requires.map(r => (
                <div key={r} style={{ fontSize: 12, color: '#D4D4E8', paddingLeft: 12, borderLeft: `2px solid ${accent}` }}>{r}</div>
              ))}
            </div>
          </div>
        )}

        {highlight && (
          <div className="font-display" style={{ marginBottom: 18, padding: 16, background: 'rgba(212,175,55,0.06)', borderRadius: 12, border: '1px solid rgba(212,175,55,0.18)', fontSize: 13, color: '#F5E9CF', fontStyle: 'italic', lineHeight: 1.5 }}>
            {highlight}
          </div>
        )}

        {note && (
          <p style={{ fontSize: 12, color: '#8B8BA8', fontStyle: 'italic', marginBottom: 16, lineHeight: 1.55 }}>{note}</p>
        )}

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

        {price && (
          <div style={{ padding: '16px 20px', background: 'rgba(212,175,55,0.06)', borderRadius: 14, marginBottom: 16, textAlign: 'center', border: `1px solid ${accent}25` }}>
            <div style={{ fontSize: 10, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 4, textTransform: 'uppercase' }}>Стоимость</div>
            <div style={{ fontSize: 'clamp(22px, 5vw, 26px)', fontWeight: 900, color: accent, letterSpacing: '-0.02em' }}>{price}</div>
          </div>
        )}

        <a href={TALLY_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', padding: '14px', textAlign: 'center', borderRadius: 14, background: gradient, color: textColor, fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: `0 10px 32px ${accent}55` }}>
          {cta} →
        </a>
      </div>
    </div>
  );
}
