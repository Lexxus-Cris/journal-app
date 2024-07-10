import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

// Metódo asincrono para hacer la validación de login por medio de email y password
export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}

// Método asíncrono para hacer la validación cuando inicie sesión con google
export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}
