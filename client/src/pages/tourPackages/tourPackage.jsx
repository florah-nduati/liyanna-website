import React from 'react';
import './tourPackage.css';
import image1 from '../../assets/beach.jpg'
const packages = [
  {
    id: 1,
    image: image1,
    title: 'Exotic Beach Getaway',
    description: 'Relax on pristine beaches with luxurious 5-star resorts, gourmet dining, and private beach access.',
    features: [
      'Private Beach Access',
      'Exclusive Spa Services',
      'Gourmet Dining',
      'Water Sports & Adventures',
      'Personalized Concierge Service',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/1',
  },
  {
    id: 2,
    image: image1,
    title: 'Mountain Adventure',
    description: 'Embark on an adventurous mountain tour with expert guides, thrilling hikes, and breathtaking views.',
    features: [
      'Guided Mountain Trekking',
      'Private Hiking Trails',
      'Luxury Mountain Lodging',
      'Rock Climbing',
      'Photography Tours',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/2',
  },
  {
    id: 3,
    image: image1,
    title: 'Luxury City Tour',
    description: 'Discover the best cities with exclusive private tours, luxury transportation, and VIP access to attractions.',
    features: [
      'Private City Tours',
      'Luxury Transportation',
      'VIP Access to Landmarks',
      'Gourmet Dining',
      'Personalized Itineraries',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/3',
  },
  {
    id: 4,
    image: image1,
    title: 'Safari Adventure',
    description: 'Experience thrilling safari adventures with close wildlife encounters, luxury lodges, and expert guides.',
    features: [
      'Private Safari Tours',
      'Luxury Safari Lodging',
      'Wildlife Photography',
      'Exclusive Game Drives',
      'Cultural Safari Experiences',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/4',
  },
  {
    id: 5,
    image: image1,
    title: 'Desert Escape',
    description: 'Explore the mysterious desert landscapes, indulge in luxury tented camps, and enjoy camel rides and star-gazing.',
    features: [
      'Luxury Desert Lodging',
      'Camel Riding',
      'Stargazing Experiences',
      'Private Camp Services',
      'Adventure Tours',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/5',
  },
  {
    id: 6,
    image: image1,
    title: 'Jungle Expedition',
    description: 'Venture into the heart of the jungle for an unforgettable adventure, wildlife encounters, and indigenous culture.',
    features: [
      'Jungle Hiking',
      'Wildlife Spotting',
      'Cultural Immersion',
      'Eco-Lodging',
      'Private Guides',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/6',
  },
  {
    id: 7,
    image: image1,
    title: 'Island Paradise Getaway',
    description: 'Escape to a tropical island paradise, enjoy luxurious beachfront villas, and indulge in water activities.',
    features: [
      'Private Villas',
      'Snorkeling & Scuba Diving',
      'Exclusive Beach Access',
      'Gourmet Island Dining',
      'Private Yacht Tours',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/7',
  },
  {
    id: 8,
    image: image1,
    title: 'Luxury Cruise',
    description: 'Set sail on a luxury cruise with world-class amenities, exclusive shore excursions, and fine dining.',
    features: [
      'Private Balcony Rooms',
      'Exclusive Shore Excursions',
      'Gourmet Dining',
      'All-Inclusive Packages',
      'Entertainment & Events',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/8',
  },
  {
    id: 9,
    image: image1,
    title: 'Skiing and Snowboarding',
    description: 'Hit the slopes at world-renowned ski resorts, with expert instructors and luxurious mountain lodges.',
    features: [
      'Ski and Snowboard Rentals',
      'Guided Ski Tours',
      'Mountain Lodging',
      'Après-ski Experiences',
      'Snowshoeing & Ice Climbing',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/9',
  },
  {
    id: 10,
    image: image1,
    title: 'Wine Tasting Tour',
    description: 'Enjoy exclusive wine tasting experiences in renowned vineyards, with private tours and gourmet food pairings.',
    features: [
      'Private Vineyard Tours',
      'Gourmet Wine Pairings',
      'Exclusive Wine Tastings',
      'Winemaking Experiences',
      'Luxury Accommodations',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/10',
  },
  {
    id: 11,
    image: image1,
    title: 'Cultural Heritage Tour',
    description: 'Explore the rich cultural heritage of ancient civilizations with private tours and expert guides.',
    features: [
      'Guided Historical Tours',
      'Private Archaeological Sites',
      'Cultural Immersion Experiences',
      'Traditional Cuisine Tasting',
      'Luxury Accommodations',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/11',
  },
  {
    id: 12,
    image: image1,
    title: 'Wellness Retreat',
    description: 'Relax and rejuvenate at a wellness retreat with yoga, meditation, spa treatments, and nature walks.',
    features: [
      'Yoga & Meditation Sessions',
      'Spa & Wellness Treatments',
      'Healthy Gourmet Cuisine',
      'Nature Walks & Hikes',
      'Private Retreat Locations',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/12',
  },
  {
    id: 13,
    image: image1,
    title: 'Photography Tour',
    description: 'Capture stunning landscapes and iconic landmarks on a photography-focused tour with professional photographers.',
    features: [
      'Photography Guidance',
      'Scenic Locations',
      'Private Photography Tours',
      'Access to Hidden Gems',
      'High-Quality Equipment Rentals',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/13',
  },
  {
    id: 14,
    image: image1,
    title: 'Art & Museum Tour',
    description: 'Explore the finest museums and galleries, with private art tours and exclusive exhibitions.',
    features: [
      'Private Art Tours',
      'Access to Exclusive Exhibitions',
      'Museum & Gallery Visits',
      'Artist Meet-and-Greets',
      'Gourmet Dining in Art Spaces',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/14',
  },
  {
    id: 15,
    image: image1,
    title: 'Romantic Getaway',
    description: 'Enjoy a romantic escape with candle-lit dinners, private beach access, and luxurious spa treatments.',
    features: [
      'Private Candle-lit Dinners',
      'Luxury Spa Experiences',
      'Romantic Sunset Cruises',
      'Couple’s Retreats',
      'Private Villas & Cottages',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/15',
  },
  {
    id: 16,
    image: image1,
    title: 'Luxury Hotel Stays',
    description: 'Stay at the world’s most exclusive luxury hotels, with world-class services and premium amenities.',
    features: [
      '5-Star Luxury Accommodations',
      'Private Butler Services',
      'Exclusive Amenities',
      'Helicopter Transfers',
      'Gourmet Dining',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/16',
  },
  {
    id: 17,
    image: image1,
    title: 'Extreme Adventure Tour',
    description: 'For adrenaline junkies, enjoy extreme sports like bungee jumping, skydiving, and white-water rafting.',
    features: [
      'Bungee Jumping',
      'Skydiving Adventures',
      'White-water Rafting',
      'Helicopter Tours',
      'Rock Climbing & Paragliding',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/17',
  },
  {
    id: 18,
    image: image1,
    title: 'Fishing Expedition',
    description: 'Experience the thrill of deep-sea fishing and luxury lodgings on an exclusive fishing expedition.',
    features: [
      'Deep-sea Fishing Trips',
      'Luxury Fishing Boats',
      'Guided Tours',
      'Catch-and-Release Expeditions',
      'Private Fishing Lodges',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/18',
  },
  {
    id: 19,
    image: image1,
    title: 'Honeymoon Escape',
    description: 'Enjoy an unforgettable honeymoon with private villas, candle-lit dinners, and exclusive couple’s experiences.',
    features: [
      'Private Honeymoon Villas',
      'Private Sunset Cruises',
      'Couple’s Spa Retreats',
      'Gourmet Dining',
      'Exclusive Excursions for Two',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/19',
  },
  {
    id: 20,
    image: image1,
    title: 'Backpacking Adventure',
    description: 'Explore remote locations and cultural treasures while backpacking through beautiful and untouched landscapes.',
    features: [
      'Budget-Friendly Lodging',
      'Backpacking Trails',
      'Cultural Immersion',
      'Guided Nature Hikes',
      'Local Food & Experiences',
    ],
    buttonLabel: 'Book Now',
    buttonLink: '/tour/20',
  },
];

const TourPackages = () => {
  return (
    <div className="tour-packages">
      <h1 className="page-title">Our Exclusive Tour Packages</h1>
      <div className="package-list">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <h2 className="package-title">{pkg.title}</h2>
            <p className="package-description">{pkg.description}</p>
            <ul className="features-list">
              {pkg.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
            <a href={pkg.buttonLink} className="package-button">{pkg.buttonLabel}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
