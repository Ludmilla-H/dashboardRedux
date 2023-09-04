import { createSlice } from "@reduxjs/toolkit";
export const sliceCompteur = createSlice ({

    //Nom du réduceur
    name : "compteur",
    //État initial
    initialState : 0,
    //fonction d'action sur le réduceur
    reducers :{
        plus:(state, action) => {return state +1} ,
        moins:(state, action) => {return state -1} ,
    }
    //incrémenter mon réducer dans mon application

})