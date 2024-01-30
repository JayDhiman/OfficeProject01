import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import AllEmployee from './Pages/Employee/AllEmployee';
import Clients from './Pages/Clients/Clients';
import Holiday from './Pages/Employee/Holiday';
import Login from './Components/LoginCredential/Login';
import Signup from './Components/LoginCredential/Signup';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies] = useCookies(['loggedIn']);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee/allemployee" element={<AllEmployee />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/employee/holiday" element={<Holiday />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={cookies.loggedIn ? <Navigate to="/dashboard" /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
