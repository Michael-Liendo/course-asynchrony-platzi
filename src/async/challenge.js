import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const request = await fetch(urlApi);
  const response = await request.json();

  return response;
}

const anotherFn = async (urlApi) => {
  try {
    const products = await fetchData(`${API}/products`);
    console.log(products[0]);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    console.log(product.title);
    const category = await fetchData(`${API}/category/${product.category.id}`);
    console.log(category.name);
  } catch (error) {
    console.log(error);
  }
};
anotherFn(API);
