import React, { useState } from "react";
import styled from "styled-components";
import {
  Item,
  Image,
  goldMargin,
  Input,
  Error,
  ItemsParent,
  Quantity,
} from "./styles.js";
import minus from "../../../assets/images/icons/minus.png";
import plus from "../../../assets/images/icons/plus.png";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  inputChanges,
} from "../../../redux/actions/itemActions";
import {
  incrementTotal,
  decrementTotal,
  changeTotal,
} from "../../../redux/actions/priceActions";
import {
  incrementGold,
  decrementGold,
  changeGold,
} from "../../../redux/actions/userActions";
import { sellItems, addToCart } from "./../../../redux/actions/buyActions";
import { Text } from "../../common/Typography";

const Box = styled.span`
  height: 30px;
  width: 30px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = ({
  addItem,
  removeItem,
  incrementTotal,
  decrementTotal,
  changeTotal,
  changeGold,
  decrementGold,
  incrementGold,
  sellItems,
  addToCart,
  inputChanges,
  items,
  totalPrice,
  user,
}) => {
  const [error, setError] = useState(null);

  // handle removing item from cart by dispatching actions
  const handleDecrementItem = (item, removeOnCart) => {
    if (item.quantity && item.inCart > 0) {
      removeItem(item.index, removeOnCart);
      decrementTotal(item);
      incrementGold(item);
      sellItems(item);
    }
    setError("");
  };

  // handle adding item from cart by dispatching actions
  const handleIncrementItem = (item, addOneCart, user) => {
    if (item.quantity > 0) {
      if (item.price > user.cartBalance && item.price > user.balance) {
        setError("You have insufficient gold.");
      }

      if (user.cartBalance >= item.price) {
        addItem(item.index, addOneCart);
        incrementTotal(item);
        decrementGold(item);
        addToCart(item);
        setError("");
      }
    }
  };

  // input field not working correctly
  const handleInputItem = (item, changeCart, user, total) => {
    if (
      user.cartBalance >= item.price * Number(changeCart)
    ) {
      inputChanges(item, Number(changeCart));
      changeTotal(item, Number(changeCart));
      changeGold(item, Number(changeCart), total);
      addToCart(item, Number(changeCart), user);
      setError("");
    } else {
      setError("You have insufficient gold to buy that amount of items...");
    }
  };

  return (
    <ItemsParent>
      {items.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between itemMargin"
        >
          <Item>
            <Image
              src={require(`../../../assets/images/items/${item.image}`)}
              alt={item.name}
            />
            <Text>{item.name}</Text>
            <Quantity>
              &nbsp; <strong>/</strong> &nbsp;
              <Text>{item.quantity} items left</Text>
            </Quantity>
          </Item>

          <div className="d-flex align-self-center">
            <Box onClick={() => handleDecrementItem(item, 1)}>
              <img src={minus} alt="Minus" />
            </Box>
            <Input
              type="text"
              value={item.inCart}
              onChange={(e) =>
                handleInputItem(item, e.target.value, user, totalPrice)
              }
              className="text-center"
              maxLength="3"
            />

            <Box onClick={() => handleIncrementItem(item, 1, user)}>
              <img src={plus} alt="Plus" />
            </Box>

            <Text style={goldMargin}>{item.price} gold</Text>
          </div>
        </div>
      ))}
      <Error>{error}</Error>
    </ItemsParent>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  user: state.user,
  totalPrice: state.totalPrice,
});

// connect the redux store to component
export default connect(mapStateToProps, {
  addItem,
  removeItem,
  incrementTotal,
  decrementTotal,
  changeTotal,
  changeGold,
  incrementGold,
  decrementGold,
  sellItems,
  addToCart,
  inputChanges,
})(Items);
