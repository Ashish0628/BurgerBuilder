import React, { Component } from 'react';
import Order from '../../components/OrderList/Order';
import Axios from '../../axios-order';


class Orders extends Component{

    state = {
        order: [],
        loading: true
    }
    componentDidMount() {
        Axios.get('/order.json')
            .then(response => {
                const ord = [];
                for (let key in response.data) {

                    ord.push({
                        ...response.data[key],
                        id: key
                    });
                }
                console.log(ord);
                this.setState({ order:ord, loading: false })
            });
    }
    render() {
        const x = this.state.order.map(o => {
            return <Order key={o.id} price={o.totalPrice} ingredients={o.ingredients} />

        })

        return (

            <div>
                {x}
            </div>
        );
    }
}
export default Orders;