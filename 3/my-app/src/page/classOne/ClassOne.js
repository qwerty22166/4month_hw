import React from "react";
import classes from "./ClassOne.module.css"

class ClassOne extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className={classes.user}>{this.props.user.name} {this.props.user.age}</h1>
            </div>
        );
    }
}

export  default ClassOne;