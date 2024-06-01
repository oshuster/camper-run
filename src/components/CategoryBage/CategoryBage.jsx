import css from './CategoryBage.module.scss';
import svg from '../../assets/sprite.svg';

export const CategoryBage = ({ svgName = '', bageTitle = '' }) => {
  return (
    <div className={css.wrapper}>
      <svg className={css.icon} width="18px" height="18px">
        <use xlinkHref={`${svg}#${svgName}`} />
      </svg>
      <p className={css.title}>{bageTitle}</p>
    </div>
  );
};
