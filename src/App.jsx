import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import { CategoryProvider } from "./ContextProvider/CategoryContext.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
export function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<Shop />} />
          </Routes>
        </Layout>
      </CategoryProvider>
    </BrowserRouter>
  );
}
  