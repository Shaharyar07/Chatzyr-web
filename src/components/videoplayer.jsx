// VideoPlayer.js
import React, { Component } from 'react';
import './VideoPlayer.css'; // Import a CSS file for styling

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true, // Autostart the video
    };
  }

  togglePlay = () => {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  };

  render() {
    const { isPlaying } = this.state;
    return (
      <div className="video-player-container">
        <video
          src="https://raw.githubusercontent.com/chatverse90/chatverse-images/main/chatzry - Trim.mp4"
          autoPlay={isPlaying}
          loop // Enable video loop
          muted // Mute the video (important for autoplay on some devices)
        //   onClick={this.togglePlay}
        />
      </div>
    );
  }
}

export default VideoPlayer;


