import React, { createContext, useState, useContext } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarProduto = (produto) => {
        const produtoExistenteIndex = carrinho.findIndex(item => item.id === produto.id);

        if (produtoExistenteIndex !== -1) {
            const updatedCarrinho = [...carrinho];
            updatedCarrinho[produtoExistenteIndex].count += 1;
            setCarrinho(updatedCarrinho);
        } else {
            setCarrinho([...carrinho, { ...produto, count: 1 }]);
        }
    };

    const removerProduto = (id) => {
        const produtoExistenteIndex = carrinho.findIndex(item => item.id === id);
        
        if (produtoExistenteIndex !== -1) {
            const updatedCarrinho = [...carrinho];
            if (updatedCarrinho[produtoExistenteIndex].count > 1) {
                updatedCarrinho[produtoExistenteIndex].count -= 1;
            } else {
                updatedCarrinho.splice(produtoExistenteIndex, 1);
            }
            setCarrinho(updatedCarrinho);
        }
    };

    function calcularTotal () {
        return carrinho.reduce((total, produto) => total + (produto.preco * produto.count), 0);
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, calcularTotal }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    const context = useContext(CarrinhoContext);
    if (!context) {
        throw new Error('useCarrinho must be used within a CarrinhoProvider');
    }
    return context;
}