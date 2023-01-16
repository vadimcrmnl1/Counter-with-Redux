import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from "../reducers/counter-reducer";


function saveToLocalStorage (state : AppRootStateType) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('persistantState', serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

function loadFromLocalStorage () {
    try {
        const serialisedState = localStorage.getItem('persistantState')
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadFromLocalStorage())
store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
