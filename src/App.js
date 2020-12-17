import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import music from './audio.mp3'
import mute from './mute.png';
import unmute from './unmute.png';

function App() {

  const [playing, setPlaying] = useState(false);

  let track;
  useEffect(() => {
    track = new Audio(music);    
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const playMusic = useCallback(() => {
    setPlaying(true)
    track.play();
  }, [track])

  const pauseMusic = useCallback(() => {
    setPlaying(false)
    track.pause();
    track.currentTime = 0;

  }, [track])

  return (
    <div className="App">
      <div className="img">
        <img 
          src={playing? unmute: mute} alt="my image" onClick={playing? pauseMusic: playMusic} width="20" height="20" 
          color='transparent'
        />
      </div>
      {/* <iframe width="1" height="1" wmode="transparent" src="//www.youtube.com/embed/fLxc-eZh2II?autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe> */}
      <section class="animation-box">
       <div class="in-text">Breathe In</div>
       <div class="out-text">Breathe Out</div>
      </section>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default App;
