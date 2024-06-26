import css from './CamperList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../CamperCard/CamperCard';
import {
  selectFilteredAdverts,
  selectIsLoading,
  selectIsShowLoadMore,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import { getAdverts } from '../../redux/adverts/advertsOperations';
import { updatePage } from '../../redux/adverts/advertsSlice';
import { LoadMoreBtn } from '../Buttons/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useCallback } from 'react';
import Loader from '../Loader/Loader';
import { NothingFound } from '../NothingFound/NothingFound';

export const CamperList = () => {
  const adverts = useSelector(selectFilteredAdverts);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const showLoadMore = useSelector(selectIsShowLoadMore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [page, dispatch]);

  const loadMore = useCallback(() => {
    if (!isLoading) {
      dispatch(updatePage(page + 1));
    }
  }, [isLoading, page, dispatch]);

  return (
    <div className={css.advertsWrapper}>
      <ul>
        {adverts.map((item) => (
          <CamperCard data={item} key={item._id} />
        ))}
      </ul>
      {!adverts.length && !isLoading && <NothingFound />}
      {isLoading && <Loader />}
      {showLoadMore && !isLoading && !!adverts.length && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </div>
  );
};
