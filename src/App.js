import React, { useState } from 'react';
import { 
  ClipboardList, 
  FileText, 
  Layers, 
  Image as ImageIcon, 
  Share2, 
  CheckCircle2, 
  User, 
  Cpu, 
  AlertCircle,
  ArrowRight,
  ChevronRight,
  Monitor,
  Figma
} from 'lucide-react';

// 自定義 Nano Banana 圖示
const BananaIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{ color: '#FBBF24' }} // 鮮黃色
  >
    <path d="M5.5 17.5C4.5 16 3.5 13.5 3.5 10.5C3.5 5 8.5 2 12.5 2C13.5 2 14.5 2.5 15 3.5C15.5 4.5 15.5 6 15.5 7.5C15.5 11.5 12.5 16 8.5 19.5C6.5 21.5 3.5 22 2 21" />
    <path d="M12.5 2C15.5 2 19.5 4.5 20.5 8.5C21.5 12.5 19.5 17.5 15.5 20.5" />
  </svg>
);

const MedifyWorkflow = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "P1",
      title: "需求模組化與策劃",
      subtitle: "Demand & Modularization",
      goal: "將模糊需求轉為可執行指令",
      icon: <ClipboardList className="w-6 h-6" />,
      checkpoint: "大綱鎖定 (Outline Lock)",
      tasks: [
        { type: 'human', role: '團隊', text: '需求接收：確認衛教主題（如：白內障手術）' },
        { type: 'human', role: '團隊', text: '模組拆解：術前／手術／術後／醫材比較' },
        { type: 'human', role: '團隊', text: '風格定義：設定受眾 (TA) 與品牌調性' },
        { type: 'ai', role: 'Gemini 3', text: '深度研究：競品與最新文獻交叉分析' },
        { type: 'ai', role: 'Gemini 3', text: 'CRIT 引導：CoT 釐清盲點與策略架構' },
        { type: 'ai', role: 'Gemini 3', text: '輸出成果：內容大綱 + 影音腳本架構 (供 Mia 參考)' },
      ],
      note: "本 SOP 聚焦圖文；影音產製另行設計。"
    },
    {
      id: "P2",
      title: "文字內容工廠",
      subtitle: "Text Factory",
      goal: "快速產出高正確性的基礎文本",
      icon: <FileText className="w-6 h-6" />,
      tasks: [
        { type: 'ai', role: 'Claude/Gemini', text: 'PTCF 提示詞撰寫初稿（依據大綱）' },
        { type: 'ai', role: 'Claude/Gemini', text: '分層產出：長文 (Blog) / 社群 (IG) / 廣告' },
        { type: 'human', role: 'Belle', text: '醫學檢核 (Fact-Check)：核心正確性把關' },
        { type: 'human', role: 'Belle', text: '語氣潤飾：轉化為 Medify 溫暖專業語調' },
        { type: 'human', role: 'Belle', text: '內容定稿 (Lock)：文字不再大幅更動' },
      ]
    },
    {
      id: "P2.5",
      title: "視覺溝通橋樑",
      subtitle: "Visual Bridge",
      goal: "降低認知落差，把文字轉為結構草圖",
      icon: <Monitor className="w-6 h-6" />,
      checkpoint: "結構對焦 (Layout Alignment)",
      tasks: [
        { type: 'nbp', role: 'NBP', text: '一鍵生成資訊架構圖 (流程/對照/儀表板)' },
        { type: 'nbp', role: 'NBP', text: '視覺化轉譯：將邏輯映射為版面區塊' },
        { type: 'human', role: 'Belle', text: '產出結構參考圖，提供給 VD Ainia' },
        { type: 'human', role: 'Belle', text: '概念對焦：說明資訊權重與邏輯動線' },
      ],
      note: "此階段僅供結構參考，不代表最終視覺風格。"
    },
    {
      id: "P3",
      title: "視覺素材工廠",
      subtitle: "Visual Asset Factory",
      goal: "產出「可編輯元件」而非單張死圖",
      icon: <ImageIcon className="w-6 h-6" />,
      checkpoint: "素材驗收 (Asset Approval)",
      tasks: [
        { type: 'ai', role: 'MJ/Sora', text: '風格鎖定：讀取 Medify Style Reference' },
        { type: 'ai', role: 'MJ/Sora', text: '元件生成：背景層 / 主體層 / SDM 體感模擬' },
        { type: 'ai', role: 'Firefly', text: '局部修整 (Inpainting)：手指、眼神細節' },
        { type: 'human', role: 'Ainia', text: '選圖與品質把關：排除 AI 幻覺' },
      ]
    },
    {
      id: "P4",
      title: "組裝與後製",
      subtitle: "Assembly & Post-Production",
      goal: "將 AI 素材組裝為最終成品",
      icon: <Layers className="w-6 h-6" />,
      checkpoint: "最終審核 (Final Sign-off)",
      tasks: [
        { type: 'human', role: 'Ainia', text: 'Figma/PS 組裝：背景/人物/文字排版' },
        { type: 'human', role: 'Ainia', text: 'CI 規範檢查：Logo/字體/安全邊距' },
        { type: 'ai', role: 'Figma', text: 'Figma 內自動化歸檔：建立共享庫與產製紀錄' },
      ]
    },
    {
      id: "P5",
      title: "交付與轉譯",
      subtitle: "Delivery & Repurposing",
      goal: "一次產出，多處應用 (IG 實驗場)",
      icon: <Share2 className="w-6 h-6" />,
      tasks: [
        { type: 'human', role: 'B2B', text: '輸出「基礎包」供醫院審核 (完成 SLA)' },
        { type: 'ai', role: 'Gemini', text: '轉譯 IG 格式：Hashtag 與互動問答設計' },
        { type: 'human', role: 'Social', text: '上架排程發布至 Medify IG' },
      ]
    }
  ];

  const getTaskStyle = (type) => {
    switch (type) {
      case 'human': return 'bg-blue-50 border-blue-100';
      case 'nbp': return 'bg-amber-50 border-amber-100';
      default: return 'bg-emerald-50 border-emerald-100';
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'human': return 'bg-blue-200 text-blue-800';
      case 'nbp': return 'bg-amber-200 text-amber-800';
      default: return 'bg-emerald-200 text-emerald-800';
    }
  };

  const getIconContainerStyle = (type) => {
    switch (type) {
      case 'human': return 'bg-blue-500 text-white';
      case 'nbp': return 'bg-amber-100 text-amber-600';
      default: return 'bg-emerald-500 text-white';
    }
  };

  const getTaskIcon = (type) => {
    if (type === 'human') return <User className="w-5 h-5" />;
    if (type === 'nbp') return <BananaIcon className="w-5 h-5" />;
    return <Cpu className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Medify AI 產製工作流</h1>
            <p className="text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              核心原則：AI 產素材 (Ingredients)，人做大廚 (Chef)
            </p>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center gap-1">
              <User className="w-3 h-3" /> 人類決策
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-medium flex items-center gap-1">
              <BananaIcon className="w-3 h-3" /> Nano Banana Pro
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium flex items-center gap-1">
              <Cpu className="w-3 h-3" /> 其他 AI
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(index)}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 flex items-center gap-4 ${
                activeStage === index 
                ? 'bg-white border-blue-500 shadow-md ring-4 ring-blue-50' 
                : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeStage === index ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                {stage.icon}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">{stage.id}</div>
                <div className="font-bold text-slate-800">{stage.title}</div>
              </div>
              {activeStage === index && <ChevronRight className="w-5 h-5 text-blue-500" />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            {stages[activeStage].icon}
          </div>

          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                {stages[activeStage].title}
                <span className="text-slate-300 text-lg font-light">|</span>
                <span className="text-slate-400 font-medium text-lg italic">{stages[activeStage].subtitle}</span>
              </h2>
              <p className="mt-2 text-blue-600 font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                {stages[activeStage].goal}
              </p>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
              {stages[activeStage].tasks.map((task, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-[1.01] ${getTaskStyle(task.type)}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getIconContainerStyle(task.type)}`}>
                    {getTaskIcon(task.type)}
                  </div>
                  <div className="flex-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase mb-1 inline-block ${getBadgeStyle(task.type)}`}>
                      {task.role}
                    </span>
                    <p className="text-slate-700 font-medium leading-tight flex items-center gap-2">
                      {task.role === 'Figma' && <Figma className="w-4 h-4 text-pink-500" />}
                      {task.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Elements */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              {stages[activeStage].checkpoint && (
                <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-rose-400 uppercase">關鍵檢核點</div>
                    <div className="font-bold text-rose-700">{stages[activeStage].checkpoint}</div>
                  </div>
                </div>
              )}
              {stages[activeStage].note && (
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase">流程備註</div>
                  <div className="text-sm text-slate-600 leading-snug">{stages[activeStage].note}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-6xl mx-auto mt-12 text-center text-slate-400 text-sm">
        <p>© 2025 Medify AI Content Engine. Built for High-Efficiency Digital Healthcare Education.</p>
      </div>
    </div>
  );
};

export default function App() {
  return <MedifyWorkflow />;
}