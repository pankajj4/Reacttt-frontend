import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useEffect, useState } from "react";



export default function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header windowWidth={windowWidth} />,
      children: [
        { index: true, Component: HomePage },
        { path: "/", Component: HeadLogo },
      ]
    },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login windowWidth={windowWidth} /> },
    { path: "*", element: <h1>ERROR</h1> }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};



function HeadLogo() {
  return (
    <a href="#" className={`HeaderLogo`}>
      <img
        alt="logo"
        src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
        className={`w-auto h-auto`}
      />
    </a>
  );
}
