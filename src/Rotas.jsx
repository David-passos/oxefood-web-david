import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from './views/cliente/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import ListProduto from './views/produto/ListProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path = "list-categoriaProduto" element={ <ListCategoriaProduto/>} />
                <Route path = "form-categoriaProduto" element = { <FormCategoriaProduto/>} />
            </Routes>
        </>
    )
}

export default Rotas
