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


        // const object = {};

        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });
        // let json = JSON.stringify(object);

        // console.log(this.objectifyForm(json))
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
            <div className="container px-4">
                <H1 title="Registrieren"></H1>
                <form onSubmit={this.handleSubmitForm}>

                    <div>
                        <Label for="firstName" name="First name" />
                        <input name="firstName" type="text" placeholder="Type in your first name" onChange={this.handleFirstNameChange} />
                    </div>

                    <div>
                        <Label for="lastName" name="Lastname" />
                        <input name="lastName" type="text" placeholder="Type in your lastname" onChange={this.handleLastNameChange} />
                    </div>
                    <div>
                        <Label for="birthdate" name="Birthdate" />
                        <input name="birthdate" type="date" placeholder="Type in your birthdate" onChange={this.handleBirthdateChange} />
                    </div>
                    <div>
                        <Label for="email" name="E-Mail" />
                        <input name="email" type="email" placeholder="Type in your e-mail adress" onChange={this.handleEmailChange} />
                    </div>
                    <div>
                        <Label for="phone" name="Mobile" />
                        <input name="phone" type="text" placeholder="Type in your mobile phone number" onChange={this.handlePhoneChange} />
                    </div>

                    <button className="rounded-full px-4 py-2 font-semibold bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white" name="Submit" type="submit">Sumbit</button>
                </form>

            </div>
        )
    }
}

export default FormContainer
