import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";

class models extends Component {
  render() {
    return (
      // Trailer video modal
      <Modal
        isOpen={true}
        size="lg"
        isOpen={this.state.modal}
        toggle={this.toggle}
        style={{ maxWidth: "100%" }}
      >
        <ModalHeader toggle={this.toggle}>{trailer.name}</ModalHeader>
        <ModalBody>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            playing
            height="90vh"
            width="100%"
          />
        </ModalBody>
      </Modal>
    );
  }
}
export default models;
