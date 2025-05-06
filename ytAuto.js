let player;

// Called by YouTube API when ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#yt-video",
    start: "top 80%",
    onEnter: () => {
      player.playVideo(); // autoplay
    },
    onLeave: () => {
      player.pauseVideo(); // pause when leaving the viewport
    }
  });
}