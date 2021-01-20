import React from 'react';
import classes from './Modal.css';
import Auxi from '../../../hoc/Auxi';
import BackDrop from '../BackDrop/BackDrop';
const modals = (props) => (
    <Auxi>
        <BackDrop show={props.show} Cancel={props.CancelOrder}/>
    <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
       

        {props.children}
        </div>
    </Auxi>
    );
export default modals;