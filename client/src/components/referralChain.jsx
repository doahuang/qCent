import React from 'react';

export const ReferralChain = props => {
  const referrals = props.players.map(player =>	<li>{player.name}</li>);
  return (
    <div className="referral-chain">
      <ul>
        {referrals}
      </ul>
    </div>
  );
}
