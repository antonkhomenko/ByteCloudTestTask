import {calculateOptions} from "../helpers/calculateOptions.js";
import {formatPrice} from "../helpers/formatPrice.js";

export const companiesDataReducer = (state, action) => {
    switch (action.type) {
        case 'changeRange': {
            return state.map((item) => {
              let price = action.range.storage * item.storagePrice + action.range.transfer * item.transferPrice;
              price = formatPrice(price);
              if (action.range.storage === 0 && action.range.transfer === 0) price = 0;
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
