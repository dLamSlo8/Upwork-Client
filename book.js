var page = $(".details");
var nextBtn =  $("button.next");
var prevBtn = $("button.previous");
var book = $(".card");

var place = 0;
console.log(page);

nextBtn.each(function(idx) {
    $(this).click(function() {
        page[idx].style.transform = `rotateY(-${120 + idx}deg)`;
    });
})

prevBtn.each(function(idx) {
    $(this).click(function() {
        if (idx !== prevBtn.length - 1) {
            console.log(idx);
            console.log("yeet");
            page[idx + 1].style.transform = "";
        }
    })
})

book.on("mouseleave", function(){
    page.each((idx) => {
        page[idx].style.transform = "";
    });

});


