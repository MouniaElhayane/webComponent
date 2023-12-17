// music-visualizer-component.js
class MusicVisualizerComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
    
body {
}

#file-input {
  position: fixed;
  z-index: 3;
}

#playButton{

}

#canvas {
  width: 2100px;
  height: 540px;
  border-radius: 40px;

}

audio {
  position: absolute;
}

#background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 100% 7px;
  animation: bg 1s infinite linear;
  z-index: 2;
  opacity: 0.3;
}

@keyframes bg {
  0%{ background-position: 0 0; }
  100%{ background-position: 8px 8px; }
}
.play-button, .pause-button, .replay-button, .mute-button, .add-5-seconds-button, .add-5-seconds-button, .subtract-5-seconds-button

  {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 5px;
}
.decrease-button, .increase-button
{
  display: inline-flex;
  align-items: center;
  padding: 5px 7px;
  font-size: 20px;
  font-family: 'Arial', sans-serif;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.play-button {
  background-color: #BDB76B;
}

.pause-button {
  background-color: #e74c3c;
}

.replay-button {
  background-color: #BDB76B;
}

.decrease-button {
  background-color: #BDB76B;
}

.increase-button {
  background-color: #BDB76B;
}
.add-5-seconds-button {
  background-color: #423f13;
}
.subtract-5-seconds-button {
  background-color: #423f13;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-right: 60px;
  margin-left: 60px;


}

.button-group2 {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-right: 60px;
  margin-left: 60px;


}
.balance{
  text-align: right;
  font-style: italic;
  font-size: 35px
}
#dixMille {
  transform: scale(2); 
}

#troisMilleCinqCent{
  transform: scale(2); 
}

#soixante{
  transform: scale(2); 
}

