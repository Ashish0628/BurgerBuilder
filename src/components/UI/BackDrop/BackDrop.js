import React from 'react';
import classes from './BackDrop.css';

const backDrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.Cancel}></div> : null
);
export default backDrop;