# Interactive Map with Leaflet.js

This is a simple and elegant interactive map web application built using **Leaflet.js**, **HTML**, **CSS**, and **JavaScript**.  
Users can search for any place in the world, and the map will zoom in to show the location with a marker and popup.

---

## Demo

[ Click here to watch the demo video](/assets/Project-recording.mp4) 

---

## Screenshot

![App Screenshot](/assets/Screenshot1%20(2).png)

![App Screenshot](/assets/Screenshot1%20(1).png)

---

## Features

- Search any location using the OpenStreetMap Nominatim API
- Interactive, smooth-zoom map powered by Leaflet
- Mouse scroll zooming with center focus
- Pressing `Enter` or clicking the button triggers search
- Responsive layout for all screen sizes
- Clears previous markers and view before searching a new location
- Refreshes the page on invalid input or search error
- Default view centered on India (adjustable zoom)

---

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Leaflet.js**
- **OpenStreetMap Nominatim API**

---

## Project Structure

```bash
 Interactive_map
│
├── index.html             # Main HTML file
├── style.css              # CSS styling
├── script.js              # JavaScript logic
├── assets/
│   ├── screenshot.png     
│   └── demo.mp4           
└── README.md    

```

## Future Improvements

- Add user's current location detection using Geolocation API
-  Display multiple search results with markers
- Add dark/light map themes
- Add route plotting or direction feature
- Store recent searches in localStorage
- Make the map draggable outside search (mobile friendly)

---

## Acknowledgements

- [Leaflet.js](https://leafletjs.com/) – Open-source interactive maps
- [OpenStreetMap](https://www.openstreetmap.org/) – Free geographic data and mapping
- [Nominatim](https://nominatim.openstreetmap.org/) – Geocoding/searching service for OSM
- UI inspiration and guidance from online communities and resources


