const fetchItem = async (itemId) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
  return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
