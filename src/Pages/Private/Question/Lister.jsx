import React , {useEffect, useState}from 'react'
import { getAll } from '../../../commonjs/db.js';
import Item from './Item2'

const Lister = () => {

    const [asks, setAsks] = useState([]) ;

    const initData = async () => {

        const dataTemp = await getAll('questions')

        setAsks(dataTemp) ;
    
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
                        <th>Cat.</th>
                        <th>Question</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Row 1 */}

                {asks?.map(data => <Item key={data.id} question={data}/> )}

                </tbody>
            </table>
        </div>
    )
}

export default Lister