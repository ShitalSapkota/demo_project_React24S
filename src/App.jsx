import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRoutes";
// week5 branch

function App() {
  return <RouterProvider router={router} />;
}

export default App;
