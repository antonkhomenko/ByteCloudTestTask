import classes from './range.module.css';
import {useEffect, useId, useState} from "react";

const rangeParam = [0, 1000];

const Range = ({title, rangeValue, setRange}) => {

    const rangeId = useId();


    const handleChange = (e) => {
        setRange(+e.target.value);
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
                />
            </div>
        </div>
    );
};

export default Range;