import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123456',   // AppBar, primary buttons
    },
    secondary: {
      main: '#abcdef',   // accents, secondary buttons
    },
  },
});

export default theme;