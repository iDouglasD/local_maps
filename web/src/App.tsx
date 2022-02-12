import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

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
                    <Route path="/new" element={<New />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
