import React from 'react';

function Text(props) {
    const text = {title: "hello", subtitle: "lorem lorem lorem"}
    return (
        <>
            <p>{text.title}</p>
            <p>{text.subtitle}</p>
        </>
    );
}

export default Text;