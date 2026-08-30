// --- GLOBAL STATE ---
let cart = JSON.parse(localStorage.getItem('mono_cart')) || [];
let currentTheme = localStorage.getItem('mono-theme') || 'dark';

// Product Catalog Data Reference
const PRODUCTS_DATA = {
    'macbook-air': {
        id: 'macbook-air',
        name: 'MacBook Air 13"',
        category: 'macos',
        price: 1099,
        image: 'https://www.apple.com/v/macbook-air/z/images/overview/design/color/design_side_skyblue__dtyt9gw4nfiq_large.jpg',
        cpu: 'Apple M3 Chip',
        ram: '16GB',
        storage: '512GB',
        tag: 'Ultraportable'
    },
    'macbook-pro': {
        id: 'macbook-pro',
        name: 'MacBook Pro 16"',
        category: 'macos',
        price: 1999,
        image: 'https://www.apple.com/v/macbook-air/z/images/overview/apple-intelligence/apple_intelligence__bqi8tl754cfm_large.jpg',
        cpu: 'Apple M3 Pro Chip',
        ram: '16GB',
        storage: '512GB',
        tag: 'Developer Flagship'
    },
    'macbook-neo': {
        id: 'macbook-neo',
        name: 'MacBook Neo 15"',
        category: 'macos',
        price: 2899,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Apple M4 Ultra Concept',
        ram: '32GB',
        storage: '1TB',
        tag: 'Dual-Screen Concept'
    },
    'windows-lite': {
        id: 'windows-lite',
        name: 'MONO Windows Lite',
        category: 'windows',
        price: 899,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Intel Core Ultra 5',
        ram: '16GB',
        storage: '512GB',
        tag: 'Everyday Work'
    },
    'windows-pro': {
        id: 'windows-pro',
        name: 'MONO Windows Pro',
        category: 'windows',
        price: 1499,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Intel Core Ultra 7',
        ram: '16GB',
        storage: '512GB',
        tag: 'Business Premium'
    },
    'windows-creator': {
        id: 'windows-creator',
        name: 'MONO Windows Creator',
        category: 'windows',
        price: 2199,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'AMD Ryzen 9',
        ram: '32GB',
        storage: '1TB',
        tag: 'RTX 4070 Workstation'
    },
    'mono-buds': {
        id: 'mono-buds',
        name: 'MONO Buds Pro',
        category: 'accessories',
        price: 199,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg', // Fallback re-use
        cpu: 'Active Noise Cancelling',
        ram: 'HIFI Audio',
        storage: 'USB-C Charging',
        tag: 'Spatial Audio'
    },
    'mono-dock': {
        id: 'mono-dock',
        name: 'MONO Metal Dock',
        category: 'accessories',
        price: 299,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg', // Fallback re-use
        cpu: '12-in-1 Ports',
        ram: 'Dual 4K Display',
        storage: '100W PD Pass',
        tag: 'CNC Aluminum'
    },
    'mono-sleeve': {
        id: 'mono-sleeve',
        name: 'MONO Leather Sleeve',
        category: 'accessories',
        price: 99,
        image: 'assets/mbp14-m4-2024-1093056707.png', // Fallback re-use
        cpu: 'Full-Grain Leather',
        ram: 'Microfiber lining',
        storage: 'Magnetic Lock',
        tag: 'Premium Protection'
    },
    'macbook-air15': {
        id: 'macbook-air15',
        name: 'MacBook Air 15"',
        category: 'macos',
        price: 1299,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Apple M3 Chip',
        ram: '16GB',
        storage: '512GB',
        tag: 'Large & Light'
    },
    'macbook-studio': {
        id: 'macbook-studio',
        name: 'MacBook Studio 17"',
        category: 'macos',
        price: 3499,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Apple M3 Max Chip',
        ram: '32GB',
        storage: '1TB',
        tag: 'Desktop Replacement'
    },
    'windows-thin': {
        id: 'windows-thin',
        name: 'MONO Windows Thin',
        category: 'windows',
        price: 1199,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Intel Core Ultra 7',
        ram: '16GB',
        storage: '512GB',
        tag: 'Premium Portable'
    },
    'windows-extreme': {
        id: 'windows-extreme',
        name: 'MONO Windows Extreme',
        category: 'windows',
        price: 3999,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Intel Core i9 14900KS',
        ram: '64GB',
        storage: '2TB',
        tag: 'Desktop Power'
    },
    'mono-keyboard': {
        id: 'mono-keyboard',
        name: 'MONO Mechanical Keyboard',
        category: 'accessories',
        price: 249,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'CNC Aluminum Case',
        ram: 'Linear Custom Switches',
        storage: 'Hot-swappable Keycaps',
        tag: 'Premium Input'
    },
    'mono-mouse': {
        id: 'mono-mouse',
        name: 'MONO Precision Mouse',
        category: 'accessories',
        price: 129,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: '8000 DPI Sensor',
        ram: 'Aluminum Scroll Wheel',
        storage: 'Magnetic Charging',
        tag: 'Ergonomic Premium'
    },
    'mono-stand': {
        id: 'mono-stand',
        name: 'MONO Aluminum Stand',
        category: 'accessories',
        price: 149,
        image: 'https://www.apple.com/v/macbook-air/specs/b/images/specs/13-inch/mba_13_display__cnk2rprvaas2_large.jpg',
        cpu: 'Solid carved block',
        ram: 'Silicone anti-slip pads',
        storage: 'Integrated cord guide',
        tag: 'Desk Aesthetics'
    }
};

