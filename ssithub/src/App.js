import './App.css';
import {Container, ThemeProvider, Typography} from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import { Box } from '@mui/system';

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
      <Promotions/>
      <Box display="flex" justifyContent={"center"} sx={{p:4}}>
        <Typography variant='h4'>Student Resources & Administration</Typography>
      </Box>
      <Products/>
      </Container>

      </ThemeProvider>
  );
}

export default App;
