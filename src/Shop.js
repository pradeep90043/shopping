import React from 'react'
import { useSelector } from 'react-redux'


const Shop = () => {
    const changeMoney  = useSelector(state => state.updateAmount)
    return (
        <div>
            <h3>your balance : {changeMoney} </h3>
        </div>
    )
}

export default Shop
