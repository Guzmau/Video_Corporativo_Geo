window.addEventListener('load', function() {
  const videoLink = document.getElementById('videoLink');
  const videoPlayer = document.getElementById('videoPlayer');

  videoPlayer.src = videoLink.href;
  videoPlayer.load();
  videoPlayer.play();
});
