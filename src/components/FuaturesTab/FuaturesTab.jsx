import { BageList } from './BageList/BageList';
import camp from '../../pages/CatalogPage/example.json';
import { Divider } from '@chakra-ui/react';
import css from './FuaturesTab.module.scss';
import { VihicleDetailsList } from './VihicleDetailsList/VihicleDetailsList';
import { BookingForm } from './BookingForm/BookingForm';

export const FuaturesTab = () => {
  return (
    <div className={css.container}>
      <div className={css.holder}>
        <BageList data={camp[0]} />
        <h3 className={css.title}>Vehicle details</h3>
        <Divider mb="24px" mt="24px" />
        <VihicleDetailsList data={camp[0]} />
      </div>
      <BookingForm />
    </div>
  );
};
