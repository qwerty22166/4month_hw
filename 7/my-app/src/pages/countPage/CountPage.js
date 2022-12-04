import React, {useState} from 'react';

function CountPage() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const dicrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="text">
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={dicrement}>-</button>
        </div>
    );
}

export default CountPage;