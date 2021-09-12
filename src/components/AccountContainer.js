import React, {Component} from 'react'
import Button from './Button';
import H1 from './H1'
import Achievement from "./Achievement";
import Transaction from "./Transaction";
import account from "../img/account.png"
import bier from "../img/bier.png"
import bottle from "../img/bottle.png"
import wine from "../img/wine.png"


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
        // let path = 'http://quer.iperka.com/festival-users/613d04360246e76ede24656d'
        let path = `http://quer.iperka.com/festival-users/${this.props.match.params.id}`;
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
                <img className="z-0" src={account} alt="Logo"/>
                <div
                    className="z-10 container bg-white flex flex-col p-5 p-1 h-screen box-border h-1 shadow-lg rounded-2xl -mt-8 gb-green-500">
                    <div className="flex flex-col justify-center items-center pt-1">
                        <H1 title={`${this.state.festivalData.balance} CHF`}/>
                        <Button name="submit" displayName="Connect credit card" type="submit"/>
                    </div>
                </div>

                <h2 className="text-3xl text-center m-8">Your achievements!</h2>

                <div className="flex flex-row flex-wrap justify-evenly">
                    <Achievement url={wine} alt="wine"/>
                    <Achievement url={bier} alt="bottle"/>
                    <Achievement url={bottle} alt="bottle"/>
                    <Achievement url={bottle} alt="bottle"/>
                    <Achievement url={bottle} alt="bottle"/>

                </div>
                <br/>

                <h2 className="text-3xl text-center">Transactions</h2>
                <div className="flex flex-row flex-wrap justify-evenly mt-4 gap-3">
                    <Transaction type="Gin" count="2" amount="4"/>
                    <Transaction type="Bier" count="5" amount="4"/>
                    <Transaction type="Cola" count="2" amount="4"/>
                    <Transaction type="Sandwitch" count="2" amount="4"/>
                    <Transaction type="Pommes" count="1" amount="4"/>
                </div>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default AccountContainer
