import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/user/home";
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
    ]
  }
]