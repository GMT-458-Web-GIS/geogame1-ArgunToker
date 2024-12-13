Mode Selection Button Clicks:

Captures user-selected difficulty levels.
Initializes the game with the corresponding data.
javascript
Copy code
document.querySelectorAll(".mode-button").forEach(button => {
    button.addEventListener("click", (e) => {
        currentMode = e.target.dataset.mode;
        startGame();
    });
});
