import { get, post } from "../until/request";

export const getAllCategorys = async () => {
    const result = await get("products");
    const allCategorys = result.flatMap((product) => product.tags); // Gộp tất cả các tags thành một mảng
    const uniqueCategorys = Array.from(new Set(allCategorys)); // Loại bỏ trùng lặp
    return uniqueCategorys;
  }