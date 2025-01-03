document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("landing-container");
    const lottiePlayer = document.querySelector("dotlottie-player");

    // Listen for the 'complete' event from the dotlottie animation
    lottiePlayer.addEventListener("complete", () => {
        // Hide the loading screen and show the main content
        loadingScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    });

    loadingScreen.addEventListener("transitionend", (event) => {
        // Check if the property transitioned is opacity
        if (event.propertyName === "opacity" && getComputedStyle(loadingScreen).opacity === "0") {
            // Perform any action here, e.g., hide the element
            loadingScreen.style.display = "none";
        }
    });
});


