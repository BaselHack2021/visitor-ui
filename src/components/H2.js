import React, { Component } from 'react'

export class H2 extends Component {
    render() {
        return (
            <h2 className="text-4xl font-semibold text-center">{this.props.title}</h2>
        )
    }
}

export default H2
