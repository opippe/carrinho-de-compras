import React from 'react';
import { useCarrinho } from '../../context/CarrinhoContext';
import './Produto.css'

function Produto({ id, nome, preco }) {
    const { adicionarProduto } = useCarrinho();

    const handleAdicionar = () => {
        adicionarProduto({ id, nome, preco });
    };

    return (
        <div className='produto'>
            <div className='dados'>
                <h2 className='dado'>{nome}</h2>
                <p className='dado'>Preço: R${preco}</p>
            </div>
            <button className='botao-adicionar' onClick={handleAdicionar}>Adicionar ao Carrinho</button>
        </div>
    );
}

export default Produto;