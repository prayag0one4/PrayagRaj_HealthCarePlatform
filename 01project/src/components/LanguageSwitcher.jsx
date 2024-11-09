import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button className="text-sm font-semibold text-black" onClick={toggleDropdown}>
        Language: {i18n.language.toUpperCase()}
      </button>
      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '100%',
            zIndex: 1,
          }}
        >
          <li style={{ padding: '8px', cursor: 'pointer' }} onClick={() => changeLanguage('en')}>
            English
          </li>
          <li style={{ padding: '8px', cursor: 'pointer' }} onClick={() => changeLanguage('hi')}>
            Hindi
          </li>
          <li style={{ padding: '8px', cursor: 'pointer' }} onClick={() => changeLanguage('guj')}>
            Gujarati
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
