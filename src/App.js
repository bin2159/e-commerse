import { MusicContextProvider } from "./context/MusicContext";
import { CartContextProvider } from "./context/CartContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Home from "./pages/Home"
import Store from './pages/Store'
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Login, { action as loginAction ,loader as loginLoader} from "./pages/Login";
import { checkAuthLoader } from "./util/auth";
import { TokenContextProvider } from "./context/TokenContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "store",
        children: [
          {
            index: true,
            element: <Store />,
            loader: checkAuthLoader,
          },
          { path: "product/:productId", element: <ProductDetails /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login />, action: loginAction ,loader:loginLoader},
    ],
  },
]);

function App() {
  return (
    <MusicContextProvider>
      <CartContextProvider>
        <TokenContextProvider>
          <RouterProvider router={router} />
        </TokenContextProvider>
      </CartContextProvider>
    </MusicContextProvider>
  );
}

export default App;
