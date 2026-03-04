# 🌐 Global Monitor

> 全球态势实时监控看板 — 聚合新闻、金融市场、地缘政治与智能分析于一体

**在线访问**: [xfki.github.io/Global-monitor](https://xfki.github.io/Global-monitor/)

---

## 概览

Global Monitor 是一个**纯静态**的全球态势感知平台，无需后端服务器。它实时从 30+ 个 RSS 源、市场 API 和政府数据源拉取信息，并通过内置算法引擎做相关性检测、叙事追踪和关键实体识别。

> **不需要大模型 API Key** — 所有分析功能（相关性检测、叙事追踪、主角分析）均为本地算法实现。

---

## API Key 配置

项目需要两个**免费** API Key（不配置时相应面板显示为空，不影响其他功能）：

| API | 用途 | 获取地址 | 限额 |
|-----|------|----------|------|
| **Finnhub** | 股票指数、板块、商品行情 | [finnhub.io](https://finnhub.io/) | 免费 60 次/分钟 |
| **FRED** | 美联储利率、CPI、国债数据 | [fred.stlouisfed.org](https://fred.stlouisfed.org/docs/api/api_key.html) | 免费无限制 |

### 本地运行

```bash
cp situation-monitor/.env.example situation-monitor/.env
# 编辑 .env，填入你的 Key
```

### GitHub Pages 部署

在仓库的 **Settings → Secrets and variables → Actions** 中添加：
- `VITE_FINNHUB_API_KEY`
- `VITE_FRED_API_KEY`

---

## 功能面板

| 优先级 | 面板 | 说明 |
|--------|------|------|
| ⭐ 核心 | Global Map | D3 可交互地图，标注地缘热点与冲突区域 |
| ⭐ 核心 | World / Geopolitical | 政治新闻聚合（BBC、卫报、NYT 等） |
| ⭐ 核心 | Technology / AI | 科技资讯（HN、Ars Technica、ArXiv AI 等） |
| ⭐ 核心 | Financial | 财经新闻（CNBC、FT、MarketWatch 等） |
| ⭐ 核心 | Markets | 股票指数与板块行情 *(需 Finnhub Key)* |
| ⭐ 核心 | Sector Heatmap | 11 大板块 ETF 涨跌热力图 *(需 Finnhub Key)* |
| ⭐ 核心 | Correlation Engine | 跨源新闻相关性自动检测 |
| ⭐ 核心 | Narrative Tracker | 叙事传播追踪（边缘 → 主流） |
| ⭐ 核心 | Federal Reserve | 美联储政策动态 *(需 FRED Key)* |
| ⭐ 核心 | World Leaders | 全球领导人动态 |
| 🔷 次要 | Crypto | 加密货币行情（CoinGecko，无需 Key） |
| 🔷 次要 | Commodities / VIX | 黄金、原油、天然气、VIX *(需 Finnhub Key)* |
| 🔷 次要 | Money Printer | 货币供应量追踪（M2 等） *(需 FRED Key)* |
| 🔷 次要 | Polymarket | 预测市场赔率 |
| 🔷 次要 | Main Character | 新闻人物热度排名 |
| 🔷 次要 | Intel Feed | 智库 / 国防分析（CSIS、Brookings、CFR 等） |
| 🔷 次要 | Venezuela / Greenland / Iran | 专题态势追踪 |
| 🔹 深度 | Gov Contracts | 美国政府合同数据 |
| 🔹 深度 | Whale Watch | 大额资金异动 |
| 🔹 深度 | Layoffs Tracker | 科技裁员追踪 |
| 🔹 深度 | AI Arms Race | AI 军备竞赛动态 |
| 🔧 自定义 | My Monitors | 用户自定义关键词监控 |

---

## 快速开始

### 环境要求

- Node.js >= 18

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/XFKI/Global-monitor.git
cd Global-monitor/situation-monitor

# 安装依赖
npm install

# 配置 API Key（可选）
cp .env.example .env
# 编辑 .env 填入 Key

# 启动开发服务器
npm run dev
# 访问 http://localhost:5173
```

### 构建与预览

```bash
npm run build
npm run preview   # http://localhost:4173
```

---

## 所有命令

```bash
npm run dev           # 开发服务器 (localhost:5173)
npm run build         # 构建到 /build 目录
npm run preview       # 预览生产构建 (localhost:4173)
npm run check         # TypeScript 类型检查
npm run test          # 单元测试（watch 模式）
npm run test:unit     # 单元测试（执行一次）
npm run test:e2e      # E2E 测试（需先运行 preview）
npm run lint          # ESLint + Prettier 检查
npm run format        # 自动格式化
```

---

## 部署到 GitHub Pages

仓库已配置 GitHub Actions，推送到 `main` 分支自动构建部署：

1. 前往 **Settings → Pages**，将 Source 设为 `GitHub Actions`
2. （可选）在 **Settings → Secrets and variables → Actions** 添加 API Key：
   - `VITE_FINNHUB_API_KEY`
   - `VITE_FRED_API_KEY`
3. 推送代码 → 自动触发构建 → 部署到 `https://xfki.github.io/Global-monitor/`

---

## 项目结构

```
situation-monitor/src/lib/
├── analysis/            # 智能分析引擎（纯算法，无需 LLM）
│   ├── correlation.ts   # 跨源相关性检测
│   ├── narrative.ts     # 叙事传播追踪
│   └── main-character.ts# 实体热度分析
├── api/                 # 外部数据接口
│   ├── fred.ts          # FRED 经济数据（需 Key）
│   ├── markets.ts       # Finnhub 市场行情（需 Key）
│   ├── news.ts          # RSS 新闻聚合（无需 Key）
│   └── leaders.ts       # 领导人数据（无需 Key）
├── components/          # Svelte UI 组件
├── config/              # 集中配置（feeds、keywords、panels 等）
├── services/            # 弹性服务层（缓存、熔断器、去重）
├── stores/              # Svelte 状态管理
└── types/               # TypeScript 类型定义
```

---

## 技术栈

- **SvelteKit 2.0** + Svelte 5（`$state` / `$derived` / `$effect` runes）
- **TypeScript**（严格模式）
- **Tailwind CSS**（深色主题）
- **D3.js** + TopoJSON（地图可视化）
- **Static Adapter**（纯静态站点，无需服务器）
- **Vitest** + **Playwright**（单元 & E2E 测试）

---

## License

MIT
