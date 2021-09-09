import React from 'react'

function Card({name, image, genres}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={image} alt= 'img not found' width='200px' height='250px' />
        </div>
    )
}

export default Card
