// Dropdown
document.querySelectorAll('.dropdown > a').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    let dropdown = this.parentElement;
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('show');
    });
    dropdown.classList.toggle('show');
  });
});

window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
});

// Hover play audio
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hoverAudio");
  const items = document.querySelectorAll(".single-item, .achievement");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const src = item.getAttribute("data-audio");
      if (src) {
        audio.src = src;
        audio.play().catch(err => console.warn("Autoplay dicegah:", err));
      }
    });

    item.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});

// Popup video saat diklik
const popup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".popup .close");

document.querySelectorAll(".single-item, .achievement").forEach(item => {
  item.addEventListener("click", () => {
    const videoSrc = item.getAttribute("data-video");
    if (videoSrc) {
      popup.style.display = "flex";
      popupVideo.src = videoSrc;
      popupVideo.play();
    }
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  popupVideo.pause();
  popupVideo.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    popupVideo.pause();
    popupVideo.src = "";
  }
});

// Animasi saat load
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up, .pop-out").forEach(el => {
    setTimeout(() => el.classList.add("show"), 200);
  });
});
