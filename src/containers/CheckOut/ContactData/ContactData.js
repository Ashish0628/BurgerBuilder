import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Axios from '../../../axios-order';
import { Redirect } from 'react-router-dom';
import Spinner from '../../../components/UI/Loading/Loading';
class ContactData extends Component {
    state = {
        name: "",
        email: "",
        city: "",
        spinner: false,
        route: false
    }
    PlacedOrderHandler = (event) => {
        event.preventDefault();
        const postData = {
            ingredients: this.props.ingredients,
            name: this.state.name,
            email: this.state.email,
            city: this.state.city,
            totalPrice: this.props.price

        }
        this.setState({ spinner: true })
        Axios.post('/order.json', postData).then(response => { this.setState({ spinner: false, route: true }) })
        
    }
    
    
    render() {
        let spin = null;
        let x = null;
        if (this.state.spinner) {
            spin = <Spinner/>
        }
        if (this.state.route) {
             x = <Redirect from='/checkout/contact-data' to='/' />;
        }
        return (
            <div>
                <h4>Enter Your Contact details:</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name"
                        onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    <input type="email" name="email" placeholder="Your Mail ID"
                        onChange={(event) => { this.setState({ email: event.target.value }) }}/>
                    <input type="text" name="city" placeholder="Your City"
                        onChange={(event) => { this.setState({ city: event.target.value }) }}/>
                    <Button btnType="Success" clicked={this.PlacedOrderHandler}>ORDER</Button>
                </form>
                {spin}
                {x}
            </div>
           

            );
        }
}
export default ContactData;