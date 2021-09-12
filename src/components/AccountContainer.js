import React, {Component} from 'react'
import Button from './Button';
import H1 from './H1'
import Achievement from "./Achievement";
import Transaction from "./Transaction";

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
        //let path = 'http://quer.iperka.com/festival-users/613d04360246e76ede24656d'
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
                <img className="z-0" src={'/account.png'} alt="Logo"/>
                <div
                    className="z-10 container bg-white flex flex-col p-5 p-1 h-screen box-border h-1 shadow-lg rounded-2xl -mt-8 gb-green-500">
                    <div className="flex flex-col justify-center items-center pt-1">
                        <H1 title={`${this.state.festivalData.balance} CHF`}/>
                        <Button name="submit" displayName="Connect credit card" type="submit"/>
                    </div>
                </div>

                <h2 className="text-3xl text-center m-8">Your achievements!</h2>

                <div className="flex flex-row flex-wrap justify-evenly">
                    <Achievement url="/wine.png" alt="wine"/>
                    <Achievement url="/bier.png" alt="bier"/>
                    <Achievement url="/wine.png" alt="bottle"/>
                    <Achievement url="/bottle.png" alt="bottle"/>
                    <Achievement url="/bottle.png" alt="bottle"/>
                </div>
                <br/>
                <h2 className="text-3xl text-center">Transactions</h2>

                <div className="flex flex-row flex-wrap justify-evenly mt-4 gap-3">
                    <Transaction type="Gin" count="1" amount="4"/>
                    <Transaction type="Bier" count="1" amount="4"/>
                    <Transaction type="Cola" count="1" amount="4"/>
                    <Transaction type="Sandwitch" count="1" amount="4"/>
                    <Transaction type="Pommes" count="1" amount="4"/>

                </div>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default AccountContainer
