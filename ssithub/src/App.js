import './App.css';
import {AppBar, Button, Container, ThemeProvider} from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/appbar/banner';

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
      <Banner/>
      
      </Container>

      </ThemeProvider>
  );
}

export default App;
