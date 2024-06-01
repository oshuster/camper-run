import { CamperCard } from '../CamperCard/CamperCard';

export const CamperList = ({ data }) => {
  const cardList = data.map((item) => (
    <CamperCard data={item} key={item._id} />
  ));
  return <ul>{cardList}</ul>;
};
