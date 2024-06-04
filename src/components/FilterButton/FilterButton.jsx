import classNames from 'classnames';
import svg from '../../assets/sprite.svg';
import css from './FilterButton.module.scss';

export const FilterButton = ({ svgName, label, selected, onClick, dataId }) => {
  return (
    <button
      data-id={dataId}
      className={classNames(css.button, { [css.selected]: selected })}
      onClick={onClick}
    >
      <svg width="32px" height="32px">
        <use xlinkHref={`${svg}#${svgName}`} />
      </svg>
      {label}
    </button>
  );
};
