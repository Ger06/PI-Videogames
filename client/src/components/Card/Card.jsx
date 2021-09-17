import React from 'react';
import card from './Card.module.css'

function Card({name, image, genres,rating}) {
    return (
        <div className={card.card} >
            <div className={card.top}>
                <h3 className={card.title}>{name}</h3>
                <h5 className={card.title}>{genres}</h5>
            </div>
            <img src={image ? image : 'https://media.vandal.net/i/1280x720/8-2021/202181012523773_1.jpg.webp'} alt= 'img not found' className={card.image} />
            <div className={card.details}>Click to details</div>
            <div className={card.details}> ⭐ {rating}</div>
            
        </div>
    )
}

export default Card
