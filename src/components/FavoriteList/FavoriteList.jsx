import css from './FavoriteList.module.scss';
import { useSelector } from 'react-redux';
import {
  selectFavorite,
  selectIsLoading,
} from '../../redux/adverts/advertsSelectors';
import Loader from '../Loader/Loader';
import { FavoriteCard } from './FavoriteCard/FavoriteCard';

export const FavoriteList = () => {
  const favoriteAdv = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.advertsWrapper}>
      {favoriteAdv.length === 0 && <h3>Empty</h3>}
      <ul>
        {favoriteAdv?.map((item) => (
          <FavoriteCard data={item} key={item._id} />
        ))}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};
