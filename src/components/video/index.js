/* eslint-env browser */
import React from 'react';
import YouTube from '@u-wave/react-youtube';

const videos = [
  { id: 'iOFqJUh1Ak8', name: 'IDER - Wu Baby (Official Video)' },
  { id: 'fAMP0MBfGhY', name: 'Friendly Fires - Heaven Let Me In (Official Video)' },
  { id: 'CQx5VZJNeWQ', name: 'Neil Frances - Music Sounds Better With You' },
  { id: 'Vg7lrnlSN_Y', name: 'Klangstof - Hostage (Official Music Video)' },
  { id: 'nVMzKOelUq8', name: 'Zola Blood - Two Hearts - Live' },
  { id: 'dEzYD4ZielY', name: 'The Japanese House - Maybe Youre the Reason' },
  { id: '0wrsZog8qXg', name: 'The Postal Service - Such Great Heights [OFFICIAL VIDEO]' },
  { id: 'kl2DaNA8cLM', name: 'Hayden James & NAATIONS - Nowhere To Go (Official Music Video)' },
  { id: 'qosXPqjDjTU', name: 'School of Language - My Heart Is Upside Down' },
  { id: 'I31IUG_PJcM', name: 'The Joy Formidable - The Better Me (Official Music Video)' },
  { id: 'dS5n6Byx318', name: 'The Golden Filter - End Of Times' },
  { id: '7iIs3TEs7fs', name: 'The Magic Numbers - Ride Against The Wind (Official Video)' },
  { id: 'K1xJSV6Mrco', name: 'The Fratellis - Starcrossed Losers (Official Video)' },
  { id: 'W_aN81SBI3A', name: 'The National - Hairpin Turns' },
  { id: 'dVHihkolINE', name: 'When Will I Belong - Geographer (featured in New Amsterdam Season 2 Episode 17 "Liftoff" )' },
  { id: 'XvG12DVUCNg', name: 'COIN - Into My Arms (Official Video)' },
  { id: 'kimPUWSwxIs', name: 'Kasabian - Youre In Love With a Psycho (Official Music Video)' },
  { id: 'sJRPPUr1yic', name: 'Arcade Fire - Wake Up (Official Audio)' },
  { id: 'YgYH1H0cXGE', name: 'Our House (MATT and KIM Remix) Crosby, Stills, and Nash' },
  { id: 'dwGO-wwKSjg', name: 'Kakkmaddafakka - Restless (OFFICIAL MUSIC VIDEO)' },
  { id: 'zh2kM01-7k0', name: 'New Navy - Zimbabwe' },
  { id: 'o-o0ycSsqYA', name: 'Madeon - All My Friends (Official Video)' },
  { id: 'g51V9tzTjm0', name: 'Saint Etienne - Dive' },
  { id: 'oNEkBWq5C1g', name: 'Rae Morris - DO IT [Official Video]' },
  { id: 'L5ogYY8Se5Y', name: 'Josef Salvat - in the afternoon (Official Video)' },
  { id: 'rSYwtllbweY', name: 'The Chemical Brothers - Got To Keep On (Official Video)' },
  { id: '9TY_9BImp3Y', name: 'SOFI TUKKER - Swing (Official Video) [Ultra Music]' },
  { id: 'wL-6CY1MRSQ', name: 'Shiny Toy Guns - Ghost Town' },
  { id: 'Bffsu32-QZk', name: 'Just Jack - The Day I Died Remix' },
  { id: '4UCbkG3lXAI', name: 'The Cinematics - Break' },
  { id: 'etn4P80K5WU', name: 'Wolf Alice - Beautifully Unconventional' },
  { id: 'FIMrwnqce60', name: 'Monarchy - Just give me your love (Visualizer)' },
  { id: 'jgrgCaSo8e4', name: 'Bibio • ‘Light Up The Sky’ (Official Video)' },
  { id: 'gOOgUuNPS9I', name: 'The Coral - Bill McCai' },
  { id: 'jryzEU7WAlg', name: 'Phantogram - You Don’t Get Me High Anymore (Official Music Video)' },
  { id: 'IU5-XJ-X99c&list=PLl3-0tZn-Oc0iYgFdDq9tPM0nEUISTX_-', name: 'The 2 Bears - Work - Official Video' },
  { id: 'hTGJfRPLe08', name: 'Jamie xx - Gosh' },
  { id: 'pgwpWAFaQXE', name: 'The Virgins - Impressions of You (Official Video)' },
  { id: '4j24nd_4Xi0', name: 'Junior Senior - Can I Get Get Get (Official Video)' },
  { id: 'I6gP4IijTCM', name: 'Holy Fuck - Luxe (ft. Alexis Taylor)' },
  { id: 'ZWCB3hpJDXM', name: 'Bastille - Good Grief (Official Music Video)' },
  { id: 'ospxlZZM2Hw', name: 'The Music - Take The Long Road And Walk It' },
  { id: 'VwG7f_oTLJY', name: 'Fickle Friends - Brooklyn' },
  { id: '-6tHw4yIDok', name: 'Katy B - Katy On a Mission (Official Music Video)' },
  { id: 'VrCa_PTu0t0', name: 'Underworld & Iggy Pop - Get Your Shirt' },
  { id: '_2DkJjBiCWY', name: 'Capital Cities - Vowels (Official Music Video)' },
  { id: 'GfK88LsB0fg', name: 'Robyn - Ever Again' },
  { id: 'rDJb6mw0suU', name: 'CHROMATICS "TEACHER" (Official Video)' },
  { id: 'rbEc7iPOjjU', name: 'Steve Mason - Walking Away From Love (Official Video)' },
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