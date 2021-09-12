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
            <div className="container flex flex-col px-3 pb-36 h-screen box-border -mt-50">
                <img src={'account.png'} alt="Logo" />
                <div className="z-50 container flex flex-col px-5 p-1 h-screen box-border h-1 shadow-md rounded-2xl my-4 gb-green-500">
                    {/*<H1 title="Account"/>*/}
                    <div className="my-auto">
                        <div className="flex flex-col justify-center items-center gap-10 ">
                            {/*<H2 title={`${this.state.balance} CHF`}/>*/}
                            <H2 title={`150 CHF`}/>
                            {/*<H3 className="mt-8" title="Your bank balance is:"/><br/>*/}
                            <div className="flex flex-row justify-center items-center w-full">
                                <button className="bg-green-500 hover:bg-green-400 w-full text-white p-4 rounded">
                                    Connect credit card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl text-center m-8">Your achievements!</h2>

                <div className="flex flex-row flex-wrap justify-evenly">
                    <div className="bg-green-500 flex justify-center items-center p-6 shadow-md rounded-full h-4 w-4 ">1</div>
                    <div className="flex justify-center items-center p-6 shadow-md rounded-full h-4 w-4">1</div>
                    <div className="flex justify-center items-center p-6 shadow-md rounded-full h-4 w-4">1</div>
                    <div className="flex justify-center items-center p-6 shadow-md rounded-full h-4 w-4">1</div>
                    <div className="flex justify-center items-center p-6 shadow-md rounded-full h-4 w-4">1</div>
                </div>

                <h2 className="text-3xl text-center p-8">Transactions</h2>
                <div className="flex flex-row flex-wrap justify-evenly mt-4">
                    <div className="flex justify-start flex-row items-center p-6 shadow-md w-full">
                        <div className="">1x</div>
                        <div className="text-left">Bier</div>
                        <div>5 CHF</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountContainer
