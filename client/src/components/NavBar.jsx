import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getGameByName } from '../actions';
import estilo from './NavBar.module.css'

function NavBar() {
    const  dispatch = useDispatch();
    const[games, setGames] = useState('')

    function handleInput(e){
        setGames( e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch (getGameByName(games))
        setGames('')
        
    }
    
    
   
    return (
        <div className={estilo.div}>
            <form onSubmit={e=>handleSubmit(e)} className={estilo.form}>
                <input className={estilo.input}
                    placeholder= 'Game Name...'
                    type = 'text'
                    onChange={e=>{handleInput(e)}}
                    value={games}
                    />
                <button type= 'submit' className={estilo.button} >SEARCH</button>
            </form>
        </div>
    )
}

export default NavBar
