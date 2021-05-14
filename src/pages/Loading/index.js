import React from 'react';

// ICONS
import { AiOutlineLoading } from 'react-icons/ai';

import './Loading.scss';

function Loading() {
  return (
    <>
      <div className="loading">
        <AiOutlineLoading />
        <img src="/assets/media/sunset-mountain.jpeg" alt="Mountains" />
      </div>
    </>
  );
}

export default Loading;
