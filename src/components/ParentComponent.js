import React, {Component} from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleNameChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Form formData={this.state} handleNameChange={this.handleNameChange}/>
                <DisplayData formData={this.state}/>
            </div>
        )
    }
}
export default ParentComponent