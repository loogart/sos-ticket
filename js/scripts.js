//rellax
var rellax = new Rellax('.rellax');
var rellax2 = new Rellax('.rellax-2');
//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.circle-badge', {
    duration: 2000
}, 200);
sr.reveal('.featured img', {
    duration: 1000
}, 150);

//freshchat
window.fcWidget.init({
    token: "3bf40794-29e0-4ec1-b829-0e2e8f24f014",
    host: "https://wchat.freshchat.com"
});

// Make sure fcWidget.init is included before setting these values

// To set unique user id in your system when it is available
window.fcWidget.setExternalId("john.doe1987");

// To set user name
window.fcWidget.user.setFirstName("John");

// To set user email
window.fcWidget.user.setEmail("john.doe@gmail.com");

// To set user properties
window.fcWidget.user.setProperties({
    plan: "Estate", // meta property 1
    status: "Active" // meta property 2
});
