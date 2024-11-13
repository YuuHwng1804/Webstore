import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", description: "Vòng Tràm Hương, được thiết kế tự các loại đá cao cấp", price: 100, image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", description: "Details of Product 2", price: 150, image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", description: "Details of Product 3", price: 200, image: "/images/product3.jpg" },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
