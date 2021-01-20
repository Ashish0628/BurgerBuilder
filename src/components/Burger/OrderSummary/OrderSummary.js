import React from 'react';
import Auxi from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.Ingredients)
        .map(igKey => {
            return <li>
                <span
                    style={{ textTransform: 'capitalize' }}>{igKey}: {props.Ingredients[igKey]}
                </span>
            </li>
        }
            );
    return(
    <Auxi>
        <h3>Your Order</h3>
        <p> Delicious Burger Ingredients as follows:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h2>Price:₹{props.Price}</h2>
            <p> Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.Cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.Continue}>CONTINUE</Button>
    </Auxi>
)};
export default orderSummary;