import classes from './companyListItem.module.css';
import {useId, useMemo} from "react";
const CompanyListItem = ({title, img, option}) => {

    const radioName = useId();


    const companyItemClassName = useMemo(() => {
        const res = [classes.companyItem];
        if(option) res.push(classes.companyItemForOption);
        return res;
    }, [option]);

    return (
        <div className={companyItemClassName.join(' ')}>
            <span>{title}</span>
            <img src={img} alt={`${title}-icon`} className={classes.companyIcon}/>
            {
                option && (
                    <div className={classes.companyItemOptions}>
                        <label>
                            {`${option[0]} `}
                            <input type="radio" name={radioName}/>
                        </label>
                        <label>
                            {`${option[1]} `}
                            <input type="radio" name={radioName}/>
                        </label>
                    </div>
                )
            }
        </div>
    );
};

export default CompanyListItem;