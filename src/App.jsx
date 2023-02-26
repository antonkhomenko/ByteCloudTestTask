import './App.css';
import Range from "./components/range/range.jsx";
import Chart from "./components/chart/chart.jsx";
import {useReducer, useState} from "react";
import {companiesDataReducer} from "./reducers/companiesDataReducer.js";

const App = () => {
    const [companiesData, dispatchCompaniesData] = useReducer(companiesDataReducer, [
        {name: 'Backblaze', price: 0, storagePrice: 0, transferPrice: 0, coef: [0.005, 0.01], minPrice: 7},
        {name: 'Bunny', price: 0, storagePrice: 0, transferPrice: 0, coef: [0.005, 0.1]},
        {name: 'Scaleway', price: 0, storagePrice: 0, transferPrice: 0, coef: [0.005, 0.1]},
        {name: 'Vultr', price: 0, storagePrice: 0, transferPrice: 0, coef: [0.01, 0.01], minPrice: 5},
    ]);


    const handleStorage = (storageValue) => {
        dispatchCompaniesData({
            type: 'changeStorage',
            storage: storageValue,
        })
    }

    const handleTransfer = (transferValue) => {
        dispatchCompaniesData({
            type: 'changeTransfer',
            transfer: transferValue,
        })
    }

    return (
        <div className='content'>
            <Range title='Storage' changeRange={handleStorage}/>
            <Range title='Transfer' changeRange={handleTransfer}/>
            <Chart dataset={companiesData}/>
        </div>
    );
};

export default App;