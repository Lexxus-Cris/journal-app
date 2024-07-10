import { registerUser, signInWithGoogle } from "../../firebase/providers";
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


export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUser({email, password, displayName});

        if (!ok) return dispatch( logout({errorMessage}));

        dispatch( login({ uid, displayName, email, photoURL }) );
    }
}
