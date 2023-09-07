import { Mainrouter } from "./router/Mainrouter"
import { RouterProvider } from "react-router-dom"


const App = () => {
  return (
    <div>
      <RouterProvider router={ Mainrouter} />
    </div>
  )
}

export default App
