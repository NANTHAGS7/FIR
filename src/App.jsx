import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Allocations from "./Pages/Allocations"
import FakeFIR from "./Pages/fakeFIR"
import Past from "./Pages/Past"
import Detailpage from "./Pages/Detailpage"
import Demo from "./Pages/Demo"



function App() {
  const router=createBrowserRouter(
    [
    {
      path:'/',
      element:<Allocations/>
    },
    {
      path:'/Fake',
      element:<FakeFIR/>
    },{
      path:'/Records',
      element:<Past/>
    }
    ,{
      path:'/Details/:section',
      element:<Detailpage/>
    }
    ,{
      path:'/Demo',
      element:<Demo/>
    }
  ]
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
