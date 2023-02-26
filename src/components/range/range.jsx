import classes from './range.module.css';
import {useId, useState} from "react";

const rangeParam = [0, 1000];

const Range = ({title, setCompaniesData}) => {

    const rangeId = useId();

    const [rangeValue, setRangeValue] = useState(0);

    const handleChange = (e) => {
        setRangeValue(e.target.value);
    }

    return (
        <div className={classes.rangeWrapper}>
            <div className={classes.rangeInfo}>
                <label htmlFor={rangeId}>{title}:</label>
                <label>
                    <input
                        type="number" min={rangeParam[0]} max={rangeParam[1]}
                        value={rangeValue} onChange={handleChange}
                        className={classes.numberInput}
                    />
                    GB
                </label>
            </div>
            <div className={classes.rangeContainer}>
                <input
                    type="range" min={rangeParam[0]} max={rangeParam[1]} step='1' id={rangeId}
                    value={rangeValue} onChange={handleChange} className={classes.rangeInput}
                />
            </div>
        </div>
    );
};

export default Range;