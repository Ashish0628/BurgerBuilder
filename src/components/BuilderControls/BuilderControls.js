import React from 'react';
import classes from './BuilderControls.css';
import BuilderControl from './BuilderControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Chicken', type: 'chicken' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];
const builderControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Amount to be paid:₹{props.Total}</strong></p>
        {controls.map(ctrl => (

            <BuilderControl
                added={() => { props.ingredientsAdded(ctrl.type) }}
                subed={() => { props.ingredientsSubed(ctrl.type) }}
                key={ctrl.label}
                label={ctrl.label}
                Disabled={props.Disabled[ctrl.type]}
            />

        ))}
        <button className={classes.OrderButton} disabled={props.Purchased} onClick={props.Ordered}> ORDER NOW </button>
    </div>

);
export default builderControls;