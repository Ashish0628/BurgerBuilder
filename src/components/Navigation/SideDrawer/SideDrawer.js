import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxi from '../../../hoc/Auxi';
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {

    let CloseDrawerHandler = [classes.SideDrawer, classes.Close]
    if (props.open) {
        CloseDrawerHandler =[classes.SideDrawer, classes.Open]
    }

    return (
        <Auxi>
            <BackDrop show={props.open} Cancel={props.closed} />
            <div className={CloseDrawerHandler.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
                </div>
            <nav>
                <NavigationItems/>
                </nav>
        </div>
        </Auxi>

        )

};
export default sideDrawer;