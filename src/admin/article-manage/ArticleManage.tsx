import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, categories, getPostsByCategory } from "../../utils/posts";

export function ArticleManage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [permissionFilter, setPermissionFilter] = useState("");
  const [page, setPage] = useState(1);
  const limit = 20;

  const allPosts = useMemo(() => getAllPosts(), []);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (search) {
      const query = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.summary?.toLowerCase().includes(query)
      );
    }

    if (categoryFilter) {
      posts = posts.filter((p) => p.category === categoryFilter);
    }

    if (permissionFilter) {
      posts = posts.filter((p) => (p.permission || "public") === permissionFilter);
    }

    return posts;
  }, [allPosts, search, categoryFilter, permissionFilter]);

  const paginatedPosts = filteredPosts.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filteredPosts.length / limit);

  const getPermissionBadge = (permission: string) => {
    switch (permission) {
      case "admin":
        return <span className="px-2 py-1 text-xs rounded bg-red-900/50 text-red-300">私密</span>;
      case "login":
        return <span className="px-2 py-1 text-xs rounded bg-orange-900/50 text-orange-300">登录</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded bg-green-900/50 text-green-300">公开</span>;
    }
  };

  const getCategoryName = (categoryId: string) => {
    for (const cat of categories) {
      if (cat.id === categoryId) return cat.name;
      const child = cat.children?.find((c) => c.id === categoryId);
      if (child) return `${cat.name} / ${child.name}`;
    }
    return categoryId;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">文章管理</h1>
        <div className="text-gray-400 text-sm">共 {filteredPosts.length} 篇文章</div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700 flex flex-wrap gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="搜索文章..."
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={categoryFilter}
          onChange={(e) => { setCategoryFilter(e.target.value); setPage(1); }}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none"
        >
          <option value="">所有分类</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          value={permissionFilter}
          onChange={(e) => { setPermissionFilter(e.target.value); setPage(1); }}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none"
        >
          <option value="">所有权限</option>
          <option value="public">公开</option>
          <option value="login">登录可见</option>
          <option value="admin">管理员私密</option>
        </select>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">标题</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">分类</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">权限</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">日期</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {paginatedPosts.map((post) => (
              <tr key={post.slug} className="hover:bg-gray-700/50">
                <td className="px-6 py-4">
                  <Link to={`/post/${post.slug}`} className="text-white hover:text-blue-400 font-medium">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">
                  {getCategoryName(post.category)}
                </td>
                <td className="px-6 py-4">
                  {getPermissionBadge(post.permission || "public")}
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-700 flex justify-between items-center">
            <span className="text-gray-400 text-sm">
              第 {page} / {totalPages} 页
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded disabled:opacity-50"
              >
                上一页
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded disabled:opacity-50"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
