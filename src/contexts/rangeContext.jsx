import {createContext, useReducer} from "react";


export const RangeContext = createContext(null);
export const RangeDispatchContext = createContext(null);

export const RangeProvider = ({children}) => {
    const [range, dispatchRange] = useReducer(rangeReducer, {storage: 0, transfer: 0});

    return (
        <RangeContext.Provider value={range}>
            <RangeDispatchContext.Provider value={dispatchRange}>
                {children}
            </RangeDispatchContext.Provider>
        </RangeContext.Provider>
    );
}


const rangeReducer = (range, action) => {
    switch(action.type) {
        case 'setStorage': {
            return {...range, storage: action.value}
        }
        case 'setTransfer': {
            return {...range, transfer: action.value}
        }
        default: {
            throw Error('Unknown range action type - ' + action.type);
        }
    }
}