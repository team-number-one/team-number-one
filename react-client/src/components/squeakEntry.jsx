import React from 'react';
import ReactDOM from 'react-dom';

const SqueakEntry = ({squeak}) => (
  <div class="squeak-entry">
    <div>
      <span>{squeak.username}</span>
    </div>
    <div>
      <span>{squeak.displayName}</span>
    </div>
    <div>
      <span>{squeak.text}</span>
    </div>
  </div>
);

export default SqueakEntry;
