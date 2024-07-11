import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui'
import { useCheckOut } from '../hooks/useCheckOut'


// Router que se encarga de administrar los permisos al usuario de acceder a rutas, dependiendo del path en el que se encuentre y si ha hecho login exitosámente.
export const AppRouter = () => {

    const status = useCheckOut();

    // Se implementa nuestro loader para que se muestre mientra se valida si el usuario esta loggeado o no
    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                status === 'authenticated'
                    ? <Route path='/*' element={<JournalRoutes />} />
                    : <Route path='/auth/*' element={<AuthRoutes />} />
            }

            <Route path='/*' element={<Navigate to='/auth/login' />} />

            {/* NOTAS */}
            {/* Si se encuentra en el path que tiene al incio auth, redireccionará a las rutas que se encuentran definidas en el componente AuthRoutes */}
            {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}

            {/* Si el usuario se encuentra en un el path /, lo redireccionará a las rutas que se encuentran definidas en el componente JournalRoutes */}
            {/* <Route path='/*' element={<JournalRoutes />} /> */}
        </Routes>
    )
}
