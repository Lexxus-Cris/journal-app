import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

// Custom hook que verifica si el usuario esta loggeado en firebase y retorna el status
export const useCheckOut = () => {
    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    // Función para mantener el estado de autenticación

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });

    }, []);

    return status;
}
