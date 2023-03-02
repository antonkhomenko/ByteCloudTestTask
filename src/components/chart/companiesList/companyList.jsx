import classes from './companyList.module.css';
import CompanyListItem from "../companyListItem/companyListItem.jsx";
import {useCompaniesData} from "../../../hooks/useCompaniesData.js";


const CompanyList = () => {

    const dataset = useCompaniesData();


    return (
        <div className={classes.companyList}>
            {
                dataset.map(item => {
                    return <CompanyListItem item={item} key={item.name}/>
                })
            }
        </div>
    );
};

export default CompanyList;