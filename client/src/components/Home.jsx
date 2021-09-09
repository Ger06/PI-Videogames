import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createdGames, filterByGenre, getAllVideoGames, getGenres, orderByName } from '../actions/index';
import Card from './Card';
import Paginado from './Paginado';

function Home() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllVideoGames());
        dispatch (getGenres())
      },[dispatch])

    const allVideoGames = useSelector (state => state.videogames)
    const genres = useSelector(state => state.genres)
    const loading = useSelector(state=> state.loading)
    
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState (1);
    const [gamesPerPage, setGamesPerPage] = useState (15);
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGame = allVideoGames.slice(indexOfFirstGame, indexOfLastGame)

    const paginado = (pageNumber) =>{
        setCurrentPage (pageNumber)
    }

  
    
    

    function handleOnClick(e){ 
        e.preventDefault();
        dispatch (getAllVideoGames());
    }

    function handleFilterGenre (e){
        dispatch (filterByGenre(e.target.value));
    }

    function handleCreate (e){
        dispatch(createdGames(e.target.value))
    }

    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden (`Ordenado ${e.target.value}`)
    }

    return(
        
        <div>
            {
                loading ? <h1> loading </h1> : <>
            
            <Link to = '/addgame'> Crea tu propio videogame</Link>
                <h1>Api Games</h1>
                    <button onClick={e=>{handleOnClick(e)}}  >
                        Volver a cargar los videojuegos
                    </button>
            <div>
                <select onChange={e=>{handleSort(e)}}>
                    <option value = 'asc'>Ascendente</option>
                    <option value = 'desc'>Descendente</option>
                </select>
                <select onChange = {e=>{handleFilterGenre(e)}}>
                    <option value = 'All Genres'>All Genres</option>
                    
                    {
                        genres && genres.map(g=>(
                            <option value = {g.name} key={g.id}>{g.name}</option>
                        ))
                    }
                </select>
                <select onChange={e=>{handleCreate(e)}}>
                    <option value='all'>Todos los juegos</option>
                    <option value='api'>API Games</option>
                    <option value='created'>Creados</option>
                </select>

            </div>

            <Paginado 
            gamesPerPage={gamesPerPage}
            allVideoGames={allVideoGames.length}
            paginado={paginado}

            />

            {
                currentGame && currentGame.map(v=>{
                    return(
                        <Link to = {`/gamedetail/${v.id}` } key={currentGame.id}>
                            <Card  name={v.name} genres={v.genres} image={v.image}/>
                        </Link>
                    )
                })
            }
            </>
            }
        </div>

    )
    
}


export default Home