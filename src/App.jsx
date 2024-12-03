import "./App.css";
import Layout from "./Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./Components/cartContext/CartContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  const queryClient = new QueryClient({
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        { path: "/details/:id", element: <ProductDetails /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
