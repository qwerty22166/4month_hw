import React, {useState} from 'react';

function AboutUs(props) {

    const [text, setText] = useState(false)

    const getText = () => {
        setText( !text)
    }

    return (
        <>
            <button onClick={getText}>click</button>
            {text && <p>text</p>}

        </>
    );
}

export default AboutUs;