import { loginWithEmailPassword, registerUser, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

// Metódo asincrono para hacer la validación de login por medio de email y password
export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}

// Thunk action para el inicio de sesión con Google
export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

// Thunk action para el registro de usuarios
export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUser({email, password, displayName});

        if (!result.ok) return dispatch( logout(result.errorMessage));

        dispatch( login(result) );
    }
}

// Thunk action para iniciar sesión con email y usuario
export const startLoginWithEmailPass = ({ email, password }) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}
