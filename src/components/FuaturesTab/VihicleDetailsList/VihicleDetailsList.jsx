import css from './VihicleDetailsList.module.scss';

export const VihicleDetailsList = ({ data }) => {
  return (
    <div className={css.container}>
      <p>Form</p>
      <p>{data.form}</p>
      <p>Length</p>
      <p>{data.length}</p>
      <p>Width</p>
      <p>{data.width}</p>
      <p>Height</p>
      <p>{data.height}</p>
      <p>Tank</p>
      <p>{data.tank}</p>
      <p>Consumption</p>
      <p>{data.consumption}</p>
    </div>
  );
};
