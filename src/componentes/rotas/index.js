import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from '../paginaInicial';
import PaginaFrontEnd from '../PaginaFrontEnd';
import PaginaBackEnd from '../PaginaBackEnd';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <PaginaInicial /> } />
            <Route path="/front-end" element={ <PaginaFrontEnd /> } />
            <Route path="/back-end" element={ <PaginaBackEnd /> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;