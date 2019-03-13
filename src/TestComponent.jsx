import * as React from "react";
import { AsyncComponent } from "./AsyncComponent";

export class TestComponent extends React.Component {
    state = {
        isReady: false,
    };

    render() {
        console.log("render");

        const { isReady } = this.state;

        return (
            <>
                <div>My async component is {isReady ? "ready" : "not ready"}</div>
                <>
                    <AsyncComponent onReady={this.onAsyncReady} />
                    {isReady && (
                    <>
                        <div>More</div>
                        <div>And a bit more</div>
                    </>
                    )}
                </>
            </>
        );
    }

    onAsyncReady = () => {
        window.requestAnimationFrame(() => this.setState({ isReady: true }));
    }
}
