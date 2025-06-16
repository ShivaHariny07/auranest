// Category page functionality
const categoryProducts = {
  moisturizer: [
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
    }
  ],
  sunscreen: [
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
    }
  ],
  primer: [
    {
      id: 19,
      name: "Smoothing Face Primer",
      category: "primer",
      price: 899,
      image: "pictures/primer-1.webp",
      description: "Creates smooth base for makeup application"
    },
    {
      id: 20,
      name: "Pore Minimizing Primer",
      category: "primer",
      price: 999,
      image: "pictures/primer-2.webp",
      description: "Minimizes pores and extends makeup wear"
    },
    {
      id: 21,
      name: "Hydrating Primer",
      category: "primer",
      price: 799,
      image: "pictures/primer-3.webp",
      description: "Hydrating primer for dry skin types"
    }
  ],
  foundation: [
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
    }
  ],
  serum: [
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
    }
  ],
  concealer: [
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
  ],
  lipstick: [
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
    }
  ],
  lipbalm: [
    {
      id: 22,
      name: "Moisturizing Lip Balm",
      category: "lipbalm",
      price: 299,
      image: "pictures/lipbalm-1.jpg",
      description: "Nourishing lip balm for soft, smooth lips"
    },
    {
      id: 23,
      name: "Tinted Lip Balm",
      category: "lipbalm",
      price: 399,
      image: "pictures/lipbalm-2.jpg",
      description: "Moisturizing balm with a hint of color"
    }
  ],
  liptint: [
    {
      id: 24,
      name: "Berry Lip Tint",
      category: "liptint",
      price: 499,
      image: "pictures/liptint-1.jpg",
      description: "Long-lasting berry tint for natural color"
    },
    {
      id: 25,
      name: "Coral Lip Tint",
      category: "liptint",
      price: 499,
      image: "pictures/liptint-2.jpg",
      description: "Fresh coral tint for everyday wear"
    }
  ]
};

const categoryInfo = {
  moisturizer: {
    title: "Moisturizers",
    description: "Hydrate and nourish your skin with our premium moisturizer collection"
  },
  sunscreen: {
    title: "Sunscreens",
    description: "Protect your skin from harmful UV rays with our broad-spectrum sunscreens"
  },
  primer: {
    title: "Primers",
    description: "Create the perfect base for your makeup with our smoothing primers"
  },
  foundation: {
    title: "Foundations",
    description: "Achieve flawless coverage with our range of foundations for every skin type"
  },
  serum: {
    title: "Serums",
    description: "Target specific skin concerns with our concentrated treatment serums"
  },
  concealer: {
    title: "Concealers",
    description: "Cover imperfections and brighten your complexion with our concealers"
  },
  lipstick: {
    title: "Lipsticks",
    description: "Express yourself with our vibrant collection of lipsticks"
  },
  lipbalm: {
    title: "Lip Balms",
    description: "Keep your lips soft and moisturized with our nourishing lip balms"
  },
  liptint: {
    title: "Lip Tints",
    description: "Add a natural flush of color with our long-lasting lip tints"
  }
};

// DOM elements
const productsGrid = document.getElementById('products-grid');
const emptyState = document.getElementById('empty-state');
const categoryTitle = document.getElementById('category-title');
const categoryDescription = document.getElementById('category-description');
const breadcrumbCategory = document.getElementById('breadcrumb-category');
const pageTitle = document.getElementById('page-title');

// Initialize the category page
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  if (category && categoryProducts[category]) {
    loadCategoryProducts(category);
  } else {
    showEmptyState();
  }
  
  setupMobileMenu();
});

// Load products for specific category
function loadCategoryProducts(category) {
  const products = categoryProducts[category];
  const info = categoryInfo[category];
  
  if (products && products.length > 0) {
    // Update page title and breadcrumb
    pageTitle.textContent = `${info.title} - AuraNest.shop`;
    categoryTitle.textContent = info.title;
    categoryDescription.textContent = info.description;
    breadcrumbCategory.textContent = info.title;
    
    // Display products
    displayProducts(products);
    emptyState.classList.add('hidden');
  } else {
    showEmptyState();
  }
}

// Display products
function displayProducts(products) {
  productsGrid.innerHTML = '';
  
  products.forEach(product => {
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

// Show empty state
function showEmptyState() {
  productsGrid.innerHTML = '';
  emptyState.classList.remove('hidden');
  categoryTitle.textContent = 'Category Not Found';
  categoryDescription.textContent = 'The requested category could not be found.';
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

// Add to cart function
function addToCart(productId) {
  // Find product in all categories
  let product = null;
  for (const category in categoryProducts) {
    product = categoryProducts[category].find(p => p.id === productId);
    if (product) break;
  }
  
  if (product && typeof window.addProductToCart === 'function') {
    window.addProductToCart(product);
  }
}