import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimaryNav from "./components/PrimaryNav";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimaryNav />}>
          <Route index element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
