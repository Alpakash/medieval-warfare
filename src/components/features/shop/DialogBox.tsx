import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Items from "./Items";
import TotalAmount from "./TotalAmount";
import { useStore } from "@/store";

let buyCount = 0;

const DialogBox = () => {
  const dialogBox = useStore((state) => state.dialogBox);
  const user = useStore((state) => state.user);
  const totalPrice = useStore((state) => state.totalPrice);
  const showDialog = useStore((state) => state.showDialog);
  const boughtItems = useStore((state) => state.boughtItems);
  const spendGold = useStore((state) => state.spendGold);
  const cartGoldEqualToCurrentGold = useStore(
    (state) => state.cartGoldEqualToCurrentGold
  );

  const [requestError, setRequestError] = useState<string>("");
  const itemsInCart = user.balance !== user.cartBalance;

  const handleBuy = () => {
    buyCount++;
    if (buyCount % 3 === 0) {
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
        setRequestError(
          "Hooray! Every 3rd buy you get an error... Your request failed, try again ;-)"
        );
      });
  };

  return (
    <Dialog open={dialogBox.show} onOpenChange={(open) => showDialog(open)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order</DialogTitle>
        </DialogHeader>

        <div className="flex justify-end items-center gap-2 mb-4">
          <span className="font-semibold">{user.cartBalance}</span>
          <span className="text-muted-foreground">in cart</span>
        </div>

        <Items />

        {requestError && (
          <p className="text-sm text-destructive italic mt-2">
            {requestError}
          </p>
        )}

        <TotalAmount />

        <DialogFooter>
          <Button
            variant="default"
            disabled={!itemsInCart}
            onClick={handleBuy}
          >
            Buy
          </Button>
          <Button variant="outline" onClick={handleHideDialog}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;