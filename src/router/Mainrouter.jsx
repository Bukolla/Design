import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/common/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shopnow from "../pages/Shopnow";
import Insight from "../pages/Insight";
import Feyi from "../pages/Feyi";


export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        index: true,
        element: <Home />
      },
      {
        index: true,
        path: "about",
        element: <About />
      },
      {
        index: true,
        path: "contact",
        element: <Contact />
      },
      {
        index: true,
        path: "shopnow",
        element: <Shopnow />
      },
      {
        index: true,
        path: "insight",
        element: <Insight />
      },
      {
        index: true,
        path: "feyi",
        element: <Feyi />
      },
    ]
  }
]);



