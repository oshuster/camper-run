import { TfiHeartBroken } from 'react-icons/tfi';
import css from './NothingFound.module.scss';

export const NothingFound = () => {
  return (
    <div className={css.container}>
      <TfiHeartBroken className={css.icon} />
      <p className={css.title}>За вашим запитом нічого не знайдено 😢</p>
    </div>
  );
};
