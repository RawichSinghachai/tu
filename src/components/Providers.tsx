'use client'

import { ThemeProvider } from '@mui/material/styles';
import  { MuiTheme }  from '../components/MuiTheme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={MuiTheme}>
        {children}
    </ThemeProvider>
    )
}