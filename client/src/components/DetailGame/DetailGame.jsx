import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { gameDetail } from '../../actions'
import image from './DetailGame.module.css'

function DetailGame() {
    
    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)
    const loading = useSelector(state => state.loading)
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(gameDetail(id))  
    }, [dispatch])

    

    
    
    return (
        <div className={image.pagina}>
            <Link to='/home'>
                <button className={image.volver}>VOLVER</button>
            </Link>
            {loading ? <h1>loading</h1>:  
            <>
            {
                detail?
                <div className={image.box}>
                    <div className={image.estructura}> 
                        <div>
                            
                            <h4> Genres: {detail.genres}</h4>
                            <h4> Platforms: {detail.platforms}</h4>
                        </div>
                        <div>
                            <h4> Date released: {detail.released}</h4>
                            <h4> Rating: {detail.rating}</h4>
                        </div>
                    </div>
                    
                    <img src={detail.image} className={image.imagen}/>
                    <div className={image.info} >
                        <h1> {detail.name}</h1>
                        <h4>{detail.description?.replace(/<[^>]*>?/g, '')}</h4>
                    
                    
                    </div>
                </div>:
                <div>loading</div>
            }</>}
           
        </div>
    )
}

export default DetailGame
