# GeoGame: Interactive Map-Based Game

## **Project Overview**
GeoGame is an interactive browser-based game where users guess locations on a map based on hints provided. The game dynamically updates scores based on user interactions and offers feedback on their answers. It includes multiple difficulty levels to provide a scalable challenge.

---

## **Aim**
The aim of this project is to enhance understanding of **HTML**, **CSS**, and **JavaScript**, focusing on frontend development and geospatial technologies. The GeoGame integrates **Leaflet.js** to create a map-based gaming experience.

---

## **Features**
### **1. Game Design**
- **Screens**:
  - Welcome Screen
  - Rules Screen
  - Mode Selection Screen
  - Game Screen
  - Result Screen
- **Difficulty Levels**:
  - Easy
  - Medium
  - Hard
- **Scoring**:
  - First attempt: 10 points
  - Second attempt: 5 points
- **Feedback Mechanism**:
  - Shows whether the user guessed correctly.
  - Displays the correct city for incorrect guesses.
- **Responsive Design**:
  - Optimized for different devices and screen sizes.

### **2. Advanced JavaScript Library**
The project utilizes **Leaflet.js**:
- Interactive map rendering.
- Clickable map features for user guesses.
- Geolocation and distance calculation for verifying answers.

---

## **Implementation**
The GeoGame is fully interactive and playable. The repository includes a live version hosted on GitHub Pages:
- **Live URL**: [Insert GitHub Pages URL Here]
- **Repository Link**: [Insert Repository URL Here]

---

## **Event Handlers (15%)**
Three key event handlers implemented in the project:
1. **Map Click Event**:
   - Detects user clicks on the map.
   - Checks the proximity of the clicked location to the correct city.
   - Updates scores and provides feedback accordingly.
   ```javascript
   map.on("click", onMapClick);
   function onMapClick(e) {
       const clickedLatLng = e.latlng;
       // Logic for checking correctness and updating scores
   }
