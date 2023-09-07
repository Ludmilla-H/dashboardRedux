import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//connexion a partir d'une adresse email et d'un mdp
export const loginByEmail = async (email , password)=> {
    try {
        return await signInWithEmailAndPassword(auth , email , password) ;
        
    } catch (error) {

        return error.code ;
        
    }

} ; 

//deconnexion
export const logout = () => {
    signOut(auth) ;
}