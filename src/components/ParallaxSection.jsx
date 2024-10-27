// src/components/ParallaxSection.jsx
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxSection = () => {
  return (
    <Parallax pages={3} style={{ top: '0', left: '0' }}>
      {/* Background layer */}
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: '#003366' }}>
        <div style={layerStyle}>Welcome to Barka!</div>
      </ParallaxLayer>

      {/* Midground layer with slower scroll */}
      <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#005588' }}>
        <div style={layerStyle}>Explore Our Sandwiches</div>
      </ParallaxLayer>

      {/* Foreground layer with slower scroll */}
      <ParallaxLayer offset={2} speed={0.1} style={{ backgroundColor: '#0077AA' }}>
        <div style={layerStyle}>Visit Us for Smoothies and More</div>
      </ParallaxLayer>
    </Parallax>
  );
};

const layerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFF',
  fontSize: '2rem',
  height: '100vh'
};

export default ParallaxSection;
