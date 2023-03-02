import {createContext, useReducer} from "react";
import {formatPrice} from "../helpers/formatPrice.js";
import {calculateOptions} from "../helpers/calculateOptions.js";
import backblaze from "../assets/companiesLogo/backblaze.png";
import bunnyNet from "../assets/companiesLogo/bunnyNet.png";
import scaleway from "../assets/companiesLogo/scaleway.png";
import vultr from "../assets/companiesLogo/vultr.png";


export const CompaniesContext = createContext(null);
export const CompaniesDispatchContext = createContext(null);

export const CompaniesProvider = ({children}) => {
    const [companiesData, dispatchCompaniesData] = useReducer(companiesDataReducer, companiesInitValue);

    return (
        <CompaniesContext.Provider value={companiesData}>
            <CompaniesDispatchContext.Provider value={dispatchCompaniesData}>
                {children}
            </CompaniesDispatchContext.Provider>
        </CompaniesContext.Provider>
    )
}





const companiesDataReducer = (state, action) => {
    switch (action.type) {
        case 'changePrice': {
            return state.map((item) => {
                let price = action.range.storage * item.storagePrice + action.range.transfer * item.transferPrice;
                price = formatPrice(price);
                if (item.minPrice !== undefined && price < item.minPrice) price = item.minPrice;
                if (item.maxPrice !== undefined && price > item.maxPrice) price = item.maxPrice;
                if(item.options !== undefined) {
                    return calculateOptions(item, action.range.storage, action.range.transfer);
                }
                return { ...item, price };
            });
        }
        case 'setOptions': {
            return state.map(item => {
                if(item.name === action.name) {
                    const newItem = {...item, activeOption: action.activeOption};
                    return calculateOptions(newItem, action.storage, action.transfer);
                }
                return {...item};
            });
        }
    }
}

const companiesInitValue = [
    {
        name: 'Backblaze', price: 0, storagePrice: 0.005, transferPrice: 0.01,
        img: backblaze,  minPrice: 7
    },
    {
        name: 'Bunny', price: 0, storagePrice: 0.01, transferPrice: 0.01,
        img: bunnyNet, options: ['HDD', 'SSD'], activeOption: 'HDD', maxPrice: 10,
    },
    {
        name: 'Scaleway', price: 0, storagePrice: 0, transferPrice: 0,
        img: scaleway, options: ['Multi', 'Single'], activeOption: 'Multi',
    },
    {
        name: 'Vultr', price: 0, storagePrice: 0.01, transferPrice: 0.01,
        img: vultr, minPrice: 5
    },
];
