import React, { Component } from 'react'

export class H1 extends Component {
    render() {
        return (
            <h3 className="text-3xl font-bold text-center">{this.props.title}</h3>
        )
    }
}

export default H1
