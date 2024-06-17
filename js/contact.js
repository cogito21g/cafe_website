function initMap() {
    var cafeLocation = {lat: 37.5665, lng: 126.9780}; // 예시 좌표 (서울)
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: cafeLocation
    });
    var marker = new google.maps.Marker({
      position: cafeLocation,
      map: map
    });
  }
  
  document.addEventListener('DOMContentLoaded', initMap);
  