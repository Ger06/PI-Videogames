import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { addNewGame, getGenres } from '../actions';

function validate(form){
    let errors = {};
    if(!form.name){
        errors.name = 'Se requiere un nombre'
    }
    if(!form.platforms){
        errors.platforms = 'Es necesario al menos una plataforma'
    }
    if (!form.description){
        errors.description = 'Se requiere descrición'
    }
    if (!form.genres){
        errors.genres = 'Seleccionar al menos un género'
    }
    if(form.released){
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if(!form.released.match(regEx)) { errors.released= 'Invalid format'}
        var d = new Date(form.released);
        var dNum = d.getTime();
        if(!dNum && dNum !== 0)  {errors.released = 'NaN value, Invalid date'}
        // return d.toISOString().slice(0,10) === dateString;
    }
    return errors
}

export function CreateGame() {
    const dispatch = useDispatch();
    const history = useHistory()
    const genres = useSelector(state => state.genres)


    useEffect(() => {
       dispatch(getGenres()) 
    }, [])

    const [form, setForm] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres:[]
    })

    const [errors, setErrors] = useState({})

    function handleOnChange (e){
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...form,
            [e.target.name] : e.target.value
        }))
        }
    
    function handleOnSubmit(e){
        e.preventDefault();
        dispatch (addNewGame(form))
        setForm({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: []
        })
        alert('Game Created')
        history.push('/home')
    }

    function handlePlatforms(e){
        setForm({
            ...form,
            platforms: [e.target.value]
        })
    }

    function handleGenres(e){
        setForm({
            ...form,
            genres: [...form.genres, e.target.value]
        })
    }

    function removeGenre(g){
        setForm({
            ...form,
            genres: form.genres.filter(f=> f !== g)})
        
    }

    

    return (
        <div>
            <Link to='/home'><button>Home</button></Link>
            <form onSubmit={e=>handleOnSubmit(e)}>
                <label>name</label>
                <input type='text' value={form.name} name= 'name' onChange={e=>handleOnChange(e)}/>
                {errors.name && (
                    <p className = 'danger'>{errors.name}</p>
                 )}
                <label>description</label>
                <textarea type='text' value={form.description} name= 'description' onChange={e=>handleOnChange(e)}/>
                {errors.description && (
                    <p className = 'danger'>{errors.description}</p>
                 )}
                <label>released</label>
                <input type='text' value={form.released} placeholder='yyyy-mm-dd' name= 'released' onChange={e=>handleOnChange(e)}/>
                {errors.released && (
                    <p className = 'danger'>{errors.released}</p>
                 )}
                <label>rating</label>
                <input type='float' value={form.rating} name= 'rating' onChange={e=>handleOnChange(e)}/>
                <label>platforms</label>
                <input type='text' value={form.platforms} name= 'platforms' onChange={e=>handlePlatforms(e)}/>
                {errors.platforms && (
                    <p className = 'danger'>{errors.platforms}</p>
                 )}
                <select name= 'genres' onChange={e=>handleGenres(e)}> 
                        <option value= 'Select Genre'> Select Genre </option>
                    {
                        genres && genres.map(g=>(
                            <option key={g.id} value={g.name}> {g.name} </option>
                        ))
                    }
                </select>
                <ul> Genres Selected
                    <li>{form.genres.map(g=>
                    <div key={g}>
                    {g} 
                    <button onClick={()=>removeGenre(g)}>X</button>
                    </div>
                    )}
                    </li>
                    
                </ul>
                {errors.genres && (
                    <p className = 'danger'>{errors.genres}</p>
                 )}
               
                <button type='submit'>Agregar Videogame</button>                                          
            </form>
                
        </div>
    )

}
