import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

// Routes para la autenticación
export const AuthRoutes = () => {
    return (
        <Routes>
            {/* Ruta del login */}
            <Route path='login' element={<LoginPage />} />

            {/* Ruta de la página de registro */}
            <Route path='register' Element={<RegisterPage />} />

            {/* Si el usuario quiere ingresar a una ruta diferente a las que se encuentran en AuthRoutes y no esta autenticado, sera redireccionado a /auth/login */}
            <Route path='/*' element={ <Navigate to='/auth/login' />} />
        </Routes>
    )
}
