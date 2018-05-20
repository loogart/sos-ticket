//rellax
(function () {
    var rellax = new Rellax('.rellax');
    var rellax2 = new Rellax('.rellax-2');
})();

//scroll reveal
(function () {
    window.sr = ScrollReveal();
    sr.reveal('.circle-badge', {
        duration: 2000
    }, 200);
    sr.reveal('.featured img', {
        duration: 1000
    }, 150);
})();
