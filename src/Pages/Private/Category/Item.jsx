import React from 'react'

const Item = ({category}) => {
    return (
        <>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>{category?.name}</td>
                <td></td>
                <td></td>
            </tr>
        </>
    )
}

export default Item