import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { addNewGame, getGenres } from '../../actions';
import create from './CreateGame.module.css';

function validate(form){
    let errors = {};
    if(!form.name){
        errors.name = '* Se requiere un nombre'
    }
    if(!form.platforms){
        errors.platforms = '* Es necesario al menos una plataforma'
    }
    if (!form.description){
        errors.description = '* Se requiere descripción'
    }
    if (!form.genres){
        errors.genres = '* Seleccionar al menos un género'
    }
    if(form.released){
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if(!form.released.match(regEx)) { errors.released= '* Formato no valido'}
        var d = new Date(form.released);
        var dNum = d.getTime();
        if(!dNum && dNum !== 0)  {errors.released = '* Valor no válido, fecha no valida'}
        // return d.toISOString().slice(0,10) === dateString;
    }
    if(form.rating && (form.rating < 0 || form.rating > 5)){ errors.rating = '* Valor de rating no valido'}
    return errors
}

export  function CreateGame() {
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
        <div className={create.image} >
            <Link to='/home'><button className={create.home}> Home</button></Link>
            <form onSubmit={e=>handleOnSubmit(e)} className={create.form}>
                <div>
                    <div className={create.name} >
                        <label className={create.label}>Name: </label>
                        <input type='text' value={form.name} name= 'name' onChange={e=>handleOnChange(e)} placeholder= 'Videogame Name' required />
                        
                        {errors.name && (
                            <span >{errors.name}</span>
                        )}
                    </div>
                    <div className={create.releasedrating}>
                        <div className={create.released}>
                        <label className={create.label}>Released: </label>
                        <input type='text' value={form.released} placeholder='yyyy-mm-dd' name= 'released' onChange={e=>handleOnChange(e)}/>
                        {errors.released && (
                            <p className = 'danger'>{errors.released}</p>
                        )}
                        </div>
                        <div className={create.rating}>
                        <label className={create.label}>Rating: </label>
                        <input type='float' value={form.rating} name= 'rating' onChange={e=>handleOnChange(e)} placeholder= '0-5'/>
                        {errors.description && (
                            <p className = 'danger'>{errors.rating}</p>
                        )}
                        </div>
                    </div>
                    <div className={create.description}>
                        <label className={create.label}>Description: </label>
                        <textarea type='text' value={form.description} name= 'description' rows="10" cols="50" onChange={e=>handleOnChange(e)} required/>
                        {errors.description && (
                            <p className = 'danger'>{errors.description}</p>
                        )}
                    </div>
                </div>
                <div className={create.platformsgenres}>
                    <div className={create.platforms}>
                        <div>
                            <label className={create.label}>Platforms: </label>
                            <input type='text' placeholder='Playstation, Xbox...' value={form.platforms} name= 'platforms' onChange={e=>handlePlatforms(e)} required/>
                            {errors.platforms && (
                                <p>{errors.platforms}</p>
                            )}
                        </div>
                        <div>
                            <label className={create.label}>Select Genres</label>
                            <select name= 'genres' onChange={e=>handleGenres(e)}  required  > 
                            <option value="" > Seleccionar Géneros</option>
                                    
                                {
                                    genres && genres.map(g=>(
                                        <option key={g.id} value={g.name}> {g.name} </option>
                                    ))
                                }
                            </select>
                            <ul > ✅ Genres Selected
                                <ul>{form.genres.map(g=>
                                <div key={g} className={create.lista}>
                                {g} 
                                <button onClick={()=>removeGenre(g)} >X</button>
                                </div>
                            )}
                                </ul>
                            
                            </ul>
                            {errors.genres && (
                            <p>{errors.genres}</p>
                            )}
                        </div>
                    </div>
                    <div className={create.btnposition}>
                        <button type='submit' className={create.btn}>Agregar Videogame</button>
                    </div>
                </div>                                          
            </form>
                
        </div>
    )

}

export default CreateGame;