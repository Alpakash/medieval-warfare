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
} from "./styles";
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
import { sellItems, addToCart } from "../../../redux/actions/buyActions";
import { Text } from "../../common/Typography";
import { RootState, Item as ItemType } from "../../../types";

const Box = styled.span`
  height: 30px;
  width: 30px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ItemsProps {
  addItem: typeof addItem;
  removeItem: typeof removeItem;
  incrementTotal: typeof incrementTotal;
  decrementTotal: typeof decrementTotal;
  changeTotal: typeof changeTotal;
  changeGold: typeof changeGold;
  decrementGold: typeof decrementGold;
  incrementGold: typeof incrementGold;
  sellItems: typeof sellItems;
  addToCart: typeof addToCart;
  inputChanges: any;
  items: ItemType[];
  totalPrice: RootState['totalPrice'];
  user: RootState['user'];
}

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
}: ItemsProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleDecrementItem = (item: ItemType, removeOnCart: number) => {
    if (item.quantity && item.inCart > 0) {
      removeItem(item.index, removeOnCart);
      decrementTotal(item);
      incrementGold(item);
      sellItems(item);
    }
    setError("");
  };

  const handleIncrementItem = (item: ItemType, addOneCart: number, user: RootState['user']) => {
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

  const handleInputItem = (item: ItemType, changeCart: number, user: RootState['user'], total: RootState['totalPrice']) => {
    if (user.cartBalance >= item.price * Number(changeCart)) {
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
              src={item.imageUrl}
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
              value={item.inCart as any}
              onChange={(e) =>
                handleInputItem(item, Number(e.target.value), user, totalPrice)
              }
              className="text-center"
              maxLength={3}
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

const mapStateToProps = (state: RootState) => ({
  items: state.items,
  user: state.user,
  totalPrice: state.totalPrice,
});

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
