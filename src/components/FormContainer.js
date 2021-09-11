import React, { Component } from 'react'
import H1 from './H1'
import LabelInputGroup from './LabelInputGroup'

export class FormContainer extends Component {
    render() {
        return (
            <div className="container px-4">
                <H1 title="Registrieren"></H1>
                
                <LabelInputGroup name="firstName" displayName="First name" type="text" placeholder="Type in your first name" />
                <LabelInputGroup name="lastName" displayName="Lastname" type="text" placeholder="Type in your lastname" />
                <LabelInputGroup name="birthdate" displayName="Birthdate" type="date" placeholder="Type in your birthdate" />
                <LabelInputGroup name="email" displayName="E-Mail" type="email" placeholder="Type in your e-mail adress" />
                <LabelInputGroup name="phone" displayName="Mobile" type="text" placeholder="Type in your mobile phone number" />

            </div>
        )
    }
}

export default FormContainer
