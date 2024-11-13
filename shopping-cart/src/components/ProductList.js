import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", price: 100, image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: 150, image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: 200, image: "/images/product3.jpg" },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} width="150" /> <br />
            {product.name} - ${product.price} <br />
            <button onClick={() => addToCart(product)}>Add to Cart</button>{" "}
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
