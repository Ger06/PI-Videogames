import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getGameByName } from '../actions';

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
        <div>
            <form onSubmit={e=>handleSubmit(e)}>
                <input 
                    placeholder= 'Game Name...'
                    type = 'text'
                    onChange={e=>{handleInput(e)}}
                    value={games}
                    />
                <button type= 'submit' >Buscar</button>
            </form>
        </div>
    )
}

export default NavBar
