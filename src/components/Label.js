import React, { Component } from 'react'

export class Label extends Component {
    render() {
        return (
            <label className="font-semibold text-lg text-gray-700 mb-3" htmlFor={this.props.for}>{this.props.name}</label>
        )
    }
}

export default Label
