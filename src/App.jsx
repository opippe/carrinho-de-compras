import './App.css'
import React from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext';
import Produto from './components/Produto/Produto';
import Carrinho from './components/Carrinho/Carrinho';

function App() {
  const produtos = [
    {id: 1, nome: "Produto 1", preco: 10},
    {id: 2, nome: "Produto 2", preco: 10},
    {id: 3, nome: "Produto 3", preco: 10},
  ]

  return (
    <CarrinhoProvider>
      <div className="App">
        <div className='esquerda'>
          <h1 className='titulo'>Carrinho de Compras</h1>
          <Carrinho />
        </div>
        <div className='direita'>
          {produtos.map((produto) => (
            <Produto id={produto.id} nome={produto.nome} preco={produto.preco} />
          ))}
        </div>
      </div>
    </CarrinhoProvider>
  );
}

export default App;