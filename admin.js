const authSection = document.getElementById('auth-section');
const adminSection = document.getElementById('admin-section');
const loginBtn = document.getElementById('login-btn');
const productList = document.getElementById('product-list');
const addProductBtn = document.getElementById('add-product-btn');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('admin-email').value;
    const pass = document.getElementById('admin-pass').value;
    auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
        authSection.style.display = 'none';
        adminSection.style.display = 'block';
        loadProducts();
    }).catch(err => alert(err.message));
});

function loadProducts() {
    productList.innerHTML = '';
    db.collection('products').get().then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            const div = document.createElement('div');
            div.className = 'mb-4 p-2 bg-gray-800 rounded';
            div.innerHTML = `
            <strong>${data.name}</strong> - ${data.currency} ${data.price}
            <button onclick="deleteProduct('${doc.id}')" class="btn-luxury ml-2">Delete</button>`;
            productList.appendChild(div);
        });
    });
}

function deleteProduct(id) {
    db.collection('products').doc(id).delete().then(loadProducts);
}

addProductBtn.addEventListener('click', () => {
    const name = document.getElementById('prod-name').value;
    const desc = document.getElementById('prod-desc').value;
    const price = parseFloat(document.getElementById('prod-price').value);
    const currency = document.getElementById('prod-currency').value;
    const file = document.getElementById('prod-image').files[0];

    if (!file) return alert('Upload an image!');
    const storageRef = storage.ref('products/' + file.name);
    storageRef.put(file).then(() => {
        storageRef.getDownloadURL().then(url => {
            db.collection('products').add({name, description: desc, price, currency, imageURL: url}).then(loadProducts);
        });
    });
});
