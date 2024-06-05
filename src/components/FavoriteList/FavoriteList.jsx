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

  const hasFavorites = favoriteAdv.length > 0;

  return (
    <div className={css.favoriteListWrapper}>
      {!hasFavorites && !isLoading && <NothingFound />}
      <ul>
        {hasFavorites &&
          favoriteAdv.map((item) => (
            <FavoriteCard data={item} key={item._id} />
          ))}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};
