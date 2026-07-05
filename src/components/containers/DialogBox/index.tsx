import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import Items from "../Items/Items";
import TotalAmount from "../../TotalAmount";
import GoldSVG from "../../../assets/images/svg-icons/ingots.svg?react";
import { DialogTitle } from "../../common/Typography";
import { useStore } from "../../../store";

let count = 0;

const DialogBox = () => {
  const dialogBox = useStore((state) => state.dialogBox);
  const user = useStore((state) => state.user);
  const totalPrice = useStore((state) => state.totalPrice);
  const showDialog = useStore((state) => state.showDialog);
  const boughtItems = useStore((state) => state.boughtItems);
  const spendGold = useStore((state) => state.spendGold);
  const cartGoldEqualToCurrentGold = useStore((state) => state.cartGoldEqualToCurrentGold);

  const [requestError, setRequestError] = useState<{ error?: string } | string>("");
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
      .then((response) => response)
      .then((data) => console.log(data))
      .catch(() => {
        setRequestError({
          error:
            "Hooray! Every 3rd buy you get an error... Your request failed, try again ;-)",
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
        <span className="error">{typeof requestError === 'object' ? requestError.error : requestError}</span>
        <TotalAmount />
      </Modal.Body>
      <Modal.Footer className="removeBorder">
        <Button
          variant="primary"
          className="buttonSize"
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

export default DialogBox;