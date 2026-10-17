let currentLang = 'arabic';
let cart = [];

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('language-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    
    const htmlRoot = document.getElementById('html-root');
    if (lang === 'arabic') {
        htmlRoot.lang = 'ar';
        htmlRoot.dir = 'rtl';
    } else {
        htmlRoot.lang = 'en';
        htmlRoot.dir = 'ltr';
    }
    
    renderApp();
}

function toggleLanguage() {
    setLanguage(currentLang === 'arabic' ? 'english' : 'arabic');
}

function renderApp() {
    const data = menuData[currentLang];
    document.getElementById('main-title').innerText = data.title;
    document.getElementById('cart-title').innerText = data.cartTitle;
    document.getElementById('total-text').innerText = data.totalText;
    document.getElementById('confirm-btn').innerText = data.whatsappBtnText;
    document.getElementById('lang-toggle-btn').innerText = currentLang === 'arabic' ? 'English' : 'عربي';

    const nav = document.getElementById('categories-nav');
    nav.innerHTML = '';
    data.categories.forEach((cat, index) => {
        nav.innerHTML += `<button class="cat-btn ${index === 0 ? 'active' : ''}" onclick="filterCategory('${cat.id}', this)">${cat.name}</button>`;
    });

    renderMenu(data.categories);
    renderCart();
}

function renderMenu(categories) {
    const container = document.getElementById('menu-section');
    container.innerHTML = '';

    categories.forEach(cat => {
        let html = `
            <div class="category-box" id="cat-${cat.id}">
                <h2 class="category-title">${cat.name}</h2>
                <div class="grid-items">
        `;

        cat.items.forEach(item => {
            html += `
                <div class="menu-item">
                    <span class="item-name">${item.name}</span>
                    <div class="item-sizes">
            `;

            item.sizes.forEach(size => {
                html += `<span class="size-pill" onclick="addToCart('${item.name}', '${size.name}', ${size.price})">${size.name}: ${size.price} ر.س (${size.calories})</span>`;
            });

            html += `</div></div>`;
        });

        html += `</div></div>`;
        container.innerHTML += html;
    });
}

function filterCategory(catId, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = document.getElementById(`cat-${catId}`);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function addToCart(itemName, sizeName, price) {
    const existing = cart.find(i => i.name === itemName && i.size === sizeName);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name: itemName, size: sizeName, price: price, qty: 1 });
    }
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-list');
    const data = menuData[currentLang];
    
    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align: center; opacity: 0.6;">${data.emptyCart}</p>`;
        document.getElementById('total-amount').innerText = `0 ${currentLang === 'arabic' ? 'ر.س' : 'SAR'}`;
        return;
    }

    list.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        list.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (${item.size}) x${item.qty}</span>
                <span>${item.price * item.qty} ${currentLang === 'arabic' ? 'ر.س' : 'SAR'}</span>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer;">✕</button>
            </div>
        `;
    });

    document.getElementById('total-amount').innerText = `${total} ${currentLang === 'arabic' ? 'ر.س' : 'SAR'}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function sendWhatsAppOrder() {
    if (cart.length === 0) return;
    let text = currentLang === 'arabic' ? "مرحباً، أرغب في طلب الآتي:\n" : "Hello, I would like to order:\n";
    let total = 0;

    cart.forEach(item => {
        text += `- ${item.name} (${item.size}) x${item.qty} : ${item.price * item.qty} ر.س\n`;
        total += item.price * item.qty;
    });

    text += currentLang === 'arabic' ? `\nالمجموع الإجمالي: ${total} ر.س` : `\nTotal: ${total} SAR`;
    
    const phone = "966500180075"; // استبدله برقم الواتساب الحقيقي
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}