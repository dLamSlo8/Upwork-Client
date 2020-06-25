const handleNav = () => {
    console.log("loaded!");
    let selectedPage = 0;

    const pagesNav = $("ul#nav > li");
    const pages = $("div[id^='page']");

    pagesNav.each(function(idx) {
        let that = this;
        $(this).click(function() {
            pages[selectedPage].classList.remove("page-selected");
            pages[idx].classList.add("page-selected");

            pagesNav[selectedPage].classList.remove("book-nav-selected");
            $(that).addClass("book-nav-selected");

            selectedPage = idx;

            $("#nav-page").text(`Page ${selectedPage + 1}`);
        });
    })

    $("#nav-back").click(function() {
        if (selectedPage !== 0) {
            pages[selectedPage].classList.remove("page-selected");
            pages[selectedPage - 1].classList.add("page-selected");

            pagesNav[selectedPage].classList.remove("book-nav-selected");
            pagesNav[selectedPage - 1].classList.add("book-nav-selected");
            
            selectedPage -= 1;

            $("#nav-page").text(`Page ${selectedPage + 1}`);
        }
    });

    $("#nav-forward").click(function() {
        if (selectedPage !== pages.length - 1) {
            pages[selectedPage].classList.remove("page-selected");
            pages[selectedPage + 1].classList.add("page-selected");

            pagesNav[selectedPage].classList.remove("book-nav-selected");
            pagesNav[selectedPage + 1].classList.add("book-nav-selected");
            
            selectedPage += 1;
            
            $("#nav-page").text(`Page ${selectedPage + 1}`);
        }
    });


};

window.onload = (event) => {
    handleNav();
}