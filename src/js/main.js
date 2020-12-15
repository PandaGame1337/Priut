$(function() {
    //slick slider init
    $('.js-topslider').slick({
        infinite: true,
        speed: 600,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});

$('.input__wrapper > lable').find('input').change(function() {
    var file = this.files;
    $('.input__wrapper > lable').text('Selected file: ' + file[0].name);
})