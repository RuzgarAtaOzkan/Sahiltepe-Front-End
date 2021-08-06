// STORE
import store from '../state/store';

// ENGLISH
import en_header from './en/components/Header/index.json';

// TURKISH
import tr_header from './tr/components/Header/index.json';

function translate(path) {
  if (typeof path !== 'string') {
    throw new Error('Path must be string');
  }

  const translations = {
    en: {
      components: {
        header: en_header,
      },
    },
    tr: {
      components: {
        header: tr_header,
      },
    },
  };

  try {
    const langCode = store.getState().global.language;
    const selectedLang = translations[langCode];
    const paths = path.split('.');

    let currentTrans = { ...selectedLang };

    for (let i = 0; i < paths.length; i++) {
      currentTrans = currentTrans[paths[i]];
    }

    return currentTrans;
  } catch (error) {
    console.log(error.message);
  }
}

export default translate;
