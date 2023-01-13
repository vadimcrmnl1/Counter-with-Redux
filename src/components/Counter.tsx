import React from "react";


import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
    incValueAC,
    InitialStateType,
    resetValueAC,
    setEditModeAC,
    setMaxValueAC,
    setStartValueAC
} from "../reducers/counter-reducer";

import s from "./CounterChanged/CounterChanged.module.css";
import style from './CounterWindow/CounterWindow.module.css'
import {Button} from "./Button/Button";


export function Counter() {


    const displayWindow = () => {
        return <div className={numberFullClass}>{counter.value}</div>

    }
    let counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()
    const numberFullClass = counter.value >= counter.maxValue ? s.numberFull : s.number
    const disabledSet = counter.startValue >= counter.maxValue ? counter.startValue < 0 : counter.maxValue === counter.value
    const disabledSet1 = counter.startValue >= counter.maxValue
        ? true : counter.startValue < 0
    const finalInputClass = disabledSet1 ? s.errorInput : s.defaultInput
    const increment = () => {
        dispatch(incValueAC(counter.value))
    }
    const resetValue = () => {
        dispatch(resetValueAC(counter.value = counter.startValue))
    }
    const setEditMode = () => {
        dispatch(setEditModeAC(!counter.isEditMode))
    }
    const setStartValue = () => {
        dispatch(setStartValueAC(counter.startValue))
    }
    const setMaxValue = () => {
        dispatch(setMaxValueAC(counter.maxValue))
    }

    return (
        <div>
            <div className={s.CounterChanged}>
                <div className={s.setInput}>
                    <div className={s.setValue}>
                        <h2>max value:</h2>
                        <input className={s.defaultInput}
                               key={'MAX_VALUE'}
                               value={counter.maxValue}
                               onChange={setMaxValue}
                               type={'number'}

                        />
                    </div>
                    <div className={s.setValue}>
                        <h2>start value:</h2>
                        <input className={finalInputClass}
                               key={'START_VALUE'}
                               value={counter.startValue}
                               onChange={setStartValue}
                               type={'number'}

                        />
                    </div>
                </div>
                <div className={'number' ? s.buttons : s.disabled}>
                    <Button key={'setValue'}
                            title={'set'}
                            onClick={() => {
                            }}
                            disabled={disabledSet}

                    />

                </div>
            </div>
            <div className={style.CounterWindow}>
                {displayWindow()}

                <div className={style.buttons}>
                    <Button title={'inc'}
                            onClick={increment}
                            disabled={disabledSet}

                    />
                    <Button title={'reset'}
                            onClick={resetValue}
                            disabled={false}
                    />

                </div>
            </div>
        </div>
    )
}