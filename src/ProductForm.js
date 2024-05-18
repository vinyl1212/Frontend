import axios from 'axios';
import React, { useState } from 'react';

const ProductForm = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9091/productos', {
      nombre: nombre,
      precio: parseFloat(precio)
    })
    .then(response => {
      console.log(response.data);
      // Limpiar el formulario después de la creación
      setNombre('');
      setPrecio('');
    })
    .catch(error => {
      console.error('Error creating product:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default ProductForm;
