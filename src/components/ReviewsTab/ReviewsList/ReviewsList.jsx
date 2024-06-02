import { Avatar, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import css from './ReviewsList.module.scss';

export const ReviewsList = ({ data }) => {
  const reviews = data.reviews.map((feedback, idx) => (
    <div key={idx} className={css.container}>
      <div className={css.userInfo}>
        <Avatar className={css.avatar} name={feedback.reviewer_name} src="" />
        <div>
          <p className={css.userName}>{feedback.reviewer_name}</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              mr="4px"
              key={star}
              as={FaStar}
              color={star <= feedback.reviewer_rating ? '#FFC531' : '#F2F4F7'}
            />
          ))}
        </div>
      </div>
      <p className={css.comment}>{feedback.comment}</p>
    </div>
  ));
  return <ul>{reviews}</ul>;
};
