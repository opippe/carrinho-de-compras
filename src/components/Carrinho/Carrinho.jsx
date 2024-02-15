import React from 'react';
import { useCarrinho } from '../../context/CarrinhoContext';
import './Carrinho.css'

function Carrinho() {
    const { carrinho, removerProduto, calcularTotal } = useCarrinho();

    return (
        <div className='carrinho'>
            <div></div>
            {carrinho.map((produto) => (
                <div className='produtos' key={produto.id}>
                    <p>{produto.nome}</p> 
                    <p>x {produto.count}</p>
                    <p>R${produto.preco}</p>
                    <button className='botao-remover' onClick={() => removerProduto(produto.id)}>Remover</button>
                </div>
            ))}
            <h3 className='total'>Total R${calcularTotal()}</h3>
        </div>
    );
}

export default Carrinho;