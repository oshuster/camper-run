import { CategoryBage } from '../../CategoryBage/CategoryBage';

export const BageList = ({ data }) => {
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

  return <ul>{categoryList}</ul>;
};
