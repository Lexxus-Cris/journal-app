import { checkingCredentials } from "./authSlice";

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
    }
}
