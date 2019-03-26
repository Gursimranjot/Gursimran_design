// var swiper = new Swiper('.swiper-container', {
//   loop: false,
//   slidesPerView: 'auto',
//   freeMode: 'true',
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
//   mousewheel: false,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


if ($('.swiper-container').length > 0) { //some-slider-wrap-in
  let swiperInstances = [];
  $(".swiper-container").each(function(index, element){ //some-slider-wrap-in
      const $this = $(this);
      $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
      
      $this.parents('.contentslide').find(".navigation-buttons").attr('id' , "pagination-" + index);
      $this.parents('.some-more--team').find(".navigation-buttons").attr('id' , "pagination-" + index);
      
      $("#pagination-" + index).find(".swiper-button-prev").attr('id' , "prev-" + index); //prev must be unique (ex: some-slider-prev)
      $("#pagination-" + index).find(".swiper-button-next").attr('id' , "next-" + index); //next must be unique (ex: some-slider-next)
      swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)
          // your settings ...
          navigation: {
              prevEl: "#prev-" + index,  //prev must be unique (ex: some-slider-prev)
              nextEl: "#next-" + index, //next must be unique (ex: some-slider-next)
          },
          loop: false,
          slidesPerView: 'auto',
          freeMode: 'true'
      });
  });
}


var swiper = new Swiper('.swiper-container--team', {
  loop: false,
  slidesPerView: 'auto',
  freeMode: 'true',
  slidesPerColumn: 2,
  // slidesPerView: 5,
  slidesPerView: 'auto',
  slidesPerColumnFill: 'row',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 'auto'
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 'auto'
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 'auto',

    }
  }
});

var swiper = new Swiper('.swiper-container-full', {
  loop: true,
  slidesPerView: 'auto',
  // freeMode:'false',
  mousewheel: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


});