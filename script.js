
const revealCarrevertImages = () => {
  document.querySelectorAll(".carrevert-img").forEach(img => {
    const showImage = () => img.classList.add("is-loaded");
    if (img.complete) {
      showImage();
    } else {
      img.addEventListener("load", showImage, { once: true });
    }
  });
};

const updateTopbarState = () => {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
};

const finishLoadingState = () => {
  setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, 500);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Barre et footer charges.");
  revealCarrevertImages();
  updateTopbarState();
});

window.addEventListener("load", finishLoadingState);
document.addEventListener("scroll", updateTopbarState);
