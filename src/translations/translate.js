// STORE
import store from '../state/store';

// ENGLISH
import en_header from './en/Header/index.json';

// TURKISH
import tr_header from './tr/Header/index.json';

function translate(path) {
  if (typeof path !== 'string') {
    throw new Error('Path must be string');
  }

  const translations = {
    en: {
      header: en_header,
    },
    tr: {
      header: tr_header,
    },
  };

  const langCode = store.getState().global.language;
  const selectedLang = translations[langCode];
  const paths = path.split('.');

  let currentTrans = { ...selectedLang };

  for (let i = 0; i < paths.length; i++) {
    currentTrans = currentTrans[paths[i]];
  }

  return currentTrans;
}

export default translate;
