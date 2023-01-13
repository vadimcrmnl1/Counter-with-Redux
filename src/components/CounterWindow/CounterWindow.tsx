import React from "react";
import s from "./CounterWindow.module.css";
import {Button} from "../Button/Button";


type CounterWindowType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    maxValue: number


    editMode: boolean
    setEditMode: (editMode: boolean) => void
}

export const CounterWindow = (props: CounterWindowType) => {

    const incValue = () => {
        props.setValue(props.value + 1)
    }
    const ResetValue = () => {
        props.setValue(props.startValue)
    }


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
                        onClick={incValue}
                        disabled={disabledSet}

                />
                <Button title={'reset'}
                        onClick={ResetValue}
                        disabled={false}
                />

            </div>
        </div>
    )
}

