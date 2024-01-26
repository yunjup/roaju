$(function() {
    $('.hamburger-button').click(function(ev) {
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
    });

    let currentIndex = 0;
    let slideCount = $(".slider").length;

    $(".slider").hide().first().show(); // 모든 이미지 숨기고 첫 번째 이미지 표시

    setInterval(function() { // 3초마다 실행
        let nextIndex = (currentIndex + 1) % 3; // 다음 이미지 설정

        $(".slider").eq(currentIndex).fadeOut(1200); // 현재 이미지 페이드 아웃
        $(".slider").eq(nextIndex).fadeIn(1200); // 다음 이미지 페이드 인

        currentIndex = nextIndex; // 다음 인덱스 값을 현재 인덱스에 저장
    }, 4000);
});