import { configureStore } from "@reduxjs/toolkit";
import { sliceCompteur } from "./compteurStore";
import { sliceUser } from "./userStore";


//exporter les actions
// Modèles = export const {mes fonstions , ...  } = monSlice.actions ;
export const {plus , moins} = sliceCompteur.actions ;
export const {initUser , resetUser} = sliceUser.actions ;

//Exportation du store 
export const store = configureStore ({ 
    reducer : {
        //mon reducer : monSlice.reducer
        compteur : sliceCompteur.reducer ,
        user : sliceUser.reducer 
    }
})