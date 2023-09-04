import { configureStore } from "@reduxjs/toolkit";
import { sliceCompteur } from "./compteurStore";

//exporter les actions
// Modèles = export const {mes fonstions , ...  } = monSlice.actions ;
export const {plus , moins} = sliceCompteur.actions ;

//Exportation du store 
export const store = configureStore ({ 
    reducer : {
        //mon reducer : monSlice.reducer
        compteur : sliceCompteur.reducer ,
    }
})