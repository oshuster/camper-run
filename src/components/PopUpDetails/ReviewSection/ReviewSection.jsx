import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import css from '../PopUpDetails.module.scss';
import { Icon } from '@chakra-ui/react';

export const ReviewSection = ({ rating, reviews, location }) => (
  <div className={css.reviewWraper}>
    <Link className={css.link}>
      <Icon as={FaStar} color="yellow.500" width="16px" height="16px" />
      <p>{rating}</p>
      <p>({reviews.length} Reviews)</p>
    </Link>
    <Icon as={GrLocation} width="16px" height="16px" />
    <p>{location}</p>
  </div>
);
