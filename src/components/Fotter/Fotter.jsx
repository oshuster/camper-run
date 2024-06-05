import { Link } from 'react-router-dom';
import css from './Fotter.module.scss';
import { navLinks, socialLinks } from './links';

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
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
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
          {socialLinks.map((social, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={social.href}
            >
              <social.icon
                className={css.socialIcon}
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={css.footerBottom}>
        <p>&copy; 2024 Camperrun. Всі права захищені.</p>
      </div>
    </footer>
  );
};
