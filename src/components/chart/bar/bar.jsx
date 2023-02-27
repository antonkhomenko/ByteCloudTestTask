import classes from './bar.module.css';
import {useMemo} from "react";

const Bar = ({price, greatestPrice}) => {

    const barRate = useMemo(() => price / greatestPrice * 100, [price]);


    return (
        <span className={classes.bar} style={{width: `${barRate}%`}}>
            <span className={classes.price}>{price} $</span>
        </span>
    );
};

export default Bar;