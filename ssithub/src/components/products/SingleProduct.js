import { Product, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";


export default function SingleProduct({product,matches}){
    return(
        <Product>
            <ProductImage
             src="{product.image}"
            />
            <ProductMeta product={product} matches={matches}/>
        </Product>
    )
}