document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".video-section");
  const videoSection = section.querySelector("video");

  videoSection.pause();

  const scroll = () => {
    const distance = window.scrollY - section.offsetTop;
    const total = section.clientHeight - window.innerHeight;

    let percentage = distance / total;
    percentage = Math.max(0, percentage);
    percentage = Math.min(percentage, 1);

    if (!isNaN(videoSection.duration) && videoSection.duration > 0) {
      videoSection.currentTime = videoSection.duration * percentage;
    }
  };

  scroll();

  window.addEventListener("scroll", scroll);
});
