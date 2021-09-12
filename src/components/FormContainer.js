import React, { Component } from 'react'
import Button from './Button';
import H1 from './H1'
import Label from './Label'
import QRCode from "react-qr-code";


export class FormContainer extends Component {

    options = [
        { value: true, label: "Male" },
        { value: false, label: "Female" },
    ];

    constructor(props) {
        super(props)

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);


        this.state = {
            firstName: '',
            lastName: '',
            gender: true,
            birthdate: '',
            email: '',
            phone: '',
            filled: false,
            qrString: ''

        }


    }


    handleSubmitForm(e) {
        e.preventDefault();
        this.pushData();
        console.log(this.state)
        //register

    }

    pushData() {
        let data = this.state

        let body = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            birthdate: data.birthdate,
            email: data.email,
            phoneNumber: data.phone
        };

        let test = JSON.stringify(body);

        fetch('http://quer.iperka.com/users/register', {
            method: 'POST',
            body: test,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                return response.json()
            }).then((body) => {
                console.log(body.data._id);
                this.setState({ qrString: body.data._id });
                this.setState({ filled: true });
            });
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
    handleGenderChange(e) {
        this.setState({ gender: e.target.value });
    }

    render() {

        return (
            <div className="container mx-auto px-4 mt-12">
                <section hidden={this.state.filled} className="transition">
                    <H1 title="Register"></H1>
                    <form onSubmit={this.handleSubmitForm}>

                        <div className="mt-12">
                            <Label for="firstName" name="First Name" />
                            <input name="firstName" type="text" placeholder="Type in your first name" onChange={this.handleFirstNameChange} />
                        </div>

                        <div className="mt-4">
                            <Label for="lastName" name="Lastname" />
                            <input name="lastName" type="text" placeholder="Type in your lastname" onChange={this.handleLastNameChange} />
                        </div>
                        <div className="mt-4">

                            <Label for="gender" name="Gender" />
                            <select className="Select" name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                                <option value="true">Male</option>
                                <option value="false">Female</option>
                            </select>
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
                <section hidden={!this.state.filled}>
                    <H1 title="QR-Code" ></H1>
                    <div className="w-full mt-12 flex">
                        <div className="rounded-2xl shadow-lg p-8 bg-green-100 mx-auto">
                            <div className="rounded-2xl bg-white p-4">
                                {(this.state.filled) ? <QRCode className="w-full bg-white" width="12rem" height="12rem" value={this.state.qrString} /> : ''}
                            </div>
                            <div className="mt-8 w-72">
                                <p className="text-xl text-center mx-auto">Please show this code to authorized personel</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default FormContainer
