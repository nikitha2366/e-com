// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
    // Get all the "Add to Cart" buttons
    var addToCartButtons = document.getElementsByClassName('btn cart');

    // Add click event listener to each "Add to Cart" button
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', function () {
            // Get the product details
            var product = this.parentNode;
            var productName = product.getElementsByTagName('p')[0].textContent;
            var productPrice = product.getElementsByTagName('p')[1].textContent;

            // Create a new element to display the product in the cart
            var cartItem = document.createElement('li');
            cartItem.textContent = productName + ' - ' + productPrice;

            // Append the cart item to the cart list
            var cartList = document.getElementById('cart-list');
            cartList.appendChild(cartItem);

            // Display a success message
            alert('Added to cart: ' + productName);
        });
    }
});
