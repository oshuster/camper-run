import { useEffect } from 'react';
import { CamperList } from '../../components/CamperList/CamperList';
import { Filters } from '../../components/Filters/Filters';
import css from './CatalogPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAdverts,
  updateModalState,
  updateShowLoadMore,
} from '../../redux/adverts/advertsSlice';
import { PopUpDetails } from '../../components/PopUpDetails/PopUpDetails';
import { selectIsOpen } from '../../redux/adverts/advertsSelectors';
import { getAll } from '../../redux/adverts/advertsOperations';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectIsOpen);

  useEffect(() => {
    dispatch(getAll());

    return () => {
      dispatch(clearAdverts());
      dispatch(updateShowLoadMore(true));
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(updateModalState(false));
  };

  return (
    <div className={css.wrapper}>
      {open && <PopUpDetails isOpen={open} onClose={closeModal} />}
      <div>
        <Filters />
      </div>
      <CamperList />
    </div>
  );
};
