import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

// Router que se encarga de administrar los permisos al usuario de acceder a rutas, dependiendo del path en el que se encuentre y si ha hecho login exitosámente.
export const AppRouter = () => {
    return (
        <Routes>
            {/* Si se encuentra en el path que tiene al incio auth, redireccionará a las rutas que se encuentran definidas en el componente AuthRoutes */}
            <Route path='/auth/*' element={<AuthRoutes />} />

            {/* Si el usuario se encuentra en un el path /, lo redireccionará a las rutas que se encuentran definidas en el componente JournalRoutes */}
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    )
}