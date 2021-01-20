import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIndredient/BurgerInredient';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(Igkey => {
            return [...Array(props.ingredients[Igkey])].map((_, i) => {
                return <BurgerIngredients key={i + Igkey} type={Igkey} />
            });

        }).reduce((arr, elem) => { return arr.concat(elem) }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <div> Please Add Ingredients </div>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
           <BurgerIngredients type='bread-bottom'/>
        </div>

       );
};

export default withRouter(burger);