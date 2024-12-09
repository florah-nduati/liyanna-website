import React from 'react';
import './services.css';
import image1 from "../../assets/hotel.jpg";
import image2 from "../../assets/airport.jpg";
import image3 from "../../assets/yatch.jpg";
import image4 from "../../assets/event.jpg";
import image5 from "../../assets/car.jpg";
import image6 from "../../assets/security.jpg";
import image7 from "../../assets/planes.jpg";
import image8 from "../../assets/tours.jpg";

const KeyServices = () => {
  const services = [
    {
      id: 1,
      title: 'Hotel Bookings',
      description: 'Book luxurious stays in top-rated hotels around the world.',
      image: image1,
    },
    {
      id: 2,
      title: 'Airport Transfers',
      description: 'Seamless, first-class airport transfer services.',
      image: image2
    },
    {
      id: 3,
      title: 'Luxury Yacht Charter',
      description: 'Explore the seas with our exclusive yacht charters.',
      image: image3
    },
    {
      id: 4,
      title: 'Event Planning',
      description: 'Plan your dream events with unparalleled luxury.',
      image: image4
    },
    {
        id: 5,
        title: 'car hire',
        description: 'Plan your dream events with unparalleled luxury.',
        image: image5
      },

      {
        id: 6,
        title: 'security services',
        description: 'Plan your dream events with unparalleled luxury.',
        image: image6
      },
      {
        id: 7,
        title: 'chatered planes',
        description: 'Plan your dream events with unparalleled luxury.',
        image: image7
      },
      {
        id: 8,
        title: 'customized package tours',
        description: 'Plan your dream events with unparalleled luxury.',
        image: image8
      },
  ];

  return (
    <section className="key-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyServices;
