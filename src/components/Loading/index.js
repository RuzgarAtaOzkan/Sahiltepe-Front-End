import React from 'react';

// ICONS
import { AiOutlineLoading } from 'react-icons/ai';

import styles from './Loading.module.scss';

function Loading() {
  return (
    <>
      <div className={styles['loading']}>
        <AiOutlineLoading />
        <img src="/assets/media/sunset-mountain.jpeg" alt="Mountains" />
      </div>
    </>
  );
}

export default Loading;
