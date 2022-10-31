function myMap() {
    // map options
    const options = {
        zoom:16,
        center:{lat:40.799353,lng:-73.953213}
    }

    // new map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // add marker
    const marker = new google.maps.Marker({
        position: {lat:42.4668,lng:-70.9495},
        map:map,
        icon:'[../images/logo/gmap-logo.png'
    });
}