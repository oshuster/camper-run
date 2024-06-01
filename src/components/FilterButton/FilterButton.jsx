import classNames from 'classnames';
import svg from '../../assets/sprite.svg';
import css from './FilterButton.module.scss';

export const FilterButton = ({ svgName, label, selected, onClick }) => {
  return (
    <button
      className={classNames(css.button, { [css.selected]: selected })}
      onClick={onClick}
    >
      <svg width="24px" height="24px">
        <use xlinkHref={`${svg}#${svgName}`} />
      </svg>
      {label}
    </button>
  );
};

// <svg className={css.icon} width="18px" height="18px">
//   <use xlinkHref={`${svg}#${svgName}`} />
// </svg>;
