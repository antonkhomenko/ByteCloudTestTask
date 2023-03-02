import classes from './chart.module.css';
import CompanyList from "./companiesList/companyList.jsx";
import Bar from "./bar/bar.jsx";
import {getGreatestPrice} from "../../helpers/getGreatestPrice.js";
import {useEffect, useMemo} from "react";
import {getLowestPriceItemColor} from "../../helpers/getLowestPriceItemColor.js";
import {useCompaniesData} from "../../hooks/useCompaniesData.js";
import {useRange} from "../../hooks/useRange.js";
import {useCompaniesDispatch} from "../../hooks/useCompaniesDispatch.js";
const Chart = () => {

    const dataset = useCompaniesData();
    const dispatchDataset = useCompaniesDispatch();
    const range = useRange();

    const greatestPrice = useMemo(
        () => getGreatestPrice(dataset),
        []
    );

    const lowestPriceItemColor = getLowestPriceItemColor(dataset);

    useEffect(() => {
        dispatchDataset({
            type: 'changePrice',
            range: range,
        })
    }, [range])


    return (
        <div className={classes.chartWrapper}>
            <CompanyList/>
            <div className={classes.chartContainer}>
                {
                    dataset.map(item => {
                        return <Bar price={item.price} name={item.name.toLowerCase()} key={item.name} greatestPrice={greatestPrice} lowestPriceColor={lowestPriceItemColor}/>
                    })
                }
            </div>
        </div>
    );
};

export default Chart;