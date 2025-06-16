// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

// Initialize cart
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
  setupCartModal();
});

// Add product to cart
function addProductToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartDisplay();
  showAddToCartNotification(product.name);
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartDisplay();
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartDisplay();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart display
function updateCartDisplay() {
  updateCartCount();
  updateCartModal();
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
  
  // Update mobile menu cart count
  const mobileCartCount = document.querySelector('#mobile-menu a[href="#"]');
  if (mobileCartCount && mobileCartCount.textContent.includes('Cart')) {
    mobileCartCount.textContent = `Cart (${totalItems})`;
  }
}

// Update cart modal
function updateCartModal() {
  if (!cartItems || !cartTotal) return;
  
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
    cartTotal.textContent = '0';
    return;
  }
  
  let total = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'flex items-center justify-between border-b pb-2';
    cartItem.innerHTML = `
      <div class="flex items-center space-x-3">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
        <div>
          <h4 class="font-semibold text-sm">${item.name}</h4>
          <p class="text-gray-500 text-xs">₹${item.price} each</p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="text-gray-500 hover:text-gray-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
        </button>
        <span class="font-semibold">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="text-gray-500 hover:text-gray-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    `;
    
    cartItems.appendChild(cartItem);
  });
  
  cartTotal.textContent = total.toFixed(0);
}

// Setup cart modal
function setupCartModal() {
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartModal.classList.remove('hidden');
    });
  }
  
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      cartModal.classList.add('hidden');
    });
  }
  
  if (cartModal) {
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.add('hidden');
      }
    });
  }
}

// Show add to cart notification
function showAddToCartNotification(productName) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${productName} added to cart!</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Export functions for global use
window.addProductToCart = addProductToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;