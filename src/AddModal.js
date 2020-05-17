import React, {Component} from "react"
import {Modal, Button, Row, Col, Form} from "react-bootstrap";



export class AddModal extends Component{
    constructor(props){
        super(props);
        this.state= {
            username: " ",
            password: " ",
            identity: this.props.identity,
    }
    }
     handleSubmit() {
        console.log(this.state);
    }
    
    
    
    
    render(){
        return (
         <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            
        <form className="forms">
        <label>
          First Name:
          <input type="text" placeholder="Enter username..." value={this.state.name} onChange={e => this.setState({username: e.target.value})} />
        </label>
        <br />
            
             <label>
         Last Name:
          <input type="text" placeholder="Enter password..." value={this.state.name} onChange={e => this.setState({password: e.target.value})} />
        </label>
         <br />
            
        <label>
          Email:
          <input type="text" placeholder="Enter email..." value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
        </label>
          <br />
            
        <label>
          Phone:
          <input type="text" placeholder="Enter number..." value={this.state.phone} onChange={e => this.setState({phone: e.target.value})} />
        </label>
          <br />
            
            <label>
          Address:
          <input type="text" placeholder="Enter address..." value={this.state.address} onChange={e => this.setState({address: e.target.value})} />
        </label>
        <br />
        <button onClick={this.handleSubmit()}>Submit</button>
            
          
      </form>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
        
         /* <Button variant="danger" onClick={this.props.onHide}>Close</Button> */
        
        
        
        
        )
    }
    
}

export default AddModal 