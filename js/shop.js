// Product data
const products = [
  // Moisturizers
  {
    id: 1,
    name: "Hydrating Daily Moisturizer",
    category: "moisturizer",
    price: 899,
    image: "pictures/moisturizer-1.jpg",
    description: "Lightweight daily moisturizer for all skin types"
  },
  {
    id: 2,
    name: "Night Repair Moisturizer",
    category: "moisturizer",
    price: 1299,
    image: "pictures/moisturizer-1.jpg",
    description: "Rich night cream for deep hydration and repair"
  },
  
  // Sunscreens
  {
    id: 3,
    name: "SPF 50 Sunscreen Lotion",
    category: "sunscreen",
    price: 699,
    image: "pictures/sunscreen-2.webp",
    description: "Broad spectrum protection for daily use"
  },
  {
    id: 4,
    name: "Mineral Sunscreen SPF 30",
    category: "sunscreen",
    price: 799,
    image: "pictures/sunscreen-1.webp",
    description: "Gentle mineral sunscreen for sensitive skin"
  },
  {
    id: 5,
    name: "Tinted Sunscreen SPF 40",
    category: "sunscreen",
    price: 999,
    image: "pictures/sunscreen-3.jpg",
    description: "Sunscreen with light tint for even coverage"
  },
  
  // Serums
  {
    id: 6,
    name: "Vitamin C Brightening Serum",
    category: "serum",
    price: 1599,
    image: "pictures/serum-1.jpg",
    description: "Powerful antioxidant serum for radiant skin"
  },
  {
    id: 7,
    name: "Hyaluronic Acid Serum",
    category: "serum",
    price: 1299,
    image: "pictures/serum-2.jpg",
    description: "Intense hydration for plump, youthful skin"
  },
  {
    id: 8,
    name: "Retinol Anti-Aging Serum",
    category: "serum",
    price: 1899,
    image: "pictures/serum-3.jpg",
    description: "Advanced anti-aging treatment serum"
  },
  {
    id: 9,
    name: "Niacinamide Pore Refining Serum",
    category: "serum",
    price: 1199,
    image: "pictures/serum-4.jpg",
    description: "Minimizes pores and controls oil production"
  },
  {
    id: 10,
    name: "Peptide Firming Serum",
    category: "serum",
    price: 2199,
    image: "pictures/serum-5.jpg",
    description: "Firming serum with advanced peptide complex"
  },
  
  // Foundations
  {
    id: 11,
    name: "Full Coverage Foundation",
    category: "foundation",
    price: 1499,
    image: "pictures/foundation-1.webp",
    description: "Long-lasting full coverage foundation"
  },
  {
    id: 12,
    name: "Natural Finish Foundation",
    category: "foundation",
    price: 1299,
    image: "pictures/foundation-2.png",
    description: "Lightweight foundation for natural look"
  },
  {
    id: 13,
    name: "Matte Finish Foundation",
    category: "foundation",
    price: 1399,
    image: "pictures/foundation-3.png",
    description: "Oil-free matte foundation for oily skin"
  },
  
  // Lipsticks
  {
    id: 14,
    name: "Classic Red Lipstick",
    category: "lipstick",
    price: 599,
    image: "pictures/lipstick-1.jpg",
    description: "Timeless red shade with creamy finish"
  },
  {
    id: 15,
    name: "Nude Pink Lipstick",
    category: "lipstick",
    price: 599,
    image: "pictures/lipstick-2.jpg",
    description: "Perfect nude pink for everyday wear"
  },
  
  // Concealers
  {
    id: 16,
    name: "High Coverage Concealer",
    category: "concealer",
    price: 799,
    image: "pictures/concealer-1.webp",
    description: "Full coverage concealer for blemishes"
  },
  {
    id: 17,
    name: "Under Eye Concealer",
    category: "concealer",
    price: 699,
    image: "pictures/concealer-2.webp",
    description: "Brightening concealer for under eyes"
  },
  {
    id: 18,
    name: "Color Correcting Concealer",
    category: "concealer",
    price: 899,
    image: "pictures/concealer-3.webp",
    description: "Multi-tone concealer palette"
  }
];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the shop
document.addEventListener('DOMContentLoaded', function() {
  displayProducts(products);
  setupFilterButtons();
  setupMobileMenu();
});

// Display products
function displayProducts(productsToShow) {
  productsGrid.innerHTML = '';
  
  productsToShow.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden';
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-3">${product.description}</p>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-[#B22222]">₹${product.price}</span>
        <button 
          class="add-to-cart-btn text-white px-4 py-2 rounded font-semibold"
          onclick="addToCart(${product.id})"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// Setup filter buttons
function setupFilterButtons() {
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      
      if (category === 'all') {
        displayProducts(products);
      } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
      }
    });
  });
}

// Setup mobile menu
function setupMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Add to cart function (will be handled by cart.js)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product && typeof window.addProductToCart === 'function') {
    window.addProductToCart(product);
  }
}

// Export products for use in other files
window.shopProducts = products;