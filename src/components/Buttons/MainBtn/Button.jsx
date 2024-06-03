import css from './Button.module.scss';

export const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      {children}
    </button>
  );
};
