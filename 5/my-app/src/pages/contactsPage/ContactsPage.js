import React, {useState} from 'react';

function ContactsPage(props) {

const [input, setInput] = useState("")

const changeInput = (event) => {
    setInput(event.target.value)
}

const addProduct = () => {
    console.log(input)
}

const clearProduct = () => {
    setInput("")
}

    return (
        <>
            <input
                onChange={changeInput}
                type="text"
                placeholder="product"
                value={input}
            />
            <button
                onClick={clearProduct}
                onClickCapture={addProduct}
            >add</button>
            <button onClick={clearProduct}>clear</button>
        </>
    );
}

export default ContactsPage;