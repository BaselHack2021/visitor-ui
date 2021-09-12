import React, {Component} from 'react'

export class Achievement extends Component {
    render() {
        return (
            <div className="h-10 w-10 flex justify-center items-center shadow-lg rounded-full">
                <img className="w-5 h-5" src={this.props.url} alt="{this.props.alt}"/>
            </div>
        )
    }
}

export default Achievement
