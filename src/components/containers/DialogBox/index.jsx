import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import Items from "../Items/Items";
import TotalAmount from "../../TotalAmount";
import { connect } from "react-redux";
import { ReactComponent as GoldSVG } from "../../../assets/images/svg-icons/ingots.svg";
import { showDialog } from "../../../redux/actions/dialogActions";
import { boughtItems } from "./../../../redux/actions/userActions";

const DialogBox = ({ dialogBox, showDialog, boughtItems, user, buy }) => {
  let itemsInCart = buy?.length > 0;
  
  const handleBuy = () => {
    if (itemsInCart) {
      boughtItems();
      showDialog(false);
    }
  };

  return (
    <Modal
      show={dialogBox.show}
      onHide={() => showDialog(false)}
      backdrop="static"
      keyboard={false}
      animation={false}
      centered
      backdropClassName={user.balance === 420 ? "fourtwenty" : ""}
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
        <Button
          variant="primary"
          className={
            user.balance === 420 ? "buttonSize fourtwenty" : "buttonSize"
          }
          disabled={!itemsInCart}
          onClick={() => handleBuy()}
        >
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

const mapStateToProps = (state) => ({
  dialogBox: state.dialogBox,
  user: state.user,
  buy: state.buy,
});

export default connect(mapStateToProps, { showDialog, boughtItems })(DialogBox);
