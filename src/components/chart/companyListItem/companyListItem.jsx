import classes from './companyListItem.module.css';
import {useId, useMemo, useState} from "react";
import {useRange} from "../../../hooks/useRange.js";
import {useCompaniesDispatch} from "../../../hooks/useCompaniesDispatch.js";
const CompanyListItem = ({item}) => {

    const {name : title, options, img} = item;

    const rangeOptions = useRange();
    const dispatchCompanies = useCompaniesDispatch();

    const radioName = useId();
    const [selected, setSelected] = useState(() => {
        if(item.activeOption) return item.activeOption;
        else return '';
    });


    const companyItemClassName = useMemo(() => {
        const res = [classes.companyItem];
        if(options) res.push(classes.companyItemForOption);
        return res;
    }, [options]);

    const handleCheck = (e) => {
        setSelected(e.target.value);

        dispatchCompanies({
            type: 'setOptions',
            name: title,
            activeOption: e.target.value,
            storage: rangeOptions.storage,
            transfer: rangeOptions.transfer,
        })
    }

    return (
        <div className={companyItemClassName.join(' ')}>
            <span>{title}</span>
            <img src={img} alt={`${title}-icon`} className={classes.companyIcon}/>
            {
                options && (
                    <div className={classes.companyItemOptions}>
                        <label>
                            {`${options[0]} `}
                            <input
                                type="radio" name={radioName}
                                value={options[0]} onChange={handleCheck}
                                checked={selected === options[0]}
                            />
                        </label>
                        <label>
                            {`${options[1]} `}
                            <input
                                type="radio" name={radioName}
                                value={options[1]} onChange={handleCheck}
                                checked={selected === options[1]}
                            />
                        </label>
                    </div>
                )
            }
        </div>
    );
};

export default CompanyListItem;