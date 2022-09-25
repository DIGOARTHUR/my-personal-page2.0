import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/About';
export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='personWebsite/' element={<Main/>} />
                <Route path='/sobre' element={<About/>} />
            </Routes>
        </Router>





    )
}