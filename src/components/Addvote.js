import React, { Component } from "react";
import {
	Button,
	Modal
} from "react-bootstrap";

class Addvote extends Component {
  render() {
    return (
		<div>
			<Modal show={this.props.addVoteModal} onHide={this.props.toggleAddVoteModal} >
				<Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            

            <hr />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.toggleAddVoteModal}>Close</Button>
          </Modal.Footer>
			</Modal>
		</div>
    );
  }
}

export default Addvote;