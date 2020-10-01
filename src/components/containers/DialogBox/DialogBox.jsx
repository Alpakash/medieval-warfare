import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import Items from "../Items/Items";
import TotalAmount from '../../TotalAmount';
import { connect } from 'react-redux'
import { showDialog } from '../../../redux/actions/dialogActions';
import { ReactComponent as GoldSVG } from "../../../assets/images/svg-icons/ingots.svg";

const DialogBox = ({ dialogBox, showDialog, user }) => {
  return (
    <Modal
      show={dialogBox.show}
      onHide={() => showDialog(false)}
      backdrop="static"
      keyboard={false}
      animation={false}
      centered
    >
      <Modal.Header className="removeBorder" closeButton>
        <h3>Order</h3>
      </Modal.Header>
      <Modal.Body>
        <span className="d-flex justify-content-end">
        <GoldSVG width="25px" height="25px" className="mr-2" />
        {user.balance}
        </span>
        <Items />
        <TotalAmount />
      </Modal.Body>
      <Modal.Footer className="removeBorder">
        <Button variant="primary" className="buttonSize">
          Buy
        </Button>

        <Button
          variant="secondary"
          className="buttonSize"
          onClick={() => showDialog(false)}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({
    dialogBox: state.dialogBox,
    user: state.user
})

export default connect(mapStateToProps, {showDialog})(DialogBox);
