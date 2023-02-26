import classes from './chart.module.css';
import CompanyList from "./companiesList/companyList.jsx";
import Bar from "./bar/bar.jsx";
const Chart = () => {
    return (
        <div className={classes.chartWrapper}>
            <CompanyList/>
            <div className={classes.chartContainer}>
                <Bar/>
                <Bar/>
                <Bar/>
                <Bar/>
            </div>
        </div>
    );
};

export default Chart;