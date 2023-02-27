import classes from './companyList.module.css';
import CompanyListItem from "../companyListItem/companyListItem.jsx";


const CompanyList = ({dispatch, dataset, rangeOptions}) => {

    return (
        <div className={classes.companyList}>
            {
                dataset.map(item => {
                    return <CompanyListItem item={item} dispatch={dispatch} key={item.name} rangeOptions={rangeOptions}/>
                })
            }
        </div>
    );
};

export default CompanyList;