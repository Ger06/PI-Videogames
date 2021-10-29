import React from 'react'
import sytle from './CreateGame/CreateGame.module.css'

function boton({funcion, texto}) {
    return (
        <div >
            <button className={sytle.btn} onClick={funcion}> {texto}</button>
        </div>
    )
}

export default boton
