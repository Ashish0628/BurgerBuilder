import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
const finalOrderSummary = (props) => {
    return (
        <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
            <h3> Here is your Tasty Burger! </h3>

            <Burger ingredients={props.ingredients2} />
            <Button btnType='Danger' clicked={props.Cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.Continue} >CONTINUE</Button>
        </div>
        );

}
export default finalOrderSummary;