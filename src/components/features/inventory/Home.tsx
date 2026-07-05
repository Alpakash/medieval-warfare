import { useAuth0 } from "@auth0/auth0-react";
import { useStore } from "@/store";

const Home = () => {
  const { user: authUser, isAuthenticated, isLoading } = useAuth0();
  const user = useStore((state) => state.user);
  const buy = useStore((state) => state.buy);
  const dialogBox = useStore((state) => state.dialogBox);

  const bought = buy.reduce<Record<string, number>>((acc, cur) => {
    acc[cur.name] = (acc[cur.name] ?? 0) + 1;
    return acc;
  }, {});

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Login to use the app and buy some awesome items!
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
      <ul className="space-y-2">
        {user.bought && !dialogBox.show ? (
          Object.entries(bought).map(([key, value], index) => (
            <li key={index} className="text-lg italic ml-4">
              {value}x {key}
            </li>
          ))
        ) : !user.bought ? (
          <li className="text-lg italic ml-4">
            You have no items in your inventory, {authUser?.name}, buy some
            items!
          </li>
        ) : (
          <li className="text-lg italic ml-4">Editing...</li>
        )}
      </ul>
    </div>
  );
};

export default Home;