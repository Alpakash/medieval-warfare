import React from "react";
import { BigText, ItemText } from "../../common/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import { useStore } from "../../../store";

const Home = () => {
  const { user: users, isAuthenticated, isLoading } = useAuth0();
  const user = useStore((state) => state.user);
  const buy = useStore((state) => state.buy);
  const dialogBox = useStore((state) => state.dialogBox);

  let bought: Record<string, number> = buy.reduce((acc, cur) => {
    acc[cur.name] = (acc[cur.name] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <div className="container body-content mt-5">
        {isLoading ? <BigText>Loading...</BigText>
        : isAuthenticated
        ? (
          <>
            <br/>
            <ul>
              <BigText>Inventory</BigText>
              {user.bought && !dialogBox.show ? (
                Object.entries(bought).map(([key, value], index) => {
                  return (
                    <li key={index}>
                      <ItemText>
                        {value}x {key}
                      </ItemText>
                    </li>
                  );
                })
              ) : !user.bought ? (
                <ItemText>
                  You have no items in your inventory, {users?.name}, buy some items!
                </ItemText>
              ) : (
                <ItemText>Editing...</ItemText>
              )}
            </ul>
          </>
        ) : <>
        <div className="hi"></div>
        <BigText>Login to use the app and buy some awesome items!</BigText>
        </>

        }
      </div>
    </>
  );
};

export default Home;