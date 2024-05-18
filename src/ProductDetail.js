import axios from 'axios';
import React, { useState } from 'react';

const ProductDetail = () => {
  const [id, setId] = useState('');
  const [producto, setProducto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:9091/productos/${id}`)
      .then(response => {
        setProducto(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Producto:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button type="submit">Consultar Producto</button>
      </form>
      {producto && (
        <div>
          <h2>Detalles del Producto</h2>
          <p>Nombre: {producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
