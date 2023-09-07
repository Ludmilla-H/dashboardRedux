import React, { useEffect, useState } from 'react'
import { getOneById } from '../../../commonjs/db'


const Item = ({ question }) => {

    const [category, setCategory] = useState({})

    const getCategory = async () => {
        const dataCategory = await getOneById('category', question.category);
        setCategory(dataCategory);
    }

    useEffect(() => {
        getCategory();
    }, [])
  return (
    <div>Item</div>
  )
}

export default Item