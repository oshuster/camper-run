import { Icon, Text, IconButton } from '@chakra-ui/react';
import { Button } from '../Button/Button';
import { CategoryBage } from '../CategoryBage/CategoryBage';
import css from './CamperCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import svg from '../../assets/sprite.svg';

export const CamperCard = ({ data }) => {
  /*
  const categoryList = Object.entries(data.details).map(([key, value]) => {
    if (key === 'airConditioner') {
      const title = 'Air conditioner';
      return (
        <CategoryBage key={key} svgName={key} bageTitle={`${value} ${title}`} />
      );
    } else {
      return (
        <CategoryBage key={key} svgName={key} bageTitle={`${value} ${key}`} />
      );
    }
  });
  */
  return (
    <div className={css.cardWrapper}>
      <img src={data.gallery[0]} alt={data.name} className={css.cardImg} />
      <div className={css.additionalInfo}>
        <div className={css.mainInfo}>
          <h4>{data.name}</h4>
          <p>€{data.price.toFixed(2)}</p>
          <IconButton
            className={css.favoriteBtn}
            colorScheme="transparent"
            aria-label="Add to favorite"
            icon={
              <svg width="18px" height="18px">
                <use xlinkHref={`${svg}#heart_no_fill`} />
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
        <Button>Show more</Button>
      </div>
    </div>
  );
};
