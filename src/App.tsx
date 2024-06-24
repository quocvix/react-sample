import { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <div>App.tsx</div>
            <nav className="text-blue-300 hover:text-blue-600">
                <Link to="/home">Home</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
