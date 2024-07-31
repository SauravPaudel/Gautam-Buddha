// scripts.js
function initMap() {
  // The location you want to set
  var location = { lat: 26.6762, lng: 87.2718 }; // Update the latitude and longitude here

  // The map, centered at the location
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
  });

  // The marker, positioned at the location
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });

  // Add an info window with location details
  var infowindow = new google.maps.InfoWindow({
      content: '<div><strong>Sukuna Multiple Campus</strong><br>Khorsime, Morang<br>Rating: 4.2 (115 reviews)</div>'
  });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });
}

// Load the Google Maps script dynamically
document.addEventListener("DOMContentLoaded", function() {
  initMap();
});
