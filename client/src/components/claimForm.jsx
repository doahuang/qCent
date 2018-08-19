import React from "react";
import { Button } from "semantic-ui-react";
export const ClaimForm = props => {
  return (
    <div className="claim-form">
      <form>
        Claim
        <input type="text" name="referralKey" placeholder="Referral Key" />
        <Button onClick={e => e.preventDefault()}>que me up!</Button>
      </form>
    </div>
  );
};
