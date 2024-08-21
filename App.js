import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
/*
*Header
  -logo
  -navItems
*Body
  -search
  -Reastrants
    - img
    - name of restraunt, start rating , cuisine, delivery time
    
*Footer
  - Copyrights
  - Links
  - Address
  - Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
