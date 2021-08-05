import React, { useState } from "react";

function Basic1() {
  const [product, setProducts] = useState({ name: "", price: "" });
  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProducts({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          value={product.price}
          onChange={(e) => setProducts({ ...product, price: e.target.value })}
        />
      </form>
      <h3>Product name is {product.name}</h3>
      <h3>Product price is {product.price}</h3>
    </>
  );
}

export default Basic1;
