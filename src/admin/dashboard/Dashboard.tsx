import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, categories } from "../../utils/posts";

export function Dashboard() {
  const stats = useMemo(() => {
    const posts = getAllPosts();
    const publicPosts = posts.filter((p) => p.permission === "public" || !p.permission);
    const loginPosts = posts.filter((p) => p.permission === "login");
    const adminPosts = posts.filter((p) => p.permission === "admin");
    const totalViews = posts.reduce((sum, p) => sum + (p.viewCount || 0), 0);

    return {
      totalPosts: posts.length,
      publicPosts: publicPosts.length,
      loginPosts: loginPosts.length,
      adminPosts: adminPosts.length,
      totalViews,
      totalCategories: categories.length,
      recentPosts: posts.slice(0, 5),
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">数据总览</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm">总文章数</div>
          <div className="text-3xl font-bold text-white mt-2">{stats.totalPosts}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm">公开文章</div>
          <div className="text-3xl font-bold text-green-400 mt-2">{stats.publicPosts}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm">登录可见</div>
          <div className="text-3xl font-bold text-orange-400 mt-2">{stats.loginPosts}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm">管理员私密</div>
          <div className="text-3xl font-bold text-red-400 mt-2">{stats.adminPosts}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">快捷操作</h2>
          <div className="space-y-3">
            <Link
              to="/admin/articles"
              className="block px-4 py-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition"
            >
              📝 管理文章
            </Link>
            <Link
              to="/admin/categories"
              className="block px-4 py-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition"
            >
              📁 管理分类
            </Link>
            <Link
              to="/admin/settings"
              className="block px-4 py-3 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition"
            >
              ⚙️ 站点配置
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">最新文章</h2>
          <div className="space-y-3">
            {stats.recentPosts.map((post) => (
              <div key={post.slug} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                <span className="text-gray-300 text-sm truncate flex-1 mr-4">{post.title}</span>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    post.permission === "admin"
                      ? "bg-red-900/50 text-red-300"
                      : post.permission === "login"
                      ? "bg-orange-900/50 text-orange-300"
                      : "bg-green-900/50 text-green-300"
                  }`}
                >
                  {post.permission === "admin" ? "私密" : post.permission === "login" ? "登录" : "公开"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
