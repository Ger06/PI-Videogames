import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { gameDetail } from '../actions'

function DetailGame() {
    
    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)
    const loading = useSelector(state => state.loading)
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(gameDetail(id))  
    }, [dispatch])

    

    
    
    return (
        <div>
            <Link to='/home'>
                <button>VOLVER</button>
            </Link>
            {loading ? <h1>loading</h1>:  
            <>
            {
                detail?
                <div>
                    <h1> {detail.name}</h1>
                    <img src={detail.image} />
                    <h2>{detail.genres}</h2>
                    <h4>{detail.description?.replace(/<[^>]*>?/g, '')}</h4>
                    <h6>{detail.released}</h6>
                    <h6>{detail.rating}</h6>
                    <h6>{detail.platforms}</h6>
                </div>:
                <div>loading</div>
            }</>}
           
        </div>
    )
}

export default DetailGame
