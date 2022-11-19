import React from "react";
import classes from "./ClassTwo.module.css"

class ClassTwo extends React.Component {

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

export default ClassTwo;