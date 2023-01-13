import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {InitialStateType} from "../reducers/counter-reducer";


export function CounterWIthRedux () {
    let counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    return (

    )
}