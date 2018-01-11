import React from 'react';

const SqueakEntry = ({squeak}) => (
  <div className="squeak-entry">
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
