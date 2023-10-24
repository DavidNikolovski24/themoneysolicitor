import { ThemeProvider } from "styled-components";
import "./styles/App.css";
import { theme } from "./styles/themeStyles";

import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ThankPage from "./pages/ThankPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/thankyou" element={<ThankPage />} />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
