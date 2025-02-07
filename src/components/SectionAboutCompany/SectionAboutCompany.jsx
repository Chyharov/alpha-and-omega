import phoneIcon from '../../images/phoneIcon.svg';
import locationIcon from '../../images/locationIcon.svg';
import MapComponent from 'components/MapComponent/MapComponent'
import s from './SectionAboutCompany.module.scss';

const SectionAboutCompany = () => {

    return (
        <section className={s.sectionAboutCompany}>
            <div className='container'>
                <h2 className={s.aboutCompanyTitle}>Склад-магазин ритуальної атрибутики</h2>
                <p className={s.aboutCompanyDescription}>Похороний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
                
                <h2 className={s.aboutCompanyTitle} style={{marginBottom: '8px' }}>Телефон</h2>
                <div className={s.aboutCompanyListContainer}>
                    <img className={s.aboutCompanyIcon} src={phoneIcon} alt="phone__icon" />
                    <ul className={s.aboutCompanyList}>
                        <li className={s.aboutCompanyListItem}><a href="tel:+380672459505">+38 (067) 245 95 05</a></li>
                        <li className={s.aboutCompanyListItem}><a href="tel:+380442322408">+38 (044) 232 24 08</a></li>
                        <li className={s.aboutCompanyListItem}><a href="tel:+380995062408">+38 (099) 506 24 08</a></li>
                        <li className={s.aboutCompanyListItem}><a href="tel:+380667858127">+38 (066) 785 81 27</a></li>
                        <li className={s.aboutCompanyListItem}><a href="tel:+380939545423">+38 (093) 954 54 23</a></li>
                    </ul>
                </div>

                <h2 className={s.aboutCompanyTitle} style={{ marginBottom: '8px' }}>На мапі</h2>

                <MapComponent />
                
                <h2 className={s.aboutCompanyTitle} style={{ marginBottom: '8px' }}>Адреса</h2>
                <div className={s.aboutCompanyListContainer}>
                    <img className={s.aboutCompanyIcon} src={locationIcon} alt="phone__icon" />
                    <ul className={s.aboutCompanyListAddress}>
                        <li className={s.aboutCompanyListItemAddress}><a href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA">м.Київ, вул. Івана Федорова, 33</a></li>
                        <li className={s.aboutCompanyListItemAddress}><a href="https://maps.app.goo.gl/AwovKjfD7p53WbF56">м.Київ, вул. Колоскова 9 (район Совського кладовища)</a></li>
                    </ul>
                </div>

                <div className={s.timeWorkContainer}>
                    <h2 className={s.aboutCompanyTitle}>Щоденно</h2>
                    <h2 className={s.aboutCompanyTitle}>Цілодобово</h2>  
                </div>
            </div>
        </section>
    );
};

export default SectionAboutCompany;
