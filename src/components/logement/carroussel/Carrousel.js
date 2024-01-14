import { useState } from 'react';

const Carrousel = props => {
  const tabPictures = props.pictures;
  const nbPictures = tabPictures.length;

  const [currentPicture, setCurrentPicture] = useState(0);

  const nextSlide = () => {
    setCurrentPicture(count => (count < nbPictures - 1 ? count + 1 : 0));
  };
  const prevSlide = () => {
    setCurrentPicture(count => (count > 0 ? count - 1 : nbPictures - 1));
  };
  if (tabPictures.length > 1) {
    return (
      <div className="containerSlider">
        {tabPictures.map((element, index) => {
          const classApparaitre =
            index === currentPicture ? `active-slider` : `unactive-slider`;

          return (
            <div key={index} className={`${classApparaitre}`}>
              <img src={element} className="imgSlider" />
            </div>
          );
        })}
        <span>
          {currentPicture + 1 + '/' + nbPictures}
        </span>
        <button className="btn-precedent" onClick={prevSlide}>
          {'<'}
        </button>
        <button className="btn-suivant" onClick={nextSlide}>
          {'>'}
        </button>
      </div>
    );
  } else {
    return (
      <div className="containerSlider">
        <img src={tabPictures} className="imgSlider" />
      </div>
    );
  }
};

export default Carrousel;
