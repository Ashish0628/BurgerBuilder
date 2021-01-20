import React, { Component } from 'react';
import FinalOrderSummary from '../../components/Order/FinalOrderSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';


class CheckOut extends Component {
    state = {
        ingredients1: {
            cheese: 0,
            chicken: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 0,
       
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            if (param[0] === 'totalprice') {
                this.setState({ totalPrice: param[1] })
            }
            ingredients[param[0]] = +param[1];
        }
        this.setState({ ingredients1: ingredients });
    }
    CancelHandler = () => {
        this.props.history.goBack();

    }
    ContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');

    }
    render() {
        return (

            <div>
            <FinalOrderSummary
                Cancel={this.CancelHandler}
                Continue={this.ContinueHandler}
                ingredients2={this.state.ingredients1} />
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredients={this.state.ingredients1}
                        price={this.state.totalPrice} />)} />

            </div>
            );
    }
    

}
export default CheckOut;