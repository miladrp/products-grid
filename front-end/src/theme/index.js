import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: import('./palette'),
  typography: import('./typography'),
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
