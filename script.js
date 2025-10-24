document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".loading-bar");
  const text = document.querySelector(".loading-text");
  const readyText = document.querySelector(".loading-ready");
  const loadingScreen = document.getElementById("loading-screen");
  const body = document.body;

  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 2;
    if (progress > 100) progress = 100;

    bar.style.width = `${progress}%`;
    text.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);

      setTimeout(() => {
        text.style.display = "none";
        readyText.style.display = "block";

        // Tambahkan fade-out
        setTimeout(() => {
          loadingScreen.style.opacity = 0;
          setTimeout(() => {
            loadingScreen.style.display = "none";
            body.style.opacity = 1; // body baru muncul setelah loading screen hilang
          }, 800); // delay sama dengan CSS transition .fade-out
        }, 1000); // tampil "Ready to Race" 1 detik
      }, 500);
    }
  }, 100);
});






// ============================
// GALLERY SECTION - SEE MORE
// ============================
const seeMoreBtn = document.getElementById("see-more");
if (seeMoreBtn) {
  seeMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".extra").forEach(img => {
      img.style.display = "block";
    });
    seeMoreBtn.style.display = "none";
  });
}
