import { useEffect, useRef } from 'react';
import $ from 'jquery';


  // ${images.map((src, i) => `<img src="${src}" class="w-100" style="display:${i===0?'block':'none'}; height: 226px; object-fit: cover; max-width: 340px;" alt="slide">`).join('')}

const images = [
  require('../../images/House.jpg'),
  require('../../images/naturalimage1.jpg'),
  require('../../images/naturalimage2.jpg'),
  require('../../images/peopleimage1.jpg'),
  require('../../images/personal1.jpg'),
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $slider = $(sliderRef.current);
    let currentIndex = 0;
    const total = images.length;

    const showSlide = (index) => {
      $slider.find('img').hide().eq(index).fadeIn(400);
    };

    $slider.html(`
      <div class="position-relative ">
        ${images.map((src, i) => `<a href="${src}" target="_blank" rel="noreferrer"><img src="${src}" class="mx-auto d-block" style="display:${i===0?'block':'none'}; max-width: 340px; height: 226px; object-fit: cover; cursor: pointer;" alt="slide"></a>`).join('')}
        <button class="btn btn-dark position-absolute top-50 start-0 translate-middle-y prev">❮</button>
        <button class="btn btn-dark position-absolute top-50 end-0 translate-middle-y next">❯</button>
      </div>
    `);

    $slider.on('click', '.next', () => {
      currentIndex = (currentIndex + 1) % total;
      showSlide(currentIndex);
    });
    $slider.on('click', '.prev', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      showSlide(currentIndex);
    });

    const interval = setInterval(() => {
      $slider.find('.next').trigger('click');
    }, 3000);

    return () => {
      clearInterval(interval);
      $slider.off();
    };
  }, []);

  return <div ref={sliderRef} className="image-slider"></div>;
};
export default ImageSlider;