// Specs Reference Pricing
const CONFIG_PRICING = {
    ram: {
        '16GB': 0,
        '32GB': 200,
        '64GB': 400,
        '128GB': 800
    },
    storage: {
        '512GB': 0,
        '1TB': 150,
        '2TB': 300,
        '4TB': 600
    }
};

// --- DOM ELEMENTS REFERENCE ---
let headerCartCount, desktopMenu, mobileNavPanel, menuIcon, themeToggleBtn;
let cartOverlay, cartDrawer, cartItemsWrapper, cartEmptyMessage, cartSubtotalDisplay;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    cacheGlobalElements();
    initTheme();
    initGlobalListeners();
    updateGlobalCartUI();
    initScrollAnimations();
    
    // Page-specific initializers
    if (document.getElementById('catalog-products-container')) {
        initCatalogPage();
    }
    if (document.getElementById('configurator-page-container')) {
        initConfiguratorPage();
    }
    if (document.getElementById('cart-page-container')) {
        initCartPage();
    }
});

// Cache header/cart overlay DOM elements which are shared across all pages
function cacheGlobalElements() {
    headerCartCount = document.getElementById('global-cart-count');
    mobileNavPanel = document.getElementById('mobile-nav-panel');
    menuIcon = document.getElementById('menu-icon');
    themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    cartOverlay = document.getElementById('shopping-cart-overlay');
    cartDrawer = document.getElementById('shopping-cart-drawer');
    cartItemsWrapper = document.getElementById('cart-items-wrapper');
    cartEmptyMessage = document.getElementById('cart-empty-message');
    cartSubtotalDisplay = document.getElementById('cart-subtotal-display');
}

// --- SHARED FUNCTIONS ---
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('mono-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    const moon = themeToggleBtn.querySelector('.theme-icon-moon');
    const sun = themeToggleBtn.querySelector('.theme-icon-sun');
    if (theme === 'light') {
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = 'block';
    } else {
        if (moon) moon.style.display = 'block';
        if (sun) sun.style.display = 'none';
    }
}

function toggleMobileMenu() {
    if (!mobileNavPanel) return;
    mobileNavPanel.classList.toggle('active');
    if (mobileNavPanel.classList.contains('active')) {
        menuIcon.className = 'fa-solid fa-xmark';
        document.body.style.overflow = 'hidden';
    } else {
        menuIcon.className = 'fa-solid fa-bars';
        document.body.style.overflow = '';
    }
}

