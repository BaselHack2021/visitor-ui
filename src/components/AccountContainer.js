import React, {Component} from 'react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import css from '../AccountCss.css'

export class AccountContainer extends Component {

    constructor(props) {
        super(props)

        this.getData()

        this.state = {
            balance: 0,
            userData: {}
        }
    }

    getData() {
        // let path = 'http://localhost:3000/users/613cb22278ae99dfdccf2033'
        let path = 'http://quer.iperka.com/users/613cb22278ae99dfdccf2033'
        fetch(path).then((data) => {
            data.json().then((e) => {
                // console.log(e.data.email)
                this.setState({userData: e.data})
                console.log(this.state)
            })
        });
    }

    userData() {
        if (this.state.userData) {
            return <div> {this.state.userData.firstName} </div>;
        }
    }

    render() {
        return (
            <div className="container flex flex-col px-4 pt-12 pb-36 h-screen box-border">
                <H1 title="Account"/>
                <div className="my-auto">
                    <div>
                        <H3 title="Your bank balance is:"/>
                        <div className="mt-8">
                            <H2 title={`${this.state.balance} CHF`}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <button className="bg-black text-white p-4 rounded ">
                        Connect credit card
                    </button>
                </div>
            </div>
        )
    }
}

export default AccountContainer
