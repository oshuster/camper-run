import css from './CamperList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../CamperCard/CamperCard';
import {
  selectAllAdverts,
  selectFilteredAdverts,
  selectIsLoading,
  selectIsShowLoadMore,
  selectPage,
} from '../../redux/adverts/advertsSelectors';
import { getAdverts } from '../../redux/adverts/advertsOperations';
import { updatePage } from '../../redux/adverts/advertsSlice';
import { LoadMoreBtn } from '../Buttons/LoadMoreBtn/LoadMoreBtn';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

export const CamperList = () => {
  // const adverts = useSelector(selectAllAdverts);
  const adverts = useSelector(selectFilteredAdverts);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const showLoadMore = useSelector(selectIsShowLoadMore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [page, dispatch]);

  const loadMore = async () => {
    if (isLoading) return;
    const nexPage = page + 1;
    dispatch(updatePage(nexPage));
  };

  return (
    <div className={css.advertsWrapper}>
      <ul>
        {adverts?.map((item) => (
          <CamperCard data={item} key={item._id} />
        ))}
      </ul>
      {isLoading && <Loader />}
      {showLoadMore && !isLoading && <LoadMoreBtn onClick={loadMore} />}
    </div>
  );
};
