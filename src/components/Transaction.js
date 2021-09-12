import React, {Component} from 'react'

export class Transaction extends Component {
    render() {
        return (
            // <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
            //     <img className="w-5 h-5" src={this.props.url} alt="{this.props.alt}"/>
            // </div>
        <div className="flex justify-start flex-row items-center p-3 shadow-lg w-full rounded-full ">
            <div
                className="bg-green-500 flex justify-center items-center p-4 shadow-lg rounded-full h-4 w-4 mr-5">
                {this.props.count}
            </div>
            <b className="text-left flex-grow"> {this.props.type}</b>
            <div> {this.props.amount} CHF</div>
        </div>
        )
    }
}

export default Transaction
