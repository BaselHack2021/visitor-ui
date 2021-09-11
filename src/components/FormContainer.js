import React, { Component } from 'react'
import H1 from './H1'
import Button from './Button'
import Input from './Input'
import Label from './Label'

export class FormContainer extends Component {

    constructor(props) {
        super(props)

        this.handleSubmitForm = this.handleSubmitForm.bind(this);

        this.state = {
            formData: {}
        }
    }


    handleSubmitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData.keys())


        // const object = {};

        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });
        // let json = JSON.stringify(object);


        // console.log(this.objectifyForm(json))
    }

    handleInputChange(){

    }


    render() {
        return (
            <div className="container px-4">
                <H1 title="Registrieren"></H1>
                <form onSubmit={this.handleSubmitForm}>

                    <div>

                        <Label for="firstName" name="First name" />
                        <Input name="firstName" type="text" placeholder="Type in your first name" />
                    </div>

                    <div>
                        <Label for="lastName" name="Lastname" />
                        <Input name="lastName" type="text" placeholder="Type in your lastname" />
                    </div>
                    <div>

                        <Label for="birthdate" name="Birthdate" />
                        <Input name="birthdate" type="date" placeholder="Type in your birthdate" />
                    </div>
                    <div>

                        <Label for="email" name="E-Mail" />
                        <Input name="email" type="email" placeholder="Type in your e-mail adress" />
                    </div>
                    <div>

                        <Label for="phone" name="Mobile" />
                        <Input name="phone" type="text" placeholder="Type in your mobile phone number" />
                    </div>


                    <button className="rounded-full px-4 py-2 font-semibold bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white" name="Submit" type="submit">Sumbit</button>
                </form>
            </div>
        )
    }
}

export default FormContainer
