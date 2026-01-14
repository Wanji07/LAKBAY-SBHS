import React, {useEffect, useState} from 'react'
import './ImageCarousel.css'

import Carousel1 from './assets/Carousel1.jpg'
import Carousel2 from './assets/Carousel2.jpg'
import Carousel3 from './assets/Carousel3.jpg'
import Carousel4 from './assets/Carousel4.jpg'
import Carousel5 from './assets/Carousel5.jpg'
import Carousel6 from './assets/Carousel6.jpg'
import Carousel7 from './assets/Carousel7.jpg'
import Carousel8 from './assets/Carousel8.jpg'

const ImageCarousel = () => {
    const images = [
        {id: 1, url: `${Carousel1}`},
        {id: 2, url: `${Carousel2}`},
        {id: 3, url: `${Carousel3}`},
        {id: 4, url: `${Carousel4}`},
        {id: 5, url: `${Carousel5}`},
        {id: 6, url: `${Carousel6}`},
        {id: 7, url: `${Carousel7}`},
        {id: 8, url: `${Carousel8}`},
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div className="image-carousel">
            {images.map((image, index) => (
                <img
                    src={image.url}
                    alt="Lakbay SBHS Photos"
                    className={currentImageIndex === index ? 'block' : 'hidden'}
                    key={image.id}
                />
            ))}
            <button onClick={handlePreviousClick} className="carousel-btn prev">‹</button>
            <button onClick={handleNextClick} className="carousel-btn next">›</button>
        </div>
    );
};

export default ImageCarousel;