import {ADD_NEW_GAME, ALL_GENRES, FILTER_BY_GENRE, GET_GAME_BY_NAME, GET_POST, GET_VIDEOGAMES, ORDER_BY_NAME, ORIGIN_GAME, RECEIVE_POST, VIDEOGAME_DETAIL} from '../constantes'

const initialState = {
    videogames: [],
    allVideoGames : [],
    genres: [],
    detail: {},
    post : {},
    loading: false
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideoGames: action.payload
            }
        case ALL_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case ADD_NEW_GAME:
            return{
                ...state
            }
        case FILTER_BY_GENRE:
            const allVideoGames = state.allVideoGames;
            const genreFilter = action.payload === 'All Genres' ? allVideoGames : allVideoGames.filter(g=> g.genres.toString().includes(action.payload))
            return {
                ...state,
                videogames: genreFilter
            }
        case ORIGIN_GAME:
            let originGame = ''
            if (action.payload !== 'all') { originGame = (action.payload === 'created' ? state.allVideoGames.filter(g=> g.id.length > 8) :
                 state.allVideoGames.filter(g=>typeof g.id === 'number'))}
            return {
                ...state,
                videogames: action.payload === 'all' ? state.allVideoGames : originGame
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.videogames.sort( function (a, b) {
                    if (a.name > b.name){
                        return 1;
                    }
                    if (b.name > a.name){
                        return -1;
                    }
                    return 0;
                }):
                state.videogames.sort(function (a, b) {
                    if (a.name > b.name){
                        return -1
                    }
                    if (b.name > a.name){
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: sortedArr
            }
        case GET_GAME_BY_NAME:
            return{
                ...state,
                videogames: action.payload
            }
        case VIDEOGAME_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        case GET_POST:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_POST:
            return {
                ...state,
                loading: false,
                post: action.post
            }

    default: return state
    }
    
}

export default rootReducer;