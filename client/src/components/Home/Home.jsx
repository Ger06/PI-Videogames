import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createdGames, filterByGenre, getAllVideoGames, getGenres, orderByName, orderByRating } from '../../actions/index';
import Card from '../Card/Card';
import NavBar from '../NavBar';
import Paginado from '../Paginado/Paginado';
import style from './Home.module.css';

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
    const currentGame = allVideoGames?.slice(indexOfFirstGame, indexOfLastGame)

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
    function handleRating (e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrden (`Ordenado ${e.target.value}`)
    }

    return(
        
        <div className={style.img}>
            {
                loading ? <h1 className={style.loading}>  </h1> : <>
            
            <Link to = '/addgame' className={style.create}> CREATE A NEW VIDEOGAME</Link>
                <h1 className={style.titulo}>API GAMES</h1>
                <NavBar/>
                    <button onClick={e=>{handleOnClick(e)}}  className={style.cargar} >
                        VOLVER A CARGAR LOS JUEGOS
                    </button>
            <div className={style.select}>
                <select onChange={e=>{handleSort(e)}}>
                    <option value='' > Orden A-Z</option>
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
                <select onChange={e=>{handleRating(e)}}>
                    <option value=''>Orden por Rating</option>
                    <option value='mayor'>Mayor Rating</option>
                    <option value='menor'>Menor Rating</option>
                </select>

            </div>

            <Paginado 
            gamesPerPage={gamesPerPage}
            allVideoGames={allVideoGames?.length}
            paginado={paginado}

            />
            <div className={style.content}>
            {
                currentGame && currentGame.map(v=>{
                    return(
                        <div className={style.card} key={v.id}>
                            <Link  to = {`/gamedetail/${v.id}` }  key={v.id} className={style.link}>
                                
                                <Card  name={v.name} genres={v.genres} image={v.image} rating={v.rating} />
                               
                            </Link>
                        </div>
                    )
                })
            }
            </div>
            </>
            }
        </div>

    )
    
}


export default Home