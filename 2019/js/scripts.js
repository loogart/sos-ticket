AOS.init();
// load header and footer
$(function () {
    $("#enHeader").load("../html/en_header.html");
    $("#enFooter").load("../html/en_footer.html");
    $("#frHeader").load("./html/fr_header.html");
    $("#frFooter").load("./html/fr_footer.html");
});

// wizard
var vitesse1 = $('#vitesse1');
var vitesse2 = $('#vitesse2');
var vitesse3 = $('#vitesse3');
var vitesseNon = $('#vitesseNon');
var vitesseOui = $('#vitesseOui');
var nextButton = $('#next1');

var autre1 = $('#autre1');
var autre2 = $('#autre2');
var autre3 = $('#autre3');
var autreNon = $('#autreNon');
var autreOui = $('#autreOui');
var nextButton2 = $('#next2');

$("input[type=radio]").change(function () {
    //modal 1
    if ((vitesse1.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-1-3-points.html");
    } else if ((vitesse2.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-4-5-points.html");
    } else if ((vitesse3.is(':checked')) && (vitesseNon.is(':checked'))) {
        nextButton.attr("href", "./forfait-6-points-et-plus.html");
    } else if ((vitesse1.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
    } else if ((vitesse2.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
    } else if ((vitesse3.is(':checked')) && (vitesseOui.is(':checked'))) {
        nextButton.attr("href", "./forfait-gev.html");
        //modal 2
    } else if ((autre1.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-1-3-points.html");
    } else if ((autre2.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-4-5-points.html");
    } else if ((autre3.is(':checked')) && (autreNon.is(':checked'))) {
        nextButton2.attr("href", "./forfait-6-points-et-plus.html");
    } else if ((autre1.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    } else if ((autre2.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    } else if ((autre3.is(':checked')) && (autreOui.is(':checked'))) {
        nextButton2.attr("href", "./forfait-facultes-affaiblies.html");
    }
});
var pathname = window.location.pathname;
