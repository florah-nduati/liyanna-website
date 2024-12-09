import React from 'react';
import './gallery.css';

const galleryImages = [
  'https://source.unsplash.com/300x300/?luxury,hotel',
  'https://source.unsplash.com/300x300/?yacht,vacation',
  'https://source.unsplash.com/300x300/?beach,sunset',
  'https://source.unsplash.com/300x300/?mountains,adventure',
  'https://source.unsplash.com/300x300/?jets,luxury',
  'https://source.unsplash.com/300x300/?spa,resort',
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="page-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img src={image} alt={`Gallery ${index + 1}`} key={index} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