// --- GLOBAL CART DRAWER OPS ---
function openCartDrawer() {
    if (!cartOverlay) return;
    renderCartDrawer();
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    if (!cartOverlay) return;
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCartGlobal(item) {
    // Unique identifier based on customizations
    const configId = `${item.id}-${item.color}-${item.ram}-${item.storage}`;
    const existingIndex = cart.findIndex(i => i.uid === configId);
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            uid: configId,
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1,
            color: item.color || 'black',
            ram: item.ram || '16GB',
            storage: item.storage || '512GB',
            specs: item.specs || 'Default setup',
            image: item.image
        });
    }
    
    localStorage.setItem('mono_cart', JSON.stringify(cart));
    updateGlobalCartUI();
    openCartDrawer();
    
    // If we are on the dedicated cart page, render it too
    if (document.getElementById('cart-page-container')) {
        renderCartPage();
    }
}

function updateQtyGlobal(uid, delta) {
    const idx = cart.findIndex(item => item.uid === uid);
    if (idx === -1) return;
    
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
        cart.splice(idx, 1);
    }
    
    localStorage.setItem('mono_cart', JSON.stringify(cart));
    updateGlobalCartUI();
    renderCartDrawer();
    
    // Sync cart page
    if (document.getElementById('cart-page-container')) {
        renderCartPage();
    }
}

function removeItemGlobal(uid) {
    cart = cart.filter(item => item.uid !== uid);
    localStorage.setItem('mono_cart', JSON.stringify(cart));
    updateGlobalCartUI();
    renderCartDrawer();
    
    // Sync cart page
    if (document.getElementById('cart-page-container')) {
        renderCartPage();
    }
}

function updateGlobalCartUI() {
    if (!headerCartCount) return;
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    headerCartCount.textContent = totalCount;
    headerCartCount.style.display = totalCount > 0 ? 'flex' : 'none';
}

function renderCartDrawer() {
    if (!cartItemsWrapper) return;
    
    // Filter and clean old cart items
    cartItemsWrapper.querySelectorAll('.cart-item').forEach(el => el.remove());
    
    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'flex';
        cartSubtotalDisplay.textContent = '$0';
        return;
    }
    
    cartEmptyMessage.style.display = 'none';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        
        const html = `
            <div class="cart-item" data-uid="${item.uid}">
                <div class="cart-item-img-box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-specs">${item.specs} <br>Finish: ${item.color.toUpperCase()}</div>
                    </div>
                    <div class="cart-item-footer">
                        <div class="cart-item-quantity">
                            <button class="qty-btn drawer-qty-minus"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn drawer-qty-plus"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <span class="cart-item-price">$${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                    <button class="cart-item-remove drawer-item-remove">Remove</button>
                </div>
            </div>
        `;
        cartItemsWrapper.insertAdjacentHTML('beforeend', html);
    });
    
    cartSubtotalDisplay.textContent = `$${subtotal.toLocaleString()}`;
    attachDrawerItemListeners();
}

function attachDrawerItemListeners() {
    cartItemsWrapper.querySelectorAll('.cart-item').forEach(card => {
        const uid = card.getAttribute('data-uid');
        card.querySelector('.drawer-qty-minus').addEventListener('click', () => updateQtyGlobal(uid, -1));
        card.querySelector('.drawer-qty-plus').addEventListener('click', () => updateQtyGlobal(uid, 1));
        card.querySelector('.drawer-item-remove').addEventListener('click', () => removeItemGlobal(uid));
    });
}

function initGlobalListeners() {
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    
    const trigger = document.getElementById('cart-trigger-btn');
    if (trigger) trigger.addEventListener('click', openCartDrawer);
    
    const closeBtn = document.getElementById('cart-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) closeCartDrawer();
        });
    }
    
    const mobBtn = document.getElementById('mobile-menu-btn');
    if (mobBtn) mobBtn.addEventListener('click', toggleMobileMenu);
    
    const drawerCheckout = document.getElementById('cart-checkout-btn');
    if (drawerCheckout) {
        drawerCheckout.addEventListener('click', () => {
            closeCartDrawer();
            window.location.href = 'cart.html';
        });
    }
}


// --- 1. SHOP/CATALOG PAGE LOGIC ---
let activeFilter = 'all';
let searchKeyword = '';
let currentSort = 'relevance';

