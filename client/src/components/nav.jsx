import React from "react";
import { Button } from "semantic-ui-react";

export const Nav = props => {
  return (
    <div className="sticky">
      <Button className="ui secondary button">Sign Up</Button>
      <Button className="ui primary button">Sign In</Button>
      <Button className="ui secondary button">Account</Button>
    </div>
  );
};
