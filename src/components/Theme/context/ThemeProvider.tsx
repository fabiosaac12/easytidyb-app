import React, { useState, useEffect } from 'react';
import { ThemeContext, ThemeContextProps } from './ThemeContext';
import { themes } from '../themes';

interface Props {
  defaultTheme: keyof typeof themes
}

export const ThemeProvider: React.FC<Props> = ({ children, defaultTheme = 'light' }) => {
  const [themeName, setThemeName] = useState<keyof typeof themes>(defaultTheme);

  const contextValue: ThemeContextProps = {
    themeName,
    theme: themes[themeName],
    changeTheme: (name) => {
      if (name in themes) setThemeName(name);
      else console.warn(
        `${name} is not an available theme. Using ${themeName} theme instead.`
      );
    }
  };

  return (
    <ThemeContext.Provider value={contextValue}>  
      {children}
    </ThemeContext.Provider>  
  );
};
