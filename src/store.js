import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';

const feedback = (state= [], action) =>{
        if(action.type === 'GET_FEEDBACK'){
            return action.payload
        }
      
        return state
}

const feeling = (state = [], action)=> {
    if(action.type === 'ADD_FEELING'){
        return [ ...state, action.payload]
    }
    if (action.type === 'RESET_FEELING'){
        return []
    }
    return state
}

const support = (state= [], action)=> {
    if(action.type === 'ADD_SUPPORT'){
        return [...state, action.payload]
    }
    if (action.type === 'RESET_SUPPORT'){
        return []
    }
    return state
}

const understanding =(state= [], action ) => {
    if(action.type === "ADD_UNDERSTANDING"){
        return [...state, action.payload]
    }
    if (action.type === 'RESET_UNDERSTANDING'){
        return []
    }
    return state 
}

const comments = (state=[], action )=>{
    if(action.type === "ADD_COMMENT"){
        return [...state,action.payload]
    }
    if (action.type === 'RESET_COMMENTS'){
        return []
    }
    if(action.type === 'CHANGE_COMMENT'){
        return []
    }
    return state 
}

const store = createStore(
    combineReducers({
        feedback,
        feeling,
        support,
        comments,
        understanding,
    }),
    applyMiddleware(logger)
);

export default store 