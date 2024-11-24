import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/user/home";
import ProductDetail from "../page/user/product_detail";
import ShopPage from "../page/user/shoppage";


export const routes = [
  {
    path:"/",
    element: <LayoutDefault/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/shoppage",
        element: <ShopPage />
      },
      {
        path:"/shoppage/product-detail/:id",
        element: <ProductDetail />
      },
      {
        path:"/product-detail/:id",
        element: <ProductDetail />
      },
    ]
  }
]