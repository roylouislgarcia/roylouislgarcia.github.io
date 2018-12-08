$(document).ready(function () {
    $('.u-email').on('click', function (event) {
        event.preventDefault();
        $(this).off("click");
        var email = $(this).attr("data-email").replace(/AT/, '@').replace(/DOT/, '.');
        $(this).removeClass("u-email");
        $(this).html(email);
        $(this).attr("href", "mailto:" + email);
    });
});