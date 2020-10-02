import React from "react";
import { connect } from "react-redux";
import { BigText, ItemText } from '../../common/Typography';

const Home = ({ user, buy, dialogBox }) => {
  var bought = buy.reduce((prev, cur) => {
    prev[cur.name] = (prev[cur.name] ?? 0) + 1;
    return prev;
  }, {});

  return (
    <>
      <div className="container body-content mt-5">
        <BigText>Hello, {user.login}</BigText>
        <ul>
        <BigText>Inventory</BigText>
          {user.bought && !dialogBox.show 
          ? (Object.entries(bought).map(([key, value], index) => {
              return (
                  <li key={index}>
                    <ItemText>
                      {value}x {key}
                    </ItemText>
                  </li>
              );
            }))
           : !user.bought ? <ItemText>You have no items in your inventory, buy items!</ItemText> : <ItemText>Editing...</ItemText>
          }
        </ul>
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
