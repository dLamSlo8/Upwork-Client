const handleNav = () => {
    $(".poppy-image").fadeIn(1200, function() {});
    $(".top-nav-hamburger").click(function() {
        $(".top-nav ul").slideToggle("slow", function() {});
    })
};

window.onload = (event) => {
    handleNav();
}