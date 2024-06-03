import { useDispatch, useSelector } from 'react-redux';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { PopUpDetails } from '../../components/PopUpDetails/PopUpDetails';
import css from './FavoritesPage.module.scss';
import { selectIsOpen } from '../../redux/adverts/advertsSelectors';
import { updateModalState } from '../../redux/adverts/advertsSlice';

export const FavoritesPage = () => {
  const open = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(updateModalState(false));
  };

  return (
    <div className={css.wrapper}>
      {open && <PopUpDetails isOpen={open} onClose={closeModal} />}

      <FavoriteList />
    </div>
  );
};
