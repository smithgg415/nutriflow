const products = [
    {
        name: 'Pasta de amendoim 600g<br>Dr. Peanut',
        image: 'suplementos/drpeanut.png',
        precoAvista: 'R$ 56,50',
        precoCartao: 'R$ 60,50',
        category: 'Pastas de amendoim',
        flavors: ["Buenissimo", "Creme de Avelã", "Chocotine"],
        marca: 'DR Penaut',
    },
    {
        name: "Creatina Hardcore 300g Integralmédica",
        image: 'suplementos/creatinaintegral.png',
        precoAvista: 'R$ 110,00',
        precoCartao: 'R$ 115,00',
        category: 'Creatinas',
        flavors: null,
        marca: 'Integralmédica',
    },
    {
        name: "Pré-Treino<br>Diabo Verde Insano 300G Ftw",
        image: 'suplementos/diaboverde.png',
        precoAvista: 'R$ 109,90',
        precoCartao: 'R$ 115,00',
        category: 'Pré-treinos',
        flavors: ["Maçã-Verde"],
        marca: 'FTW',
    },
    {
        name: "100% Whey Protein 900g Max Titanium",
        image: 'suplementos/wheymaxpote.png',
        precoAvista: 'R$ 145,00',
        precoCartao: 'R$ 152,00',
        category: 'Whey Protein',
        flavors: ["Cookies"],
        marca: 'Max Titanium',
    },
    {
        name: "Whey 100% Integralmedica",
        image: 'suplementos/wheyintegral.png',
        precoAvista: 'R$ 130,00',
        precoCartao: 'R$ 136,00',
        category: 'Whey Protein',
        flavors: ["Chocolate Maltado"],
        marca: "Integralmédica",
    },
    {
        name: "Multivitamínico MultiMax Complex 90 Cápsulas",
        image: 'suplementos/multimax.png',
        precoAvista: 'R$ 57,00',
        precoCartao: 'R$ 60,00',
        category: 'Multivitamínicos',
        flavors: null,
        marca: 'Max Titanium',
    },
    {
        name: "Horus Pré Treino 150g Max Titanium",
        image: 'suplementos/horus.png',
        precoAvista: 'R$ 87,00',
        precoCartao: 'R$ 94,00',
        category: 'Pré-treinos',
        flavors: ["Maçã-Verde"],
        marca: 'Max Titanium',
    },
    {
        name: "Nuclear Rush 100g Pré-Treino",
        image: 'suplementos/nuclear.png',
        precoAvista: 'R$ 55,00',
        precoCartao: 'R$ 60,00',
        category: 'Pré-treinos',
        flavors: ["Morango"],
        marca: 'Body action',
    },
    {
        name: "Hipercalórico Mass 17500, 3kg Max Titanium",
        image: 'suplementos/mass.png',
        precoAvista: 'R$ 117,00',
        precoCartao: 'R$ 123,00',
        category: 'Hipercalóricos',
        flavors: ["Chocolate"],
        marca: 'Max Titanium',
    },
    {
        name: "Termogênico Pro Hardcore 60 Cápsulas",
        image: 'suplementos/therma.png',
        precoAvista: 'R$ 50,00',
        precoCartao: 'R$ 55,00',
        category: 'Termogênicos',
        flavors: null,
        marca: 'Max Titanium',
    }
];
window.addEventListener('scroll', handleScroll);
window.onload = function () {
    document.getElementById('popup').style.display = 'flex';
};

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
let cart = [];

