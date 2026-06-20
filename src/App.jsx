import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/ThemeProvider'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Category from './pages/Category'
import Post from './pages/Post'
import Tools from './pages/Tools'
import Tags from './pages/Tags'
import About from './pages/About'
import { Login } from './pages/admin/Login'
import { AdminLayout } from './admin/layout/AdminLayout'
import { Dashboard } from './admin/dashboard/Dashboard'
import { ArticleManage } from './admin/article-manage/ArticleManage'
import { CategoryManage } from './admin/category-manage/CategoryManage'
import { AuditManage } from './admin/audit-manage/AuditManage'
import { SiteSettings } from './admin/site-setting/SiteSettings'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          {/* 后台路由 */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="articles" element={<ArticleManage />} />
            <Route path="categories" element={<CategoryManage />} />
            <Route path="audit" element={<AuditManage />} />
            <Route path="settings" element={<SiteSettings />} />
          </Route>

          {/* 前台路由 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <Header />
                <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/knowledge" element={<Knowledge />} />
                    <Route path="/knowledge/:subcategoryId" element={<Category />} />
                    <Route path="/post/:slug" element={<Post />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/tags" element={<Tags />} />
                    <Route path="/tags/:tag" element={<Home />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
