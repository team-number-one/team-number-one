import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';

const Feed = ({squeaks}) => (
  <div className="feed">
    {
      squeaks.map(squeak => (
        <SqueakEntry squeak={squeak}/>
      ))
    }
  </div>
);

export default Feed;
