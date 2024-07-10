import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

// Función encargada de realizar el inicio de sesión con Google
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        // de aqui podemos obtener un access token del usuario
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        // Aquí obtenemos la información del usuario
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // user info
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);

        // manejo de errores
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorCode,
            errorMessage,
            credential
        }
    }
}

// Función que se encarga de realizar el registro de nuevos usuarios en firebase
export const registerUser = async({ email, password, displayName}) => {

    try {

        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = response.user
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

// Función que realiza el inicio de sesión con email y password
export const loginWithEmailPassword = async({ email, password }) => {

    try {
        //! signInWithEmailAndPassword función para hacer la autenticación
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password );

        const { photoURL, uid, displayName } = response.user;

        return {
            ok: true,
            email,
            photoURL,
            uid,
            displayName
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}
