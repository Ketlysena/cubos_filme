
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as RadixColors from '@radix-ui/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: RadixColors.purple.purple11,
    },
    secondary: {
      main: RadixColors.mauve.mauve11,
    },
    background: {
      default: RadixColors.mauve.mauve1,
      paper: RadixColors.mauve.mauve3,
    },
    text: {
      primary: RadixColors.mauve.mauve12,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: RadixColors.purpleDark.purple11,
    },
    secondary: {
      main: RadixColors.mauveDark.mauve11,
    },
    background: {
      default: RadixColors.mauveDark.mauve1,
      paper: RadixColors.mauveDark.mauve3,
    },
    text: {
      primary: RadixColors.mauveDark.mauve12,
    },
  },
});

function Topbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar 
        position="static" 
        sx={{ 
          background: 'rgba(18, 17, 19)',
          opacity:'0.5',
          color: darkMode ? RadixColors.mauveDark.mauve12 : RadixColors.mauve.mauve12 
        }}>
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold' 
            }}>
            CUBOS Movies
          </Typography>
          <IconButton 
            onClick={() => setDarkMode(!darkMode)} 
            color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Topbar;

