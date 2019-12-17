AOS.init();
window.addEventListener('load', AOS.refresh);

// lottie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/herbie.json'
})
var animationMobile = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/herbie-head.json'
})

// load header and footer
$(function () {
    $("#herbieHeader").load("../html/herbie_header.html");
});

// more options appear
$("#moreButton").click(function () {
    $(this).addClass("d-none")
});

// short answer appear
$("#shortAnswer").click(function () {
    $(".short-answer").addClass("d-block");

    $('html, body').animate({
        scrollTop: $(".short-answer").offset().top - 100
    }, 1500);
});

// range slider
var slider = document.getElementById("formControlRange");
var output = document.getElementById("showValue");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

// datepicker customization
$('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    language: 'fr',
    orientation: 'bottom',
    autoclose: true
});

