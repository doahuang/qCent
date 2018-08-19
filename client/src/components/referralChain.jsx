import React from "react";
import { List } from "semantic-ui-react";

export const ReferralChain = props => {
  const referrals = props.players.map(player => (
    <List.Item className="item">{player.name}</List.Item>
  ));
  return (
    <div className="referral-chain">
      <List className="ui divided inverted relaxed list">{referrals}</List>
    </div>
  );
};
