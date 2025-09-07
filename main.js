const productsContainer = document.getElementById('products');
let cartCount = 0;

// جلب المنتجات من Firestore
db.collection('products').get().then(snapshot => {
    snapshot.forEach(doc => {
        const data = doc.data();
        const productHTML = `
        <div class="product-card p-6">
            <img src="${data.imageURL}" alt="${data.name}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h4 class="text-2xl font-semibold mt-2">${data.name}</h4>
            <p class="text-sm mb-4">${data.description}</p>
            <p class="luxury-accent text-lg font-bold" id="price-${doc.id}">${data.currency} ${data.price}</p>
            <button class="btn-luxury mt-4 add-to-cart" data-id="${doc.id}" data-price="${data.price}">Add to Cart</button>
        </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
        });
    });
});

// فتح وغلق نافذة الدفع
document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('payment-modal').style.display = 'flex';
});
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('payment-modal').style.display = 'none';
});
