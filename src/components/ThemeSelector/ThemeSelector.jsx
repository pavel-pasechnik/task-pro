import css from './ThemeSelector.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const ThemeSelector = () => {
  const selectId = nanoid();
  const [theme, setTheme] = useState('dark');

  return (
    <div>
      <label htmlFor={selectId} className={css.visuallyHidden}>
        Choose theme
      </label>
      <select id={selectId} value={theme} onChange={evt => setTheme(evt.target.value)}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='violet'>Violet</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
