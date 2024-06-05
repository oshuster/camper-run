import { useDispatch, useSelector } from 'react-redux';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { PopUpDetails } from '../../components/PopUpDetails/PopUpDetails';
import css from './FavoritesPage.module.scss';
import {
  selectFavorite,
  selectIsOpen,
} from '../../redux/adverts/advertsSelectors';
import { updateModalState } from '../../redux/adverts/advertsSlice';

export const FavoritesPage = () => {
  const open = useSelector(selectIsOpen);
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);

  const closeModal = () => {
    dispatch(updateModalState(false));
  };
  return (
    <div
      className={
        favorite.length > 0 ? css.favoriteWrapper : css.extendFavoriteWrapper
      }
    >
      {open && <PopUpDetails isOpen={open} onClose={closeModal} />}
      <FavoriteList />
    </div>
  );
};
