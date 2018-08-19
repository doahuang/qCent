import React from 'react';

export const claimForm = props => {
  return({
    <div className="claim-form">
      Claim
      <form>
       <input type="text" name="referralKey" value='Referral Key'>
       <input type="submit" value="que me up!">
      </form>
    </div>
  });
}
