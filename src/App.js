import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
    
    render() {
        
        return (
        
            <div >
                <Layout>
                    <Switch>
                        <Route path='/checkout' component={CheckOut} />
                        <Route path='/' exact component={BurgerBuilder} />
                        <Route path='/orders' component={Orders}/>
                     </Switch>
                </Layout>
           
            
               
                </div>
            
    );
  }
}

export default App;
