import Link from 'next/link';

export const metadata = {
  title: 'Политика конфиденциальности — Агентство Асем',
  description: 'Обработка и защита персональных данных пользователей.',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0A0A14', color: 'white', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: '#A0A0C0', fontSize: 13, textDecoration: 'none', marginBottom: 28 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          На главную
        </Link>

        <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.2em', marginBottom: 14 }}>ЮРИДИЧЕСКИЙ ДОКУМЕНТ</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#F5E9CF' }}>
          Политика конфиденциальности
        </h1>
        <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 36, lineHeight: 1.6 }}>
          Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей в соответствии с Законом Республики Казахстан "О персональных данных и их защите".
        </p>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>1. Какие данные мы собираем</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Имя, возраст, контактные данные', 'Информация о семейном положении и предпочтениях', 'Фотографии, предоставленные добровольно', 'Данные о платежах (без номеров карт)'].map(t => (
              <div key={t} style={{ fontSize: 14, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(212,175,55,0.3)' }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>2. Цели обработки</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Персональные данные обрабатываются исключительно для оказания услуг подбора партнёра: верификация личности, формирование анкеты, подбор кандидатов, организация знакомств.
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>3. Защита данных</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Данные хранятся на защищённых серверах с применением шифрования. Доступ имеет ограниченный круг сотрудников, связанных обязательствами о неразглашении.
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>4. Передача третьим лицам</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Данные не передаются третьим лицам, за исключением случаев, предусмотренных законом, или при явном согласии пользователя (например, обмен контактами при обоюдной симпатии).
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 40 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>5. Ваши права</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7, marginBottom: 10 }}>Вы имеете право:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['запросить доступ к своим данным', 'требовать исправления неточных данных', 'требовать удаления своих данных', 'отозвать согласие на обработку'].map(t => (
              <div key={t} style={{ fontSize: 14, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(255,77,141,0.3)' }}>{t}</div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#6B6B8D', textAlign: 'center' }}>
          Редакция от {new Date().getFullYear()} г. · Агентство Асем
        </p>
      </div>
    </div>
  );
}
