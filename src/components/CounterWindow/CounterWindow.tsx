import React from "react";
import s from "./CounterWindow.module.css";
import {Button} from "../Button/Button";


type CounterWindowType = {
    value: number
    startValue: number
    maxValue: number
    increment: () => void
    resetValue: () => void
    setEditMode: () => void
}

export const CounterWindow = (props: CounterWindowType) => {

    const numberFullClass = props.value >= props.maxValue ? s.numberFull : s.number
    const disabledSet = props.startValue >= props.maxValue ? props.startValue < 0 : props.maxValue === props.value
    const displayWindow = () => {
        return <div className={numberFullClass}>{props.value}</div>

    }

    return (
        <div className={s.CounterWindow}>
            {displayWindow()}

            <div className={s.buttons}>
                <Button title={'inc'}
                        onClick={props.increment}
                        disabled={disabledSet}

                />
                <Button title={'reset'}
                        onClick={props.resetValue}
                        disabled={false}
                />
                <Button title={'set'}
                        onClick={props.setEditMode}
                        disabled={false}
                />

            </div>
        </div>
    )
}

