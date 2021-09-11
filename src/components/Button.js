import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button className="rounded-full px-4 py-2 font-bold bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white">{this.props.name}</button>
        )
    }
}

export default Button
