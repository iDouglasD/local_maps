import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
            <ToastContainer />
        </ThemeProvider>
    );
}

export default App;
