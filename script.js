// Create a map
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]), // Change coordinates as needed
        zoom: 2
    })
});

// Add a div for the map in your HTML
document.body.innerHTML += '<div id="map" style="width: 100%; height: 400px;"></div>';
