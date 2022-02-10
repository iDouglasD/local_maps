import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    const theme = {
        primary: "#322153",
        secondary: "#6C63FF",
        background: "#F0F0F5",
        white: "#fff",
    };
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<p>Renderizando a new</p>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
