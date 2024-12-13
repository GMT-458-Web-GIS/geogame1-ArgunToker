# GeoGame:   Food Hunter

https://gmt-458-web-gis.github.io/geogame1-ArgunToker/

## **Project Overview**
GeoGame is an interactive browser-based game where users guess locations on a map based on hints provided. The game dynamically updates scores based on user interactions and offers feedback on their answers. It includes multiple difficulty levels to provide scalable challenges. The project demonstrates the integration of HTML, CSS, and JavaScript with advanced libraries like Leaflet.js.

---

## **Aim**
The aim of this project is to enhance understanding of frontend technologies, including HTML, CSS, and JavaScript, by creating an engaging interactive map-based game.

---

## **Objectives**
### **Design of the Geo-Game**
1. **Requirements**:
   - A fully interactive map where users can select locations.
   - Hint-based gameplay with progressive difficulty levels (Easy, Medium, Hard).
   - Scoring system to reward user accuracy.
   - Feedback mechanism to show correct answers after incorrect attempts.

2. **Frontend Layout**:
   - **Welcome Screen**:
     ```
     --------------------------------------
     |        GeoGame: Interactive Map    |
     |         [Kuralları Gör]            |
     |         [Oyuna Başla]              |
     --------------------------------------
     ```
   - **Game Screen**:
     ```
     --------------------------------------
     |                Map                 |
     |   [Hint: _________]                |
     |   [Score: XX]                      |
     --------------------------------------
     ```
   - **Result Screen**:
     ```
     --------------------------------------
     |         Final Score: XX            |
     |         Time Taken: XX             |
     |         Correct Answers: XX        |
     --------------------------------------
     ```

3. **JavaScript Library**:
   - The project utilizes **Leaflet.js** for its geospatial functionalities.
   - Leaflet.js is a lightweight, open-source library designed for interactive maps.

### **Implementation**
1. **Game Functionality**:
   - Users guess map locations based on hints.
   - Scores are dynamically updated based on accuracy.
   - Real-time feedback for each guess.
   - Correct answers displayed after incorrect guesses.

2. **Interactivity**:
   - Click events on the map are handled dynamically.
   - Difficulty levels adjust the hints and locations.

3. **Deployment**:
   - The project is deployed online using GitHub Pages:
     - **Live URL**: [Insert GitHub Pages URL Here]

### **Regular Use of Git**
- Frequent commits with clear messages, such as:
  - `"Integrated scoring system"`
  - `"Implemented difficulty levels"`
  - `"Fixed map feedback logic"`
- Branching and merging for feature management.

---

## **Technical Details**
### **Event Handlers**
Three key event handlers implemented in the project:
1. **Map Click Event**:
   - Detects user clicks on the map and calculates distance to the correct location.
   ```javascript
   map.on("click", onMapClick);
   function onMapClick(e) {
       const clickedLatLng = e.latlng;
       // Logic for checking correctness and updating scores
   }


2.Mode Selection Buttons:

Captures user-selected difficulty levels and initializes the game.

document.querySelectorAll(".mode-button").forEach(button => {
    button.addEventListener("click", (e) => {
        currentMode = e.target.dataset.mode;
        startGame();
    });
});

3.Restart Button:

Resets the game and returns the user to the mode selection screen.
restartButton.addEventListener("click", showModeSelection);

4.Closures
Closures are used to encapsulate variables and streamline repetitive tasks:

Current Question State:

The loadQuestion function uses closures to capture and reuse currentIndex and currentMode.
function loadQuestion() {
    const question = hints[currentMode][currentIndex];
    hintElement.textContent = question.hint;
}
Benefits:

Simplifies the logic for updating the question, score, and map state.
Reduces redundancy by maintaining game state locally.
Learning from AI 
What I Learned from AI:

Debugging and optimizing map interactivity and scoring logic.
Simplifying complex JavaScript functionalities using modular code.
Designing an engaging gameplay loop with hints, feedback, and animations.
AI Interaction Log:

URL: https://chatgpt.com/
DOM Interaction 
The project interacts with the DOM to dynamically update game elements:

Hint Updates:
hintElement.textContent = question.hint;
Feedback Messages:

feedbackMessage.textContent = `Doğru cevap: ${question.city}`;
Result Screen Updates:

finalScoreElement.textContent = `Toplam Puan: ${score}`;
timeReport.textContent = `Geçen Süre: ${totalTime} saniye`;
Interactivity/Complexity/Fun 
Dynamic Scoring:
Scores vary based on user accuracy (10 points for the first attempt, 5 for the second).
Progressive Hints:
Provides more specific hints if the user fails the first attempt.
Interactive Map:
Users can explore and click locations directly on the map.
Responsive Design:
The layout adapts to desktop and mobile devices for a seamless experience.
How to Run
Clone the repository:
bash
git clone [Insert Repository URL]
Open index.html in your browser.
Alternatively, access the live version: [Insert GitHub Pages URL]
Future Enhancements
Add more geographic regions and global challenges.
Introduce animations for correct and incorrect guesses.
Implement a leaderboard system for competitive gameplay.

