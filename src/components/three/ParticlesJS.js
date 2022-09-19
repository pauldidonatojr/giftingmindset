import React from 'react';
import ReactDOM from 'react-dom';
import { Particles } from '@blackbox-vision/react-particles';

const ParticlesJs = () => (
  <Particles
    id="simple"
    width="auto"
    height="100vh"
    style={{
      backgroundColor: 'white',
    }}
    params={{
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        size: {
          value: 3,
        },
        color: {
          value: "#000fff"
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
  />
);

export default ParticlesJs