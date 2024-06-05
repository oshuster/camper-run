import { Icon, Text, IconButton } from '@chakra-ui/react';
import { Button } from '../Buttons/MainBtn/Button';
import { CategoryBage } from '../CategoryBage/CategoryBage';
import css from './CamperCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import svg from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, getOne } from '../../redux/adverts/advertsOperations';
import { selectFavorite } from '../../redux/adverts/advertsSelectors';
import { removeFavorite } from '../../redux/adverts/advertsSlice';

export const CamperCard = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteAdv = useSelector(selectFavorite);

  const showModal = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    dispatch(getOne(id));
  };

  const handleFavorite = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    if (isFav(favoriteAdv, id)) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const isFav = (favoriteAdv, elementId) => {
    return favoriteAdv?.some(({ _id }) => _id === elementId);
  };

  return (
    <div className={css.cardWrapper} data-id={data._id}>
      <img src={data.gallery[0]} alt={data.name} className={css.cardImg} />
      <div className={css.additionalInfo}>
        <div className={css.mainInfo}>
          <h4>{data.name}</h4>
          <p>€{data.price.toFixed(2)}</p>
          <IconButton
            onClick={handleFavorite}
            className={css.favoriteBtn}
            colorScheme="transparent"
            aria-label="Add to favorite"
            icon={
              <svg width="18px" height="18px">
                <use
                  xlinkHref={
                    isFav(favoriteAdv, data._id)
                      ? `${svg}#heart_fill`
                      : `${svg}#heart_no_fill`
                  }
                />
              </svg>
            }
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
        <Text className={css.description} noOfLines="1">
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
