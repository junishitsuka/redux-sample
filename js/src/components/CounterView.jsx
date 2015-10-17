import React from "react";

export default class CounterView extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter App</h1>

                <div className="counter">
                    <span>0</span>
                    <button onClick={this.props.pushPlusButton}>+</button>
                    <button onClick={this.props.pushMinusButton}>-</button>
                </div>
            </div>
        );
    }
};
