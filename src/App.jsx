import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage } from "./Pages/ErrorPage"
import { Layouts } from "./components/layouts/AppLayout"
import { Home } from "./Pages/Home"
import { CountryTours } from "./Pages/CountryTours"
import { CreateVocalTour } from "./Pages/CreateVocalTour"
import { TryVocalTour } from "./Pages/TryVocaltyApp"
import { Login } from "./Pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage/>,
    element: <Layouts/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "CountryTours",
        element: <CountryTours/>
      },
      {
        path: "CreateVocalTour",
        element: <CreateVocalTour/>
      },
      {
        path: "TryVocalTour",
        element: <TryVocalTour/>
      },
      {
        path: "Login",
        element: <Login/>
      }
    ]
  }
])
export const App = () => {
 return <RouterProvider router={router}></RouterProvider>
}

export default App