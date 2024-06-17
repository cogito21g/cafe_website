// DOMContentLoaded 이벤트가 발생하면 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
    console.log('공통 스크립트가 로드되었습니다.');
  
    // 공통으로 사용할 함수나 이벤트 리스너를 여기에 추가할 수 있습니다.
  
    // 예: 네비게이션 메뉴에서 현재 페이지를 표시하는 기능
    highlightCurrentPage();
  });
  
  // 현재 페이지의 링크에 'active' 클래스를 추가하는 함수
  function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }
  