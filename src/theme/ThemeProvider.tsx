import { ReactNode } from 'react';
import { css, CssBaseline, GlobalStyles, ThemeProvider as MUIThemeProvider } from '@mui/material';

import theme from './theme';

import '@fontsource/roboto/400.css';

export interface ProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={() => css`
          html,body,#root {
            height: 100%;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          select:-webkit-autofill,
          select:-webkit-autofill:hover,
          select:-webkit-autofill:focus {
            -webkit-background-clip: text;
          }
        `}
      />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
