import { useState } from "react";

interface SiteConfig {
  siteName: string;
  siteDescription: string;
  copyright: string;
  keywords: string;
  enableComments: boolean;
  enableSearch: boolean;
  enableStats: boolean;
  defaultTheme: "light" | "dark" | "system";
}

const defaultConfig: SiteConfig = {
  siteName: "SecNest's Blog",
  siteDescription: "网络安全知识库",
  copyright: "© 2024 SecNest. All rights reserved.",
  keywords: "网络安全,渗透测试,安全工具,漏洞分析",
  enableComments: true,
  enableSearch: true,
  enableStats: true,
  defaultTheme: "dark",
};

export function SiteSettings() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem("site_config", JSON.stringify(config));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">站点配置</h1>
        <button
          onClick={handleSave}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            saved ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {saved ? "✓ 已保存" : "保存配置"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">基础配置</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">站点名称</label>
              <input
                type="text"
                value={config.siteName}
                onChange={(e) => setConfig({ ...config, siteName: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">站点描述</label>
              <input
                type="text"
                value={config.siteDescription}
                onChange={(e) => setConfig({ ...config, siteDescription: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">版权信息</label>
              <input
                type="text"
                value={config.copyright}
                onChange={(e) => setConfig({ ...config, copyright: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">SEO 关键词</label>
              <input
                type="text"
                value={config.keywords}
                onChange={(e) => setConfig({ ...config, keywords: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">功能开关</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-300">评论功能</span>
              <input
                type="checkbox"
                checked={config.enableComments}
                onChange={(e) => setConfig({ ...config, enableComments: e.target.checked })}
                className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">搜索功能</span>
              <input
                type="checkbox"
                checked={config.enableSearch}
                onChange={(e) => setConfig({ ...config, enableSearch: e.target.checked })}
                className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-300">访问统计</span>
              <input
                type="checkbox"
                checked={config.enableStats}
                onChange={(e) => setConfig({ ...config, enableStats: e.target.checked })}
                className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
              />
            </label>
            <div>
              <label className="block text-sm text-gray-400 mb-2">默认主题</label>
              <select
                value={config.defaultTheme}
                onChange={(e) => setConfig({ ...config, defaultTheme: e.target.value as any })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none"
              >
                <option value="dark">深色模式</option>
                <option value="light">浅色模式</option>
                <option value="system">跟随系统</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
