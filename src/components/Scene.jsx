import React from 'react';
import RightPanel from './RightPanel';
import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are

const backgroundGradient = {
  // background: 'linear-gradient(180deg, #C5B9DF 23.96%, #F1E1DF 50.52%)',
  background: 'linear-gradient(180deg, #C6D5E0 24%, #ECF1DF 50%)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
}

function Scene() {
  const [scene, setScene] = React.useState('mountain');

  return ( 
    <div id="wrapper">
      <div className="components">
        <RightPanel scene={scene} />
      </div>
      <div id='skycolor' style={backgroundGradient}>
        <img id='foreground' alt="Mountain scene foreground" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/foreground.png'} />

        <img id='midground' alt="Cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/midground.png'} />
        <img id='midground2' alt="Cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/midground.png'} />
        <img id='midground3' alt="Cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/midground.png'} />
        <img id='midground4' alt="Cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/midground.png'} />

        <img id='background' alt="Top cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/background.png'} />
        <img id='background2' alt="Top cloud layer" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/background.png'} />
      </div>
    </div>
  );
}

export default Scene;