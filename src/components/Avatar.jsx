import React from "react";
import { connect } from "react-redux";

let avatar = [];

const Avatar = ({ buy, user, dialogBox, items }) => {
  if (items[0].inCart === 0) {
    avatar.splice(avatar.indexOf("axe"), 1);
  } else if (items[1].inCart === 0) {
    avatar.splice(avatar.indexOf("wood"), 1);
  } else if (items[2].inCart === 0) {
    avatar.splice(avatar.indexOf("bronzesword"), 1);
  } else if (items[3].inCart === 0) {
    avatar.splice(avatar.indexOf("longsword"), 1);
  }

  buy.map((item) => {
    if (item.name.includes("Longsword")) {
      if (avatar.includes("longsword")) return null;
      avatar.push("longsword");
    }

    if (item.name.includes("Battle axe")) {
      if (avatar.includes("axe")) return null;
      avatar.push("axe");
    }

    if (item.name.includes("Bronze sword")) {
      if (avatar.includes("bronzesword")) return null;
      avatar.push("bronzesword");
    }

    if (item.name.includes("Wooden shield")) {
      if (avatar.includes("wood")) return null;
      avatar.push("wood");
    }
    return null;
  });

  return (
    <div className="container body-content mt-5">
      <h1>Your Avatar</h1>
      {user.bought && !dialogBox.show ? (
        <ul>
          {avatar.map((avatarItems, index) => {
            if (avatarItems === "longsword") {
              return <li key={index}>longsword</li>;
            }
            if (avatarItems === "axe") {
              return <li key={index}>axe</li>;
            }
            if (avatarItems === "bronzesword") {
              return <li key={index}>bronze sword</li>;
            }
            if (avatarItems === "wood") {
              return <li key={index}>wood</li>;
            }

            return null;
          })}
        </ul>
      ) : user.bought ? (
        <div>Editing avatar...</div>
      ) : (
        <div>Buy some items to see your avatar!</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  buy: state.buy,
  dialogBox: state.dialogBox,
  user: state.user,
  items: state.items,
});

export default connect(mapStateToProps, null)(Avatar);
