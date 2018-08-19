import React, { Component } from "react";
// import logo from "../logo.svg";
import { List, Button } from "semantic-ui-react";
import { Wallet } from "./wallet";
import { Nav } from "./nav";
import { Account } from "./account";
import { ReferralChain } from "./referralChain";

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

    let players = arr.map(pl => {
      return (
        <List.Item className="item" key={pl}>
          player {pl}
        </List.Item>
      );
    });

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
          <Wallet bal={balance} />
          <p className="App-intro" />
          <Button primary className="ui primary button">
            Click Here
          </Button>

          <Account />

          <ReferralChain players={arr} />
        </div>
      </div>
    );
  }
}

export default App;
