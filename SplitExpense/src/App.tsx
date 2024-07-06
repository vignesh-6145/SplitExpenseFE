import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import HomePage from "./Pages/HomePage";
import BaseLayout from "./Layout/BaseLayout";
import SignInPage from "./Pages/SignInPage";
import store from "./Redux/store";
import DashboardPage from "./Pages/DashboardPage";

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
        },
        {
          path:'dashboard',
          element:<DashboardPage/>
        }
      ]
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
