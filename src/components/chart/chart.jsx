import classes from './chart.module.css';
import CompanyList from "./companiesList/companyList.jsx";
import Bar from "./bar/bar.jsx";
import {getGreatestPrice} from "../../helpers/getGreatestPrice.js";
import {useMemo} from "react";
const Chart = ({dataset, dispatch, rangeOptions}) => {

    const greatestPrice = useMemo(
        () => getGreatestPrice(dataset),
        []
    );


    return (
        <div className={classes.chartWrapper}>
            <CompanyList dispatch={dispatch} dataset={dataset} rangeOptions={rangeOptions}/>
            <div className={classes.chartContainer}>
                {
                    dataset.map(item => {
                        return <Bar price={item.price} key={item.name} greatestPrice={greatestPrice}/>
                    })
                }
            </div>
        </div>
    );
};

export default Chart;