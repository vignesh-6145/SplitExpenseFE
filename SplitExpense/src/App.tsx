import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import BaseLayout from "./Layout/BaseLayout";
import SignInPage from "./Pages/SignInPage";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<BaseLayout/>,
      children:[
        {
          path:"home",
          element:<HomePage/>
        },
        {
          path:"signin",
          element:<SignInPage/>
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
