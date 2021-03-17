import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/BuilderControls/BuilderControls';
import Mondal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/OrderSummary/OrderSummary';
import Axios from '../../axios-order';
import Spinner from '../../components/UI/Loading/Loading';
const IngredientPrice = {
    salad: 20,
    chicken: 50,
    meat: 20,
    cheese: 20
}; 


export default class BurgerBuilder extends Component {
    state = {
        ingredients: null,
           
        totalPrice: 20,
        purchased: true,
        ordered: false,
        spinner: false
        
    }
    componentDidMount() {
        Axios.get('/ingredients.json')
            .then(response => { this.setState({ ingredients: response.data }) });
    }
    addIngredientHanler = (type) => {
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = this.state.ingredients[type] + 1;
        
        
        this.setState({
            ingredients: updateIngredients,
            totalPrice: this.state.totalPrice + IngredientPrice[type], purchased: false
            
        });

  
    }
    subIngredientHanler = (type) => {
        const updateIngredients = {
            ...this.state.ingredients
        };
        if (this.state.ingredients[type] === 0) {
            
            updateIngredients[type] = this.state.ingredients[type]
            this.setState({ ingredients: updateIngredients});
        }
        else {
            updateIngredients[type] = this.state.ingredients[type] - 1;
            this.setState({
                ingredients: updateIngredients,
                totalPrice: this.state.totalPrice - IngredientPrice[type]
            });
        }
        if (this.state.totalPrice - IngredientPrice[type] === 20) {
            this.setState({ purchased: true });
        }
        
    }
    purchaseHandler = () =>  {
        this.setState({ ordered: true })
    }
    cancelHandler = () => {
        this.setState({ ordered: false })
    }
    continueHandler = () => {
       
        /*const postData = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            name: "Ashish",

        }
        this.setState({ spinner: true })
        Axios.post('/order.json', postData).then(response => { this.setState({ spinner: false, ordered: false }) })
        this.setState({
            ingredients: {
                cheese: 0,
                chicken: 0,
                meat: 0,
                salad: 0
            }, totalPrice: 20,
            purchased: true,
            
         })*/
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('totalprice=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search:'?'+ queryString
        });
    }
    render() {
        const Disable = {
            ...this.state.ingredients
        };
        for (let key in Disable) {
            Disable[key] = Disable[key] <=0
        }
        let Ordered = <Ordersummary
            Ingredients={this.state.ingredients}
            Cancel={this.cancelHandler}
            Continue={this.continueHandler}
            Price={this.state.totalPrice}
        />;
        let BurgerDisplay = (
            <Auxi>
            < div > <Burger ingredients={this.state.ingredients} /></div>
           
            </Auxi>
        );
        if (this.state.spinner || this.state.ingredients===null) {
            Ordered = <Spinner />;
            BurgerDisplay = <Spinner />;

        }
        return (
            <Auxi>
                <Mondal show={this.state.ordered} CancelOrder={this.cancelHandler}>
                    {Ordered}
                </Mondal>
         
                {BurgerDisplay}
                <div><BuilderControls
                    ingredientsAdded={this.addIngredientHanler}
                    ingredientsSubed={this.subIngredientHanler}
                    Disabled={Disable}
                    Total={this.state.totalPrice}
                    Purchased={this.state.purchased}
                    Ordered={this.purchaseHandler}

                /></div>
                
             </Auxi>


        );
    }
}

