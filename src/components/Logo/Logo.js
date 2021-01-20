import React from 'react';
import classes from './Logo.css';
import LogoImage from '../../assets/Images/burger-logo.png';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={LogoImage} alt="ApnaBurger" />
    </div>

);
export default logo;