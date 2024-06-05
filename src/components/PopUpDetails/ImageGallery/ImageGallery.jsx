import css from '../PopUpDetails.module.scss';

export const ImageGallery = ({ gallery, name }) => (
  <div className={css.imgWrapper}>
    {gallery.map((imgUrl) => (
      <img key={imgUrl} src={imgUrl} alt={name} className={css.img} />
    ))}
  </div>
);
