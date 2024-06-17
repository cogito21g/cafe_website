// DOMContentLoaded 이벤트가 발생하면 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
    console.log('홈페이지 전용 스크립트가 실행되었습니다.');
    // 슬라이드 쇼 초기화
    showSlides(slideIndex);
  });
  
  let slideIndex = 1;
  
  // 다음/이전 슬라이드로 이동
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // 현재 슬라이드를 표시
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  // 현재 슬라이드를 표시하는 함수
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
  }
  