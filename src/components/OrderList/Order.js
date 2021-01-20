import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const updateIngredients = {
        ...props.ingredients
    };
    console.log(updateIngredients)
    return (
        <div className={classes.Order}>
            <p>Price:{props.price}</p>
            <p>cheese:{updateIngredients['cheese']}</p>
            <p>chicken:{updateIngredients['chicken']}</p>
            <p>meat:{updateIngredients['meat']}</p>
            <p>salad:{updateIngredients['salad']}</p>
        </div>
        )
}
export default order;