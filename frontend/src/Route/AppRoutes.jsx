import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SearchResultDashboard from '../pages/search-result-dashboard'


const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/search-result-dashboard'
                        element={
                            <SearchResultDashboard />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
