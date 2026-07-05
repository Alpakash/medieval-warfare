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
import { Text } from "../../common/Typography";
import { useStore } from "../../../store";
import { Item as ItemType, UserState, TotalPriceState } from "../../../types";

const Box = styled.span`
  height: 30px;
  width: 30px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = () => {
  const items = useStore((state) => state.items);
  const user = useStore((state) => state.user);
  const totalPrice = useStore((state) => state.totalPrice);

  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const inputChanges = useStore((state) => state.inputChanges);
  const incrementTotal = useStore((state) => state.incrementTotal);
  const decrementTotal = useStore((state) => state.decrementTotal);
  const changeTotal = useStore((state) => state.changeTotal);
  const changeGold = useStore((state) => state.changeGold);
  const decrementGold = useStore((state) => state.decrementGold);
  const incrementGold = useStore((state) => state.incrementGold);
  const sellItems = useStore((state) => state.sellItems);
  const addToCart = useStore((state) => state.addToCart);

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

  const handleIncrementItem = (item: ItemType, addOneCart: number, user: UserState) => {
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

  const handleInputItem = (
    item: ItemType,
    changeCart: number,
    user: UserState,
    total: TotalPriceState
  ) => {
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

export default Items;