import React, {Component} from 'react'


export class DashboardContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.getData()

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
            <div>hallo</div>
        )
    }
}

export default DashboardContainer
