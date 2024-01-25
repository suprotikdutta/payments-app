import Signin from './components/Signin';
import Signup from './components/Signup';
import Sendmoney from './components/Dashboard/Sendmoney';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    async lazy() {
      let Dashboard = await import("./components/Dashboard/Dashboard");
      return { Component: Dashboard.default };
    },
  },
  {
    path: "send-money",
    element: <Sendmoney />,
  },
  {
    path: "*",
    element: <Signin />,
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
