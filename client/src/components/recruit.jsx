import React from "react";

import { Button } from "semantic-ui-react";

export default class Recruit extends React.Component {
  render() {
    return (
      <div className="recruit">
        <label>
          Number of people: <input type="number" />
        </label>
        <label>
          qCent reward: <input type="number" />
        </label>
        <Button style={{ display: "inline-block" }}>Recruit!</Button>
      </div>
    );
  }
}
