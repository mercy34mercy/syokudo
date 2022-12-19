import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import App from "./App";
import Card from "./Card";

export const RouterConfig = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<App/>} />
                    <Route path="admin" element={<Admin/>} ></Route>
                    <Route path="card" element={<Card/>}></Route>
                </Routes>
            </BrowserRouter>
    );
}

