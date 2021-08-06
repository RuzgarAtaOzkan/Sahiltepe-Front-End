// REACT
import React from 'react';

// ICONS
import { AiOutlineLoading } from 'react-icons/ai';

import styles from './Loading.module.scss';

import api from '../../data.json';

function Loading() {
  function formatApi(api) {
    for (let i = 0; i < api.users.length; i++) {
      api.users = api.users.sort((a, b) => a.manager_id - b.manager_id);

      const currentWorkers = api.users.filter(
        (user) => user.manager_id === i + 1
      );

      api.users[i].children = currentWorkers;
    }

    return api.users[0];
  }

  React.useEffect(() => {
    formatApi(api);
  }, []);

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
