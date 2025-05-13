function addToCart(itemName, itemPrice) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
  
    fetch('cart.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `item=${itemName}&price=${itemPrice}`
    });
  }
  