#centSoixanteDix{
  transform: scale(2); 
}
#troisCentsCinquante{
  transform: scale(2); 
}
#mille{
  transform: scale(2); 
}

    </style>

      <div class="box1">
        <br>

      <input type="file" id="file-input" controls loop crossorigin="anonymous" accept="audio/*,video/*,image/*" />
      <canvas id="canvas"></canvas>
      
      <span id="name"></span>

      <script src="music-visualizer-script.js"></script>


        <div class="audio-controls">
        
          <audio id="audio" controls loop crossorigin="anonymous" controls style="display: none;">
            <source type="audio/mpeg">
            Votre navigateur ne supporte pas l'élément audio.
          </audio>

          <div class="media-controls">
            <div class="media-progress" id="mediaProgress"></div>
            <div class="media-thumb" id="mediaThumb"></div>
          </div>

          <div class="button-group">
          <div>
          <button id="playButton" class="play-button" ><i class="fas fa-play"></i></button>
          <button id="pauseButton" class="pause-button"><i class="fas fa-pause"></i></button>
          <button id="stopButton" class="replay-button"><i class="fas fa-redo"></i></button>
          </div>
          <div class="incredecre">
          <button id="decreaseVolumeButton" class="decrease-button"><i class="fas fa-minus"></i></button>
          <input type="range" id="volumeControl" value="1" min="0" max="1" step="0.1">
          <button id="increaseVolumeButton" class="increase-button"><i class="fas fa-plus"></i></button>
          </div>
          <div>
          <button id="skipBackwardButton" class="add-5-seconds-button"><i class="fas fa-minus"></i>5 sec</button>
          <progress id="progressBar" class="progressbar" value="0" max="100"></progress>
          <button id="skipForwardButton" class="subtract-5-seconds-button"><i class="fas fa-plus"></i>5 sec</button>
          </div>

          <webaudio-switch src="./components/images/switches/switch1.png" 
          value="0" height="56" width="56" 
          tooltip="Switch-A Tooltip text test">
        </webaudio-switch>
        <webaudio-switch src="./components/images/switches/switch1.png" 
        value="0" height="56" width="56" 
        tooltip="Switch-A Tooltip text test">
      </webaudio-switch>

      <div class="balance">
          <label for="pannerSlider" class="balance">Balance</label>
          <input type="range" min="-1" max="1" step="0.1" value="0" id="pannerSlider" />
        </div>
          </div>
         
          

          <div class="button-group2">

          <webaudio-knob class="knob"
          src="./components/images/LittlePhatty.png"
          id="soixante" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="60 Hz">
          </webaudio-knob>


          <webaudio-knob
          src="./components/images/LittlePhatty.png" 
          id="centSoixanteDix" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="170 Hz">
          </webaudio-knob>

          <webaudio-knob
          src="./components/images/LittlePhatty.png" 
          id="troisCentsCinquante" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="350 Hz">
          </webaudio-knob>

          <webaudio-knob
          src="./components/images/LittlePhatty.png" 
          id="mille" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="1000 Hz">
          </webaudio-knob>

          <webaudio-knob
          src="./components/images/LittlePhatty.png" 
          id="troisMilleCinqCent" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="3500 Hz">
          </webaudio-knob>


          <webaudio-knob
          src="./components/images/LittlePhatty.png" 
          id="dixMille" value="0" step="1" min="-30" max="30"
          diameter="64"
          tooltip="10000 Hz">
          </webaudio-knob>
          </div>
          

          </div>

      </div>






      
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  
  changeRelativeURLsToAbsolute() {
    let elements = this.shadowRoot.querySelectorAll('img, webaudio-knob, webaudio-switch');
    

    elements.forEach((e) => {
      let elementPath = e.getAttribute('src');
      // if the image path isn't already absolute, make it absolute

    });

  };

  connectedCallback() {

    

    this.changeRelativeURLsToAbsolute();


    
    const fileInput = this.shadowRoot.getElementById("file-input");
    const canvas = this.shadowRoot.getElementById("canvas");
    const h3 = this.shadowRoot.getElementById('name');
    const audio = this.shadowRoot.getElementById("audio");

    let dixMille = this.shadowRoot.getElementById('dixMille');
    let troisMilleCinqCent = this.shadowRoot.getElementById('troisMilleCinqCent');
    let mille = this.shadowRoot.getElementById('mille');
    let troisCentsCinquante = this.shadowRoot.getElementById('troisCentsCinquante');
    let centSoixanteDix = this.shadowRoot.getElementById('centSoixanteDix');
    let soixante = this.shadowRoot.getElementById('soixante');
    

    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);

    fileInput.onchange = function() {
      const files = this.files;
      console.log('FILES[0]: ', files[0]);
      audio.src = URL.createObjectURL(files[0]);
      const name = files[0].name;
      h3.innerText = `${name}`;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      //const context = new AudioContext();
      //let src = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 4096;//16384;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      console.log('DATA-ARRAY: ', dataArray);

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      console.log('WIDTH: ', WIDTH, 'HEIGHT: ', HEIGHT);

      const barWidth = (WIDTH / bufferLength) * 13;
      console.log('BARWIDTH: ', barWidth);
      console.log('TOTAL WIDTH: ', (117*10)+(118*barWidth));

      let barHeight;
      let x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        let r, g, b;
        let bars = 118;

        for (let i = 0; i < bars; i++) {
          barHeight = (dataArray[i] * 2.5);

          if (dataArray[i] > 210) {
            r = 250;
            g = 0;
            b = 255;
          } else if (dataArray[i] > 200) {
            r = 250;
            g = 255;
            b = 0;
          } else if (dataArray[i] > 190) {
            r = 204;
            g = 255;
            b = 0;
          } else if (dataArray[i] > 180) {
            r = 0;
            g = 219;
            b = 131;
          } else {
            r = 0;
            g = 199;
            b = 255;
          }

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
          x += barWidth + 10;
        }
      }

      audio.play();
      renderFrame();


      dixMille.addEventListener('input', () => {
        console.log("dixMille");
        changeGain(dixMille.value, 5); // Appelez la fonction changeGain avec la valeur du curseur
      });
  
      troisMilleCinqCent.addEventListener('input', () => {
        console.log("troisMilleCinqCent");
        changeGain(troisMilleCinqCent.value, 4); // Appelez la fonction changeGain avec la valeur du curseur
      });
  
      mille.addEventListener('input', () => {
        console.log("mille");
        changeGain(mille.value, 3); // Appelez la fonction changeGain avec la valeur du curseur
      });
  
      troisCentsCinquante.addEventListener('input', () => {
        console.log("troisCentsCinquante");
        changeGain(troisCentsCinquante.value, 2); // Appelez la fonction changeGain avec la valeur du curseur
      });
  
      centSoixanteDix.addEventListener('input', () => {
        console.log("soixante");
        changeGain(centSoixanteDix.value, 1); // Appelez la fonction changeGain avec la valeur du curseur
      });
  
      soixante.addEventListener('input', () => {
        console.log("soixante");
        changeGain(soixante.value, 0); // Appelez la fonction changeGain avec la valeur du curseur
      });




     

    };
    let playerPanner, pannerNode;
    let pannerSlider;

    window.onload = () => {       
    
    // the audio element
   playerPanner = this.shadowRoot.getElementById("audio");
   playerPanner.onplay = (e) => {context.resume();}
  
   
      pannerSlider = this.shadowRoot.getElementById('pannerSlider');
      //console.log("toto1" + pannerSlider);
      buildAudioGraphPanner();
      //console.log("toto1.1" + pannerSlider);
     // input listener on the gain slider
     pannerSlider.oninput = (evt) => {
      //console.log("toto" + pannerSlider);
       pannerNode.pan.value = evt.target.value;
     }; 
   };
   
   function buildAudioGraphPanner() {
       // create source and gain node
       //let source = context.createMediaElementSource(playerPanner);

       pannerNode = context.createStereoPanner();
     
       // connect nodes together
       src.connect(pannerNode);
       pannerNode.connect(context.destination);
   
   }


    let playButton = this.shadowRoot.getElementById('playButton');
    let pauseButton = this.shadowRoot.getElementById('pauseButton');
    let stopButton = this.shadowRoot.getElementById('stopButton');
    let volumeControl = this.shadowRoot.getElementById('volumeControl');
    let muteButton = this.shadowRoot.getElementById('muteButton');
    let increaseVolumeButton = this.shadowRoot.getElementById('increaseVolumeButton');
    let decreaseVolumeButton = this.shadowRoot.getElementById('decreaseVolumeButton');
    let skipForwardButton = this.shadowRoot.getElementById('skipForwardButton');
    let skipBackwardButton = this.shadowRoot.getElementById('skipBackwardButton');
    let progressBar = this.shadowRoot.getElementById('progressBar');



    //let sourceNode = context.createMediaElementSource(audio);



    var filters = [];

    // Set filters
    [60, 170, 350, 1000, 3500, 10000].forEach(function(freq, i) {
      var eq = context.createBiquadFilter();
      eq.frequency.value = freq;
      eq.type = "peaking";
      eq.gain.value = 0;
      filters.push(eq);
    });

    src.connect(filters[0]);
    for(var i = 0; i < filters.length - 1; i++) {
        filters[i].connect(filters[i+1]);
      }

    // connect the last filter to the speakers
    filters[filters.length - 1].connect(context.destination);






    
    function changeGain(sliderVal,nbFilter) {
      var value = parseFloat(sliderVal);
      filters[nbFilter].gain.value = value;
      
      // update output labels
      //var output = document.querySelector("#gain"+nbFilter);
      //let output = this.shadowRoot.getElementById('gain5');
      //let output = this.shadowRoot.getElementById('gain5');
     // console.log("TOTO"+value);
      //var output = "gain"+nbFilter;

      //output.value = value + " dB";
     // console.log("TOTOnbFilter"+nbFilter);

      /**
      if (nbFilter >= 0 && nbFilter <= gains.length) {
        console.log("nbFilter"+nbFilter);
        // Update the value of the selected gain
        gains[nbFilter].value = value + " dB";
      } else {
        console.error("Invalid nbFilter value. It should be between 0 and " + (gains.length - 1));
      }
 */

      // Construct the ID of the element to access
      var elementId = "gain" + nbFilter;

      // Try to find the element in the shadowRoot

      var hostElement = document.querySelector('music-visualizer-component'); // Replace with your actual host element's selector
      var gainElement = hostElement.shadowRoot.getElementById(elementId);

      //var gainElement = this.shadowRoot.getElementById(elementId);

      if (gainElement) {
        // Update the value of the found element
     //   console.log("nbFilter"+value);
        gainElement.value = value + " dB";
      } else {
        console.error("Element with ID '" + elementId + "' not found.");
      }
    }









    playButton.addEventListener('click', () => {
      context.resume().then(() => {
        audio.play();
      });
    });

    pauseButton.addEventListener('click', () => {
      audio.pause();
    });

    stopButton.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    });

    volumeControl.addEventListener('input', () => {
      audio.volume = volumeControl.value;
    });

    increaseVolumeButton.addEventListener('click', () => {
      if (audio.volume < 1) {
        audio.volume += 0.1;
        volumeControl.value = audio.volume;
      }
    });

    decreaseVolumeButton.addEventListener('click', () => {
      if (audio.volume > 0) {
        audio.volume -= 0.1;
        volumeControl.value = audio.volume;
      }
    });

    skipForwardButton.addEventListener('click', () => {
      audio.currentTime += 5;
    });

    skipBackwardButton.addEventListener('click', () => {
      audio.currentTime -= 5;
    });

    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      if (!isNaN(duration)) {
        const progress = (currentTime / duration) * 100;
        progressBar.value = progress;
      }
    });
  }
}

customElements.define('music-visualizer-component', MusicVisualizerComponent);
