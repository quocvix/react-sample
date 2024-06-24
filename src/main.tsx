import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import App from './App.tsx';
import NotFound from './routes/NotFound.tsx';
import Home from './components/Home.tsx';
import Navbar from './components/navbar/Navbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App />}
                >
                    <Route
                        path="home"
                        element={<Home />}
                    />
                </Route>
                <Route
                    path="/navbar"
                    element={<Navbar />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
