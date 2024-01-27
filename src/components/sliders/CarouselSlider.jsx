import React, { useEffect, useState } from 'react';
import CarouselItem from '../CarouselItem';

function CarouselSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [1, 2, 3];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, items]);

    return (
        <div>
            <div>
                {
                    Array.from({ length: items.length }).map((_, index) => {
                        return <div key={index} className={`${index === currentIndex ? 'flex' : 'hidden'}`}>
                            <CarouselItem currentindex={currentIndex} index={index} items={items} />
                        </div>
                    })}

            </div>
        </div>
    )
}

export default CarouselSlider;