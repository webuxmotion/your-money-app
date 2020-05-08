/* eslint-env browser */
import React from 'react';
import YouTube from '@u-wave/react-youtube';

const videos = [
  { id: 'Iu1QjEqebvg', name: 'POMPEYA - Wait (Just The Tips No Wiri Nairi Remake)' },
  { id: '9qbuYVleIKI', name: 'Feeder - Figure You Out (Official Video)' },
  { id: '55v4qfvsxBA', name: 'Generationals - Breaking Your Silence [OFFICIAL MUSIC VIDEO]' },
  { id: 'pdOJaCT5uTE', name: 'Sleigh Bells - "Where Did You Sleep Last Night" (Official Audio)' },
  { id: '5Z8oYH_bhnA', name: 'Starfucker - Rawnald Gregory Erickson the Second (Official Music Video)' },
  { id: 'rtL5oMyBHPs', name: 'MGMT - Little Dark Age (Official Video)' },
  { id: '1yhBj4E7Ly8', name: 'One Night Only - Plasticine' },
  { id: 'prepnTBtUp4', name: 'Mini Mansions - Works Every Time' },
  { id: 'SeXBiXcEBkY', name: 'RAC - Let Go ft. Kele, MNDR' },
  { id: 'OHn-sfXTYP0', name: 'POLIÇA "Steady" (Official Video)' },
  { id: '5MCQ8443Guw', name: 'SOHN - The Wheel (Live with the Metropole Orkest)' },
  { id: '146qbnDHjXk', name: 'Panama - Magic' },
];

const qualities = ['auto', '240', '380', '480', '720', '1080', '1440', '2160'];

const hashVideoRx = /^#!\/video\/(\d)$/;
const hash = typeof window.location !== 'undefined'
  ? window.location.hash : ''; // eslint-disable-line no-undef
const defaultVideo = hashVideoRx.test(hash)
  ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
  : 0;

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIndex: defaultVideo,
      suggestedQuality: 'auto',
      volume: 1,
      paused: false,
    };

    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerEnd = this.handlePlayerEnd.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
  }

  selectVideo(index) {
    this.setState({ videoIndex: index });
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked
    });
  }

  handlePlayerEnd() {
    if (videos.length - 1 > this.state.videoIndex) {
      this.setState({
        videoIndex: this.state.videoIndex + 1
      });
    }
  }

  handlePlayerPause() {
    this.setState({ 
      paused: true 
    });
  }

  handlePlayerPlay() {
    this.setState({ paused: false });
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }

  handleQuality(event) {
    this.setState({
      suggestedQuality: qualities[event.target.selectedIndex],
    });
  }

  render() {
    const {
      videoIndex, volume, paused, suggestedQuality,
    } = this.state;

    const video = videos[videoIndex];
    return (
      <div className="row">
        <div className="col s4">
          <h5>
            Video
          </h5>
          <div className="collection">
            {videos.map((choice, index) => (
              <a
                key={choice.id}
                href={`#!/video/${index}`}
                className={`collection-item ${video === choice ? 'active' : ''}`}
                onClick={() => this.selectVideo(index)}
              >
                {choice.name}
              </a>
            ))}
          </div>
          <h5>
            Paused
          </h5>
          <p>
            <label htmlFor="paused">
              <input
                type="checkbox"
                id="paused"
                checked={paused}
                onChange={this.handlePause}
              />
              <span>Paused</span>
            </label>
          </p>
          <h5>
            Volume
          </h5>
          <input
            type="range"
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={this.handleVolume}
          />
          <h5>
            Quality
          </h5>
          <select className="browser-default" onChange={this.handleQuality}>
            {qualities.map((quality) => (
              <option key={quality} value={quality}>
                {quality}
              </option>
            ))}
          </select>
        </div>
        <div className="col s8 center-align">
          <YouTube
            video={video.id}
            width={640}
            height={480}
            autoplay
            controls={true}
            suggestedQuality={suggestedQuality}
            volume={volume}
            paused={paused}
            onPause={this.handlePlayerPause}
            onPlaying={this.handlePlayerPlay}
            onEnd={this.handlePlayerEnd}
          />
        </div>
      </div>
    );
  }
}

export default Video