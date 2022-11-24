import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: false}
    }

    sayHello = () => {
        this.setState({text: !this.state.text})
    }

    render() {
        return(
            <>
                <button onClick={this.sayHello}>click</button>
                {this.state.text && <p>Hello</p>}
            </>
        )
    }
}

export default AboutUs;