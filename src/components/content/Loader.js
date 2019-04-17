import React from 'react';
import pocketWatchLoader from '../../assets/img/pocket-watch-loader.svg'

const Loader = () => (
  <div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  }}>
    <img
      src={pocketWatchLoader}
      alt="Loading..."
      style={{
        width: 200,
        height: 200
      }}
    />
  </div>
)

export default Loader;
