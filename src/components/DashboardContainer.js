import React, {Component} from 'react'


export class DashboardContainer extends Component {

    constructor(props) {
        super(props)

        this.getData()

        this.state = {}
    }


    getData(e) {
        let path = 'http://quer.iperka.com/users/613cb22278ae99dfdccf2033'
        fetch(path)
            .then((response) => {
                console.log(response.json())
            })
            .then(data => console.log(data));

        // this.setState({firstName: e.target.value});
    }

    render() {
        return (
            <div>hallo</div>
        )
    }
}

export default DashboardContainer
