import { useState, useRef } from 'react';

const ImageMagnifier = () => {
  const [magnifierStyle, setMagnifierStyle] = useState({ display: 'none' });
  const [bgPos, setBgPos] = useState('0% 0%');
  const containerRef = useRef(null);
  const imgSrc = 'https://picsum.photos/id/1020/600/400';

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setMagnifierStyle({
      display: 'block',
      left: x - 50,
      top: y - 50,
    });
    setBgPos(`${percentX}% ${percentY}%`);
  };

  const handleMouseLeave = () => setMagnifierStyle({ display: 'none' });

  return (
    <div>
      <h2>Image Magnifier</h2>
      <div
        ref={containerRef}
        style={{ position: 'relative', display: 'inline-block', cursor: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imgSrc} alt="magnify" style={{ width: '100%', maxWidth: '600px' }} />
        <div
          style={{
            ...magnifierStyle,
            position: 'absolute',
            width: '100px', height: '100px',
            border: '2px solid #fff',
            borderRadius: '50%',
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: '300%',
            backgroundPosition: bgPos,
            pointerEvents: 'none',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        />
      </div>
    </div>
  );
};
export default ImageMagnifier;

