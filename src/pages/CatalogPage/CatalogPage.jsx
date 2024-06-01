import { CamperList } from '../../components/CamperList/CamperList';
import { Filters } from '../../components/Filters/Filters';
import css from './CatalogPage.module.scss';
import camp from './example.json';

export const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <Filters />
      <CamperList data={camp} />
    </div>
  );
};
