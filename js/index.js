// To top button on case study pages

$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 500) {
            $(".scrollToTop").fadeIn();
        } else {
            $(".scrollToTop").fadeOut();
        }
    });

    $(".scrollToTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
