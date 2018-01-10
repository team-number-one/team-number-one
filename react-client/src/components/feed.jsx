import React from 'react';
import ReactDOM from 'react-dom';
import SqueakEntry from './SqueakEntry.jsx';

// Feed expects an array of sqeaks
const Feed = ({squeaks}) => (
  <div class="feed">
    {
      squeaks.map(squeak => (
        <SqueakEntry squeak={squeak}/>
      ))
    }
  </div>
);



export default Feed;
