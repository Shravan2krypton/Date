// Function to move the "No" button randomly
function moveRandomEl(elm) {
    elm.style.position = "absolute";
    
    // Ensure the button stays inside the viewport
    const maxX = window.innerWidth - elm.offsetWidth - 10;
    const maxY = window.innerHeight - elm.offsetHeight - 10;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    elm.style.left = `${randomX}px`;
    elm.style.top = `${randomY}px`;
  }
  
  // Select the "No" button
  const moveRandom = document.querySelector("#move-random");
  
  // Add hover event listener
  moveRandom.addEventListener("mouseenter", function () {
    moveRandomEl(moveRandom);
  });
  
