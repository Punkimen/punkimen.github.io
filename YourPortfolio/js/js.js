
if (window.innerWidth <= 750) {
    $('.slider').slick();
    $(".menu nav a").click(function () {
        $(".menu").css({
            "left": "-190px",
        })
    });
}
function menuShow() {
    document.querySelector(".menu").style.left = 0;
}
function menuHide() {
    document.querySelector(".menu").style.left = "-190px";
}

document.querySelector(".menu").onmouseover = menuShow;
document.querySelector(".menu").onmouseout = menuHide;


// scroll menu

$(".menu nav a").click(function () {
    let element = $(this).attr("href");

    let dist = $(element).offset().top;

    $("html, body").animate({
        "scrollTop": dist,
    }, 1000)

    return false;

})

$("section").click(function (event) {
    console.log(event);
})

$(".btn_up").click(function () {
    $("html, body").animate({
        "scrollTop": 0,
    }, 1000)
    return false;
})


setInterval(rotObj, 100);

let time = 0;

function rotObj() {
    $(".anime").css({
        transform: 'rotate(' + time + 'deg)',
    });
    time += 6;
}



