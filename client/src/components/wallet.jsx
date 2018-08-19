import React from "react";

export const Wallet = props => {
  return (
    <div>
      <div>Your Wallet</div>
      qCent balance:
      <div>{props.bal}</div>
      <div />
    </div>
  );
};
