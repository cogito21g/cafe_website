// DOMContentLoaded 이벤트가 발생하면 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
  console.log('홈페이지 전용 스크립트가 실행되었습니다.');

  // 슬라이드 쇼 초기화
  showSlides(slideIndex);

  // 헤더의 메뉴 항목에 마우스 오버 시 색상 변경
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#A0522D';
    });
    item.addEventListener('mouseout', () => {
      if (!item.classList.contains('active')) {
        item.style.backgroundColor = '';
      }
    });
  });
});

let slideIndex = 1;
let slides;
let dots;

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
  slides = document.querySelectorAll(".slide");
  dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  const slider = document.querySelector(".slides");
  slider.style.transform = `translateX(${-((slideIndex - 1) * 100)}%)`;

  dots[slideIndex - 1].className += " active-dot";
}
