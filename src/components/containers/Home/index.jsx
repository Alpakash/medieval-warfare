import React from "react";
import { connect } from "react-redux";

const Home = ({ user, buy, dialogBox }) => {
  var bought = buy.reduce((prev, cur) => {
    prev[cur.name] = (prev[cur.name] ?? 0) + 1;
    return prev;
  }, {});

  return (
    <>
      <div className="container body-content mt-5">
        <h2 className="mb-4">Hello, {user.login}</h2>
        <ul>
        <h2 className="mb-4">Inventory</h2>
          {user.bought && !dialogBox.show 
          ? (Object.entries(bought).map(([key, value], index) => {
              return (
                  <li key={index}>
                    <h5>
                      {value}x {key}
                    </h5>
                  </li>
              );
            }))
           : <h5>You have no items in your inventory, buy items!</h5>
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
