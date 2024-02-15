import './App.css'
import React from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext';
import Produto from './components/Produto/Produto';
import Carrinho from './components/Carrinho/Carrinho';

function App() {
  return (
    <CarrinhoProvider>
      <div className="App">
        <div className='esquerda'>
          <h1 className='titulo'>Carrinho de Compras</h1>
          <Carrinho />
        </div>
        <div className='direita'>
          <Produto id={1} nome="Produto 1" preco={10} />
          <Produto id={2} nome="Produto 2" preco={20} />
          <Produto id={3} nome="Produto 3" preco={30} />
        </div>
      </div>
    </CarrinhoProvider>
  );
}

export default App;