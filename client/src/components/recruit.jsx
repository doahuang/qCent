import React from 'react';

export default class Recruit extends React.Component {

  render() {

    return (
      <div className='recruit'>
        <label>
          Number of people: <input type="number" />
        </label>
        <label>
          Qcent reward: <input type="number" />
        </label>
        <button style={{ display: "inline-block" }}>
          Recruit!
        </button>
      </div>
    );
  }
}