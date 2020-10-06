import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import Items from "../Items/Items";
import TotalAmount from "../../TotalAmount";
import { connect } from "react-redux";
import { ReactComponent as GoldSVG } from "../../../assets/images/svg-icons/ingots.svg";
import { showDialog } from "../../../redux/actions/dialogActions";
import { boughtItems, spendGold, cartGoldEqualToCurrentGold } from "./../../../redux/actions/userActions";
import { DialogTitle } from "../../common/Typography";

let count = 0;

const DialogBox = ({
  dialogBox,
  showDialog,
  boughtItems,
  user,
  spendGold,
  totalPrice,
  cartGoldEqualToCurrentGold,
}) => {
  const [requestError, setRequestError] = useState({});
  let itemsInCart = user.balance !== user.cartBalance;

  const handleBuy = () => {
    count++;
    if (count % 3 === 0) {
      return simulateFailureRequest();
    }

    if (itemsInCart) {
      boughtItems();
      showDialog(false);
      spendGold(totalPrice);
      setRequestError("");
    }
  };

  const handleHideDialog = () => {
    showDialog(false);
    cartGoldEqualToCurrentGold();
  };

  const simulateFailureRequest = () => {
    return new Promise((_, reject) => {
      setTimeout(() => reject(), Math.random() * 100);
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => {
        // catch the failed request and set the error state to show in UI
        setRequestError({
          error:
            "Hooray! Every 3th buy you get an error... Your request failed, try again ;-)",
        });
      });
  };

  return (
    <Modal
      show={dialogBox.show}
      onHide={() => handleHideDialog()}
      backdrop="static"
      keyboard={false}
      animation={false}
      centered
    >
      <Modal.Header className="removeBorder" closeButton>
        <DialogTitle>Order</DialogTitle>
      </Modal.Header>
      <Modal.Body>
        <span className="d-flex justify-content-end">
          <GoldSVG width="25px" height="25px" className="mr-2" />
          <strong>{user.cartBalance}</strong>&nbsp;in cart
        </span>
        <Items />
        <span className="error">{requestError.error}</span>
        <TotalAmount />
      </Modal.Body>
      <Modal.Footer className="removeBorder">
        <Button
          variant="primary"
          className="buttonSize"
          // didn't make the button disabled when total price exceeds the users gold,
          // because the user is already restricted from adding more items if there is not enough gold
          disabled={!itemsInCart}
          onClick={() => handleBuy()}
        >
          Buy
        </Button>

        <Button
          variant="secondary"
          className="buttonSize"
          onClick={() => handleHideDialog()}
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
  totalPrice: state.totalPrice,
});

// connect the redux store to component
export default connect(mapStateToProps, {
  showDialog,
  boughtItems,
  spendGold,
  cartGoldEqualToCurrentGold,
})(DialogBox);
