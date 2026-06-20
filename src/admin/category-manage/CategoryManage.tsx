import { useState } from "react";
import { categories } from "../../utils/posts";

export function CategoryManage() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">分类管理</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          新增分类
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700">
        {categories.map((category) => (
          <div key={category.id} className="border-b border-gray-700 last:border-0">
            <div
              className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-700/50"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <div>
                  <div className="text-white font-medium">{category.name}</div>
                  <div className="text-gray-400 text-sm">{category.id}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  {category.children?.length || 0} 个子分类
                </span>
                <span className={`transform transition ${expandedCategories.has(category.id) ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>
            </div>

            {expandedCategories.has(category.id) && category.children && (
              <div className="bg-gray-750 px-6 py-2">
                {category.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex items-center justify-between px-4 py-3 border-b border-gray-700 last:border-0"
                  >
                    <div>
                      <div className="text-gray-200">{child.name}</div>
                      <div className="text-gray-500 text-sm">{child.id}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm">编辑</button>
                      <button className="text-red-400 hover:text-red-300 text-sm">删除</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
