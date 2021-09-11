import React, { Component } from 'react'
import Button from './Button';
import H1 from './H1'
import H2 from './H2'
import Label from './Label'
import QRCode from "react-qr-code";
import Select from 'react-select'




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
            firstName: '',
            lastName: '',
            gender: null,
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

    pushData(){
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
            .then(function(response) {
                return response.json()
              }).then((body) => {
                console.log(body.data._id);
                this.setState({qrString: body.data._id});
                this.setState({filled: true});
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
    handleGenderChange(e){
        this.setState({ gender: e.value});
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
                        
                        <Label for="gender" name="Gender" />
                        <Select name="gender" options={this.options} onChange={this.handleGenderChange} />
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
                 <H1 title="Generated Code" ></H1>
                {(this.state.filled) ? <QRCode className="mx-auto" value={this.state.qrString} /> : ''}
                <H2 title="Please show this code to authorized personel"></H2>
             </section>
            </div>

        )
    }
}

export default FormContainer
