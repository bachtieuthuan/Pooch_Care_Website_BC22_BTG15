$(document).ready(function(){
    $('.slide').slick({
      autoplay: true
    });
    $('.testimonials__slide').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      dotsClass: "slick-dots testimonials__dots"
    });
});
