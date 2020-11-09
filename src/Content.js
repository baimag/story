import React from 'react';
import Card from "./Card";
function Content(props) {
    return (
        <div className="content">
            {props.database.map((product, id) => {
                return (
                    <Card product={product} setBought={props.setBought} id={id} bought={props.bought}/>
                )
            })}
        </div>
    );
}
export default Content;