import React from "react";
import WorksList from "../../components/worksList/WorksList";

class ContactsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    getWorks = () => {
        this.setState({works: ["Work1", "Work2"]})
    }

    render() {
        return(
            <>
                <button onClick={this.getWorks}>get </button>
                <WorksList workslist={this.state.works}/>
            </>
        )
    }
}

export default ContactsPage;