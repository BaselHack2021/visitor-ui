import React, { Component } from 'react'
import Label from './Label'
import Input from './Input'

export class LabelInputGroup extends Component {
    render() {
        return (
            <div>
                <Label for={this.props.name} name={this.props.displayName} />
                <Input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

export default LabelInputGroup
