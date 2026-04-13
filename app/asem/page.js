import { TopNav, SiteSwitcher } from '../SiteSwitcher';
import { Reveal, Counter, FAQItem, StickyCTA } from '../components';

export const metadata = {
  title: 'Асем — программа для женщин',
  description: 'Стань женщиной, которую мужчина выбирает. Система, после которой строят семью.',
};

const TALLY_URL = 'https://tally.so/r/VLJNAg';

export default function AsemPage() {
  return (
    <div style={{ background: '#0B0A14', color: 'white', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated blobs */}
      <div className="blob" style={{ top: '-10%', right: '-15%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)', zIndex: 0 }} />
      <div className="blob blob-2" style={{ top: '40%', left: '-20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,77,141,0.18), transparent 70%)', zIndex: 0 }} />
      <div className="blob" style={{ bottom: '10%', right: '10%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)', zIndex: 0, animationDelay: '-14s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>

        <TopNav current="asem" brandLabel="АСЕМ" brandColor="#D4AF37" />

        {/* HERO */}
        <section className="fade-in" style={{ padding: '40px 0 60px', textAlign: 'center', position: 'relative' }}>
          {/* Photo with glow ring */}
          <div style={{ position: 'relative', width: 156, height: 156, margin: '0 auto 28px' }}>
            <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: 'conic-gradient(from 0deg, #D4AF37, #FF4D8D, #A855F7, #D4AF37)', filter: 'blur(12px)', opacity: 0.5 }} />
            <div style={{ position: 'relative', width: 156, height: 156, borderRadius: '50%', overflow: 'hidden', border: '3px solid transparent', background: 'linear-gradient(135deg, #D4AF37, #FF4D8D) border-box', padding: 3, boxShadow: '0 16px 56px rgba(212,175,55,0.3)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#161630' }}>
                <img src="/asem.jpg" alt="Асем" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, fontSize: 11, color: '#D4AF37', marginBottom: 24, fontWeight: 700, letterSpacing: '0.12em' }}>АВТОРСКАЯ ПРОГРАММА</div>

          {/* НЕВАЖНО block */}
          <div style={{ marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              'НЕВАЖНО, СКОЛЬКО ТЕБЕ ЛЕТ',
              'НЕВАЖНО, СКОЛЬКО У ТЕБЯ БЫЛО РАЗОЧАРОВАНИЙ',
              'НЕВАЖНО, СКОЛЬКО У ТЕБЯ ДЕТЕЙ',
              'НЕВАЖНО, СКОЛЬКО У ТЕБЯ БЫЛО РАЗВОДОВ',
            ].map(t => (
              <div key={t} style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', color: '#8B8BA8', fontWeight: 600, letterSpacing: '0.05em' }}>{t}</div>
            ))}
          </div>

          <h1 className="font-display" style={{ fontSize: 'clamp(26px, 6.5vw, 42px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.025em', color: '#F5E9CF' }}>
            Ты имеешь право быть<br/>
            <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 800 }}>счастливой</em>
          </h1>
          <p style={{ fontSize: 15, color: '#A0A0C0', marginBottom: 6 }}>В любом возрасте</p>
          <p style={{ fontSize: 14, color: '#6B6B8D', marginBottom: 28 }}>Даже если тебе 50, 60 или 70</p>

          <p style={{ fontSize: 17, color: '#D4D4E8', lineHeight: 1.55, maxWidth: 520, margin: '0 auto 20px' }}>
            Я научу тебя, как быть такой женщиной,<br/>
            <span style={{ color: '#D4AF37', fontWeight: 600 }}>которую мужчина выбирает</span>
          </p>

          <p style={{ fontSize: 14, color: '#A0A0C0', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 36px', fontStyle: 'italic' }}>
            Я научу тебя, как стать той, ради которой мужчина<br/>
            <span style={{ color: '#F9A8D4' }}>выбирает, вкладывается и остаётся</span>
          </p>

          <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ display: 'inline-block', padding: '20px 48px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 16, fontWeight: 800, borderRadius: 16, textDecoration: 'none', boxShadow: '0 14px 48px rgba(212,175,55,0.4)', letterSpacing: '0.03em' }}>
            👉 Пройти отбор
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: '#6B6B8D' }}>Анкета · 3 минуты</p>
        </section>

        {/* STATS */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {[
                { value: 300, suffix: '+', label: 'Учениц в отношениях' },
                { value: 85, suffix: '%', label: 'Выходят замуж' },
                { value: 7, suffix: ' лет', label: 'Опыта работы' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '20px 10px', textAlign: 'center',
                  background: 'linear-gradient(145deg, #13121C, #1A1825)',
                  border: '1px solid rgba(212,175,55,0.15)', borderRadius: 16,
                }}>
                  <div style={{ fontSize: 'clamp(20px, 5vw, 26px)', fontWeight: 800, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: '#8B8BA8', marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* QUOTE */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div className="glass" style={{ padding: '40px 28px 32px', borderRadius: 24, borderColor: 'rgba(212,175,55,0.22)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div className="font-display" style={{ position: 'absolute', top: 0, left: 22, fontSize: 120, color: 'rgba(212,175,55,0.12)', lineHeight: 0.8, fontWeight: 700, pointerEvents: 'none' }}>"</div>
              <p className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#F5E9CF', lineHeight: 1.4, fontStyle: 'italic', marginBottom: 16, position: 'relative', fontWeight: 500 }}>
                Ты не для «попробовать».<br/>
                Ты — та, на которой <em style={{ background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>женятся</em>.
              </p>
              <div className="divider" style={{ marginBottom: 16, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
              <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.65, maxWidth: 500, margin: '0 auto' }}>
                Если мужчина с первых свиданий не понимает, что ты — женщина для семьи, значит ты просто не умеешь себя правильно подать.
              </p>
            </div>
          </section>
        </Reveal>

        {/* PROBLEM */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <SectionTitle label="Проблема" />
            <Card>
              <p style={{ fontSize: 15, color: '#D4D4E8', lineHeight: 1.6, marginBottom: 16 }}>Ты можешь быть красивой, умной, успешной. <strong>Но:</strong></p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['мужчины пропадают', 'не предлагают серьёзное', 'зовут «просто пообщаться»', 'ты устала всё тянуть сама', 'или вообще нет достойных вариантов'].map(t => (
                  <div key={t} style={{ fontSize: 14, color: '#A0A0C0', paddingLeft: 18, borderLeft: '2px solid rgba(239,68,68,0.3)', lineHeight: 1.5 }}>{t}</div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: 14, background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 12 }}>
                <p style={{ fontSize: 13, color: '#D4AF37', fontWeight: 700, marginBottom: 4 }}>👉 проблема не в мужчинах</p>
                <p style={{ fontSize: 13, color: '#F5E9CF' }}>👉 проблема в том, как ты себя выстраиваешь</p>
              </div>
            </Card>
          </section>
        </Reveal>

        {/* FOR WHOM */}
        <Reveal>
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
                <p style={{ fontSize: 13, color: '#FF4D8D', fontWeight: 700, marginBottom: 10 }}>И самое главное:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#D4D4E8' }}>
                  <div>— ты прошла кучу курсов по женственности</div>
                  <div>— ты знаешь психологию лучше многих</div>
                  <div>— ты сама можешь быть кому угодно психологом</div>
                </div>
                <p style={{ marginTop: 12, fontSize: 13, color: '#F9A8D4', fontStyle: 'italic', lineHeight: 1.5 }}>
                  НО с тобой это почему-то не работает. Ты всё понимаешь, но в жизни это не даёт результата.
                </p>
                <p style={{ marginTop: 10, fontSize: 13, color: '#D4AF37', fontWeight: 700 }}>
                  👉 потому что тебе не дали систему, которая работает в реальности
                </p>
              </div>
            </Card>
          </section>
        </Reveal>

        {/* POSITIONING */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <Card style={{ background: 'linear-gradient(145deg, rgba(212,175,55,0.1), rgba(255,77,141,0.04))', borderColor: 'rgba(212,175,55,0.25)' }}>
              <p style={{ fontSize: 13, color: '#6B6B8D', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>Позиционирование</p>
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
        </Reveal>

        {/* MODULES */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <SectionTitle label="Что ты получишь" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '01', title: 'Разгром старых установок', desc: 'Ты увидишь, почему у тебя не получалось и поймёшь, где ты теряла мужчин. Ты поймёшь, что достойных мужчин много и начнёшь видеть их.' },
                { n: '02', title: 'Секреты рабочего «Хочу»', desc: 'Ты поймёшь, чего хочешь именно ты — а не мама, подруги или общество. Ты начнёшь выбирать, а не соглашаться. Научишься фильтровать мужчин и выбирать достойных.' },
                { n: '03', title: 'Самооценка', desc: 'Ты перестанешь терпеть, доказывать, оправдываться. Ты станешь женщиной, которая себя ценит, любит и уважает. И начнёшь притягивать сильных мужчин.' },
                { n: '04', title: 'Миллион ухажёров', desc: 'Ты научишься цеплять с первых секунд, вызывать интерес, удерживать внимание. Будешь получать внимание мужчин в любом возрасте. Мужчины будут дарить подарки и исполнять твои желания — не потому что ты требуешь или манипулируешь, а потому что они сами этого захотят. Потому что ты станешь женщиной, которую хочется делать счастливой.' },
                { n: '05', title: 'Техники поведения', desc: 'Ты будешь знать: что говорить, как говорить, как себя вести. Презентовать себя так, что мужчина видит в тебе женщину для семьи.' },
                { n: '06', title: 'Вход в отношения', desc: 'Ты научишься сразу видеть, кто серьёзный, а кто нет — уже с первых свиданий. Не нужно будет тратить месяцы на изучение мужчины. Мы сразу будем понимать: достоин он тебя или нет. Ты перестанешь разочаровываться, потому что начнёшь сразу отсекать неподходящих. И будешь получать кайф от знакомств и свиданий.' },
              ].map((m, i) => (
                <Reveal key={m.n} delay={i * 80}>
                  <Card padding={22}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ fontSize: 24, fontWeight: 800, color: '#D4AF37', fontFamily: 'monospace', letterSpacing: '-0.02em', flexShrink: 0 }}>{m.n}</div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#F5E9CF', marginBottom: 6 }}>{m.title}</div>
                        <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>{m.desc}</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* TESTIMONIALS */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle label="Отзывы учениц" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { i: 'А', color: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', name: 'Айгуль', age: 38, status: 'помолвлена', text: 'Полгода назад была уверена, что в 38 уже поздно. После программы Асем встретила своего мужчину через 2 месяца. В декабре свадьба.' },
                { i: 'Д', color: 'linear-gradient(135deg, #FF4D8D, #A855F7)', name: 'Дана', age: 45, status: 'в отношениях', text: 'После развода я 3 года была одна. Попробовала программу. Асем буквально разобрала меня по частям и собрала заново. Сейчас встречаюсь с очень достойным мужчиной.' },
                { i: 'Ж', color: 'linear-gradient(135deg, #A855F7, #D4AF37)', name: 'Жанель', age: 32, status: 'замужем', text: 'Я думала знаю всё про женственность — психолог, куча книг, курсы. Но работало только в теории. Асем даёт систему, которая реально работает в жизни.' },
              ].map((r, i) => (
                <Reveal key={i} delay={i * 100}>
                  <Card padding={20}>
                    <div style={{ display: 'flex', gap: 14, marginBottom: 12 }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, flexShrink: 0, boxShadow: '0 4px 16px rgba(212,175,55,0.25)' }}>{r.i}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#F5E9CF' }}>{r.name}, {r.age}</div>
                        <div style={{ fontSize: 11, color: '#D4AF37', marginTop: 2, fontWeight: 600, letterSpacing: '0.05em' }}>💍 {r.status.toUpperCase()}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6, fontStyle: 'italic' }}>«{r.text}»</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* RESULT */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <SectionTitle label="Результат" />
            <Card style={{ textAlign: 'center', background: 'linear-gradient(145deg, rgba(212,175,55,0.12), rgba(255,77,141,0.05))', borderColor: 'rgba(212,175,55,0.35)' }}>
              <p style={{ fontSize: 16, color: '#F5E9CF', marginBottom: 18 }}>Ты станешь женщиной:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {['которую выбирают', 'в которую вкладываются', 'с которой хотят семью'].map(t => (
                  <div key={t} style={{ fontSize: 15, color: '#D4AF37', fontWeight: 600 }}>✨ {t}</div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#A0A0C0', fontStyle: 'italic' }}>И ты перестанешь быть одной.</p>
            </Card>
          </section>
        </Reveal>

        {/* FORMAT */}
        <Reveal>
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
                    <div style={{ fontSize: 26, marginBottom: 6 }}>{f.icon}</div>
                    <div style={{ fontSize: 12, color: '#D4D4E8' }}>{f.t}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 18, padding: 14, background: 'rgba(255,77,141,0.08)', borderRadius: 12, fontSize: 13, color: '#F9A8D4', textAlign: 'center', fontWeight: 500 }}>
                💘 Лучших девушек я лично знакомлю с мужчинами и организую свидания
              </p>
            </Card>
          </section>
        </Reveal>

        {/* TARIFFS */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle label="Тарифы" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <Tariff tag="БАЗОВЫЙ" priceMonthly="37 500" priceTotal="450 000"
                features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 2 недели после', 'Доступ 1 месяц']} />
              <Tariff tag="СТАНДАРТ" popular priceMonthly="61 323" priceTotal="735 887"
                features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 3 недели после', '2 личных разбора', '2 знакомства с мужчинами', 'Доступ 2 месяца']} />
              <Tariff tag="VIP" vip priceMonthly="122 647" priceTotal="1 471 775"
                features={['Уроки в записи', 'Домашние задания', 'Ответы на вопросы', 'Поддержка 1 месяц после', '5 личных разборов', '4 знакомства с мужчинами', 'Доступ 6 месяцев']} />
            </div>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle label="Частые вопросы" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem accent="#D4AF37" q="Я уже много курсов прошла, почему этот будет работать?"
                a="Потому что это не курс про теорию женственности. Это система, адаптированная под реальную жизнь: ты получаешь не знания, а результат — отношения." />
              <FAQItem accent="#D4AF37" q="Подойдёт ли мне, если я после развода?"
                a="Да, большая часть моих учениц — женщины после развода. Многие нашли своего мужчину через 2-3 месяца после программы." />
              <FAQItem accent="#D4AF37" q="А если мне за 40-50?"
                a="Возраст не имеет значения. В программе успешно проходят женщины 30-60+. Научишься притягивать мужчин, которым именно ты подходишь." />
              <FAQItem accent="#D4AF37" q="Можно оплачивать помесячно?"
                a="Да, все тарифы доступны с помесячной оплатой. Стоимость месяца указана в каждом тарифе." />
              <FAQItem accent="#D4AF37" q="Я смогу применить это на практике?"
                a="Вся программа построена через практику и домашние задания. Плюс в тарифах Стандарт и VIP — личные разборы и реальные знакомства." />
              <FAQItem accent="#D4AF37" q="Какой тариф выбрать?"
                a="Базовый — если ты уверена в себе и готова работать самостоятельно. Стандарт (самый популярный) — если хочешь разборы и знакомства. VIP — если хочешь максимальное сопровождение и результат в короткие сроки." />
            </div>
          </section>
        </Reveal>

        {/* WHY NOW */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <Card style={{ background: 'linear-gradient(145deg, rgba(239,68,68,0.06), rgba(251,191,36,0.03))', borderColor: 'rgba(239,68,68,0.25)' }}>
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
        </Reveal>

        {/* FINAL CTA */}
        <Reveal>
          <section style={{ padding: '60px 0 40px', textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(26px, 5.5vw, 36px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 20, color: '#F5E9CF', letterSpacing: '-0.02em' }}>Ты можешь продолжать:</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320, margin: '0 auto 24px' }}>
              {['ждать', 'надеяться', 'разочаровываться'].map(t => (
                <div key={t} style={{ fontSize: 14, color: '#6B6B8D' }}>— {t}</div>
              ))}
            </div>
            <p style={{ fontSize: 18, color: '#A0A0C0', margin: '24px 0 8px' }}>или:</p>
            <p className="font-display" style={{ fontSize: 'clamp(24px, 5.5vw, 32px)', fontWeight: 700, fontStyle: 'italic', marginBottom: 36, background: 'linear-gradient(135deg, #D4AF37, #FF4D8D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              стать женщиной, которую выбирают
            </p>
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '22px 60px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', fontSize: 17, fontWeight: 800, borderRadius: 18, textDecoration: 'none', boxShadow: '0 16px 56px rgba(212,175,55,0.45)', letterSpacing: '0.02em' }}>
              👉 Пройти отбор
            </a>
          </section>
        </Reveal>

        {/* Cross-link to men */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#6B6B8D', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>— А для мужчин —</span>
            </div>
            <SiteSwitcher target="men" />
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '32px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#6B6B8D' }}>© {new Date().getFullYear()} Асем. Программа для женщин.</p>
        </footer>
      </div>

      {/* Sticky CTA (mobile) */}
      <StickyCTA href={TALLY_URL} label="Пройти отбор" accent="#D4AF37" accentTo="#B8860B" textColor="#1A1000" />
    </div>
  );
}

function SectionTitle({ label }) {
  return (
    <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
      <h2 style={{ fontSize: 13, fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{label}</h2>
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
  const bg = vip ? 'linear-gradient(145deg, rgba(212,175,55,0.1), rgba(212,175,55,0.03))'
    : popular ? 'linear-gradient(145deg, rgba(255,77,141,0.08), rgba(168,85,247,0.04))'
    : 'linear-gradient(145deg, #13121C, #1A1825)';
  const borderColor = vip ? 'rgba(212,175,55,0.4)' : popular ? 'rgba(255,77,141,0.35)' : 'rgba(255,255,255,0.06)';
  const transform = popular ? 'scale(1.02)' : 'scale(1)';

  return (
    <div style={{ background: bg, border: `1.5px solid ${borderColor}`, borderRadius: 20, padding: 26, position: 'relative', transform, transition: 'transform 0.2s ease' }}>
      {popular && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', color: 'white', borderRadius: 20, fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', boxShadow: '0 4px 12px rgba(255,77,141,0.4)' }}>⭐ ПОПУЛЯРНЫЙ</div>}
      {vip && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#1A1000', borderRadius: 20, fontSize: 10, fontWeight: 900, letterSpacing: '0.12em', boxShadow: '0 4px 12px rgba(212,175,55,0.4)' }}>👑 ПРЕМИУМ</div>}

      <div style={{ fontSize: 12, color: accent, fontWeight: 800, letterSpacing: '0.18em', marginBottom: 12 }}>{tag}</div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: accent, letterSpacing: '-0.03em' }}>
          {priceMonthly} <span style={{ fontSize: 14, fontWeight: 500, color: '#6B6B8D' }}>тг / месяц</span>
        </div>
        <div style={{ fontSize: 13, color: '#6B6B8D', marginTop: 4 }}>или {priceTotal} тг полная стоимость</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
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
