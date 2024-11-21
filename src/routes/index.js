import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/user/home";


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
        path:"/list",
        element: <Home />
      },
    ]
  }
]