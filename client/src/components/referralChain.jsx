import React from "react";
import { List } from "semantic-ui-react";

export const ReferralChain = props => {
  const referrals = props.players.map((player, id) => (
    <List.Item key={id} className="item">
      {player.name}
    </List.Item>
  ));
  return (
    <div className="referral-chain">
      Referral Chain:
      <List className="ui divided inverted relaxed list">{referrals}</List>
    </div>
  );
};
