const express = require('express');

const app = express();

// Масив продуктів
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' },
];

// Обробник для кореневого шляху
app.get('/', (req, res) => {
  res.send('response for GET request');
});

// Маршрут із параметром
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;
  const filteredProducts = products.filter(product => product.brand === brand);
  res.json(filteredProducts);
});

// Запуск сервера
app.listen(3000, () => console.log(`Server started at http://localhost:3000/`));
