import { get, post } from "../until/request";

export const getAllTags = async () => {
    const result = await get("products");
    const allTags = products.flatMap((product) => product.tags); // Gộp tất cả các tags thành một mảng
    const uniqueTags = Array.from(new Set(allTags)); // Loại bỏ trùng lặp
    return uniqueTags;
  }