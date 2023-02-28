import classes from './bar.module.css';
import {useEffect, useMemo, useState} from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions.js";

const Bar = ({price, greatestPrice, lowestPriceColor, name}) => {

    const barRate = useMemo(() => price / greatestPrice * 100, [price]);
    const {width: screenWidth} = useWindowDimensions();


    let barStyle  = {background: lowestPriceColor[0] === name ? lowestPriceColor[1] : 'linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(112,112,112,1) 100%)',}




    if(screenWidth < 950) {
        barStyle = {...barStyle, width: '60%', maxWidth: '50px', height: `${barRate}%`}
    }
    else {
        barStyle = {...barStyle, width: `${barRate}%`, height: `40%`}
    }






    return (
        <span
            className={classes.bar}
            style={{...barStyle}}
        >
            <span className={classes.price}>{price} $</span>
        </span>
    );
};

export default Bar;