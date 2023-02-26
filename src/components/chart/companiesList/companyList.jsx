import classes from './companyList.module.css';
import backblaze from '/src/assets/companiesLogo/backblaze.png';
import bunnyNet from '/src/assets/companiesLogo/bunnyNet.png';
import scaleway from '/src/assets/companiesLogo/scaleway.png';
import vultr from '/src/assets/companiesLogo/vultr.png';
import CompanyListItem from "../companyListItem/companyListItem.jsx";


const CompanyList = () => {
    return (
        <div className={classes.companyList}>
            <CompanyListItem title='Backblaze' img={backblaze}/>
            <CompanyListItem title='BunnyNet' img={bunnyNet} option={['HDD', 'SSD']}/>
            <CompanyListItem title='Scaleway' img={scaleway} option={['Multi', 'Single']}/>
            <CompanyListItem title='Vulrt' img={vultr}/>
        </div>
    );
};

export default CompanyList;