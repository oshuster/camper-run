import { Hero } from '../../components/Hero/Hero';
import css from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <Hero />
    </div>
  );
};
