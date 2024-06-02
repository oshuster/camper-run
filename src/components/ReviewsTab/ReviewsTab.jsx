import camp from '../../pages/CatalogPage/example.json';
import css from './ReviewsTab.module.scss';
import { BookingForm } from '../FuaturesTab/BookingForm/BookingForm';
import { ReviewsList } from './ReviewsList/ReviewsList';

export const ReviewsTab = () => {
  return (
    <div className={css.container}>
      <div className={css.holder}>
        <ReviewsList data={camp[0]} />
      </div>
      <BookingForm />
    </div>
  );
};
