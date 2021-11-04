import React from 'react';
import card from './Card.module.css'
import mario from '../../image/mario.jpg'

function Card({name, image, genres,rating}) {
    return (
        <div className={card.card} >
            <div className={card.top}>
                <h3 className={card.title}>{name}</h3>
                <h5 className={card.title}>{genres}</h5>
            </div>
            <img src={image ? image : mario } alt= 'img not found' className={card.image} />
            <div className={card.details}>Click for details</div>
            <div className={card.details}> ⭐ {rating}</div>
            
        </div>
    )
}

export default Card
