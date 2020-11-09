import React from 'react';
function Button({bought, id, setBought}) {
    return (
        <div className="card-button" >
            <button onClick={() => setBought(id)} disabled={bought} className="btn">{bought ? "Добавленно в корзину!" : "Добавить в корзину"}</button>
        </div>
    );
}
export default Button;