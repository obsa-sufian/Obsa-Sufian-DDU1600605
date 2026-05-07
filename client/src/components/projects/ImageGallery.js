import { useState } from 'react';

const allImages = [
  { id: 1, src: require('../../images/House.jpg'), category: 'nature' },
  { id: 2, src: require('../../images/naturalimage1.jpg'), category: 'nature' },
  { id: 3, src: require('../../images/naturalimage2.jpg'), category: 'nature' },
  { id: 4, src: require('../../images/peopleimage1.jpg'), category: 'people' },
  { id: 5, src: require('../../images/peopleimage2.jpg'), category: 'people' },
  { id: 6, src: require('../../images/peopleimage3.jpg'), category: 'people' },
  { id: 7, src: require('../../images/peopleimaage4.jpg'), category: 'people' },
  { id: 8, src: require('../../images/classmate.jpg'), category: 'people' },
  { id: 9, src: require('../../images/egle.jpeg'), category: 'people' },
  { id: 10, src: require('../../images/personal1.jpg'), category: 'personal' },
  { id: 11, src: require('../../images/personal2.jpg'), category: 'personal' },
  { id: 12, src: require('../../images/LogoMaker.jpg'), category: 'logos' },
  { id: 13, src: require('../../images/mylogo.jpg'), category: 'logos' },
  { id: 14, src: require('../../images/Home.jpeg'), category: 'logos' },
  { id: 15, src: require('../../images/FormLayout.jpeg'), category: 'logos' },
  { id: 16, src: require('../../images/Contactme.jpeg'), category: 'logos' },
  { id: 17, src: require('../../images/ProjectsDemo.jpeg'), category: 'logos' },
  { id: 18, src: require('../../images/Skills.jpeg'), category: 'logos' },

];

const categories = ['all', ...new Set(allImages.map(img => img.category))];

const ImageGallery = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? allImages : allImages.filter(img => img.category === filter);

  return (
    <div>
      <h2>Responsive Image Gallery</h2>
      <div className="mb-3">
        {categories.map(cat => (
          <button key={cat} className={`btn btn-outline-secondary me-2 ${filter===cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="row">
        {filtered.map(img => (
          <div className="col-sm-6 col-md-4 mb-3" key={img.id}>
            <div className="card d-flex justify-content-center align-items-center p-2" style={{ minHeight: '240px' }}>
              <a href={img.src} target="_blank" rel="noreferrer" style={{ width: '100%', textAlign: 'center' }}>
                <img 
                  src={img.src} 
                  className="card-img-top" 
                  alt="Gallery item" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '340px',
                    height: '226px', 
                    objectFit: 'cover',
                    margin: '0 auto',
                    cursor: 'pointer'
                  }} 
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;

