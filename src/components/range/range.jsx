import classes from './range.module.css';
import {useEffect, useId, useRef, useState} from "react";

const rangeParam = [0, 1000];

const Range = ({title, rangeValue, setRange}) => {

    const rangeId = useId();

    let progressBarSize = useRef('0% 100%');
    const handleChange = (e) => {
        setRange(+e.target.value);
        const newSize = (e.target.value - e.target.min) * 100 / (e.target.max - e.target.min);
        progressBarSize.current = newSize + '% 100%';

    }


    return (
        <div className={classes.rangeWrapper}>
            <div className={classes.rangeInfo}>
                <label htmlFor={rangeId}>{title}:</label>
                <label>
                    <input
                        type="number" min={rangeParam[0]} max={rangeParam[1]} step={1}
                        value={rangeValue} onChange={handleChange}
                        className={classes.numberInput}
                    />
                    GB
                </label>
            </div>
            <div className={classes.rangeContainer}>
                <input
                    type="range" min={rangeParam[0]} max={rangeParam[1]} step={1} id={rangeId}
                    value={rangeValue} onChange={handleChange} className={classes.rangeInput}
                    style={{backgroundSize: progressBarSize.current}}
                />
            </div>
        </div>
    );
};

export default Range;