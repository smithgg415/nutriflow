const products = [
    {
        id: 1,
        name: "Creatina Hardcore 300g Integralmédica",
        image: 'suplementos/creatinaintegral.png',
        precoAvista: 'R$ 110,00',
        precoCartao: 'R$ 115,00',
        category: 'Creatinas',
        flavors: null,
        images: null,
        marca: 'Integralmédica',
    },
    {
        id: 2,
        name: "Creatina Hardcore 150g Integralmédica",
        image: 'suplementos/creatinaintegral150.png',
        precoAvista: 'R$ 67,00',
        precoCartao: 'R$ 72,00',
        category: 'Creatinas',
        flavors: null,
        images: null,
        marca: 'Integralmédica',
    },
    {
        id: 3,
        name: 'Pasta de amendoim 600g Dr. Peanut',
        image: 'suplementos/drpeanut.png',
        precoAvista: 'R$ 56,50',
        precoCartao: 'R$ 60,50',
        category: 'Pastas de amendoim',
        flavors: ["Buenissimo", "Creme de Avelã", "Chocotine"],
        images: ["suplementos/drpeanut/buenissimo.png", "suplementos/drpeanut/avela.png", "suplementos/drpeanut/chocotine.png"],
        marca: 'DR Peanut',
    },
    {
        id: 4,
        name: "Pasta de amendoim 250g Dr. Peanut",
        image: "suplementos/drpeanut/cookies250.png",
        precoAvista: "R$ 29,90",
        precoCartao: "R$ 31,90",
        category: "Pastas de amendoim",
        flavors: ["Cookies And Cream", "Bueníssimo"],
        images:["suplementos/drpeanut/cookies250.png", "suplementos/drpeanut/buenissimo250.png"],
        marca: "DR Peanut",
    },
    {
        id: 5,
        name: "Pré-Treino Diabo Verde Insano 300G Ftw",
        image: 'suplementos/diaboverde.png',
        precoAvista: 'R$ 109,90',
        precoCartao: 'R$ 115,00',
        category: 'Pré-treinos',
        flavors: ["Maçã-Verde"],
        images: null,
        marca: 'FTW',
    },
    {
        id: 6,
        name: "100% Whey Protein 900g Max Titanium",
        image: 'suplementos/wheymaxpote.png',
        precoAvista: 'R$ 145,00',
        precoCartao: 'R$ 152,00',
        category: 'Whey Protein',
        flavors: ["Cookies"],
        images: null,
        marca: 'Max Titanium',
    },
    {
        id:7,
        name: "Whey 100% Integralmedica",
        image: 'suplementos/wheyintegral.png',
        precoAvista: 'R$ 130,00',
        precoCartao: 'R$ 136,00',
        category: 'Whey Protein',
        flavors: ["Cookies And Cream", "Chocolate Maltado"],
        images: ["suplementos/wheyintegral.png", "suplementos/chocolatemaltado.png"],
        marca: "Integralmédica",
    },
    {
        id:8,
        name: "Termogênico Therma Pro Hardcore 60 Cápsulas",
        image: 'suplementos/therma.png',
        precoAvista: 'R$ 50,00',
        precoCartao: 'R$ 55,00',
        category: 'Termogênicos',
        flavors: null,
        images: null,
        marca: 'Max Titanium',
    },
    {
        id:9,
        name: "Cafeína FireBlack 60 Cápsulas",
        image: "suplementos/cafeinafire.png",
        precoAvista: "R$ 37,00",
        precoCartao: "R$ 40,00",
        category: "Pré-treinos",
        flavors: null,
        images: null,
        marca: "Max Titanium"
    },
    {
        id:10,
        name: "Multivitamínico MultiMax Complex 90 Cápsulas",
        image: 'suplementos/multimax.png',
        precoAvista: 'R$ 57,00',
        precoCartao: 'R$ 60,00',
        category: 'Multivitamínicos',
        flavors: null,
        images: null,
        marca: 'Max Titanium',
    },
    {
        id:11,
        name: "Pré-Treino Horus 150g Max Titanium",
        image: 'suplementos/horus.png',
        precoAvista: 'R$ 87,00',
        precoCartao: 'R$ 94,00',
        category: 'Pré-treinos',
        flavors: ["Maçã-Verde"],
        images: null,
        marca: 'Max Titanium',
    },
    {
        id:12,
        name: " Pré-Treino Nuclear Rush 100g",
        image: 'suplementos/nuclear.png',
        precoAvista: 'R$ 55,00',
        precoCartao: 'R$ 60,00',
        category: 'Pré-treinos',
        flavors: ["Morango"],
        images: null,
        marca: 'Body action',
    },
    {
        id: 13,
        name: "Hipercalórico Mass 17500, 3kg Max Titanium",
        image: 'suplementos/mass.png',
        precoAvista: 'R$ 117,00',
        precoCartao: 'R$ 123,00',
        category: 'Hipercalóricos',
        flavors: ["Chocolate"],
        images: null,
        marca: 'Max Titanium',
    },
    {
        id: 14,
        name: "Creatina Probiótica 300g",
        image: "suplementos/creatinaprobiotica.png",
        precoAvista: "R$ 95,00",
        precoCartao: "99,90",
        category: "Creatinas",
        flavors: null,
        images: null,
        marca: "Probiótica",

    },
    {
        id: 15,
        name: "Creatina MaxTitanium 300g",
        image: "suplementos/creatinamax300.png",
        precoAvista: "R$ 110,00",
        precoCartao: "R$ 115,00",
        category: "Creatinas",
        flavors: null,
        images: null,
        marca: "Max Titanium",
    },
    {
        id:16,
        name: "Creatina MaxTitanium 150g",
        image: "suplementos/creatinamax150.png",
        precoAvista: "R$ 67,00",
        precoCartao: "R$ 115,00",
        category: "Creatinas",
        flavors: null,
        images: null,
        marca: "Max Titanium",

    },
    {
        id:17,
        name: "Whey 100% POTE 900g<br>MaxTitanium and Dr Peanut",
        image: "suplementos/wheydrpeanut/bombom.png",
        precoAvista: "R$ 150,00",
        precoCartao: "R$ 156,00",
        category: "Whey Protein",
        flavors: ["Bombom Italiano", "Bueníssimo"],
        images: ["suplementos/wheydrpeanut/bombom.png", "suplementos/wheydrpeanut/buenissimo.png"],
        marca: "Max Titanium",

    },
    {
        id: 18,
        name: "Whey 100% Pure Probiótica",
        image: "suplementos/wheyprobiotica.png",
        precoAvista: "R$ 120,00",
        precoCartao: "R$ 125,00",
        category: "Whey Protein",
        flavors: ["Morango"],
        images: null,
        marca: "Probiótica",

    },
    {
        id:19,
        name: "Whey 100% REFIL<br>MaxTitanium",
        image: "suplementos/wheymaxrefilbaunilha.png",
        precoAvista: "R$ 135,00",
        precoCartao: "R$ 142,00",
        category: "Whey Protein",
        flavors: ["Baunilha", "Chocolate"],
        images: ["suplementos/wheymaxrefilbaunilha.png", "suplementos/wheymaxrefil.png"],
        marca: "Max Titanium",
    },
    {
        id:20,
        name: "Coqueteleira Venom Labs",
        image: "suplementos/coqueteleiras/vermelha.png",
        precoAvista: "R$20,00",
        precoCartao: "R$23,00",
        category: "Coqueteleiras",
        flavors: ["Vermelha", "Branco Pérola", "Azul Tiffany"],
        images:['suplementos/coqueteleiras/vermelha.png', 'suplementos/coqueteleiras/branco.png', 'suplementos/coqueteleiras/azul.png'],
        marca: "Venom Labs"
    },
    {
        id:21,
        name: "Coqueteleira New Millen",
        image: "suplementos/coqueteleiras/coqueteleiranewmillen.png",
        precoAvista: "R$ 20,00",
        precoCartao: "R$ 23,00",
        category: "Coqueteleiras",
        flavors: null,
        images: null,
        marca: "New Millen",
    },
];
window.onload = function () {
    document.getElementById('popup').style.display = 'flex';
    renderCatalog(products);
    updateFloatingButtonVisibility();
};

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function onChangeSelect(element) {
    const index = element.split("-")[1];
    var image = document.getElementById(`image-${index}`);
    var select = document.getElementById(`flavorSelect-${index}`);
    image.src=products[parseInt(index,10)].images[select.selectedIndex];
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
            if (product.category == "Coqueteleiras") {
                flavorSelectHTML = `<label for="flavorSelect-${index}" class='escolhaSabor'>Escolha a cor:</label>
                                    <br>
                                    <select id="flavorSelect-${index}" class='selectSabor' onChange="onChangeSelect('flavorSelect-${index}')">
                                        ${product.flavors.map(flavor => `<option value="${flavor}">${flavor}</option>`).join('')}
                                    </select>
            ` } else {
                flavorSelectHTML = `
                            <label for="flavorSelect-${index}" class='escolhaSabor'>Escolha o sabor:</label>
                            <br>
                            <select id="flavorSelect-${index}" class='selectSabor' onChange="onChangeSelect('flavorSelect-${index}')">
                                ${product.flavors.map(flavor => `<option value="${flavor}">${flavor}</option>`).join('')}
                            </select>
                `;
            }
        }


        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" id="image-${index}">
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
    updateFloatingButtonVisibility();
    showSuccessMessage(product.name);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const discountPrice = document.getElementById('discountPrice');
    const paymentMethod = document.getElementById('paymentMethod').value;

    cartItems.innerHTML = '';
    let total = 0;
    let totalCartao = 0;
    let totalAvista = 0;
    category: "Coqueteleiras",
        cart.forEach((item, index) => {
            const flavorText = item.selectedFlavor ? ` (${item.category == 'Coqueteleiras' ? 'Cor: ' : 'Sabor: '}: ${item.selectedFlavor})` : '';
            const itemPrice = paymentMethod === 'Cartão' ? item.precoCartao : item.precoAvista;
            const itemAvista = parseFloat(item.precoAvista.replace('R$', '').replace('.', '').replace(',', '.'));
            const itemCartao = parseFloat(item.precoCartao.replace('R$', '').replace('.', '').replace(',', '.'));

            totalCartao += itemCartao;
            totalAvista += itemAvista;

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

    if (paymentMethod === 'PIX' || paymentMethod === 'Boleto' || paymentMethod === 'Dinheiro') {
        const discount = totalCartao - totalAvista;
        discountPrice.textContent = `Desconto no ${paymentMethod}: R$ ${discount.toFixed(2).replace('.', ',')}`;
        discountPrice.style.display = 'block';
    } else {
        discountPrice.style.display = 'none';
    }

    document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateFloatingButtonVisibility();
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
function updateFloatingButtonVisibility() {
    const button = document.getElementById('floating-button');
    const isCartEmpty = cart.length === 0;
    button.classList.toggle('hidden-button', isCartEmpty);
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
window.addEventListener('scroll', handleScroll);

document.getElementById('floating-button').addEventListener('click', function () {
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
});

// const wrapper = document.querySelector('.carousel-wrapper');
// const texts = document.querySelectorAll('.carousel-text');
// let currentIndex = 0;

// function showNextText() {
//     currentIndex = (currentIndex + 1) % texts.length;

//     wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// setInterval(showNextText, 3000);