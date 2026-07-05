import React from "react";
import { connect } from "react-redux";
import { BigText, ItemText } from "../../common/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import { RootState } from "../../../types";

interface HomeProps {
  user: RootState['user'];
  buy: RootState['buy'];
  dialogBox: RootState['dialogBox'];
}

const Home = ({ user, buy, dialogBox }: HomeProps) => {
  const { user: users, isAuthenticated, isLoading } = useAuth0();

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

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  buy: state.buy,
  dialogBox: state.dialogBox,
});

export default connect(mapStateToProps, null)(Home);
