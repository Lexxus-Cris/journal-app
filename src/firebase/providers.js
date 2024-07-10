import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";



const googleProvider = new GoogleAuthProvider();


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

export const registerUser = async({ email, password, displayName}) => {

    try {

        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = response.user
        console.log(response);
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
