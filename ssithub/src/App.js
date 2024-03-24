import './App.css';
import {AppBar, Button, Container, ThemeProvider} from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container 
      maxWidth="xl"
      sx={{
        background:'#fff'
      }}
      >    
      <Appbar/>
      <Button variant='contained'>test</Button>
      </Container>

      </ThemeProvider>
  );
}

export default App;
