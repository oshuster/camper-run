import css from './ReviewsTab.module.scss';
import { BookingForm } from '../BookingForm/BookingForm';
import { ReviewsList } from './ReviewsList/ReviewsList';
import { useSelector } from 'react-redux';
import { selectAditionalInfo } from '../../redux/adverts/advertsSelectors';

export const ReviewsTab = () => {
  const data = useSelector(selectAditionalInfo);
  return (
    <div className={css.container}>
      <div className={css.holder}>
        <ReviewsList data={data} />
      </div>
      <BookingForm />
    </div>
  );
};
