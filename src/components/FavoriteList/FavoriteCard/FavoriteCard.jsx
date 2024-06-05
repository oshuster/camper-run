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

const MainInfo = ({ name, price, handleRemoveFavorite }) => (
  <div className={css.mainInfo}>
    <h4>{name}</h4>
    <p>€{price.toFixed(2)}</p>
    <IconButton
      onClick={handleRemoveFavorite}
      className={css.favoriteBtn}
      colorScheme="transparent"
      aria-label="Remove from favorite"
      color="black"
      icon={<GrClose />}
    />
  </div>
);

const ReviewInfo = ({ rating, reviews, location }) => (
  <div className={css.reviewWraper}>
    <Link className={css.link}>
      <Icon as={FaStar} color="yellow.500" width="16px" height="16px" />
      <p>{rating}</p>
      <p>({reviews} Reviews)</p>
    </Link>
    <Icon as={GrLocation} width="16px" height="16px" />
    <p>{location}</p>
  </div>
);

const CategoryBadges = ({ details, adults, transmission, engine }) => (
  <div>
    <CategoryBage svgName="Users" bageTitle={`${adults} adults`} />
    <CategoryBage svgName="transmision" bageTitle={transmission} />
    <CategoryBage svgName="fuel" bageTitle={engine} />
    <CategoryBage svgName="kitchen" bageTitle="kitchen" />
    <CategoryBage svgName="beds" bageTitle={`${details.beds} beds`} />
    {details.airConditioner && (
      <CategoryBage svgName="airConditioner" bageTitle="AC" />
    )}
  </div>
);

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
        <MainInfo
          name={data.name}
          price={data.price}
          handleRemoveFavorite={handleRemoveFavorite}
        />
        <ReviewInfo
          rating={data.rating}
          reviews={data.reviews.length}
          location={data.location}
        />
        <Text className={css.description} noOfLines="3">
          {data.description}
        </Text>
        <CategoryBadges
          details={data.details}
          adults={data.adults}
          transmission={data.transmission}
          engine={data.engine}
        />
        <Button onClick={showModal}>Show more</Button>
      </div>
    </div>
  );
};
