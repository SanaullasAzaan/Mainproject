import{useTheme} from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";




export default function Products(){
   const theme=useTheme();
   const matches=useMediaQuery(theme.breakpoints.down('md'));

   const renderProducts=products
   .map(product=>(
        <Grid item key={product.id}
         xs={8}
         sm={8}
         md={3}
          display="flex" flexDirection={"column"}
          alignItems="center">
           {matches ?(
             <SingleProduct product={product} matches={matches}></SingleProduct>
           ):(
            <SingleProductDesktop product={product} matches={matches}></SingleProductDesktop>
           )}

          </Grid>
   ));

    return(
        
        <Container>
            <Grid
            container
            spacing={{xs:2,md:3}}
            justifyContent={"center"}
            sx={{margin:'20px 4px 10px 4px'}}
            columns={{xs:3,sm:8,md:12}}
            >
                {renderProducts}
                

            </Grid>
        </Container> 

        
    );
}


