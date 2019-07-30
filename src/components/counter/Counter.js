import React, { Component } from 'react'

class Counter extends Component {


    constructor(props) {
        super(props)
        this.count = 10;
    }

    render() {
        return (
            <div>
                <h1>{this.count}</h1>

            </div>

        )
    }

}

export default Counter