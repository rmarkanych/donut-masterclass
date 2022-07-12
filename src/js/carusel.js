//  import $ from 'jquery';
$(".container__slider").slick({
 
  // normal options...
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst:true,

 
  // the magic
  responsive: [{
 
      breakpoint: 1280,
      settings: {
      slidesToShow: 3,
      infinite: true,
        
      }
 
    }, {
 
      breakpoint: 768,
      settings: {
      slidesToShow: 3,
      infinite: true,
        
      }
 
      },{
 
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      infinite: true,
      
      }
 
    },{
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
});

$('.reviews_slider').on(
    'beforeChange', (e, slick, currSlide, nextSlide) => {
        if (currSlide === nextSlide) { return };


    })