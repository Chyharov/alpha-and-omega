import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero} id='main'>
        <div className={s.bgimg}>
      <div className={'container ' + s.heroImg__container}>
          <div className={s.hero__container}>
            <h1 style={{ marginTop: '40px' }} className={s.titleHero}>АЛЬФА-РИТУАЛ</h1>
            <h2 style={{ marginBottom: '56px' }} className={s.titleForHero}>поховальний дім</h2>
          </div>
          
          <p style={{ padding: '8px', marginBottom: '40px' }} className='description'>Поховальний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        
          
          <button type='button' className={s.getConsultation}>Отримати консультацію</button>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
