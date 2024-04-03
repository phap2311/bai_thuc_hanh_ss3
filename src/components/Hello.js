import {Component} from "react";

export default class Hello extends Component{
    componentWillUnmount() {
        alert('the component is going to be unmounted');
    };
    render() {
        return (
            <>
            <h1>Hello world!!!</h1>
            </>
        )


    }
}