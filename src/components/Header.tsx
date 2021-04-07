import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    console.log("Header");
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
      </div>
    );
  }
}

export default Header;
