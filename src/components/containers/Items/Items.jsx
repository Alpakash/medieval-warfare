import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import minus from "../../../assets/images/icons/minus.png";
import plus from "../../../assets/images/icons/plus.png";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../../redux/actions/itemActions";
import {
  incrementTotal,
  decrementTotal,
} from "../../../redux/actions/priceActions";
import {
  incrementGold,
  decrementGold,
} from "../../../redux/actions/userActions";
import {
  sellItems,
  addToCart,
} from "./../../../redux/actions/buyActions";

const Box = styled.span`
  padding: 3px 7px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
`;

const Items = ({
  addItem,
  removeItem,
  incrementTotal,
  decrementTotal,
  decrementGold,
  incrementGold,
  totalPrice,
  sellItems,
  addToCart,
  items,
  user,
}) => {
  const [error, setError] = useState(null);

  const handleDecrementItem = (item, removeOne) => {
    if (item.quantity && item.inCart > 0) {
      removeItem(item.index, removeOne);
      decrementTotal(item);
      incrementGold(item);
      sellItems(item)
    }
    setError("");
  };

  const handleIncrementItem = (item, incrementCart, user) => {
    if (item.quantity > 0) {
      if (item.price > user.balance) {
        setError("You have insufficient gold.");
      }

      if (user.balance >= item.price) {
        addItem(item.index, incrementCart);
        incrementTotal(item);
        decrementGold(item);
        addToCart(item);
        setError("");
      }
    }
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="d-flex justify-content-between">
          <div className="item">
            <img
              src={require(`../../../assets/images/items/${item.image}`)}
              className="imageMargin"
              alt={item.name}
            />
            {item.name}
            &nbsp; <strong>/</strong> &nbsp;
            <span>{item.quantity} items left</span>
          </div>

          <div className="d-flex align-self-center">
            <Box>
              <img
                src={minus}
                alt="Minus"
                onClick={() => handleDecrementItem(item, 1)}
              />
            </Box>
            <input
              type="text"
              value={item.inCart}
              onChange={(e) =>
                handleIncrementItem(
                  item,
                  Number(e.target.value),
                  user,
                  totalPrice
                )
              }
              className="text-center"
              maxLength="3"
            />

            <Box>
              <img
                src={plus}
                alt="Plus"
                onClick={() => handleIncrementItem(item, 1, user, totalPrice)}
              />
            </Box>

            <span className="goldMargin">{item.price} gold</span>
          </div>
        </div>
      ))}
      <span className="error">{error}</span>
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  user: state.user,
  totalPrice: state.totalPrice,
});

export default connect(mapStateToProps, {
  addItem,
  removeItem,
  incrementTotal,
  decrementTotal,
  incrementGold,
  decrementGold,
  sellItems,
  addToCart
})(Items);
