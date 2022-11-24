import React from "react";

class PortfolioPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = (event) => {
        this.setState({input: event.target.value})
    }

    addProduct = () => {
        console.log(this.state)
    }

    clearProduct = () => {
        this.setState({input: ""})
    }

    render() {
        return(
            <>
                <input
                    onChange={this.changeInput}
                    type="text"
                    placeholder="product"
                    value={this.state.input}
                />
                <button
                    onClick={this.clearProduct}
                    onClickCapture={this.addProduct}
                >add</button>
                <button onClick={this.clearProduct}>clear</button>
            </>
        )
    }
}

export default PortfolioPage;