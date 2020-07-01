$(".top-nav-hamburger").click(function() {
    console.log("yeet");
    $('.side-nav').addClass('open');
})

$(".side-nav-close").click(function() {
    $('.side-nav').removeClass('open');
})
