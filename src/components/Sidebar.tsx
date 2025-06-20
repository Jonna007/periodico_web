import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

interface TrendingArticle {
  id: number;
  title: string;
  time: string;
  views: string;
}

const trendingArticles: TrendingArticle[] = [
  {
    id: 1,
    title: "Election Results Shake Political Landscape",
    time: "1 hour ago",
    views: "15.2K views"
  },
  {
    id: 2,
    title: "Stock Market Reaches All-Time High",
    time: "2 hours ago",
    views: "12.8K views"
  },
  {
    id: 3,
    title: "Space Mission Successfully Launches",
    time: "4 hours ago",
    views: "10.5K views"
  },
  {
    id: 4,
    title: "Celebrity Wedding Surprises Fans",
    time: "6 hours ago",
    views: "8.9K views"
  },
  {
    id: 5,
    title: "New Restaurant Opens Downtown",
    time: "8 hours ago",
    views: "6.7K views"
  }
];

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Trending Stories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="text-xl font-bold text-slate-800">Trending Now</h3>
        </div>
        
        <div className="space-y-4">
          {trendingArticles.map((article, index) => (
            <div
              key={article.id}
              className="flex items-start space-x-3 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800 line-clamp-2 hover:text-red-600 transition-colors">
                  {article.title}
                </h4>
                <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.time}</span>
                  </div>
                  <span>{article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Stay Informed</h3>
        <p className="text-red-100 mb-4 text-sm">
          Get the latest news delivered straight to your inbox every morning.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-red-600 font-semibold py-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Advertisement Space */}
      <div className="bg-slate-100 rounded-lg p-6 text-center">
        <p className="text-slate-500 text-sm mb-2">Advertisement</p>
        <div className="bg-white rounded border-2 border-dashed border-slate-300 h-48 flex items-center justify-center">
          <p className="text-slate-400 text-sm">Ad Space Available</p>
        </div>
      </div>
    </aside>
  );
}