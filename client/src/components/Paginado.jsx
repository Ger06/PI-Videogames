import React from 'react'

function Paginado({gamesPerPage, allVideoGames, paginado}) {
    
    const pageNumbers = []
    for (let i = 1; i <=Math.ceil(allVideoGames/gamesPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return(
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number=>{
                        return (
                        <span key={number}>
                        <a onClick={()=> paginado(number)}> {number}- </a>
                        </span>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginado
