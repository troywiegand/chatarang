import React, {Component} from 'react'

class RoomForm extends Component {

    state={
        
            name: "",
            description: ""
        
    }

    handleChangeName = (ev) =>{
        ev.preventDefault()
        this.setState({ name : ev.target.value})
    }

    handleChangeDescription = (ev) => {
        ev.preventDefault()

        this.setState({ description : ev.target.value})
    }
    
    render(){
        return (
        <div>
        <form>

            <input 
            type="text" name="name"
            placeholder="Name of Room..."
            required
            value={this.state.name}
            onChange={this.handleChangeName}
            />
            <input type="text"  name="description"
            placeholder="Description of Room"
            required
            value={this.state.description}
            onChange={this.handleChangeDescription}
            
            />

            </form>

        </div>
    )}


}

export default RoomForm