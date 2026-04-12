import { TopNav, SiteSwitcher } from '../SiteSwitcher';

export const metadata = {
  title: 'Асем — программа для женщин',
  description: 'Стань женщиной, которую мужчина выбирает. Система, после которой строят семью.',
};

const TALLY_URL = 'https://tally.so/r/VLJNAg';

export default function AsemPage() {
  return (
    <div style={{ background: '#0B0A14', color: 'white', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 20%, rgba(212,175,55,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,77,141,0.05) 0%, transparent 50%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>

        <TopNav current="asem" brandLabel="АСЕМ" brandColor="#D4AF37" />

        {/* HERO */}
        <section className="fade-in" style={{ padding: '40px 0 60px', textAlign: 'center' }}>
          <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 28px', border: '3px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 12px 48px rgba(212,175,55,0.25)' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
              <img src="/asem.jpg" alt="Асем" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 20, fontSize: 11, color: '#D4AF37', marginBottom: 24, fontWeight: 600, letterSpacing: '0.1em' }}>АВТОРСКАЯ ПРОГРАММА</div>

          <h1 style={{ fontSize: 'clamp(22px, 5.5vw, 34px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 12, letterSpacing: '-0.01em', color: '#F5E9CF' }}>
            ТЫ ИМЕЕШЬ ПРАВО БЫТЬ<br/>
            <span style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>СЧАСТЛИВОЙ</span>
          </h1>
          <p style={{ fontSize: 15, color: '#A0A0C0', marginBottom: 8 }}>В любом возрасте</p>
          <p style={{ fontSize: 14, color: '#6B6B8D', marginBottom: 32 }}>Даже если тебе 50, 60 или 70</p>

          <p style={{ fontSize: 17, color: '#D4D4E8', lineHeight: 1.55, maxWidth: 520, margin: '0 auto 36px' }}>
            Я научу тебя, как быть такой женщиной,<br/>
            <span style={{ color: '#D4AF37', fontWeight: 600 }}>которую мужчина выбирает</span>
          </p>

          <a href={TALLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', padding: '18px 42px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 16, fontWeight: 700, borderRadius: 16, textDecoration: 'none', boxShadow: '0 12px 40px rgba(212,175,55,0.35)', letterSpacing: '0.02em' }}>
            👉 Пройти отбор
          </a>
        </section>

        {/* QUOTE */}
        <section style={{ padding: '20px 0 60px' }}>
          <div style={{ padding: 28, borderRadius: 20, background: 'linear-gradient(145deg, rgba(212,175,55,0.06), rgba(255,77,141,0.03))', border: '1px solid rgba(212,175,55,0.15)', textAlign: 'center' }}>
            <p style={{ fontSize: 17, color: '#F5E9CF', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 12 }}>
              «Ты не для "попробовать".<br/>
              Ты — та, на которой женятся.»
            </p>
            <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>
              Если мужчина с первых свиданий не понимает, что ты — женщина для семьи, значит ты просто не умеешь себя правильно подать.
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Проблема" />
          <Card>
            <p style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.6, marginBottom: 16 }}>Ты можешь быть красивой, умной, успешной. <strong>Но:</strong></p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['мужчины пропадают', 'не предлагают серьёзное', 'зовут «просто пообщаться»', 'ты устала всё тянуть сама', 'или вообще нет достойных вариантов'].map(t => (
                <div key={t} style={{ fontSize: 14, color: '#A0A0C0', paddingLeft: 18, borderLeft: '2px solid rgba(239,68,68,0.3)', lineHeight: 1.5 }}>{t}</div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: 14, background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 12 }}>
              <p style={{ fontSize: 13, color: '#D4AF37', fontWeight: 600, marginBottom: 4 }}>👉 проблема не в мужчинах</p>
              <p style={{ fontSize: 13, color: '#F5E9CF' }}>👉 проблема в том, как ты себя выстраиваешь</p>
            </div>
          </Card>
        </section>

        {/* FOR WHOM */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Для кого это" />
          <Card>
            <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 14 }}>Это для тебя, если:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'тебе 30+ и ты устала быть «сильной и одной»',
                'ты после развода и больше не хочешь ошибаться',
                'ты пробовала сайты знакомств и разочаровалась',
                'ты успешна в работе, но в личной жизни пусто',
                'ты не понимаешь, где нормальные мужчины',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#D4D4E8', lineHeight: 1.55 }}>
                  <span style={{ color: '#D4AF37' }}>—</span>{t}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: 16, background: 'rgba(255,77,141,0.05)', borderRadius: 12, border: '1px solid rgba(255,77,141,0.15)' }}>
              <p style={{ fontSize: 13, color: '#FF4D8D', fontWeight: 600, marginBottom: 10 }}>И самое главное:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#D4D4E8' }}>
                <div>— ты прошла кучу курсов по женственности</div>
                <div>— ты знаешь психологию лучше многих</div>
                <div>— ты сама можешь быть кому угодно психологом</div>
              </div>
              <p style={{ marginTop: 12, fontSize: 13, color: '#F9A8D4', fontStyle: 'italic', lineHeight: 1.5 }}>
                НО с тобой это почему-то не работает. Ты всё понимаешь, но в жизни это не даёт результата.
              </p>
              <p style={{ marginTop: 10, fontSize: 13, color: '#D4AF37', fontWeight: 600 }}>
                👉 потому что тебе не дали систему, которая работает в реальности
              </p>
            </div>
          </Card>
        </section>

        {/* POSITIONING */}
        <section style={{ padding: '30px 0' }}>
          <Card style={{ background: 'linear-gradient(145deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))', borderColor: 'rgba(212,175,55,0.2)' }}>
            <p style={{ fontSize: 13, color: '#6B6B8D', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Позиционирование</p>
            <p style={{ fontSize: 16, color: '#F5E9CF', lineHeight: 1.5, marginBottom: 14 }}>
              Это <strong style={{ color: '#D4AF37' }}>не курс</strong> про «женственность».
            </p>
            <p style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.6, marginBottom: 14 }}>
              Это система, после которой:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['тебя выбирают', 'в тебя вкладываются', 'с тобой хотят строить семью'].map(t => (
                <div key={t} style={{ padding: '10px 16px', background: 'rgba(212,175,55,0.08)', borderRadius: 10, fontSize: 14, color: '#F5E9CF', fontWeight: 500 }}>✓ {t}</div>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: 13, color: '#A0A0C0', fontStyle: 'italic', textAlign: 'center' }}>
              После моей программы женщины выходят в отношения и создают семью
            </p>
          </Card>
        </section>

        {/* WHAT YOU GET */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Что ты получишь" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '01', title: 'Разгром старых установок', desc: 'Ты увидишь, почему у тебя не получалось и поймёшь, где ты теряла мужчин. Ты поймёшь, что достойных мужчин много и начнёшь видеть их.' },
              { n: '02', title: 'Секреты рабочего «Хочу»', desc: 'Ты поймёшь, чего хочешь именно ты — а не мама, подруги или общество. Ты начнёшь выбирать, а не соглашаться. Научишься фильтровать мужчин и выбирать достойных.' },
              { n: '03', title: 'Самооценка', desc: 'Ты перестанешь терпеть, доказывать, оправдываться. Ты станешь женщиной, которая себя ценит, любит и уважает. И начнёшь притягивать сильных мужчин.' },
              { n: '04', title: 'Миллион ухажёров', desc: 'Ты научишься цеплять с первых секунд, вызывать интерес, удерживать внимание. Мужчины будут дарить подарки и исполнять твои желания — не потому что ты требуешь, а потому что они сами этого захотят.' },
              { n: '05', title: 'Техники поведения', desc: 'Ты будешь знать: что говорить, как говорить, как себя вести. Презентовать себя так, что мужчина видит в тебе женщину для семьи.' },
              { n: '06', title: 'Вход в отношения', desc: 'Ты научишься сразу видеть, кто серьёзный, а кто нет. Уже с первых свиданий. Перестанешь тратить месяцы на изучение мужчины и начнёшь получать кайф от знакомств.' },
            ].map(m => (
              <Card key={m.n} padding={22}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#D4AF37', fontFamily: 'monospace', letterSpacing: '-0.02em', flexShrink: 0 }}>{m.n}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#F5E9CF', marginBottom: 6 }}>{m.title}</div>
                    <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* RESULT */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Результат" />
          <Card style={{ textAlign: 'center', background: 'linear-gradient(145deg, rgba(212,175,55,0.1), rgba(255,77,141,0.05))', borderColor: 'rgba(212,175,55,0.3)' }}>
            <p style={{ fontSize: 16, color: '#F5E9CF', marginBottom: 16 }}>Ты станешь женщиной:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {['которую выбирают', 'в которую вкладываются', 'с которой хотят семью'].map(t => (
                <div key={t} style={{ fontSize: 15, color: '#D4AF37', fontWeight: 600 }}>✨ {t}</div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: '#A0A0C0', fontStyle: 'italic' }}>И ты перестанешь быть одной.</p>
          </Card>
        </section>

        {/* FORMAT */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Формат" />
          <Card>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              {[
                { icon: '🎥', t: 'Уроки в записи' },
                { icon: '📝', t: 'Домашние задания' },
                { icon: '👥', t: 'Личные разборы' },
                { icon: '💬', t: 'Ответы на вопросы' },
                { icon: '🎯', t: 'Практика' },
              ].map(f => (
                <div key={f.t} style={{ padding: 14, background: 'rgba(212,175,55,0.05)', borderRadius: 12, border: '1px solid rgba(212,175,55,0.1)', textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontSize: 12, color: '#D4D4E8' }}>{f.t}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 18, padding: 14, background: 'rgba(255,77,141,0.08)', borderRadius: 12, fontSize: 13, color: '#F9A8D4', textAlign: 'center', fontWeight: 500 }}>
              💘 Лучших девушек я лично знакомлю с мужчинами и организую свидания
            </p>
          </Card>
        </section>

        {/* CASES */}
        <section style={{ padding: '30px 0' }}>
          <SectionTitle label="Кейсы" />
          <Card>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#F5E9CF', marginBottom: 16 }}>Они уже сделали это:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'женщины, которые не верили, что встретят своего мужчину',
                'женщины после разводов',
                'женщины, которые «всё знали», но не могли применить',
              ].map(t => (
                <div key={t} style={{ fontSize: 13, color: '#A0A0C0', padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 10, borderLeft: '3px solid rgba(212,175,55,0.4)' }}>{t}</div>
              ))}
            </div>
            <div style={{ marginTop: 18, padding: 16, background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,77,141,0.04))', borderRadius: 12, border: '1px solid rgba(212,175,55,0.2)' }}>
              <p style={{ fontSize: 13, color: '#D4AF37', fontWeight: 600, marginBottom: 10 }}>Сегодня:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: '#F5E9CF' }}>
                <div>✓ они в отношениях</div>
                <div>✓ им делают предложения</div>
                <div>✓ им дарят подарки</div>
                <div>✓ их выбирают</div>
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: 15, textAlign: 'center', color: '#D4AF37', fontWeight: 700 }}>
              Ты можешь быть следующей ✨
            </p>
          </Card>
        </section>

        {/* TARIFFS */}
        <section style={{ padding: '40px 0' }}>
          <SectionTitle label="Тарифы" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Tariff tag="БАЗОВЫЙ" priceMonthly="37 500" priceTotal="450 000"
              features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 2 недели после', 'Доступ 1 месяц']} />

            <Tariff tag="СТАНДАРТ" popular priceMonthly="61 323" priceTotal="735 887"
              features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 3 недели после', '2 личных разбора', '2 знакомства с мужчинами', 'Доступ 2 месяца']} />

            <Tariff tag="VIP" vip priceMonthly="122 647" priceTotal="1 471 775"
              features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 1 месяц после', '5 личных разборов', '4 знакомства с мужчинами', 'Доступ 6 месяцев']} />
          </div>
        </section>

        {/* WHY NOW */}
        <section style={{ padding: '30px 0' }}>
          <Card style={{ background: 'linear-gradient(145deg, rgba(239,68,68,0.06), rgba(251,191,36,0.03))', borderColor: 'rgba(239,68,68,0.2)' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>⚡</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: '#FBBF24' }}>Почему сейчас</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#D4D4E8' }}>
                  <div>— я не беру всех</div>
                  <div>— поток ограничен</div>
                  <div>— следующий набор не скоро</div>
                </div>
                <p style={{ marginTop: 14, fontSize: 13, color: '#A0A0C0', lineHeight: 1.5 }}>
                  Ты можешь уже в ближайшие месяцы быть в отношениях с достойным мужчиной. Или снова отложить.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* FINAL CTA */}
        <section style={{ padding: '60px 0 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#F5E9CF' }}>Ты можешь продолжать:</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320, margin: '0 auto 24px' }}>
            {['ждать', 'надеяться', 'разочаровываться'].map(t => (
              <div key={t} style={{ fontSize: 14, color: '#6B6B8D' }}>— {t}</div>
            ))}
          </div>
          <p style={{ fontSize: 18, color: '#A0A0C0', margin: '24px 0 8px' }}>или:</p>
          <p style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, marginBottom: 36, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            стать женщиной, которую выбирают
          </p>
          <a href={TALLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', padding: '20px 56px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 17, fontWeight: 800, borderRadius: 18, textDecoration: 'none', boxShadow: '0 14px 48px rgba(212,175,55,0.4)', letterSpacing: '0.02em' }}>
            👉 Пройти отбор
          </a>
        </section>

        {/* CROSS-LINK to men's site */}
        <section style={{ padding: '20px 0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 12, color: '#6B6B8D', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>— А для мужчин —</span>
          </div>
          <SiteSwitcher target="men" />
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '32px 0 40px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#6B6B8D' }}>© {new Date().getFullYear()} Асем. Программа для женщин.</p>
        </footer>
      </div>
    </div>
  );
}

