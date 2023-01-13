import React, {ChangeEvent} from "react";
import s from './CounterChanged.module.css';
import {Button} from "../Button/Button";

type CounterChangedType = {
    startValue: number
    maxValue: number


}

export const CounterChanged = (props: CounterChangedType) => {
    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {


    }
    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

    }
    let onSetClick = () => {

    }


    const disabledSet = props.startValue >= props.maxValue
        ? true : props.startValue < 0
    const finalInputClass = disabledSet ? s.errorInput : s.defaultInput

    return (
        <div className={s.CounterChanged}>
            <div className={s.setInput}>
                <div className={s.setValue}>
                    <h2>max value:</h2>
                    <input className={s.defaultInput}
                           key={'MAX_VALUE'}
                           value={props.maxValue}
                           onChange={onChangeMaxValue}
                           type={'number'}

                    />
                </div>
                <div className={s.setValue}>
                    <h2>start value:</h2>
                    <input className={finalInputClass}
                           key={'START_VALUE'}
                           value={props.startValue}
                           onChange={onChangeStartValue}
                           type={'number'}

                    />
                </div>
            </div>
            <div className={'number' ? s.buttons : s.disabled}>
                <Button key={'setValue'}
                        title={'set'}
                        onClick={onSetClick}
                        disabled={disabledSet}

                />

            </div>
        </div>
    )
}

