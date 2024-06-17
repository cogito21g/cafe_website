document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 여기에서 서버에 데이터를 전송하거나 다른 예약 로직을 추가할 수 있습니다.
    document.getElementById('confirmationMessage').style.display = 'block';
  });
  