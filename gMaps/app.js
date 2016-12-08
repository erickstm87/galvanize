function initMap() {
  console.log(document.getElementById('map'));
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.001479,
      lng: -105.262259
    },
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    heading: 45
  });
  console.log('printed');
}
