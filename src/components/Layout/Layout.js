import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi'
import classses from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    showDrawerHandler = () => {

        this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } });
    }
    render() {
        return (
            <Auxi>
                <Toolbar ShowSideDrawer={this.showDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={classses.Content}>
                    {this.props.children}
                </main>
            </Auxi>


            )
    }
    
}
   

export default Layout;