function renderCatalog(products) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    if (products.length === 0) {
        catalog.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        let flavorSelectHTML = '';
        if (product.flavors) {
            flavorSelectHTML = `
        <label for="flavorSelect-${index}" class='escolhaSabor'>Escolha o sabor:</label>
        <br>
        <select id="flavorSelect-${index}" class='selectSabor'>
            ${product.flavors.map(flavor => `<option value="${flavor}">${flavor}</option>`).join('')}
        </select>
    `;
        }

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="avista">à vista por:</div>
            <div class="product-price">${product.precoAvista}</div>
               ${flavorSelectHTML}
            </div>
        `;

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add-to-cart';
        addToCartButton.innerHTML = '<i class="bi-bag-plus"></i> Adicionar ao Carrinho';

        addToCartButton.addEventListener('click', function () {
            addToCart(product, index);
        });

        card.appendChild(addToCartButton);
        catalog.appendChild(card);
    });
}

function addToCart(product, productIndex) {
    const selectedProduct = { ...product };

    if (selectedProduct.flavors) {
        const flavorSelect = document.getElementById(`flavorSelect-${productIndex}`);
        const selectedFlavor = flavorSelect ? flavorSelect.value : null;
        if (selectedFlavor) {
            selectedProduct.selectedFlavor = selectedFlavor;
        }
    }

    cart.push(selectedProduct);
    updateCartDisplay();
    showSuccessMessage(product.name);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const paymentMethod = document.getElementById('paymentMethod').value;

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const flavorText = item.selectedFlavor ? ` (Sabor: ${item.selectedFlavor})` : '';

        const itemPrice = paymentMethod === 'Cartão' ? item.precoCartao : item.precoAvista;

        const li = document.createElement('li');
        li.className = 'cart-item';

        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class='imagemCart'>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}${flavorText}</div>
                <div class="cart-item-price">${itemPrice}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})"><i class="bi bi-trash" style='font-size:25px'></i></button>
        `;

        cartItems.appendChild(li);

        total += parseFloat(itemPrice.replace('R$', '').replace('.', '').replace(',', '.'));
    });

    totalPrice.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function showSuccessMessage(productName) {
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    successText.textContent = `${productName} foi adicionado ao carrinho com sucesso!`;

    successMessage.style.display = 'flex';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 4000);
}

document.getElementById('paymentMethod').addEventListener('change', function () {
    updateCartDisplay();
});

document.getElementById('sendToWhatsApp').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    let qtde = cart.length;
    let message;

    if (qtde > 1) {
        message = 'Olá, gostaria de fazer um pedido:\n*ITENS:*\n\n';
    } else {
        message = 'Olá, gostaria de fazer um pedido:\n*ITEM:*\n\n';
    }

    cart.forEach(item => {
        const flavorText = item.selectedFlavor ? ` (Sabor: ${item.selectedFlavor})` : '';
        const itemPrice = document.getElementById('paymentMethod').value === 'Cartão' ? item.precoCartao : item.precoAvista;
        message += `-- *${item.name}${flavorText} - ${itemPrice}*\n`;
    });

    const paymentMethod = document.getElementById('paymentMethod').value;
    const userName = document.getElementById('userName').value;
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked').value;
    const total = document.getElementById('totalPrice').textContent.replace('Total: ', '');

    message += `\nForma de Pagamento: *${paymentMethod}*\n`;
    message += `Nome: *${userName}*\n`;
    message += `Opção de entrega: *${deliveryOption}*\n`;
    message += `Valor Total: *${total}*\n`;

    const phoneNumber = '18997418372';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
});

window.onload = function () {
    renderCatalog(products);
};

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    renderCatalog(filteredProducts);
}

function filterCatalog(category) {
    let filteredProducts;

    if (category === 'todos') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    renderCatalog(filteredProducts);
}

function filtrarMarcas(marca) {
    let produtosFiltrados;

    if (marca === 'todos') {
        produtosFiltrados = products;
    } else {
        produtosFiltrados = products.filter(product => product.marca === marca);
    }
    renderCatalog(produtosFiltrados);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function handleScroll() {
    const catalog = document.getElementById('catalog');

    if (isElementInViewport(catalog)) {
        catalog.classList.remove('hidden');
        catalog.classList.add('visible');
        window.removeEventListener('scroll', handleScroll);
    }
}







