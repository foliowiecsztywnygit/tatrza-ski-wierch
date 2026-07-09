import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<RoomsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/temat/:silo" element={<BlogCategoryPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
