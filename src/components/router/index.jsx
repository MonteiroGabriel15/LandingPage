import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom"

const RouterComponent = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        </BrowserRouter>
    )
}