/* ================= INITIAL STATE ================= */
const mainContent = document.getElementById("mainContent");
if (mainContent) {
  mainContent.style.display = "none";
}

/* ================= CREATE STARS ================= */
const starContainer = document.getElementById("stars");

if (starContainer) {
  for (let i = 0; i < 180; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random();
    if (size < 0.3) star.classList.add("small");
    else if (size < 0.7) star.classList.add("medium");
    else star.classList.add("big");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 2 + Math.random() * 4 + "s";

    starContainer.appendChild(star);
  }
}

/* ================= GIFT OPEN LOGIC ================= */
const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");

if (giftBox && giftScreen && mainContent) {
  giftBox.addEventListener("click", () => {
    giftBox.classList.add("open");

    setTimeout(() => {
      giftScreen.style.opacity = "0";
    }, 500);

    setTimeout(() => {
      giftScreen.style.display = "none";
      mainContent.style.display = "block";
      mainContent.classList.remove("hidden");
    }, 1300);
  });
}

/* ================= MOVING NO BUTTON (DESKTOP + MOBILE) ================= */
const noBtn = document.getElementById("move-random");

if (noBtn) {
  const moveButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.position = "relative";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  };

  // Desktop
  noBtn.addEventListener("mouseenter", moveButton);

  // Mobile
  noBtn.addEventListener("touchstart", moveButton);
}


const music = document.getElementById("bg-music");

function startMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.03;
    music.volume = Math.min(vol, 0.6);
    if (vol >= 0.6) clearInterval(fade);
  }, 200);

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

// auto trigger on first interaction
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);


     







