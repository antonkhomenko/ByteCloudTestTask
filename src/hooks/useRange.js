import {RangeContext} from "../contexts/rangeContext.jsx";
import {useContext} from "react";


export const useRange = (value) => {
    const range = useContext(RangeContext);
    if(value) {
        return range[value];
    }
    return range;
}