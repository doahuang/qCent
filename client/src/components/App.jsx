import React, { Component } from "react";
// import logo from "../logo.svg";
// import { List } from "semantic-ui-react";
import { Wallet } from "./wallet";
import { Nav } from "./nav";
import { Account } from "./account";
import { ReferralChain } from "./referralChain";
import { ClaimForm } from "./claimForm";
import Recruit from "./recruit";

class App extends Component {
  state = { st: "hi" };
  render() {
    let arr = [
      {
        name: "Bob"
      },
      {
        name: "George"
      }
    ];

    // let players = arr.map(pl => {
    //   return (
    //     <List.Item className="item" key={pl}>
    //       player {pl}
    //     </List.Item>
    //   );
    // });

    let balance = 0;

    return (
      <div className="App">
        <Nav />
        <div className="App-bottom">
          <header className="App-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Biohazard_symbol.svg"
              className="App-logo"
              alt="logo"
            />
            <h1 className="App-title">qCent</h1>
          </header>
          <div className="app-main">
            <div className="stuffs">
              <Wallet bal={balance} />
              <Recruit />
            </div>

            <div className="stuffs">
              <Account />

              <ReferralChain players={arr} />

              <ClaimForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
