import { MusicContextProvider } from "./context/MusicContext";
import { CartContextProvider } from "./context/CartContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {path:"/contact",element:<Contact/>}
    ],
  },
]);

function App() {
  return (
    <MusicContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </MusicContextProvider>
  );
}

export default App;
