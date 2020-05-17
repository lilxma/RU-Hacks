import React, {Component} from "react"
import {Modal, Button, Row, Col, Form} from "react-bootstrap";



export class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state= {
            item: " ",
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
        <label class="todoLabel">
          Item:
          <input type="text" placeholder="Enter quantity, item name, and store" value={this.state.name} onChange={e => this.setState({item: e.target.value})} />
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

export default AddTodo