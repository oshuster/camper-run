import Slider from 'react-slick';
import css from './Carousel.module.scss';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={css.container}>
          <h3>1</h3>
        </div>
        <div className={css.container}>
          <h3>2</h3>
        </div>
        <div className={css.container}>
          <h3>3</h3>
        </div>
        <div className={css.container}>
          <h3>4</h3>
        </div>
        <div className={css.container}>
          <h3>5</h3>
        </div>
        <div className={css.container}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
