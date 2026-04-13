import Link from 'next/link';
import { Reveal, Counter, FAQItem, StickyCTA } from './components';
import { FloatingBg, LoadingScreen, SectionSpark } from './FloatingBg';

export const metadata = {
  title: 'Закрытый подбор отношений — агентство Асем',
  description: 'Подбор партнёра для мужчин 30+, которые не готовы на компромиссы. Работаем только с теми, кто проходит отбор.',
};

const TALLY_URL = 'https://tally.so/r/VLJNAg';

export default function AgencyLanding() {
  return (
    <div style={{ background: '#0A0A14', color: 'white', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <LoadingScreen />

      {/* Atmospheric blobs */}
      <div className="blob" style={{ top: '-10%', left: '-10%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 70%)', zIndex: 0 }} />
      <div className="blob blob-2" style={{ top: '40%', right: '-20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,77,141,0.15), transparent 70%)', zIndex: 0 }} />
      <div className="blob" style={{ bottom: '10%', left: '15%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)', zIndex: 0, animationDelay: '-14s' }} />

      {/* Floating thematic particles (hearts, sparkles, suits) */}
      <FloatingBg density="normal" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', padding: '0 20px' }}>

        {/* Minimal nav */}
        <nav style={{ padding: '22px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #D4AF37, #B8860B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 8px 24px rgba(212,175,55,0.3)' }}>♠</div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '0.15em' }}>АГЕНТСТВО АСЕМ</span>
        </nav>

        {/* 1. HERO */}
        <section className="fade-in" style={{ padding: '40px 0 50px', textAlign: 'center' }}>
          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, fontSize: 11, color: '#D4AF37', marginBottom: 28, fontWeight: 700, letterSpacing: '0.15em' }}>ЗАКРЫТЫЙ ПОДБОР</div>

          <h1 className="hero-title font-display" style={{ fontSize: 'clamp(30px, 7vw, 52px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.025em', color: '#F5E9CF' }}>
            Закрытый подбор<br/>
            отношений для мужчин,<br/>
            <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 700 }}>которые не готовы на компромиссы</em>
          </h1>

          <p style={{ fontSize: 16, color: '#D4D4E8', lineHeight: 1.6, maxWidth: 580, margin: '0 auto 14px', fontWeight: 500 }}>
            Мы не работаем со всеми.
          </p>
          <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 16px' }}>
            В нашей базе — только проверенные, адекватные и финансово состоявшиеся кандидаты, готовые к семье и серьёзным отношениям.
          </p>
          <p style={{ fontSize: 14, color: '#D4AF37', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 40px', fontWeight: 600, fontStyle: 'italic' }}>
            Если вы привыкли выбирать лучшее — вы по адресу.
          </p>

          {/* Filter block */}
          <div className="glass" style={{ padding: 20, borderRadius: 16, maxWidth: 520, margin: '0 auto 36px', textAlign: 'left', borderColor: 'rgba(239,68,68,0.18)' }}>
            <p style={{ fontSize: 12, color: '#F87171', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 10, textTransform: 'uppercase' }}>Мы не подходим вам, если:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['вы ищете несерьёзное общение', 'не готовы инвестировать в личную жизнь', 'не понимаете, какой формат отношений вам нужен'].map(t => (
                <div key={t} style={{ fontSize: 13, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(239,68,68,0.35)' }}>{t}</div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360, margin: '0 auto' }}>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '18px 36px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 15, fontWeight: 800, borderRadius: 14, textDecoration: 'none', boxShadow: '0 12px 40px rgba(212,175,55,0.4)', letterSpacing: '0.01em' }}>
              Получить кандидатов под мои критерии
            </a>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '16px 36px', background: 'rgba(255,255,255,0.04)', color: '#D4AF37', fontSize: 14, fontWeight: 700, borderRadius: 14, textDecoration: 'none', border: '1px solid rgba(212,175,55,0.3)' }}>
              Пройти отбор
            </a>
          </div>
        </section>

        {/* 2. PAIN */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Если вам знакомо</SectionLabel>
            <div className="glass" style={{ padding: 32, borderRadius: 24, borderColor: 'rgba(239,68,68,0.15)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {[
                  'Вам 30+',
                  'Вы реализованы в деньгах и статусе',
                  'Но в личной жизни — случайные люди',
                ].map(t => (
                  <div key={t} className="font-display" style={{ fontSize: 'clamp(17px, 3.5vw, 20px)', color: '#F5E9CF', lineHeight: 1.35, fontWeight: 500 }}>{t}</div>
                ))}
              </div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', margin: '20px 0' }} />
              <p className="font-display" style={{ fontSize: 'clamp(16px, 3.5vw, 19px)', color: '#F5E9CF', lineHeight: 1.4, fontStyle: 'italic', marginBottom: 6 }}>
                Вы не привыкли к посредственности
              </p>
              <p style={{ fontSize: 15, color: '#A0A0C0', lineHeight: 1.55 }}>
                Но именно её получаете в отношениях
              </p>

              <div style={{ marginTop: 28, padding: 20, background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 14 }}>
                <p style={{ fontSize: 14, color: '#D4AF37', fontWeight: 700, marginBottom: 4 }}>Проблема не в вас.</p>
                <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.55 }}>
                  Проблема в уровне людей, к которым у вас есть доступ.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. SOLUTION */}
        <Reveal>
          <section style={{ padding: '50px 0', position: 'relative' }}>
            <SectionSpark variant="mix" />
            <SectionLabel accent="#D4AF37">Решение</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 5vw, 34px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 18, letterSpacing: '-0.02em', color: '#F5E9CF' }}>
              Мы формируем окружение,<br/>
              <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>где встречаются равные</em>
            </h2>
            <Card>
              <p style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.65, marginBottom: 18 }}>
                Мы не просто знакомим. Мы создаём среду, где:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {[
                  ['мужчины', 'финансово сильные и реализованные'],
                  ['женщины', 'готовые к семье и осознанным отношениям'],
                  ['отсутствуют', 'случайные люди'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#D4D4E8', lineHeight: 1.55 }}>
                    <span style={{ color: '#D4AF37', fontWeight: 700, flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 11, paddingTop: 2, minWidth: 100 }}>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 16, background: 'rgba(212,175,55,0.06)', borderRadius: 12, border: '1px solid rgba(212,175,55,0.18)' }}>
                <p style={{ fontSize: 14, color: '#F5E9CF', lineHeight: 1.55, fontWeight: 500, marginBottom: 4 }}>Каждый кандидат проходит отбор.</p>
                <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.55 }}>Вы знакомитесь только с теми, кто соответствует вашему уровню.</p>
              </div>
            </Card>
          </section>
        </Reveal>

        {/* 4. HOW WE WORK */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Как мы работаем</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Вы оставляете заявку',
                'Проходите предварительный отбор',
                'Мы проводим интервью',
                'Формируем портрет партнёра',
                'Выбираете формат работы',
                'Подбираем кандидатов',
                'Организуем знакомства',
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
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Пакеты услуг</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {/* 1. Individual full-service */}
              <Package
                icon="👑"
                tag="ПОД КЛЮЧ"
                title="Индивидуальный подбор под ключ"
                subtitle="Формат для мужчин, которые ценят своё время и хотят закрыть вопрос отношений на уровне результата"
                includes={[
                  'индивидуальный подбор под ваши критерии',
                  'анализ личности и совместимости',
                  'неограниченное количество знакомств',
                  'организация встреч',
                  'сопровождение на всех этапах',
                  'помощь в построении отношений',
                ]}
                highlight='«Мы работаем до результата — пока вы не скажете: "Я влюбился. Я встретил действительно своего человека."»'
                price="от 2 500 000 тг"
                cta="Начать подбор"
                accent="#D4AF37"
                gradient="linear-gradient(135deg, #D4AF37, #B8860B)"
                textColor="#1A1000"
              />

              {/* 2. Personal with Asem — the premium */}
              <Package
                vip
                icon="♠"
                tag="ЛИЧНО С АСЕМ"
                title="Личное сопровождение с Асем"
                subtitle="Формат работы с главной свахой страны"
                includes={[
                  'вы работаете лично с Асем',
                  'доступ к более сильным кандидатам',
                  'более точный и глубокий подбор',
                  'корректировка вашей стратегии в отношениях',
                  'прямое участие эксперта в процессе',
                ]}
                requires={[
                  'готовность к честной обратной связи',
                  'готовность работать над собой',
                  'готовность принимать решения',
                ]}
                price="от 5 000 000 тг"
                cta="Начать подбор с Асем"
                accent="#D4AF37"
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                textColor="#1A1000"
              />

              {/* 3. Pay-per-introduction */}
              <Package
                icon="⚡"
                tag="ПО КОЛИЧЕСТВУ"
                title="Знакомства (оплата за количество)"
                subtitle="Формат для тех, кто хочет начать с конкретного количества знакомств"
                includes={[
                  'вы даёте свои критерии',
                  'мы подбираем 15–20 кандидатов',
                  'вы выбираете, с кем хотите познакомиться',
                  'мы организуем встречи',
                ]}
                note="Качество кандидатов не меняется — вы платите именно за количество знакомств."
                tiers={[
                  { label: '3 знакомства', price: '255 000 тг' },
                  { label: '5 знакомств', price: '365 000 тг' },
                ]}
                extra="Работа лично с главной свахой Асем: +30% к стоимости пакета"
                cta="Выбрать формат знакомств"
                accent="#A855F7"
                gradient="linear-gradient(135deg, #A855F7, #FF4D8D)"
                textColor="white"
              />
            </div>

            {/* Closing pitch */}
            <div className="glass" style={{ marginTop: 28, padding: 24, borderRadius: 20, borderColor: 'rgba(212,175,55,0.2)' }}>
              <p style={{ fontSize: 13, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Почему выбирают формат под ключ</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {['их время стоит дороже экспериментов', 'они не хотят разбираться в людях', 'им нужен результат, а не процесс'].map(t => (
                  <div key={t} style={{ fontSize: 14, color: '#D4D4E8', paddingLeft: 18, borderLeft: '2px solid rgba(212,175,55,0.4)' }}>{t}</div>
                ))}
              </div>
              <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ display: 'block', padding: '14px 24px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 14, fontWeight: 800, borderRadius: 12, textDecoration: 'none', textAlign: 'center', boxShadow: '0 10px 32px rgba(212,175,55,0.4)' }}>
                Начать подбор →
              </a>
            </div>
          </section>
        </Reveal>

        {/* 6. CASES */}
        <Reveal>
          <section style={{ padding: '50px 0', position: 'relative' }}>
            <SectionSpark variant="hearts" />
            <SectionLabel>Кейсы</SectionLabel>
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

        {/* 7. ABOUT ASEM */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel accent="#D4AF37">Об Асем</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
              <div style={{ width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 12px 40px rgba(212,175,55,0.3)' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
                  <img src="/asem.jpg" alt="Асем" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 6 }}>ГЛАВНАЯ СВАХА СТРАНЫ</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 700, lineHeight: 1.2, color: '#F5E9CF', letterSpacing: '-0.015em' }}>
                  Я работаю только с теми,<br/>
                  <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>кто готов к результату</em>
                </h2>
              </div>
            </div>

            <Card>
              <p className="font-display" style={{ fontSize: 16, color: '#F5E9CF', lineHeight: 1.55, marginBottom: 14, fontWeight: 500 }}>
                Я — главная сваха страны.
              </p>
              <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7, marginBottom: 12 }}>
                Я не беру всех подряд. Со мной работают мужчины, которые ценят уровень, время и результат.
              </p>
              <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.7 }}>
                Моя задача — не просто познакомить вас, а привести к отношениям, которые соответствуют вашему статусу.
              </p>
            </Card>
          </section>
        </Reveal>

        {/* 8. FAQ */}
        <Reveal>
          <section style={{ padding: '50px 0' }}>
            <SectionLabel>Частые вопросы</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem accent="#D4AF37" q="Вы берёте всех клиентов?"
                a="Нет. Мы работаем только с теми, кто проходит отбор." />
              <FAQItem accent="#D4AF37" q="Вы гарантируете результат?"
                a="Мы гарантируем подбор и сопровождение. Результат зависит от взаимной симпатии." />
              <FAQItem accent="#D4AF37" q="Можно ли вернуть деньги?"
                a="Нет. Услуга носит нематериальный характер." />
            </div>
          </section>
        </Reveal>

        {/* 9. FINAL CTA */}
        <Reveal>
          <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
            <SectionSpark variant="gold" />
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: 1.25, marginBottom: 16, color: '#F5E9CF', letterSpacing: '-0.02em' }}>
              Вы можете продолжать<br/>искать сами и тратить время
            </h2>
            <p className="font-display" style={{ fontSize: 'clamp(22px, 4.5vw, 28px)', fontWeight: 700, fontStyle: 'italic', marginBottom: 36, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Или зайти в среду,<br/>где уже есть люди вашего уровня
            </p>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '22px 56px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 17, fontWeight: 800, borderRadius: 18, textDecoration: 'none', boxShadow: '0 16px 56px rgba(212,175,55,0.45)', letterSpacing: '0.02em' }}>
              👉 Пройти отбор
            </a>
          </section>
        </Reveal>

        {/* CROSS-LINKS to other services */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Дополнительные направления</div>
              <p style={{ fontSize: 14, color: '#A0A0C0', maxWidth: 500, margin: '0 auto', lineHeight: 1.55 }}>
                Помимо закрытого подбора у нас есть ещё два направления
              </p>
            </div>
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr' }}>
              <ServiceLink
                href="/men"
                badge="ДЛЯ МУЖЧИН"
                title="Найди Пару"
                subtitle="Telegram Mini App · 10 000 ₸ за 30 анкет"
                icon="🔥"
                gradient="linear-gradient(135deg, #FF4D8D, #A855F7)"
                accent="#FF4D8D"
              />
              <ServiceLink
                href="/asem"
                badge="ДЛЯ ДЕВУШЕК"
                title="Программа Асем"
                subtitle="Стать женщиной, которую выбирают · от 37 500 ₸/мес"
                icon="✨"
                gradient="linear-gradient(135deg, #D4AF37, #FF4D8D)"
                accent="#D4AF37"
              />
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '40px 0 110px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'center' }}>
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

            <p style={{ fontSize: 11, color: '#6B6B8D', marginTop: 8 }}>© {new Date().getFullYear()} Агентство Асем. Все права защищены.</p>
          </div>
        </footer>
      </div>

      {/* Sticky CTA on mobile */}
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

function Card({ children, padding = 26, style = {} }) {
  return (
    <div className="glass" style={{ borderRadius: 20, padding, ...style }}>
      {children}
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
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, flexShrink: 0,
          boxShadow: `0 8px 24px ${accent}55`,
        }}>{icon}</div>
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
      {/* Top gradient bar */}
      <div style={{ height: 3, background: gradient }} />

      {vip && (
        <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 12px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', borderRadius: 20, fontSize: 9, fontWeight: 900, letterSpacing: '0.15em' }}>
          👑 ПРЕМИУМ
        </div>
      )}

      <div style={{ padding: 26 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14, background: gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, flexShrink: 0,
            boxShadow: `0 8px 24px ${accent}55`,
          }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, color: accent, fontWeight: 800, letterSpacing: '0.2em', marginBottom: 4 }}>{tag}</div>
            <h3 className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {title}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, marginBottom: 20 }}>{subtitle}</p>

        {/* Includes */}
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

        {/* Requires (for VIP only) */}
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

        {/* Highlight callout */}
        {highlight && (
          <div className="font-display" style={{ marginBottom: 18, padding: 16, background: 'rgba(212,175,55,0.06)', borderRadius: 12, border: '1px solid rgba(212,175,55,0.18)', fontSize: 13, color: '#F5E9CF', fontStyle: 'italic', lineHeight: 1.5 }}>
            {highlight}
          </div>
        )}

        {/* Note */}
        {note && (
          <p style={{ fontSize: 12, color: '#8B8BA8', fontStyle: 'italic', marginBottom: 16, lineHeight: 1.55 }}>{note}</p>
        )}

        {/* Pricing tiers (for pay-per-intro) */}
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
            👑 {extra}
          </div>
        )}

        {/* Price (single) */}
        {price && (
          <div style={{ padding: '16px 20px', background: 'rgba(212,175,55,0.06)', borderRadius: 14, marginBottom: 16, textAlign: 'center', border: `1px solid ${accent}25` }}>
            <div style={{ fontSize: 10, color: '#6B6B8D', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 4, textTransform: 'uppercase' }}>Стоимость</div>
            <div style={{ fontSize: 'clamp(22px, 5vw, 26px)', fontWeight: 900, color: accent, letterSpacing: '-0.02em' }}>{price}</div>
          </div>
        )}

        {/* CTA */}
        <a href={TALLY_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', padding: '14px', textAlign: 'center', borderRadius: 14, background: gradient, color: textColor, fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: `0 10px 32px ${accent}55` }}>
          {cta} →
        </a>
      </div>
    </div>
  );
}
