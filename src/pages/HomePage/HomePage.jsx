import { Hero } from '../../components/Hero/Hero';
import { VehicleCards } from '../../components/VehicleCards/VehicleCards';
import css from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <Hero />
      <VehicleCards />
    </div>
  );
};
