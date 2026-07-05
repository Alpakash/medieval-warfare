import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";
import type { Item, UserState, TotalPriceState } from "@/types";
import minus from "@/assets/images/icons/minus.png";
import plus from "@/assets/images/icons/plus.png";

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

  const handleDecrementItem = (item: Item, removeOnCart: number) => {
    if (item.quantity && item.inCart > 0) {
      removeItem(item.index, removeOnCart);
      decrementTotal(item);
      incrementGold(item);
      sellItems(item);
    }
    setError("");
  };

  const handleIncrementItem = (
    item: Item,
    addOneCart: number,
    user: UserState
  ) => {
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
    item: Item,
    changeCart: number,
    user: UserState,
    total: TotalPriceState
  ) => {
    if (user.cartBalance >= item.price * Number(changeCart)) {
      inputChanges(item, Number(changeCart));
      changeTotal(item, Number(changeCart));
      changeGold(item, Number(changeCart), total);
      addToCart(item, Number(changeCart));
      setError("");
    } else {
      setError("You have insufficient gold to buy that amount of items...");
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b pb-2"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="overflow-hidden">
              <span className="font-medium block truncate">{item.name}</span>
              <span className="text-sm text-muted-foreground">
                {item.quantity} items left
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDecrementItem(item, 1)}
            >
              <img src={minus} alt="Minus" className="w-4 h-4" />
            </Button>
            <input
              type="text"
              value={item.inCart}
              onChange={(e) =>
                handleInputItem(item, Number(e.target.value), user, totalPrice)
              }
              className="w-12 h-9 text-center border rounded-md"
              maxLength={3}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleIncrementItem(item, 1, user)}
            >
              <img src={plus} alt="Plus" className="w-4 h-4" />
            </Button>
            <span className="ml-2 text-sm font-medium">{item.price} gold</span>
          </div>
        </div>
      ))}
      {error && (
        <p className="text-sm text-destructive italic">{error}</p>
      )}
    </div>
  );
};

export default Items;