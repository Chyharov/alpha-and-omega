import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import closeIcon from '../../images/closeIcon.svg'
import arrowLeft from '../../images/arrowLeft.svg'
import arrowRight from '../../images/arrowRight.svg'
import s from './WhiteVolksWagen.module.scss';

const images = require.context('../../images/whiteVolksWagen', true, /\.(webp)$/);
const RitualCarParkWVWPhoto = images.keys().map((path) => images(path));

const Modal = ({ closeModal, currentSlide }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.modal} onClick={handleClick}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </span>
        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={210}
          totalSlides={RitualCarParkWVWPhoto.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {RitualCarParkWVWPhoto.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img src={photo} alt={`Slide ${index}`} />
              </Slide>
            ))}
          </Slider>
          <div className={s.carouselCenterButtonModal}>
            <ButtonBack className={s.carouselButtonModal}>
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonBack>
            <ButtonNext className={s.carouselButtonModal}>
              <img src={arrowRight} alt="arrowRight" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

const WhiteVolksWagen = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

    return (
        <>
            <li className={s.ritualCarParkList}>
                <h2 className="title">Економ клас</h2>
                
                    <CarouselProvider
                    naturalSlideWidth={280}
                    naturalSlideHeight={210}
                    totalSlides={RitualCarParkWVWPhoto.length}
                    infinite={true}>
                    
                        <Slider>
                            {RitualCarParkWVWPhoto.map((photo, index) => (
                            <Slide key={index} index={index + 1}>
                                <img src={photo} alt={`Slide ${index}`} onClick={() => openModal(photo)}/>
                            </Slide>
                            ))}
                        </Slider>

                <p className={s.ritualCarParkList__name}>Volkswagen Т-5 Білий</p>
                <p className="description" style={{ textAlign: 'center', marginBottom: '20px' }}>(2 - 5 пасажирів)</p>

                <div className={s.carouselButtonCenter}>
                    <ButtonBack className={s.carouselButton}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
                    <ButtonNext className={s.carouselButton}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
                </div>
              </CarouselProvider>
            </li>
            {isOpen && modalImage && <Modal image={modalImage} closeModal={closeModal} currentSlide={RitualCarParkWVWPhoto.indexOf(modalImage)} />}
        </>
  );
};

export default WhiteVolksWagen;
