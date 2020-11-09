
import React from 'react';
import logo from "./shopping-cart-solid.svg";
function Checkout(props) {
    return (
        <div className="checkout">
            <img src={logo} alt="Logo"/>
            <span className="counter">
                {props.database.filter(value => value.bought === true).length}
            </span>
        </div>
    );
}
export default Checkout;