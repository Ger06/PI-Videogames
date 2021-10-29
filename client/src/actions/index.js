import axios from 'axios';
import {VIDEOGAMES_URL, GET_VIDEOGAMES, FILTER_BY_GENRE, ORIGIN_GAME, 
    ORDER_BY_NAME, GET_GAME_BY_NAME, VIDEOGAME_URL, GENRE_URL, ALL_GENRES, 
    ADD_NEW_GAME, VIDEOGAME_DETAIL, GET_POST, RECEIVE_POST, ORDER_BY_RATING} from '../constantes.js'


export function getAllVideoGames() {
    try {
        return async function (dispatch) {
            dispatch(getPost())
            return axios.get('/videogames')
            .then(videogames=>{
                dispatch({
                    type: GET_VIDEOGAMES,
                    payload: videogames.data
                })
            })
            .then(d=> dispatch(receivePost(d)))

        }
    } catch (error) {
        console.log (error)
    }
    
    
}

export function getGameByName(payload) {
    try {
        return async function(dispatch){
            return axios.get(`/videogames?name=${payload}`)
            .then(videogames=>{
                dispatch({
                    type: GET_GAME_BY_NAME,
                    payload: videogames.data
                })
            })
        }
    } catch (error) {
        console.log (error)
    }
}

export function gameDetail(id){
    try {
        return async  function (dispatch){
            dispatch(getPost())
            return axios.get('/videogame' + id)
                .then(videogame =>{
                    dispatch({
                        type: VIDEOGAME_DETAIL,
                        payload: videogame.data
                    })
                })
                .then(d=> dispatch(receivePost(d)))

        }
    } catch (error) {
        console.log (error)
    }
    
}
 

export function getGenres() {
    return async function(dispatch){
        return axios.get ('/genres')
        .then(genres=>{
            dispatch ({
                type: ALL_GENRES,
                payload: genres.data

            })
        })
    }
}

export function addNewGame(payload) {
    try {
        return async function(dispatch){
            return axios.post ('/videogame', payload)
            .then(game=>{
                dispatch({
                    type: ADD_NEW_GAME,
                    payload: game.data
                })
            })
        }
    } catch (error) {
        console.log (error)
    }
}

export function filterByGenre(payload) {
    return {
        type : FILTER_BY_GENRE,
        payload
    }
}

export function createdGames(payload) {
    return {
        type: ORIGIN_GAME,
        payload
    }
}

export function orderByName (payload) {
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByRating (payload) {
    return{
        type: ORDER_BY_RATING,
        payload
    }
}

export function getPost() {
    return {
      type: GET_POST,
    }
  }
  
  export function receivePost(post) {
    return {
      type: RECEIVE_POST,
      post
    }
  }