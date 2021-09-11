import React, { Component } from 'react'

export class Label extends Component {
    render() {
        return (
            <label className="block font-semibold text-lg text-gray-500 mb-2" htmlFor={this.props.for}>{this.props.name}</label>
        )
    }
}

export default Label
