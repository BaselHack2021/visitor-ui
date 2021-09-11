import React, { Component } from 'react'

export class H1 extends Component {
    render() {
        return (
            <h1 className="text-4xl font-bold">{this.props.title}</h1>
        )
    }
}

export default H1
