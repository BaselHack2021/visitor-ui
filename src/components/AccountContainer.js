import React, { Component } from 'react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'

export class AccountContainer extends Component {

    constructor(props) {
        super(props)

        //this.getData()

        this.state = {
            balance: 0,
        }
    }


    getData(e) {
        // let path = 'http://localhost:3000/users/613cb22278ae99dfdccf2033'
        let path = 'http://quer.iperka.com/users/613cb22278ae99dfdccf2033'
        let response = fetch(path).then((data) => {
            data.json().then((e)=>{
                console.log(e.data.email)
                this.state = e.data
                console.log(this.state.gender)
            })
        });
    }

    render() {
        return (
            <div className="container mx-auto flex flex-col px-4 pt-12 pb-36 h-screen box-border">
                <H1 title="Account"></H1>
                <div className="my-auto">
                    <div>
                        <H3 title="Your bank balance is:" />
                        <div className="mt-8">
                            <H2 title={`${this.state.balance} CHF`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountContainer
