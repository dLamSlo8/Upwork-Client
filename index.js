const handleNav = () => {
    $(".poppy-image").fadeIn("slow", function() {});
    $(".top-nav-hamburger").click(function() {
        console.log("clicked");
        $(".top-nav ul").slideToggle("slow", function() {});
    })
};

window.onload = (event) => {
    handleNav();
}