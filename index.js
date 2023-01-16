const productManager = require("./productManager");
const manager = new productManager("products.json");

const main = async () => {
  let product01 = {
    title: "Test Product 01",
    descripction: "Test Description",
    price: 100,
    thumbnail: "No image available",
    code: 123,
    stock: 10,
  };

  let product02 = {
    title: "Test Product 02",
    descripction: "Test Description 02",
    price: 200,
    thumbnail: "No image available 02",
    code: 213,
    stock: 20,
  };

  let product03 = {
    title: "Test Product 03",
    descripction: "Test Description 03",
    price: 300,
    thumbnail: "No image available 03",
    code: 321,
    stock: 30,
  };

  let updateProduct = {
    title: "Update product",
    descripction: "Update Description",
    price: 400,
    thumbnail: "No Image available 04",
    code: 411,
    stock: 40,
  };

  await manager.addProduct(product01);
  await manager.addProduct(product02);
  await manager.addProduct(product03);
  console.log(await manager.getProducts());
  console.log(await manager.getProdctById(2));
  await manager.updateProduct(2, updateProduct);
  await manager.deleteProduct(3);
};

main();