function initCatalogPage() {
    const filterButtons = document.querySelectorAll('.filter-item-btn');
    const searchInput = document.getElementById('catalog-search');
    const sortSelect = document.getElementById('catalog-sort');
    
    // Add Click Listeners for Category Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            filterAndRenderProducts();
        });
    });
    
    // Search Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchKeyword = e.target.value.toLowerCase().trim();
            filterAndRenderProducts();
        });
    }
    
    // Sort Listener
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterAndRenderProducts();
        });
    }
    
    // First display render
    filterAndRenderProducts();
}

function filterAndRenderProducts() {
    const listContainer = document.getElementById('product-list-container');
    const resultsCountEl = document.getElementById('catalog-results-count');
    if (!listContainer) return;
    
    // Convert object data to array
    let products = Object.values(PRODUCTS_DATA);
    
    // 1. Category Filter
    if (activeFilter !== 'all') {
        products = products.filter(p => p.category === activeFilter);
    }
    
    // 2. Search Keyword Filter
    if (searchKeyword !== '') {
        products = products.filter(p => 
            p.name.toLowerCase().includes(searchKeyword) || 
            p.cpu.toLowerCase().includes(searchKeyword) ||
            p.tag.toLowerCase().includes(searchKeyword)
        );
    }
    
    // 3. Sorting
    if (currentSort === 'price-asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        products.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'alpha') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Render Results Count
    if (resultsCountEl) {
        resultsCountEl.textContent = `Showing ${products.length} Products`;
    }
    
    // Render HTML Cards
    listContainer.innerHTML = '';
    
    if (products.length === 0) {
        listContainer.innerHTML = `<div class="cart-empty" style="grid-column: 1/-1; padding: 4rem 0;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>No products match your criteria.</p>
        </div>`;
        return;
    }
    
    products.forEach(p => {
        const specSummary = p.category === 'accessories' ? 
            `<li>${p.cpu}</li><li>${p.ram}</li><li>${p.storage}</li>` :
            `<li>${p.cpu}</li><li>${p.ram} RAM</li><li>${p.storage} SSD</li>`;
            
        const configBtnHTML = p.category !== 'accessories' ? 
            `<a href="configure.html?model=${p.id}" class="product-action-btn" aria-label="Configure ${p.name}">
                <i class="fa-solid fa-sliders"></i>
             </a>` : '';
             
        const cardHTML = `
            <div class="product-card fade-up-init in-view">
                <span class="product-tag">${p.tag}</span>
                <div class="product-image-container">
                    <img src="${p.image}" alt="${p.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${p.name}</h3>
                    <ul class="product-specs">
                        ${specSummary}
                    </ul>
                    <div class="product-footer">
                        <span class="product-price">$${p.price.toLocaleString()}</span>
                        <div class="product-actions">
                            ${configBtnHTML}
                            <button class="product-action-btn shop-quick-add" data-id="${p.id}" aria-label="Add ${p.name} to Cart">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    // Bind Catalog Add Listeners
    listContainer.querySelectorAll('.shop-quick-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            const item = PRODUCTS_DATA[id];
            
            addToCartGlobal({
                id: item.id,
                name: item.name,
                price: item.price,
                color: item.category === 'accessories' ? 'silver' : 'black',
                ram: item.ram,
                storage: item.storage,
                specs: `${item.cpu}, ${item.ram} RAM, ${item.storage} SSD`,
                image: item.image
            });
        });
    });
}


// --- 2. CONFIGURATOR PAGE LOGIC ---
let configSelectedModel = 'macbook-pro';
let configSelectedColor = 'black';
let configSelectedRAM = '16GB';
let configSelectedStorage = '512GB';

function initConfiguratorPage() {
    // Read Query Params to auto select model
    const params = new URLSearchParams(window.location.search);
    const queryModel = params.get('model');
    if (queryModel && PRODUCTS_DATA[queryModel] && PRODUCTS_DATA[queryModel].category !== 'accessories') {
        configSelectedModel = queryModel;
    }
    
    // Pre-initialize config values from catalog base data
    const baseModel = PRODUCTS_DATA[configSelectedModel];
    configSelectedRAM = baseModel.ram;
    configSelectedStorage = baseModel.storage;
    
    const modelDropdown = document.getElementById('config-model-select');
    const colorOptions = document.getElementById('config-color-options');
    const ramOptions = document.getElementById('config-ram-options');
    const storageOptions = document.getElementById('config-storage-options');
    const addBtn = document.getElementById('config-add-to-cart-btn');
    
    // 1. Initialize Dropdown Value
    if (modelDropdown) {
        modelDropdown.value = configSelectedModel;
        modelDropdown.addEventListener('change', (e) => {
            configSelectedModel = e.target.value;
            const modelData = PRODUCTS_DATA[configSelectedModel];
            configSelectedRAM = modelData.ram;
            configSelectedStorage = modelData.storage;
            updateConfiguratorUI();
        });
    }
    
    // 2. Color Click listeners
    if (colorOptions) {
        colorOptions.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                configSelectedColor = btn.getAttribute('data-color');
                updateConfiguratorUI();
            });
        });
    }
    
    // 3. RAM Selection Listeners
    if (ramOptions) {
        ramOptions.querySelectorAll('.pill-option').forEach(pill => {
            pill.addEventListener('click', () => {
                configSelectedRAM = pill.getAttribute('data-ram');
                updateConfiguratorUI();
            });
        });
    }
    
    // 4. Storage Selection Listeners
    if (storageOptions) {
        storageOptions.querySelectorAll('.pill-option').forEach(pill => {
            pill.addEventListener('click', () => {
                configSelectedStorage = pill.getAttribute('data-storage');
                updateConfiguratorUI();
            });
        });
    }
    
    // 5. Submit configurator
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const baseInfo = PRODUCTS_DATA[configSelectedModel];
            const platformBaseCost = baseInfo.price;
            const ramAddon = CONFIG_PRICING.ram[configSelectedRAM] || 0;
            const storageAddon = CONFIG_PRICING.storage[configSelectedStorage] || 0;
            const totalCost = platformBaseCost + ramAddon + storageAddon;
            
            addToCartGlobal({
                id: baseInfo.id,
                name: baseInfo.name,
                price: totalCost,
                color: configSelectedColor,
                ram: configSelectedRAM,
                storage: configSelectedStorage,
                specs: `${baseInfo.cpu}, ${configSelectedRAM} RAM, ${configSelectedStorage} SSD`,
                image: imagePaths[configSelectedColor] || baseInfo.image
            });
        });
    }
    
    // Setup first UI draw
    updateConfiguratorUI();
}

function updateConfiguratorUI() {
    const baseInfo = PRODUCTS_DATA[configSelectedModel];
    const platformBaseCost = baseInfo.price;
    const ramAddon = CONFIG_PRICING.ram[configSelectedRAM] || 0;
    const storageAddon = CONFIG_PRICING.storage[configSelectedStorage] || 0;
    const totalCost = platformBaseCost + ramAddon + storageAddon;
    
    // Update Laptop Image Preview
    const previewEl = document.getElementById('config-laptop-preview');
    if (previewEl) {
        previewEl.style.opacity = '0.7';
        // macOS products keep their custom renders, Windows systems can swap based on colors
        if (baseInfo.category === 'macos') {
            previewEl.src = baseInfo.image; // Use the beautiful generated assets
        } else {
            previewEl.src = imagePaths[configSelectedColor]; // Swap based on finish
        }
        setTimeout(() => {
            previewEl.style.opacity = '1';
        }, 150);
    }
    
    // Update Specs Display Texts
    const summaryTitle = document.getElementById('summary-device-title');
    const summaryPrice = document.getElementById('summary-price-display');
    const summaryDetails = document.getElementById('summary-specs-details');
    
    const colorLabels = { black: 'Obsidian Black', white: 'Ceramic White', silver: 'Platinum Silver' };
    
    if (summaryTitle) summaryTitle.textContent = `${baseInfo.name} - ${colorLabels[configSelectedColor]}`;
    if (summaryPrice) summaryPrice.textContent = `$${totalCost.toLocaleString()}`;
    if (summaryDetails) {
        summaryDetails.textContent = `${baseInfo.cpu}, ${configSelectedRAM} Unified Memory, ${configSelectedStorage} PCIe SSD Storage.`;
    }
    
    // Active styling for selectors
    highlightActiveOption(document.getElementById('config-color-options'), '[data-color]', configSelectedColor, 'color');
    highlightActiveOption(document.getElementById('config-ram-options'), '[data-ram]', configSelectedRAM, 'ram');
    highlightActiveOption(document.getElementById('config-storage-options'), '[data-storage]', configSelectedStorage, 'storage');
    
    // Adjust Pricing Pill Labels relative to model support (Base vs Addon)
    // E.g., if model base starts with 32GB RAM (like MacBook Neo), 16GB option is disabled or marked base.
    // For simplicity, we highlight RAM pill calculations correctly
    adjustConfigPillLabels('ram', baseInfo.ram);
    adjustConfigPillLabels('storage', baseInfo.storage);
}

function adjustConfigPillLabels(specType, modelBaseVal) {
    const parent = document.getElementById(`config-${specType}-options`);
    if (!parent) return;
    
    parent.querySelectorAll('.pill-option').forEach(pill => {
        const val = pill.getAttribute(`data-${specType}`);
        const textNode = pill.querySelector('.pill-price-diff');
        if (!textNode) return;
        
        // Compute relative pricing differences
        const currentCost = CONFIG_PRICING[specType][val];
        const baseCost = CONFIG_PRICING[specType][modelBaseVal] || 0;
        const diff = currentCost - baseCost;
        
        if (diff === 0) {
            textNode.textContent = 'Included';
        } else if (diff > 0) {
            textNode.textContent = `+$${diff}`;
        } else {
            textNode.textContent = `Base Spec`; // Val is below model baseline
        }
    });
}


// --- 3. DEDICATED CART & CHECKOUT PAGE ---
let activeCouponApplied = false;
let discountPercent = 0;

function initCartPage() {
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const whatsappOrderBtn = document.getElementById('whatsapp-order-btn');
    const simulatedSubmitBtn = document.getElementById('simulated-submit-btn');
    
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const codeInput = document.getElementById('promo-code-input');
            const code = codeInput.value.trim().toUpperCase();
            
            if (code === 'MONO10') {
                activeCouponApplied = true;
                discountPercent = 0.10;
                alert('Promo code Applied! 10% Discount applied to your subtotal.');
                codeInput.disabled = true;
                applyCouponBtn.disabled = true;
                renderCartPage();
            } else {
                alert('Invalid coupon code. Try using "MONO10".');
            }
        });
    }
    
    if (whatsappOrderBtn) {
        whatsappOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerCheckout('whatsapp');
        });
    }
    
    if (simulatedSubmitBtn) {
        simulatedSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerCheckout('simulated');
        });
    }
    
    renderCartPage();
}

function renderCartPage() {
    const listWrapper = document.getElementById('cart-page-items');
    const emptyWrapper = document.getElementById('cart-page-empty');
    const formPanel = document.getElementById('cart-checkout-form-panel');
    
    if (!listWrapper) return;
    
    // Clear old elements
    listWrapper.innerHTML = '';
    
    if (cart.length === 0) {
        if (emptyWrapper) emptyWrapper.style.display = 'block';
        if (formPanel) formPanel.style.display = 'none';
        return;
    }
    
    if (emptyWrapper) emptyWrapper.style.display = 'none';
    if (formPanel) formPanel.style.display = 'block';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        
        const html = `
            <div class="cart-card" data-uid="${item.uid}">
                <button class="cart-card-remove cart-page-remove-btn" aria-label="Remove item">Remove</button>
                <div class="cart-card-img-box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-card-details">
                    <div>
                        <h3 class="cart-card-title">${item.name}</h3>
                        <div class="cart-card-specs">${item.specs} <br>Color: ${item.color.toUpperCase()}</div>
                    </div>
                    <div class="cart-card-footer">
                        <div class="cart-card-quantity">
                            <button class="qty-btn cart-page-qty-minus"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn cart-page-qty-plus"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <span class="cart-card-price">$${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
        listWrapper.insertAdjacentHTML('beforeend', html);
    });
    
    // Setup Pricing Summary Table
    const discountVal = subtotal * discountPercent;
    const estTax = (subtotal - discountVal) * 0.08; // 8% sales tax
    const estTotal = subtotal - discountVal + estTax;
    
    document.getElementById('summary-subtotal').textContent = `$${subtotal.toLocaleString()}`;
    
    const discountRow = document.getElementById('summary-discount-row');
    if (discountRow) {
        if (activeCouponApplied) {
            discountRow.style.display = 'table-row';
            document.getElementById('summary-discount').textContent = `-$${discountVal.toLocaleString()}`;
        } else {
            discountRow.style.display = 'none';
        }
    }
    
    document.getElementById('summary-tax').textContent = `$${estTax.toLocaleString()}`;
    document.getElementById('summary-total').textContent = `$${estTotal.toLocaleString()}`;
    
    attachCartPageItemListeners();
}

function attachCartPageItemListeners() {
    const listWrapper = document.getElementById('cart-page-items');
    if (!listWrapper) return;
    
    listWrapper.querySelectorAll('.cart-card').forEach(card => {
        const uid = card.getAttribute('data-uid');
        card.querySelector('.cart-page-qty-minus').addEventListener('click', () => updateQtyGlobal(uid, -1));
        card.querySelector('.cart-page-qty-plus').addEventListener('click', () => updateQtyGlobal(uid, 1));
        card.querySelector('.cart-page-remove-btn').addEventListener('click', () => removeItemGlobal(uid));
    });
}

function triggerCheckout(method) {
    // 1. Gather delivery details
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const note = document.getElementById('customer-notes').value.trim();
    
    if (name === '' || phone === '' || address === '') {
        alert('Please fill in your Name, Contact Number, and Delivery Address to complete your order.');
        return;
    }
    
    // 2. Compute sums
    let subtotal = 0;
    let itemsText = '';
    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        itemsText += `${index + 1}. *${item.name}* (Qty: ${item.qty})\n   - Setup: ${item.specs}\n   - Color: ${item.color.toUpperCase()}\n   - Price: $${(item.price * item.qty).toLocaleString()}\n\n`;
    });
    
    const discountVal = subtotal * discountPercent;
    const estTax = (subtotal - discountVal) * 0.08;
    const estTotal = subtotal - discountVal + estTax;
    
    if (method === 'whatsapp') {
        // Format message for WhatsApp checkout redirect
        let waMessage = `*MONO LAPTOPS ORDER*\n`;
        waMessage += `=========================\n\n`;
        waMessage += `*CUSTOMER DETAILS*\n`;
        waMessage += `• Name: ${name}\n`;
        waMessage += `• Phone: ${phone}\n`;
        waMessage += `• Address: ${address}\n`;
        if (note !== '') waMessage += `• Notes: ${note}\n`;
        waMessage += `\n*ORDER ITEMS*\n`;
        waMessage += itemsText;
        waMessage += `=========================\n`;
        waMessage += `*Subtotal:* $${subtotal.toLocaleString()}\n`;
        if (activeCouponApplied) waMessage += `*Discount (10%):* -$${discountVal.toLocaleString()}\n`;
        waMessage += `*Estimated Tax (8%):* $${estTax.toLocaleString()}\n`;
        waMessage += `*ESTIMATED TOTAL:* $${estTotal.toLocaleString()}\n\n`;
        waMessage += `Thank you for ordering. Please confirm payment details to ship.`;
        
        // Encode URL and redirect
        const waBaseNumber = ''; // Customer support number without plus sign
        const encodedUrl = encodeURIComponent(waMessage);
        const waLink = `https://wa.me/${waBaseNumber}?text=${encodedUrl}`;
        
        // Clean cart
        cart = [];
        localStorage.setItem('mono_cart', JSON.stringify(cart));
        updateGlobalCartUI();
        
        // Open link
        window.open(waLink, '_blank');
        window.location.href = 'index.html';
    } else {
        // Simulated backend submit
        alert(`Order Received Simulating! \n\nSubmitting order of $${estTotal.toLocaleString()} for ${name} to backend server database...`);
        cart = [];
        localStorage.setItem('mono_cart', JSON.stringify(cart));
        updateGlobalCartUI();
        window.location.href = 'index.html';
    }
}


// --- 4. SCROLL INTERSECTION OBSERVER ---
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up-init').forEach(el => {
        observer.observe(el);
    });
}
