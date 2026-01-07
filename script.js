function showVideo(number) {
  const video = document.getElementById(`video${number}`);
  video.hidden = false;
  video.scrollIntoView({ behavior: 'smooth' });
}
