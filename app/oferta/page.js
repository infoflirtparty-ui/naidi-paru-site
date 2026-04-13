import Link from 'next/link';

export const metadata = {
  title: 'Публичная оферта — Агентство Асем',
  description: 'Условия оказания услуг агентства знакомств Асем.',
};

export default function OfertaPage() {
  return (
    <div style={{ background: '#0A0A14', color: 'white', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: '#A0A0C0', fontSize: 13, textDecoration: 'none', marginBottom: 28 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          На главную
        </Link>

        <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.2em', marginBottom: 14 }}>ЮРИДИЧЕСКИЙ ДОКУМЕНТ</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#F5E9CF' }}>
          Публичная оферта
        </h1>
        <p style={{ fontSize: 14, color: '#A0A0C0', marginBottom: 36, lineHeight: 1.6 }}>
          Настоящий документ является официальным предложением (публичной офертой) оказания услуг подбора партнёра (сватовства) на условиях, изложенных ниже.
        </p>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>1. Предмет оферты</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Исполнитель (Агентство Асем) обязуется оказать Заказчику услуги по подбору кандидатов для знакомств и/или консультационному сопровождению в сфере личных отношений в соответствии с выбранным пакетом услуг.
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>2. Порядок заключения договора</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7, marginBottom: 10 }}>
            Договор считается заключённым с момента:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Заполнения Заказчиком анкеты на сайте',
              'Прохождения предварительного отбора',
              'Оплаты выбранного пакета услуг',
            ].map(t => (
              <div key={t} style={{ fontSize: 14, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(212,175,55,0.35)' }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>3. Стоимость и порядок оплаты</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Стоимость услуг определяется выбранным пакетом и указана на сайте. Оплата производится в 100% размере до начала оказания услуг. Все суммы указаны в тенге Республики Казахстан.
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>4. Права и обязанности сторон</h2>
          <p style={{ fontSize: 13, color: '#D4AF37', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Исполнитель обязуется:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
            {['провести подбор кандидатов по критериям Заказчика', 'организовать знакомства в рамках пакета', 'обеспечить конфиденциальность персональных данных', 'оказать услуги на профессиональном уровне'].map(t => (
              <div key={t} style={{ fontSize: 13, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(212,175,55,0.3)' }}>{t}</div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: '#FF4D8D', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Заказчик обязуется:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['предоставить достоверную информацию о себе', 'оплатить выбранный пакет услуг', 'соблюдать этику общения с кандидатами', 'не разглашать персональные данные других клиентов'].map(t => (
              <div key={t} style={{ fontSize: 13, color: '#D4D4E8', paddingLeft: 16, borderLeft: '2px solid rgba(255,77,141,0.3)' }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20, borderColor: 'rgba(251,191,36,0.2)' }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#FBBF24' }}>5. Возврат средств</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Услуги Агентства носят нематериальный характер. Возврат денежных средств после начала оказания услуг не производится. Результат (создание отношений) зависит от взаимной симпатии и не может быть гарантирован Исполнителем.
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>6. Конфиденциальность</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Исполнитель обязуется не разглашать персональные данные Заказчика третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан. Обработка персональных данных производится в соответствии с Законом РК "О персональных данных и их защите".
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 20 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>7. Ответственность сторон</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Стороны несут ответственность в соответствии с действующим законодательством Республики Казахстан. Исполнитель не несёт ответственности за действия третьих лиц (кандидатов, представленных Заказчику).
          </p>
        </div>

        <div className="glass" style={{ padding: 28, borderRadius: 20, marginBottom: 40 }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#F5E9CF' }}>8. Принятие оферты</h2>
          <p style={{ fontSize: 14, color: '#D4D4E8', lineHeight: 1.7 }}>
            Полным и безоговорочным принятием настоящей оферты считается заполнение анкеты на сайте и оплата услуг. С этого момента Заказчик считается ознакомленным и согласным со всеми условиями настоящей оферты.
          </p>
        </div>

        <p style={{ fontSize: 12, color: '#6B6B8D', textAlign: 'center' }}>
          Редакция от {new Date().getFullYear()} г. · Агентство Асем
        </p>
      </div>
    </div>
  );
}
