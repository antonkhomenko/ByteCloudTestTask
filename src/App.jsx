import './App.css';
import Range from "./components/range/range.jsx";
import Chart from "./components/chart/chart.jsx";
import {useReducer, useState} from "react";
import {companiesDataReducer} from "./reducers/companiesDataReducer.js";
import backblaze from '/src/assets/companiesLogo/backblaze.png';
import bunnyNet from '/src/assets/companiesLogo/bunnyNet.png';
import scaleway from '/src/assets/companiesLogo/scaleway.png';
import vultr from '/src/assets/companiesLogo/vultr.png';
import {calculateOptions} from "./helpers/calculateOptions.js";

const App = () => {
    const [companiesData, dispatchCompaniesData] = useReducer(companiesDataReducer, [
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
    ]);

    const [rangeOptions, setRangeOptions] = useState({storage: 0, transfer: 0});


    const setStorage = (storageValue) => {
        setRangeOptions({...rangeOptions, storage: storageValue});
        dispatchCompaniesData({
            type: 'changeRange',
            range: {...rangeOptions, storage: storageValue},
        });
    }

    const setTransfer = (transferValue) => {
        setRangeOptions({...rangeOptions, transfer: transferValue});
        dispatchCompaniesData({
            type: 'changeRange',
            range: {...rangeOptions, transfer: transferValue},
        });
    }


    return (
        <div className='content'>
            <Range title='Storage' rangeValue={rangeOptions.storage} setRange={setStorage}/>
            <Range title='Transfer' rangeValue={rangeOptions.transfer} setRange={setTransfer}/>
            <Chart dataset={companiesData} dispatch={dispatchCompaniesData} rangeOptions={rangeOptions}/>
        </div>
    );
};

export default App;