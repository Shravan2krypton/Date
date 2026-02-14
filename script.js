function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.transition = "all 0.35s ease";

  const padding = 20;
  const maxX = window.innerWidth - elm.offsetWidth - padding;
  const maxY = window.innerHeight - elm.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  elm.style.left = `${randomX}px`;
  elm.style.top = `${randomY}px`;
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", () => {
  moveRandomEl(moveRandom);
});

moveRandom.addEventListener("click", (e) => {
  e.preventDefault();
  moveRandomEl(moveRandom);
});
