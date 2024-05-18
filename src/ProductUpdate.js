import axios from 'axios';
import React, { useState } from 'react';

const ProductUpdate = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:9091/productos/${id}`, {
      nombre: nombre,
      precio: parseFloat(precio)
    })
    .then(response => {
      console.log(response.data);
      // Limpiar el formulario después de la actualización
      setId('');
      setNombre('');
      setPrecio('');
    })
    .catch(error => {
      console.error('Error updating product:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID del Producto:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
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
      <button type="submit">Actualizar Producto</button>
    </form>
  );
};

export default ProductUpdate;
