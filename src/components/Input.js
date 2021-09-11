import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <input className="shadow rounded-full px-4 bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
        )
    }
}

export default input
