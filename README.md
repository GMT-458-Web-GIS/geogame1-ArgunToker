# GeoGame: Interactive Map-Based Game

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