function SectionTitle({ label }) {
  return (
    <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 24, height: 2, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
      <h2 style={{ fontSize: 13, fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{label}</h2>
    </div>
  );
}

function Card({ children, padding = 24, style = {} }) {
  return (
    <div style={{ background: 'linear-gradient(145deg, #13121C, #1A1825)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding, ...style }}>
      {children}
    </div>
  );
}

function Tariff({ tag, popular, vip, priceMonthly, priceTotal, features }) {
  const accent = vip ? '#D4AF37' : popular ? '#FF4D8D' : '#A0A0C0';
  const bg = vip ? 'linear-gradient(145deg, rgba(212,175,55,0.08), rgba(212,175,55,0.02))'
    : popular ? 'linear-gradient(145deg, rgba(255,77,141,0.06), rgba(168,85,247,0.03))'
    : 'linear-gradient(145deg, #13121C, #1A1825)';
  const borderColor = vip ? 'rgba(212,175,55,0.35)' : popular ? 'rgba(255,77,141,0.3)' : 'rgba(255,255,255,0.06)';

  return (
    <div style={{ background: bg, border: `1.5px solid ${borderColor}`, borderRadius: 20, padding: 24, position: 'relative' }}>
      {popular && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', padding: '4px 12px', background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', color: 'white', borderRadius: 20, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em' }}>ПОПУЛЯРНЫЙ</div>}
      {vip && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', padding: '4px 12px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', borderRadius: 20, fontSize: 10, fontWeight: 800, letterSpacing: '0.1em' }}>ПРЕМИУМ</div>}

      <div style={{ fontSize: 12, color: accent, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 12 }}>{tag}</div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: accent, letterSpacing: '-0.02em' }}>
          {priceMonthly} <span style={{ fontSize: 14, fontWeight: 500, color: '#6B6B8D' }}>тг / месяц</span>
        </div>
        <div style={{ fontSize: 13, color: '#6B6B8D', marginTop: 4 }}>или {priceTotal} тг полная стоимость</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#D4D4E8' }}>
            <span style={{ color: accent, fontSize: 14 }}>✓</span>{f}
          </div>
        ))}
      </div>
      <a href={TALLY_URL} target="_blank" rel="noopener noreferrer"
        style={{ display: 'block', padding: '14px', textAlign: 'center', borderRadius: 14, background: vip ? 'linear-gradient(135deg, #D4AF37, #B8860B)' : popular ? 'linear-gradient(135deg, #FF4D8D, #A855F7)' : '#1C1C3A', color: vip ? '#1A1000' : 'white', fontSize: 14, fontWeight: 700, textDecoration: 'none', border: !vip && !popular ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
        Выбрать {tag.toLowerCase()}
      </a>
    </div>
  );
}
