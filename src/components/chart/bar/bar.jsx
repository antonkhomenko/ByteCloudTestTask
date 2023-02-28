import classes from './bar.module.css';
import {useMemo} from "react";

const Bar = ({price, greatestPrice, lowestPriceColor, name}) => {

    const barRate = useMemo(() => price / greatestPrice * 100, [price]);


    return (
        <span
            className={classes.bar}
            style={{
                width: `${barRate}%`,
                background: lowestPriceColor[0] === name ? lowestPriceColor[1] : 'linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(112,112,112,1) 100%)',
            }}
        >
            <span className={classes.price}>{price} $</span>
        </span>
    );
};

export default Bar;