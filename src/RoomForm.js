import React, {Component} from 'react'

class RoomForm extends Component {

    state={
        
            name: "",
            description: ""
        
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        const roomName=this.state.name
        const room={
            [roomName]:{
                name: this.state.name,
                description: this.state.description
            }
        }
        this.props.addRoom(room)
    
        this.props.showForm()
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
        <form onSubmit={this.handleSubmit}>

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
            <button type="submit" />

            </form>

        </div>
    )}


}

export default RoomForm