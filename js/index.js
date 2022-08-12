$(document).ready(() => {
    if ($(this).width() <= 768) {
        $('#mainNavbar').hide();
    }
    $(window).resize(() => {
        if ($(this).width() <= 768) {
            $('#mainNavbar').hide();
        } else {
            $('#mainNavbar').show();
        }
    });
    $('#hamburger').click(() => {
        $('#mainNavbar').toggle(500);
    });
});

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
