import { useDispatch, useSelector } from 'react-redux';
import { CamperList } from '../../components/CamperList/CamperList';
import { Filters } from '../../components/Filters/Filters';
import css from './CatalogPage.module.scss';
import { getAdverts } from '../../redux/adverts/advertsOperations';
import { useEffect } from 'react';
import {
  selectAllAdverts,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import Loader from '../../components/Loader/Loader';
import { LoadMoreBtn } from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { updatePage } from '../../redux/adverts/advertsSlice';

export const CatalogPage = () => {
  const adverts = useSelector(selectAllAdverts);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(updatePage());
    console.log('updated page', page);
    dispatch(getAdverts(page));
  };

  return (
    <div className={css.wrapper}>
      <Filters />
      {isLoading && <Loader />}
      {!isLoading && <CamperList data={adverts} />}
      <LoadMoreBtn onClick={loadMore} />
    </div>
  );
};
