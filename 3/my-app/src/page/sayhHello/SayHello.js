import React from 'react';

function SayHello() {

    const sayHello = () => {
        alert("hello world")
    }

    return (
        <>
            <button onClick={sayHello}>say hello</button>
        </>
    );
}

export default SayHello;