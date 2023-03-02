import {useContext} from "react";
import {RangeDispatchContext} from "../contexts/rangeContext.jsx";


export const useRangeDispatch = () => {
    return useContext(RangeDispatchContext);
}