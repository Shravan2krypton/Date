function goNext() {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        // replace with your next page
        alert("Welcome to the next beautiful moment 💫");
        document.body.style.opacity = "1";
    }, 1000);
}


/* 🌸 Falling petals */
const petalContainer = document.querySelector(".petals");

for (let i = 0; i < 20; i++) {
  const petal = document.createElement("span");
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 6 + "s";
  petal.style.animationDelay = Math.random() * 5 + "s";
  petalContainer.appendChild(petal);
}

/* 🌠 Shooting stars */
const starContainer = document.querySelector(".shooting-stars");

for (let i = 0; i < 5; i++) {
  const star = document.createElement("span");
  star.style.top = Math.random() * 40 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDelay = Math.random() * 4 + "s";
  starContainer.appendChild(star);
}
