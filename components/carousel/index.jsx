import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper, Button } from '@mui/material';
import items from './items.js'; // Import the items array
import './carousel.scss';

export default function BodyCarousel(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Carousel
      autoPlay={!isHovered}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='carousel'
    >
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  const { name, description, image } = item;

  return (
    <Paper>
      <img src={image} alt={name} /> {/* Render the image */}
      <h2>{name}</h2>
      <p>{description}</p>
      <Button></Button>
    </Paper>
  );
}
