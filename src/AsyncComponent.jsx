import * as React from "react";

export class AsyncComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
       return <span>Inside</span>;
    }

    componentDidMount() {
        this.props.onReady();
    }
}
