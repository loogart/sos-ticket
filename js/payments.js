//stripe
(function () {
    var handler = StripeCheckout.configure({
        key: 'pk_test_opIudPBjzMbfPcKq9V5X9P3d',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: function (token) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
        }
    });

    document.getElementById('acheterForfait1').addEventListener('click', function (e) {
        // Open Checkout with further options:
        handler.open({
            name: 'SOS Ticket',
            description: 'Forfait 1 point',
            currency: 'cad',
            amount: 14900
        });
        e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function () {
        handler.close();
    });

})();
