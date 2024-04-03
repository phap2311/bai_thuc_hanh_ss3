import {Component} from "react";
import Hello from "./Hello";

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    delete = () => {
        this.setState({display: false})
    };

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>;
        }
        return (
            <div style={{textAlign: "center"}}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        )

    }
}