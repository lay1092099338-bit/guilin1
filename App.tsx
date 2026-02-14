
import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants';
import { DayPlan, Attraction } from './types';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-car-side text-2xl text-blue-600"></i>
            <span className="font-bold text-xl tracking-tight">2025春节 <span className="text-gradient">桂西自驾</span></span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('summary')} className="text-sm font-medium hover:text-blue-600 transition-colors">概览</button>
            <button onClick={() => scrollToSection('itinerary')} className="text-sm font-medium hover:text-blue-600 transition-colors">行程</button>
            <button onClick={() => scrollToSection('tips')} className="text-sm font-medium hover:text-blue-600 transition-colors">贴士</button>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            立即出发
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 bg-tech-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            穿越 <span className="text-gradient">千山万水</span><br />
            遇见最美桂西
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            广州出发 · 7天深度环线 · 桂林 · 百色 · 崇左<br />
            EXPLORE THE MYSTIC LANDSCAPE OF WESTERN GUANGXI
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">2100+</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">公里总程</span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200 pl-8">
              <span className="text-4xl font-bold">12+</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">核心景点</span>
            </div>
            <div className="flex flex-col items-center border-l border-slate-200 pl-8">
              <span className="text-4xl font-bold">7</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">天极致体验</span>
            </div>
          </div>
        </div>
      </header>

      {/* Summary / Map Placeholder */}
      <section id="summary" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">路线概览 <span className="text-slate-300 ml-2">ROUTE SUMMARY</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              本次行程从“羊城”广州出发，一路向西。首先拥抱桂林的甲天下山水，接着进入百色探索神秘的天坑与高山湖泊，最后抵达中越边境的崇左，感受边陲异域风情。这是一条集自然景观、跨国文化、红色历史与亲子娱乐于一体的完美自驾路线。
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</span>
                <span><b>广州 - 桂林:</b> 开启山水画卷之旅</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</span>
                <span><b>桂林 - 百色:</b> 深入喀斯特地心奇迹</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">3</span>
                <span><b>百色 - 崇左:</b> 边境瀑布与田园诗篇</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-video flex items-center justify-center relative shadow-inner group">
            <img src="https://picsum.photos/seed/map/1200/800" alt="Map" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="bg-white/90 p-6 rounded-2xl shadow-xl border border-white">
                <i className="fa-solid fa-location-dot text-4xl text-blue-600 mb-4 animate-bounce"></i>
                <h3 className="font-bold text-xl">全线路线图</h3>
                <p className="text-sm text-slate-500 mt-2">点击查看实时地图导航</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Itinerary */}
      <section id="itinerary" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black">每日行程 <span className="text-gradient">ITINERARY</span></h2>
              <p className="text-slate-400 mt-2 italic">细致入微的逐日规划与景点分析</p>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
              {ITINERARY.map((item) => (
                <button
                  key={item.day}
                  onClick={() => setActiveDay(item.day)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all font-bold ${activeDay === item.day ? 'bg-black text-white' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
                >
                  Day {item.day}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Day Detail View */}
            <div className="lg:col-span-8">
              {ITINERARY.filter(item => item.day === activeDay).map(item => (
                <div key={item.day} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Info Header */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-black">DAY 0{item.day}</span>
                      <span className="text-slate-400 text-sm">{item.route}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                      <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"><i className="fa-solid fa-clock"></i> {item.driveTime}</span>
                      <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"><i className="fa-solid fa-star text-amber-400"></i> {item.highlights.join(' · ')}</span>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                      <i className="fa-solid fa-circle-exclamation text-amber-600 mt-1"></i>
                      <p className="text-sm text-amber-800"><span className="font-bold">今日建议：</span>{item.tips}</p>
                    </div>
                  </div>

                  {/* Attractions Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {item.attractions.map((attr, idx) => (
                      <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img src={attr.image} alt={attr.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute top-4 left-4 flex gap-2">
                            {attr.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2">{attr.name}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{attr.description}</p>
                          <button className="mt-4 text-blue-600 text-sm font-bold flex items-center gap-2 group/btn">
                            查看攻略 <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-timeline text-blue-600"></i> 快速跳转
                </h3>
                <div className="space-y-4">
                  {ITINERARY.map((item) => (
                    <button
                      key={item.day}
                      onClick={() => setActiveDay(item.day)}
                      className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left transition-all border ${activeDay === item.day ? 'bg-white border-blue-200 shadow-md translate-x-2' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                    >
                      <span className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-sm ${activeDay === item.day ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {item.day}
                      </span>
                      <div>
                        <div className="font-bold text-sm">{item.route}</div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">{item.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section id="tips" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">春节自驾必读 <span className="text-gradient">TIPS</span></h2>
            <p className="text-slate-500">确保您的旅程平安、顺心</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <i className="fa-solid fa-car text-xl"></i>
              </div>
              <h4 className="font-bold text-xl mb-4">车辆整备</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                广西桂西路段多山路，出发前务必检查胎压、刹车片和防冻液。春节期间洗车和修车店大多歇业，建议备好充气泵与应急电源。
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
                <i className="fa-solid fa-hotel text-xl"></i>
              </div>
              <h4 className="font-bold text-xl mb-4">酒店与门票</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                春节是传统旅游旺季，阳朔和德天瀑布的酒店需提前至少2周预订。热门景点（如竹筏游漓江）需在官方公众号提前抢票。
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-rose-50 border border-rose-100">
              <div className="w-12 h-12 bg-rose-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-200">
                <i className="fa-solid fa-umbrella text-xl"></i>
              </div>
              <h4 className="font-bold text-xl mb-4">天气衣着</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                2月的桂西湿冷，气温多在5-15度。早晚温差大，峡谷内体感更冷。建议采用“三层穿衣法”，并随身携带雨具。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-car-side text-3xl text-blue-500"></i>
            <span className="font-bold text-2xl tracking-tight">桂西自驾游指南</span>
          </div>
          <p className="text-slate-500 text-sm">© 2025 旅游策划团队 · 春节快乐 · 一路平安</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fa-brands fa-weixin text-xl"></i></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fa-brands fa-weibo text-xl"></i></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fa-solid fa-share-nodes text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
