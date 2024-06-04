import css from './FavoriteList.module.scss';
import { useSelector } from 'react-redux';
import {
  selectFavorite,
  selectIsLoading,
} from '../../redux/adverts/advertsSelectors';
import Loader from '../Loader/Loader';
import { FavoriteCard } from './FavoriteCard/FavoriteCard';
import { NothingFound } from '../NothingFound/NothingFound';

export const FavoriteList = () => {
  const favoriteAdv = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.favoriteListWrapper}>
      {favoriteAdv.length === 0 && <NothingFound />}
      <ul>
        {favoriteAdv?.map((item) => (
          <FavoriteCard data={item} key={item._id} />
        ))}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};
