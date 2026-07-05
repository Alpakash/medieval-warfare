import { useStore } from "@/store";

const TotalAmount = () => {
  const totalPrice = useStore((state) => state.totalPrice);

  return (
    <div className="flex justify-between font-bold mt-4 mb-4">
      <div>Total</div>
      <div>{totalPrice.amount} gold</div>
    </div>
  );
};

export default TotalAmount;