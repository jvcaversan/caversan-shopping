// const saveCartItems = require("./helpers/saveCartItems");

// const { fetchProducts } = require('../helpers/fetchProducts');
const itemList = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const clearButton = document.querySelector('.empty-cart');

function saveItems() {
  saveCartItems(cartItems.innerHTML);
}

const cartClear = () => {
  cartItems.innerHTML = '';
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveItems();
}

cartItems.addEventListener('click', cartItemClickListener);

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
async function getItemApi(element) {
  const itemResult = await fetchProducts(element);
  itemResult.results.forEach((result) => {
    const listProduct = {
      sku: result.id,
      name: result.title,
      image: result.thumbnail,
    };
    const itemId = createProductItemElement(listProduct);
    document.querySelector('.items').appendChild(itemId);
    itemList.appendChild(itemId);
  });
}
const getItems = async (element) => {
  const id = getSkuFromProductItem(element.target.parentNode);
  const getItem = await fetchItem(id);
  const { id: sku, title: name, price: salePrice } = getItem;
  const createElement = createCartItemElement({ sku, name, salePrice });
  cartItems.appendChild(createElement);
  saveItems();
};

document.body.addEventListener('click', (element) => {
  if (element.target.classList.contains('item__add')) {
    getItems(element);
  }
});

window.onload = () => { 
  cartItems.innerHTML = getSavedCartItems();
  clearButton.addEventListener('click', cartClear);
};
// getProducts();
getItemApi('computador');
