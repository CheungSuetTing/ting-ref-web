import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./font.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { LayoutGrid } from "lucide-react";
import Layout from "./Layout.tsx";
import Blog from "./pages/Blog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter basename="/ting-ref-web">
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
