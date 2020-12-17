import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe width="1" height="1" wmode="transparent" src="//www.youtube.com/embed/fLxc-eZh2II?autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
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
