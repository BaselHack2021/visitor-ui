import React, {Component} from 'react'

import H1 from './H1'

export class AccountContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            userData: {},
            festivalData: {},
        }

        this.getData()
    }

    getData() {
        let path = 'http://quer.iperka.com/festival-users/613d04360246e76ede24656d'
        // let path = `http://quer.iperka.com/users/${this.props.match.params.id}`;
        fetch(path).then((data) => {
            data.json().then((e) => {
                // console.log(e.data.email)
                this.setState({userData: e.data.user})
                this.setState({festivalData: e.data})
                console.log(this.state)
            })
        });
    }


    render() {
        return (
            <div className="container flex flex-col px-3 pb-36 h-screen box-border -mt-50">
                <img className="z-0" src={'/account.png'} alt="Logo"/>
                <div
                    className="z-10 container bg-white flex flex-col p-5 p-1 h-screen box-border h-1 shadow-lg rounded-2xl -mt-8 gb-green-500">
                    <div className="my-auto">
                        <div className="flex flex-col justify-center items-center gap-10 ">
                            <H1 title={`${this.state.festivalData.balance} CHF`}/>
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
                    <div className="bg-green-500 h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                        <img className="w-5 h-5" src={'/bier.png'} alt="ach_1"/>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                        <img className="w-5 h-5" src={'/wine.png'} alt="ach_1"/>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                        <img className="w-5 h-5" src={'/bottle.png'} alt="ach_1"/>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                        <img className="w-5 h-5" src={'/bier.png'} alt="ach_1"/>
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                        <img className="w-5 h-5" src={'/bier.png'} alt="ach_1"/>
                    </div>
                </div>
                <br/>
                <h2 className="text-3xl text-center">Transactions</h2>

                <div className="flex flex-row flex-wrap justify-evenly mt-4 gap-3">
                    <div className=" flex justify-start flex-row items-center p-3 shadow-lg w-full rounded-full ">
                        <div
                            className="bg-green-500 flex justify-center items-center p-4 shadow-lg rounded-full h-4 w-4 mr-5">1
                        </div>
                        <b className="text-left flex-grow">Bier</b>
                        <div>5 CHF</div>
                    </div>
                    <div className="flex justify-start flex-row items-center p-3 shadow-lg w-full rounded-full ">
                        <div className="flex justify-center items-center p-4 shadow-lg rounded-full h-4 w-4 mr-5">1
                        </div>
                        <b className="text-left flex-grow">Bier</b>
                        <div>5 CHF</div>
                    </div>
                    <div className="flex justify-start flex-row items-center p-3 shadow-lg w-full rounded-full ">
                        <div className="flex justify-center items-center p-4 shadow-lg rounded-full h-4 w-4 mr-5">1
                        </div>
                        <b className="text-left flex-grow">Bier</b>
                        <div>5 CHF</div>
                    </div>
                    <div className="flex justify-start flex-row items-center p-3 shadow-lg w-full rounded-full ">
                        <div className="flex justify-center items-center p-4 shadow-lg rounded-full h-4 w-4 mr-5">1
                        </div>
                        <b className="text-left flex-grow">Bier</b>
                        <div>5 CHF</div>
                    </div>
                </div>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default AccountContainer
