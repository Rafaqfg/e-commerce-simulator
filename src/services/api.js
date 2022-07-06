  async function fetchProducts() {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default fetchProducts;