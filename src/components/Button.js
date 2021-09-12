import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button className="select-none outline-none shadow text-lg mt-8 float-right rounded-full px-4 py-2 font-semibold bg-green-500 hover:bg-green-700 text-white" name={this.props.name} type={this.props.type}>{this.props.displayName}</button>
        )
    }
}

export default Button
