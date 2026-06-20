import { useMemo } from "react";
import { getAllPosts } from "../../utils/posts";

export function AuditManage() {
  const posts = useMemo(() => getAllPosts(), []);

  const highRiskPosts = posts.filter((p) => p.permission === "admin");
  const loginPosts = posts.filter((p) => p.permission === "login");

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">内容安全审核</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-red-400">⚠️</span> 高危内容（管理员私密）
          </h2>
          <div className="text-3xl font-bold text-red-400 mb-4">{highRiskPosts.length} 篇</div>
          <div className="space-y-2 max-h-64 overflow-auto">
            {highRiskPosts.map((post) => (
              <div key={post.slug} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                <span className="text-gray-300 text-sm truncate flex-1 mr-4">{post.title}</span>
                <span className="text-gray-500 text-xs">{post.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-orange-400">🔒</span> 登录可见内容
          </h2>
          <div className="text-3xl font-bold text-orange-400 mb-4">{loginPosts.length} 篇</div>
          <div className="space-y-2 max-h-64 overflow-auto">
            {loginPosts.map((post) => (
              <div key={post.slug} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                <span className="text-gray-300 text-sm truncate flex-1 mr-4">{post.title}</span>
                <span className="text-gray-500 text-xs">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-lg font-semibold text-white mb-4">权限统计</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-green-400">
              {posts.filter((p) => !p.permission || p.permission === "public").length}
            </div>
            <div className="text-gray-400 text-sm mt-1">公开</div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">
              {posts.filter((p) => p.permission === "login").length}
            </div>
            <div className="text-gray-400 text-sm mt-1">登录可见</div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-red-400">
              {posts.filter((p) => p.permission === "admin").length}
            </div>
            <div className="text-gray-400 text-sm mt-1">管理员私密</div>
          </div>
        </div>
      </div>
    </div>
  );
}
