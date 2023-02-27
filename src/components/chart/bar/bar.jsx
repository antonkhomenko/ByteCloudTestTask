import classes from './bar.module.css';

const Bar = ({price}) => {
    return (
        <span className={classes.bar}>
            <span className={classes.price}>{price} $</span>
        </span>
    );
};

export default Bar;