import React, { Component } from 'react'

export class Label extends Component {
    render() {
        return (
            <label className="text-semibold text-xl text-gray-700 mb-3" for={this.props.for}>{this.props.name}</label>
        )
    }
}

export default Label
