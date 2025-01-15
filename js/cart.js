let cart = [];

// Adaugă un produs în coș și salvează în Local Storage
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("shoppingCart", JSON.stringify(cart)); // Salvează coșul în Local Storage
  renderCart(); // Actualizează afișarea coșului

  // Scroll către secțiunea coșului de cumpărături
  const cartSection = document.querySelector("#cart");
  cartSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Încarcă produsele din Local Storage
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  } else {
    cart = [];
  }
  renderCart();
}

// Afișează produsele în coș
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartSection = document.querySelector(".cart-section");

  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartSection.style.display = "none"; // Ascunde secțiunea dacă coșul e gol
  } else {
    cartSection.style.display = "block"; // Afișează secțiunea dacă există produse
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");

      const itemText = document.createElement("span");
      itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      itemElement.appendChild(itemText);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeFromCart(index);
      itemElement.appendChild(removeButton);

      cartItems.appendChild(itemElement);
      total += item.price;
    });
  }

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Elimină un produs din coș
function removeFromCart(index) {
  cart.splice(index, 1); // Elimină produsul de la indexul specificat
  localStorage.setItem("shoppingCart", JSON.stringify(cart)); // Salvează din nou în Local Storage
  renderCart(); // Actualizează afișarea coșului
}

// Golește coșul
function clearCart() {
  cart = [];
  localStorage.removeItem("shoppingCart");
  renderCart();
}

// Încarcă coșul la inițializarea paginii
document.addEventListener("DOMContentLoaded", loadCartFromLocalStorage);
