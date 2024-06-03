import css from './LoadMoreBtn.module.scss';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
};
