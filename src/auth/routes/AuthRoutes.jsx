import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' Element={LoginPage} />

            <Route path='register' Element={RegisterPage} />

            <Route path='/*' element={ <Navigate to='/auth/login' />} />
        </Routes>
    )
}
