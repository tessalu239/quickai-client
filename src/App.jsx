import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import GenerateImages from "./pages/GenerateImages";
import ReviewResume from "./pages/ReviewResume";
import RemoveBackgroun from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import Dashboard from "./pages/Dashboard";
import Communities from "./pages/Communities";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast'

const App = () => {
  const { getToken } = useAuth();
  
  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="remove-background" element={<RemoveBackgroun />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="community" element={<Communities />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
