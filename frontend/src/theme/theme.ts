import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123456',  // Navbar
    },
    secondary: {
      main: '#abcdef',  // Buttons
    },
    background: {
      default: '#f4f6f8',  // general background (page)
    },
  },
});

export default theme;