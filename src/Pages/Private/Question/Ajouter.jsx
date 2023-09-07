import React, { useState , useEffect } from 'react'
import { addDataToCollection, getAll } from '../../../commonjs/db';

const Ajouter = () => {

    const [ask, setAsk] = useState("");
    const [categories, setCategories] = useState([]) ;
    const [selectedCategory, setSelectedCategory] = useState('') ;


    //Récuperation et maj de la donnée de l'input
    //Fonction d'action
    const handleChangeAsk = (event) => {
        setAsk(event.target.value)
    }

    //trace des changement d'état du select
    const handleDropCategory = (event) => {

        setSelectedCategory(event.target.value) ;


    }

    //sauvegarde en base de donnée
    const save = async () => {

        if (ask != '' && selectedCategory != '') {
            console.log("save")

            //ajouter une categorie en base
            const data = {category : selectedCategory , question: ask } //formattage de la data sous forme d'objet
            await addDataToCollection("questions", data)
            setAsk("");

        } else {
            console.log("no save")
        }
    }

    //gestion des categories

    const initData = async () => {

        const dataTemp = await getAll('category')

        setCategories(dataTemp) ;
    
    }
    useEffect(() => {
        initData() ;
        }, [])


    return (
        <div className='flex flex-row gap-4 mt-6'>

            <select value={selectedCategory} onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">

                <option defaultValue={''}>Selectionner une catégorie</option>
                {categories?.map(data => <option key={data.id} value={data.id}> {data?.name}</option>) }
                
            </select>

            <input type="text" value={ask} onChange={handleChangeAsk} placeholder="Ajouter une question" className="input input-bordered input-info w-full max-w-xs" />
            <button className="btn btn-active" onClick={save}>Ajouter une question</button>

        </div>
    )
}

export default Ajouter