//  import $ from 'jquery';
$('.reviews__slider').slick({
  asNavFor: '.reviews__slider-nav',
  // normal options...
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,

  // the magic
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
  ],
});

$('.reviews__slider-nav').slick({
  asNavFor: '.reviews__slider',
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});
