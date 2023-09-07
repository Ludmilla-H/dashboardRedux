import React, { useState } from 'react'
import { addDataToCollection } from '../../../commonjs/db';

const Ajouter = () => {

    const [catName, setCatName] = useState("");

    //récuperation et maj de la donnée de l'input
    const handleChangeCategory = (event) => {
        setCatName(event.target.value)
    }

    //sauvegarde en base de donnée
    const save = async () => {

        if (catName != '') {
            console.log("save")

            //ajouter une categorie en base
            const data = {name : catName} //formattage de la data sous forme d'objet
            await addDataToCollection("category" , data)
            setCatName("") ;
    
        } else {
            console.log("no save")
        }
    }

    return (
        <div className='flex flex-row gap-4 mt-6'>
            <input type="text" name="formCategory" value={catName} onChange={handleChangeCategory} placeholder="Ajouter une categorie" className="input input-bordered input-info w-full max-w-xs" />
            <button className="btn btn-active" onClick={save}>Ajouter une catégorie</button>

        </div>
    )
}

export default Ajouter