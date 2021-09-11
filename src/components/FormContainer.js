import React, { Component } from 'react'
import H1 from './H1'
import Button from './Button'
import Input from './Input'
import Label from './Label'

export class FormContainer extends Component {

    constructor(props) {
        super(props)

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            birthdate: '',
            email: '',
            phone: '',
        }
    }


    handleSubmitForm(e) {
        e.preventDefault();
        
        console.log(this.state)
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleBirthdateChange(e) {
        this.setState({ birthdate: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    render() {
        return (
            <div className="container px-4 mt-12">
                <H1 title="Registrieren"></H1>
                <form onSubmit={this.handleSubmitForm}>

                    <div className="mt-12">
                        <Label for="firstName" name="First name" />
                        <input name="firstName" type="text" placeholder="Type in your first name" onChange={this.handleFirstNameChange} />
                    </div>

                    <div className="mt-4">
                        <Label for="lastName" name="Lastname" />
                        <input name="lastName" type="text" placeholder="Type in your lastname" onChange={this.handleLastNameChange} />
                    </div>
                    <div className="mt-4">

                        <Label for="birthdate" name="Birthdate" />
                        <input name="birthdate" type="date" placeholder="Type in your birthdate" onChange={this.handleBirthdateChange} />
                    </div>
                    <div className="mt-4">

                        <Label for="email" name="E-Mail" />
                        <input name="email" type="email" placeholder="Type in your e-mail adress" onChange={this.handleEmailChange} />
                    </div>
                    <div className="mt-4">
                        <Label for="phone" name="Mobile" />
                        <input name="phone" type="text" placeholder="Type in your mobile phone number" onChange={this.handlePhoneChange} />
                    </div>

                    <button className="select-none outline-none shadow text-lg mt-8 float-right rounded-full px-4 py-2 font-semibold bg-blue-500 hover:bg-blue-700 text-white" name="Submit" type="submit">Sumbit</button>
                </form>
            </div>
        )
    }
}

export default FormContainer
