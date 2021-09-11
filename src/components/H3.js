import React, { Component } from 'react'

export class H3 extends Component {
    render() {
        return (
            <h3 className="text-xl font-bold text-center">{this.props.title}</h3>
        )
    }
}

export default H3
