import { Icon, Text, IconButton } from '@chakra-ui/react';
import { Button } from '../../Buttons/MainBtn/Button';
import { CategoryBage } from '../../CategoryBage/CategoryBage';
import css from './FavoriteCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { GrClose, GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getOne } from '../../../redux/adverts/advertsOperations';
import { removeFavorite } from '../../../redux/adverts/advertsSlice';

export const FavoriteCard = ({ data }) => {
  const dispatch = useDispatch();

  const showModal = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    dispatch(getOne(id));
  };

  const handleRemoveFavorite = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    dispatch(removeFavorite(id));
  };

  return (
    <div className={css.cardWrapper} data-id={data._id}>
      <img src={data.gallery[0]} alt={data.name} className={css.cardImg} />
      <div className={css.additionalInfo}>
        <div className={css.mainInfo}>
          <h4>{data.name}</h4>
          <p>€{data.price.toFixed(2)}</p>
          <IconButton
            onClick={handleRemoveFavorite}
            className={css.favoriteBtn}
            colorScheme="transparent"
            aria-label="Add to favorite"
            color="black"
            icon={<GrClose />}
          />
        </div>
        <div className={css.reviewWraper}>
          <Link className={css.link}>
            <Icon as={FaStar} color="yellow.500" width="16px" height="16px" />
            <p>{data.rating}</p>
            <p>({data.reviews.length} Reviews)</p>
          </Link>
          <Icon as={GrLocation} width="16px" height="16px" />
          <p>{data.location}</p>
        </div>
        <Text className={css.description} noOfLines="3">
          {data.description}
        </Text>
        <div>
          <CategoryBage svgName="Users" bageTitle={`${data.adults} adults`} />
          <CategoryBage svgName="transmision" bageTitle={data.transmission} />
          <CategoryBage svgName="fuel" bageTitle={data.engine} />
          <CategoryBage svgName="kitchen" bageTitle="kitchen" />
          <CategoryBage
            svgName="beds"
            bageTitle={`${data.details.beds} beds`}
          />
          {data.details.airConditioner && (
            <CategoryBage svgName="airConditioner" bageTitle="AC" />
          )}
        </div>
        <Button onClick={showModal}>Show more</Button>
      </div>
    </div>
  );
};
