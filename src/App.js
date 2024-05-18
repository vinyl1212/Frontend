import React from 'react';
import './App.css';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import ProductUpdate from './ProductUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestión de Productos</h1>
        <ProductForm />
        <ProductDetail />
        <ProductUpdate />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
