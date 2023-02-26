import './App.css';
import Range from "./components/range/range.jsx";
import Chart from "./components/chart/chart.jsx";
import {useReducer, useState} from "react";

const App = () => {
    const [companiesData, dispatchCompaniesData] = useReducer();


    return (
        <div className='content'>
            <Range title='Storage' setCompaniesData={setCompaniesData}/>
            <Range title='Transfer' setCompaniesData={setCompaniesData}/>
            <Chart/>
        </div>
    );
};

export default App;