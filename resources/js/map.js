// adding google maps api

function myMap() {
    // map options
    const options = {
        zoom:16,
        center:{lat:50.632979,lng:5.586948},
        mapId: '257331c2d7d50e2b'
    }

    // new map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // load the image
    const image = "resources/images/logo/gmap-logo.png"

    // add marker
    new google.maps.Marker({
        position: {lat:50.632979,lng:5.586948},
        map:map,
        icon: image     // add img as icon to map:map
    });
}
