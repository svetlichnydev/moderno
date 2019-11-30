$(function() {
    
    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });

    $(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true,
        halfStar: true
    });

    var mixer = mixitup('.products__inner-box');

});