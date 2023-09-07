import React , {useEffect, useState}from 'react'
import { getAll } from '../../../commonjs/db.js';
import Item from './Item.jsx'

const Lister = () => {

    const [categories, setCategories] = useState([]) ;

    const initData = async () => {

        const dataTemp = await getAll('category')

        setCategories(dataTemp) ;
    
    }
    useEffect(() => {
        initData() ;
        }, [])
    

    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Row 1 */}
                {categories?.map(data => <Item key={data.id} category={data}/> )}

                </tbody>
            </table>
        </div>
    )
}

export default Lister