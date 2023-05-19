const saveCartItems = (cartObj) => localStorage.setItem('cartItems', cartObj);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
