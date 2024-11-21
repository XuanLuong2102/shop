import { useEffect, useState } from "react";
import { getProductList } from "../../Services/productService";
import "./product.scss"
import ProductItem from "./productItem";
function Product(){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProducts(result.products);
        }
        fetchApi();
    }, []);

    const newProduct = products.slice(0, 12);

    return (
        <>
        <div className="product">
                {newProduct.map(item => (
                    <ProductItem item = {item       } key={item.id}/>
                ))}

            </div>
        </>
    )
}
export default Product;