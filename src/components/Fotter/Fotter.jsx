import { Link } from 'react-router-dom';
import css from './Fotter.module.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Fotter = () => {
  return (
    <footer>
      <div className={css.footerContainer}>
        <div className={css.footerAbout}>
          <h4>Про нас</h4>
          <p>
            Ми спеціалізуємося на оренді будинків на колесах, щоб зробити ваші
            подорожі незабутніми. Забронюйте у нас і відчуйте свободу мандрів!
          </p>
        </div>
        <div className={css.footerLinks}>
          <h4>Корисні посилання</h4>
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
          </ul>
        </div>
        <div className={css.footerContact}>
          <h4>Контакти</h4>
          <p>Телефон: +380 12 345 6789</p>
          <p>Email: info@camperrun.com</p>
          <p>Адреса: вул. Прикладна, 123, Київ, Україна</p>
        </div>
        <div className={css.footerSocial}>
          <h4>Ми в соцмережах</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/"
          >
            <FaFacebook
              style={{ marginTop: '15px', color: 'white', fontSize: '1.5em' }}
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/">
            <FaTwitter
              style={{ marginTop: '15px', color: '#0999d6', fontSize: '1.5em' }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <FaInstagram
              style={{ marginTop: '15px', color: 'white', fontSize: '1.5em' }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/"
          >
            <FaYoutube
              style={{ marginTop: '15px', color: 'red', fontSize: '1.5em' }}
            />
          </a>
        </div>
      </div>
      <div className={css.footerBottom}>
        <p>&copy; 2024 Camperrun. Всі права захищені.</p>
      </div>
    </footer>
  );
};
