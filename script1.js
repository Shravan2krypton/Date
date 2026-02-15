function goNext() {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        // replace with your next page
        alert("Welcome to the next beautiful moment 💫");
        document.body.style.opacity = "1";
    }, 1000);
}
