import React from 'react';

const Scroll = (props) => {
    return (
//The first {} is bc JSX expression. The second {} is bc it is a javascript object.
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}> 
            {props.children}
        </div>
    )
};

export default Scroll;
