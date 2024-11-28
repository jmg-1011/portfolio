$(function(){
  let mediaswiper = new Swiper("article.media .slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      scale :0.8,
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: "article.media .slide .swiper-pagination",
    },
    breakpoints: {
      1024: {
        slidesPerView:'auto',
        spaceBetween: 50,
      },
    },
  });

  let mdshopswiper = new Swiper("article.mdshop .swiper", {
    slidesPerView: 2,
      spaceBetween: 80,
  
    pagination: {
      el: "article.mdshop .swiper .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      440: {
       
        spaceBetween: 50,
      },
    },
    
  });


  let rankswiper = new Swiper(".rankslide", {
    direction: "vertical",
    slidesPerView: 9,
    spaceBetween: 0,
    speed: 10,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
});