import React, {Component} from 'react'
import Button from './Button';
import H1 from './H1'
import Label from './Label'
import QRCode from "react-qr-code";


export class FormContainer extends Component {

    options = [
        {value: true, label: "Male"},
        {value: false, label: "Female"},
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
            firstName: {
                value: '',
                message: ''
            },
            lastName: {
                value: '',
                message: ''
            },
            gender: {
                value: true,
                message: ''
            },
            birthdate: {
                value: '',
                message: ''
            },
            email: {
                value: '',
                message: ''
            },
            phone: {
                value: '',
                message: ''
            },
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
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            gender: data.gender === 'true' ? true : false,
            birthdate: data.birthdate.value,
            email: data.email.value,
            phoneNumber: data.phone.value
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
                //console.log(body);

                if (body.status === 200) {
                    let newState = { ...this.state }

                    const keys = Object.keys(body.errors);

                    keys.forEach(key => {
                        newState = { ...newState, [key]: { ...newState[key], message: body.errors[key].message } }
                    });

                    this.setState(newState);

                    return;
                }

                this.setState({ qrString: body.data._id });
                this.setState({ filled: true });
            }).catch((res) => {
                console.log(res)
            });
    }


    handleFirstNameChange(e) {
        // Spread syntax
        const newState = { ...this.state, firstName: { ...this.state.firstName, value: e.target.value } }
        this.setState(newState);
    }

    handleLastNameChange(e) {
        const newState = { ...this.state, lastName: { ...this.state.lastName, value: e.target.value } }
        this.setState(newState);
    }

    handleBirthdateChange(e) {
        const newState = { ...this.state, birthdate: { ...this.state.birthdate, value: e.target.value } }
        this.setState(newState);
    }

    handleEmailChange(e) {
        const newState = { ...this.state, email: { ...this.state.email, value: e.target.value } }
        this.setState(newState);
    }

    handlePhoneChange(e) {
        const newState = { ...this.state, phone: { ...this.state.phone, value: e.target.value } }
        this.setState(newState);
    }

    handleGenderChange(e) {
        const newState = { ...this.state, gender: { ...this.state.gender, value: e.target.value } }
        this.setState(newState);
    }

    render() {

        return (
            <div className="container mx-auto px-4 mt-12 mb-4">
                <section hidden={this.state.filled} className="transition">
                    <H1 title="Register"></H1>
                    <form onSubmit={this.handleSubmitForm}>

                        <div className="mt-12">
                            <Label for="firstName" name="First Name" />
                            <input required className={this.state.firstName.message ? 'error' : ''} name="firstName" type="text" placeholder="Type in your first name" onChange={this.handleFirstNameChange} />
                            <span className="text-red-500 text-xs">{this.state.firstName.message ? this.state.firstName.message : ''}</span>
                        </div>

                        <div className="mt-4">
                            <Label for="lastName" name="Lastname" />
                            <input required className={this.state.lastName.message ? 'error' : ''} name="lastName" type="text" placeholder="Type in your lastname" onChange={this.handleLastNameChange} />
                            <span className="text-red-500 text-xs">{this.state.lastName.message ? this.state.lastName.message : ''}</span>
                        </div>
                        <div className="mt-4">

                            <Label for="gender" name="Gender" />
                            <select className={this.state.gender.message ? 'error ' : ''} name="gender" value={this.state.gender.value} onChange={this.handleGenderChange}>
                                <option value="true">Male</option>
                                <option value="false">Female</option>
                            </select>
                            <span className="text-red-500 text-xs">{this.state.gender.message ? this.state.gender.message : ''}</span>
                        </div>
                        <div className="mt-4">

                            <Label for="birthdate" name="Birthdate" />
                            <input required className={this.state.birthdate.message ? 'error' : ''} name="birthdate" type="date" placeholder="Type in your birthdate" onChange={this.handleBirthdateChange} />
                            <span className="text-red-500 text-xs">{this.state.birthdate.message ? this.state.birthdate.message : ''}</span>
                        </div>
                        <div className="mt-4">

                            <Label for="email" name="E-Mail" />
                            <input required className={this.state.email.message ? 'error' : ''} name="email" type="email" placeholder="Type in your e-mail adress" onChange={this.handleEmailChange} />
                            <span className="text-red-500 text-xs">{this.state.email.message ? this.state.email.message : ''}</span>
                        </div>
                        <div className="mt-4">
                            <Label for="phone" name="Mobile" />
                            <input className={this.state.phone.message ? 'error' : ''} name="phone" type="text" placeholder="Type in your mobile phone number" onChange={this.handlePhoneChange} />
                            <span className="text-red-500 text-xs">{this.state.phone.message ? this.state.phone.message : ''}</span>
                        </div>

                        <Button name="submit" displayName="Submit" type="submit"/>

                    </form>
                </section>
                <section hidden={!this.state.filled}>
                    <H1 title="QR-Code"></H1>
                    <div className="w-full mt-12 flex">
                        <div className="rounded-2xl shadow-lg p-8 bg-green-100 mx-auto">
                            <div className="rounded-2xl bg-white p-4">
                                {(this.state.filled) ? <QRCode className="w-full bg-white" width="12rem" height="12rem"
                                                               value={this.state.qrString}/> : ''}
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
