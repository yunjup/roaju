$(function() {
    $('.hamburger-button').click(function(ev) {
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
    });

     // 슬라이드
     let currentIndex = 0;
     $(".sliderWrap").append($(".slider").first().clone(true));
 
     setInterval(function(){ 
         currentIndex++;
         $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);
 
         if(currentIndex == 3){
             setTimeout(function(){  
                 $(".sliderWrap").animate({marginLeft: 0}, 0);
                 currentIndex = 0;
             }, 700);
         }
     }, 3000);
});