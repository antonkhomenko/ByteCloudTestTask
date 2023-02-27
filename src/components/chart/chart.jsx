import classes from './chart.module.css';
import CompanyList from "./companiesList/companyList.jsx";
import Bar from "./bar/bar.jsx";
const Chart = ({dataset, dispatch, rangeOptions}) => {
    return (
        <div className={classes.chartWrapper}>
            <CompanyList dispatch={dispatch} dataset={dataset} rangeOptions={rangeOptions}/>
            <div className={classes.chartContainer}>
                {
                    dataset.map(item => {
                        return <Bar price={item.price} key={item.name}/>
                    })
                }
            </div>
        </div>
    );
};

export default Chart;