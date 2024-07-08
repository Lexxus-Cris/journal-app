import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
    return (
        // Rutas accesibles despúes de que se haya auténticado el usuario.
        <Routes>
            {/* Si el usuario está auténticado podra ingresar al componente JournalPage */}
            <Route path='/' element={<JournalPage />} />

            {/* Si el usuario quiere ingresar a una ruta diferente a / será redireccionado a la ruta inicial */}
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
