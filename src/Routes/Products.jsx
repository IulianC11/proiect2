import React from 'react';

const Products = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    
    if (typeof addToCart === 'function') {
      addToCart(product);
    }
  };
  
  return (
    <div className="Products">
      <div className="top-prod">
        <h1>Products</h1>
      </div>

      <div className="product-cards">
        {[1, 2, 3, 4, 5].map((id) => (
          <div key={id} className="product-card">
            <img
              src={`https://via.placeholder.com/150`}
              alt={`Product ${id}`}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">Product Name {id}</h2>
              <p className="product-description">Product Description</p>
              <p className="product-price">$10</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
