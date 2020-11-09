import React from 'react';
import Button from "./Button";
function Card({id, product, setBought}) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={product.image} alt="222"/>
            </div>
            <div className="card-info">
                <div className="card-name">{product.name}</div>
                <div className="card-price">{product.price}</div>
                <Button setBought={setBought} id={id} bought={product.bought} />
            </div>
        </div>
    );
}
export default Card;
