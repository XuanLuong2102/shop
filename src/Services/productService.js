import { get, post } from "../until/request";


export const getProductList = async () => {
    const result = await get("products");
    return result;
};
export const createProductList = async (options) => {
    const result = await post("product",options);
    return result;
};
export const deleteProduct = async (id) => {
    const result = await post(`products/${id}`);
    return result;
};
export const editProduct = async (id,options) => {
    const result = await post(`products/${id}`,options);
    return result;
};