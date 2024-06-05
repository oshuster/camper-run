import { BageList } from './BageList/BageList';
import { Divider } from '@chakra-ui/react';
import css from './FuaturesTab.module.scss';
import { VihicleDetailsList } from './VihicleDetailsList/VihicleDetailsList';
import { BookingForm } from '../BookingForm/BookingForm';
import { useSelector } from 'react-redux';
import { selectAditionalInfo } from '../../redux/adverts/advertsSelectors';

export const FuaturesTab = () => {
  const data = useSelector(selectAditionalInfo);
  return (
    <div className={css.futureTabContainer}>
      <div className={css.holder}>
        <BageList data={data} />
        <h3 className={css.title}>Vehicle details</h3>
        <Divider mb="24px" mt="24px" />
        <VihicleDetailsList data={data} />
      </div>
      <BookingForm />
    </div>
  );
};
