document.addEventListener("DOMContentLoaded", () => {
  // Player controls
  const controls = [
    "play-large", // The large play button in the center
    "restart", // Restart playback
    "rewind", // Rewind by the seek time (default 10 seconds)
    "play", // Play/pause playback
    "fast-forward", // Fast forward by the seek time (default 10 seconds)
    "progress", // The progress bar and scrubber for playback and buffering
    "current-time", // The current time of playback
    "duration", // The full duration of the media
    "mute", // Toggle mute
    "volume", // Volume control
    "captions", // Toggle captions
    "settings", // Settings menu
    "airplay", // Airplay (currently Safari only)
    "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
    "fullscreen", // Toggle fullscreen
  ];
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = Plyr.setup(".js-player", { controls });

  // Expose
  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on(".play-now", "click", () => {
    player.play();
  });

  // Pause
  on(".js-pause", "click", () => {
    player.pause();
  });

  // Stop
  on(".js-stop", "click", () => {
    player.stop();
  });

  // Rewind
  on(".js-rewind", "click", () => {
    player.rewind();
  });

  // Forward
  on(".js-forward", "click", () => {
    player.forward();
  });
});
