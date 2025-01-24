mapboxgl.accessToken = 'pk.eyJ1IjoiZHRodG1sIiwiYSI6ImNtNTRqd3VydjBoZGgybnMycnU2M2RpNXkifQ.idR1QCY9K30o1176TBoxuw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/dthtml/cm54f77tx00d301sbglkt0u21?optimize=true', // style URL
    center: [-73.624, 40.823], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
