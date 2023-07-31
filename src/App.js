import React, { useState } from "react";
import "./App.css";

const initialProducts = [
  { id: 1, image: "/images/pantufa marrom.jpg", name: "Pantufa Marrom", price: 89.99 },
  { id: 2, image: "/images/pantufa rosa.jpeg", name: "Pantufa Rosa", price: 89.99 },
  { id: 3, image: "/images/pantufa vermelha.png", name: "Pantufa Vermelha", price: 89.99 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  return (
    <div className="App">
      <h1>Carrinho de Compras</h1>
      <div className="products">
        <h2>Produtos Disponíveis:</h2>
        <ul>
          {initialProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} width="100" />
              {product.name} - R$ {product.price}
              <button onClick={() => addToCart(product)}>Adicionar</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Carrinho:</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
        <p>Total: R$ {total}</p>
      </div>
    </div>
  );
}

export default App;

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
