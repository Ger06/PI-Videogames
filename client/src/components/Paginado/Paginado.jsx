import React from 'react';
import pages from './Paginado.module.css'

function Paginado({gamesPerPage, allVideoGames, paginado}) {
    
    const pageNumbers = []
    for (let i = 1; i <=Math.ceil(allVideoGames/gamesPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return(
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map((number,index)=>{
                        return (
                        <span key={index}>
                        <a onClick={()=> paginado(number)} className={pages.numbers}>  {number}- </a>
                        </span>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginado
