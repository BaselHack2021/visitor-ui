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
        let path = 'http://quer.iperka.com/users/613cb22278ae99dfdccf2033'
        fetch(path)
            .then((response) => {
                console.log(response.json())
                return response.json();
            })
            .then((data) => {
                // Insert from fetch
                const balance = 0;
                this.setState({ balance: balance })
            });
    }

    render() {
        return (
            <div className="container mx-auto px-4 mt-12">
                <H1 title="Account"></H1>
                <div>
                    <H3 title="Your bank balance is:" />
                    <H2 title={ `${this.state.balance} CHF` } />
                </div>
            </div>
        )
    }
}

export default AccountContainer
