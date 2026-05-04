import { TopNav, SiteSwitcher } from '../SiteSwitcher';
import { Reveal, Counter, FAQItem, StickyCTA } from '../components';

export const metadata = {
  title: 'Найди Пару — закрытая платформа знакомств для мужчин',
  description: 'Только проверенные девушки, которые хотят отношений и семью. 10 000 ₸ за 30 анкет.',
};

const BOT_URL = 'https://t.me/Naidiparu2_bot';

export default function MainLanding() {
  return (
    <div style={{ background: '#0C0C1D', color: 'white', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated gradient blobs */}
      <div className="blob" style={{ top: '-15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,77,141,0.25), transparent 70%)', zIndex: 0 }} />
      <div className="blob blob-2" style={{ top: '30%', right: '-20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)', zIndex: 0 }} />
      <div className="blob" style={{ bottom: '-10%', left: '10%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%)', zIndex: 0, animationDelay: '-12s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>

        <TopNav current="men" brandLabel="Найди Пару" brandColor="#A855F7" />

        {/* HERO */}
        <section className="fade-in" style={{ padding: '12px 0 32px', textAlign: 'center', position: 'relative' }}>
          <div className="glow-pulse" style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(255,77,141,0.1)', border: '1px solid rgba(255,77,141,0.3)', borderRadius: 20, fontSize: 12, color: '#FF4D8D', marginBottom: 24, fontWeight: 600, letterSpacing: '0.08em' }}>🔥 ЗАКРЫТАЯ ПЛАТФОРМА</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px, 7.2vw, 56px)', fontWeight: 900, lineHeight: 0.98, marginBottom: 20, letterSpacing: '-0.04em' }}>
            НАЙДИ <span style={{ background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ПАРУ</span>
          </h1>
          <p style={{ fontSize: 18, color: '#D4D4E8', lineHeight: 1.5, maxWidth: 560, margin: '0 auto 14px', fontWeight: 500 }}>
            Закрытая платформа знакомств для мужчин
          </p>
          <p style={{ fontSize: 15, color: '#8B8BA8', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 36px' }}>
            Без мусора. Без игр. Без женщин, ищущих кошелёк.<br/>
            Только отобранные девушки, которые хотят отношений и семью.
          </p>
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ display: 'inline-block', padding: '18px 40px', background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', color: 'white', fontSize: 16, fontWeight: 700, borderRadius: 16, textDecoration: 'none', boxShadow: '0 12px 48px rgba(255,77,141,0.4)', letterSpacing: '0.02em' }}>
            Начать подбор →
          </a>
          <p style={{ marginTop: 16, fontSize: 12, color: '#6B6B8D' }}>Заявка через Telegram · 2 минуты</p>
        </section>

        {/* STATS BAR */}
        <Reveal>
          <section style={{ padding: '30px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {[
                { value: 500, suffix: '+', label: 'Проверенных анкет' },
                { value: 87, suffix: '%', label: 'Успешных знакомств' },
                { value: 10, suffix: '+', label: 'Лет помогаем парам' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '20px 10px', textAlign: 'center',
                  background: 'linear-gradient(145deg, #161630, #1A1A3E)',
                  border: '1px solid rgba(255,77,141,0.1)', borderRadius: 16,
                }}>
                  <div style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 800, background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: '#8B8BA8', marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* COMPARISON TABLE */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="⚖️" label="Сравни сам" />
            <div style={{ background: 'linear-gradient(145deg, #161630, #1A1A3E)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ padding: '14px 12px', fontSize: 11, color: '#6B6B8D', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Критерий</div>
                <div style={{ padding: '14px 12px', fontSize: 11, color: '#8B8BA8', textAlign: 'center', fontWeight: 600 }}>Обычные сайты</div>
                <div style={{ padding: '14px 12px', fontSize: 11, color: '#FF4D8D', textAlign: 'center', fontWeight: 700, background: 'rgba(255,77,141,0.06)' }}>Найди Пару</div>
              </div>
              {[
                ['Проверка девушек', false, true],
                ['KYC-верификация', false, true],
                ['Без замужних', false, true],
                ['Без охотниц за деньгами', false, true],
                ['Подбор под критерии', false, true],
                ['Ручная модерация', false, true],
                ['Серьёзные намерения', false, true],
              ].map(([label, left, right], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ padding: '14px 12px', fontSize: 13, color: '#D4D4E8' }}>{label}</div>
                  <div style={{ padding: '14px 12px', textAlign: 'center' }}>
                    {left ? <CheckIcon color="#4ADE80" /> : <CrossIcon color="#F87171" />}
                  </div>
                  <div style={{ padding: '14px 12px', textAlign: 'center', background: 'rgba(255,77,141,0.04)' }}>
                    {right ? <CheckIcon color="#4ADE80" /> : <CrossIcon color="#F87171" />}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* FOR WHOM */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="💎" label="Для кого это" />
            <Card>
              <p style={{ fontSize: 16, color: '#D4D4E8', lineHeight: 1.6, marginBottom: 16 }}>Для мужчин, которые:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['ценят своё время', 'не хотят тратить месяцы на переписки', 'устали от меркантильности и фальши', 'ищут нормальную, адекватную девушку для отношений'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#D4D4E8' }}>
                    <span style={{ color: '#FF4D8D', fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>—</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 20, padding: 14, background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 12, fontSize: 13, color: '#FCA5A5' }}>
                Если ты ищешь «развлечения» — тебе не сюда.
              </div>
            </Card>
          </section>
        </Reveal>

        {/* WHAT YOU GET */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="🔐" label="Что ты получаешь" />
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Только реальные девушки', 'Без замужних и скрытых историй', 'Без девушек, которые ищут только деньги', 'Без случайных анкет и «инстаграмных продаж»'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#D4D4E8' }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#4ADE80"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    {t}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: 16, background: 'rgba(168,85,247,0.06)', borderRadius: 14, border: '1px solid rgba(168,85,247,0.15)' }}>
                <p style={{ fontSize: 14, color: '#C4B5FD', marginBottom: 10, fontWeight: 600 }}>👉 Каждая девушка проходит отбор</p>
                <p style={{ fontSize: 13, color: '#A0A0C0', lineHeight: 1.6 }}>
                  Мы допускаем только тех, кто хочет отношений и семьи, адекватна и психологически стабильна, не рассматривает мужчину как источник выгоды.
                </p>
              </div>
            </Card>
          </section>
        </Reveal>

        {/* HOW IT WORKS */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="💼" label="Как это работает" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { n: '1', t: 'Оставляешь заявку', d: 'Указываешь, какую девушку хочешь' },
                { n: '2', t: 'Мы подбираем анкеты', d: 'По твоим критериям, без случайных людей' },
                { n: '3', t: 'Получаешь подборку', d: '30 анкет девушек, которые подходят тебе' },
                { n: '4', t: 'Выбираешь и знакомишься', d: 'Только с теми, кто реально тебе интересен' },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <Card padding={18}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, flexShrink: 0, boxShadow: '0 4px 16px rgba(255,77,141,0.3)' }}>{s.n}</div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{s.t}</div>
                        <div style={{ fontSize: 13, color: '#A0A0C0' }}>{s.d}</div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* PRICE */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="💰" label="Формат участия" />
            <div style={{ padding: 2, borderRadius: 24, background: 'linear-gradient(135deg, rgba(255,77,141,0.5), rgba(168,85,247,0.5))', position: 'relative' }}>
              <div style={{ background: 'linear-gradient(145deg, #161630, #1A1A3E)', borderRadius: 22, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(40px, 9vw, 56px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 4, background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  10 000 <span style={{ fontSize: 22, opacity: 0.7, color: 'white', background: 'none', WebkitTextFillColor: 'white' }}>₸</span>
                </div>
                <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 24 }}>за <Counter value={30} /> анкет девушек</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left', marginBottom: 24 }}>
                  {['Каждая анкета подобрана под твои критерии', 'Только проверенные девушки', 'Без пустых контактов'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#D4D4E8' }}>
                      <span style={{ color: '#4ADE80', fontSize: 16 }}>✓</span>{t}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: '#FF4D8D', fontWeight: 600, padding: 12, background: 'rgba(255,77,141,0.08)', borderRadius: 12 }}>
                  👉 Платишь только за подбор
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* DIFFERENCES */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="👑" label="Чем мы отличаемся" />
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['нет случайных девушек', 'нет «охотниц за деньгами»', 'нет замужних', 'нет фальши'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </div>
                    <span style={{ color: '#D4D4E8' }}>{t}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 20, padding: 14, background: 'rgba(255,77,141,0.06)', borderRadius: 12, fontSize: 14, color: '#F9A8D4', textAlign: 'center', lineHeight: 1.5, fontWeight: 500 }}>
                Только нормальные девушки, которые хотят найти своего мужчину.
              </p>
            </Card>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="❓" label="Частые вопросы" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FAQItem q="А если не понравится ни одна из 30 анкет?"
                a="Такое бывает крайне редко. Мы подбираем анкеты по вашим критериям, и обычно людям откликается минимум 5–6 человек. Но если вдруг ни один вариант не зашёл — вы можете заказать новый подбор. Стоимость следующей подборки — 10 000 ₸. Важно: здесь вы выбираете сами. Мы даём проверенных, реальных людей — дальше решение за вами." />
              <FAQItem q="Как часто обновляются анкеты?"
                a="Новые девушки проходят верификацию каждую неделю. Твоя подборка будет актуальной и свежей." />
              <FAQItem q="Безопасно ли платить?"
                a="Оплата через Kaspi — стандартный банковский перевод, как и везде. Подтверждение ручное, доступ получаешь сразу после." />
              <FAQItem q="Что если я понравлюсь только одной из 30?"
                a="Обычно взаимных симпатий 3-5. Чем полнее ты заполнишь анкету, тем точнее будет подбор." />
              <FAQItem q="Можно ли вернуть деньги?"
                a="Нет, возврат не предусмотрен. Мы предоставляем доступ к базе проверенных анкет и формируем подборку под ваши критерии — услуга считается оказанной с момента предоставления анкет. Если вам не откликнулась подборка, вы всегда можете заказать следующую и продолжить поиск." />
              <FAQItem q="Это анонимно?"
                a="Твои данные видят только девушки, которым ты поставил лайк. Никаких публичных профилей или утечек." />
            </div>
          </section>
        </Reveal>

        {/* NOT FOR */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <SectionTitle icon="🚫" label="Кому не подойдёт" />
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['тем, кто ищет лёгкие связи', 'тем, кто не готов к нормальному общению', 'тем, кто хочет «ничего не вкладывать и получить всё»'].map(t => (
                  <div key={t} style={{ fontSize: 14, color: '#A0A0C0', paddingLeft: 20, borderLeft: '2px solid rgba(239,68,68,0.3)' }}>{t}</div>
                ))}
              </div>
            </Card>
          </section>
        </Reveal>

        {/* IMPORTANT */}
        <Reveal>
          <section style={{ padding: '40px 0' }}>
            <Card style={{ background: 'linear-gradient(145deg, rgba(251,191,36,0.05), rgba(251,191,36,0.02))', borderColor: 'rgba(251,191,36,0.25)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24 }}>⚡</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: '#FBBF24' }}>Важно</div>
                  <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.6 }}>
                    Мы не работаем с потоком. Каждый подбор — это отбор под конкретного мужчину.
                  </p>
                </div>
              </div>
            </Card>
          </section>
        </Reveal>

        {/* FINAL CTA */}
        <Reveal>
          <section style={{ padding: '60px 0 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 20, fontSize: 12, color: '#4ADE80', marginBottom: 20, fontWeight: 600 }}>✅ ГОТОВ?</div>
            <h2 style={{ fontSize: 'clamp(26px, 6vw, 40px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>Если ты хочешь:</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360, margin: '0 auto 32px' }}>
              {['адекватную девушку', 'нормальные отношения', 'сэкономить время'].map(t => (
                <div key={t} style={{ padding: '12px 18px', background: 'rgba(255,255,255,0.04)', borderRadius: 14, fontSize: 15, color: '#D4D4E8', border: '1px solid rgba(255,255,255,0.06)' }}>— {t}</div>
              ))}
            </div>
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ display: 'inline-block', padding: '20px 52px', background: 'linear-gradient(135deg, #FF4D8D, #A855F7)', color: 'white', fontSize: 17, fontWeight: 700, borderRadius: 18, textDecoration: 'none', boxShadow: '0 14px 48px rgba(255,77,141,0.4)' }}>
              👉 Заполнить анкету
            </a>
            <p style={{ marginTop: 32, fontSize: 14, color: '#8B8BA8', maxWidth: 440, margin: '32px auto 0', lineHeight: 1.6 }}>
              💬 Можно продолжать листать бесконечные анкеты и тратить время.<br/>
              А можно сразу получать тех, кто тебе подходит.
            </p>
            <p style={{ marginTop: 12, fontSize: 14, color: '#FF4D8D', fontWeight: 600 }}>Решение за тобой.</p>
          </section>
        </Reveal>

        {/* Cross-link to Asem */}
        <Reveal>
          <section style={{ padding: '20px 0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#6B6B8D', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>— А для девушек —</span>
            </div>
            <SiteSwitcher target="asem" />
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer style={{ padding: '32px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#6B6B8D' }}>© {new Date().getFullYear()} Найди Пару. Все права защищены.</p>
        </footer>
      </div>

      {/* Sticky CTA (mobile) */}
      <StickyCTA href={BOT_URL} label="Заполнить анкету" accent="#FF4D8D" accentTo="#A855F7" />
    </div>
  );
}

function SectionTitle({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <h2 style={{ fontSize: 14, fontWeight: 700, color: '#8B8BA8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</h2>
    </div>
  );
}

function Card({ children, padding = 24, style = {} }) {
  return (
    <div style={{ background: 'linear-gradient(145deg, #161630, #1A1A3E)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding, ...style }}>
      {children}
    </div>
  );
}

function CheckIcon({ color }) {
  return (
    <div style={{ width: 26, height: 26, borderRadius: 8, background: color + '20', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill={color}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    </div>
  );
}

function CrossIcon({ color }) {
  return (
    <div style={{ width: 26, height: 26, borderRadius: 8, background: color + '15', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </div>
  );
}
