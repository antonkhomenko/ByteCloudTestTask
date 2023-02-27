import {calculateOptions} from "./calculateOptions.js";
import {rangeParam} from "../components/range/range.jsx";

export const getGreatestPrice = (dataset) => {
    const optionsItems = dataset.filter(item => item.options !== undefined);
    const maxParam = rangeParam[1];
    const options = optionsItems.map(item => item.options);
    const optionsPrice = [];
    optionsItems.forEach((item, index) => {
      const item1 = { ...item, activeOption: options[index][0] };
      const item2 = { ...item, activeOption: options[index][1] };
      optionsPrice.push(calculateOptions(item1, maxParam, maxParam).price);
      optionsPrice.push(calculateOptions(item2, maxParam, maxParam).price);
    });
    const rest = dataset
                    .filter(item => item.options === undefined)
                    .map(item => item.storagePrice * maxParam + item.transferPrice * maxParam);
    const allPrice = [...optionsPrice, ...rest];


    return Math.max(...allPrice);
}