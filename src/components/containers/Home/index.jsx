import React from "react";
import { connect } from "react-redux";
import { BigText, ItemText } from "../../common/Typography";
import { useAuth0 } from "@auth0/auth0-react";

const Home = ({ user, buy, dialogBox }) => {
  const { user: users, isAuthenticated, isLoading } = useAuth0();

  var bought = buy.reduce((acc, cur) => {
    // check the item name in the current array, if there is none make it 0, if it's already a number higher then 0
    // get the accumulator (last initialState) and search the item name to add one to it
    acc[cur.name] = (acc[cur.name] ?? 0) + 1;
    return acc;
  }, {});

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
                /* map through the 'bought' objects key values
              to show the number of items and item name */
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
        ) : <BigText>Login to use the app and buy some awesome items!</BigText>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  buy: state.buy,
  dialogBox: state.dialogBox,
});

export default connect(mapStateToProps, null)(Home);
