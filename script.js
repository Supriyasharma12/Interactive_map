let map = L.map('map',{
    center: [20.5937, 78.9629],   // Initial center (India)
    zoom: 5,                      // Initial zoom level
    minZoom: 3,                   // 🔒 Minimum zoom level
    maxZoom: 19, 
    scrollWheelZoom: true,     // ✅ Enable smooth scroll zoom
    inertia: true,             // ✅ Smooth drag motion
    zoomAnimation: true,       // ✅ Enable zoom animation
    zoomControl: true,
    bounceAtZoomLimits: true,
    // zoomSnap: 0.25
}).setView([20.5937, 78.9629], 3);  // initilize a default(center point) location .setView([lat, lng], zoom)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    minZoom: 1,
    attribution: '© OpenStreetMap'
}).addTo(map);

window.addEventListener('load', function () {
    map.invalidateSize();
});

map.setMaxBounds([
    [-90, -180],
    [90, 180]
]);
map.on('drag', function () {
    map.panInsideBounds(map.getBounds(), { animate: false });
});


function searchlocation(){
    const query = document.getElementById("searchbar").value.trim();
    
    if(query === ""){
        alert("Please enter a place to search location.");
        return;
    }

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
        if(data.length === 0){
            alert ("location not found.");
            location.reload();
            return;
        }

        const lat =data[0].lat;
        const lon = data[0].lon;

        map.setView([lat,lon],13, );

        L.marker([lat,lon]).addTo(map)
            .bindPopup(`<b>${query}</b><br>Lat: ${lat}, Lon: ${lon}`).openPopup();
    })
    .catch(error => {
        console.error("Error fetching location:",error);
        alert("something went wrong. try again later.");
    });
}

// Trigger search on Enter key press
document.getElementById("searchbar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchlocation(); // Call your search function
    }
});



