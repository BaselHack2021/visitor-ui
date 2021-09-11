import React, { Component } from 'react'
import Button from './Button';
import H1 from './H1'
import Label from './Label'
import QRCode from "react-qr-code";


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
            filled: false,
            qrString: '',
        }
    }


    handleSubmitForm(e) {
        e.preventDefault();
        this.setState({qrString: JSON.stringify(this.state)});
        this.setState({filled: true});

        console.log(this.state)
        //register

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
            <div className="container mx-auto px-4 mt-12">
            <section hidden={this.state.filled} className="transition">
                <H1 title="Register"></H1>
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

                    <Button name="submit" displayName="Submit" type="submit" />
                    
                </form>
             </section>
             <section hidden={!this.state.filled} className="transition">
                 <H1 title="Show this QR Code to " ></H1>
                {(this.state.filled) ? <QRCode className="mx-auto mt-12" value={this.state.qrString} /> : ''}
             </section>
            </div>

        )
    }
}

export default FormContainer
