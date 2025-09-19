const agents = [
  {
    id: "agent-001",
    name: "生成-短视频脚本-多渠道适配",
    slug: "storyboard-multi-channel",
    summary:
      "为品牌策划直播/短视频脚本，自动匹配不同渠道格式并产出配套素材建议。",
    description:
      "通过多模态大模型结合市场热度数据，为运营团队快速生成多渠道短视频脚本与口播文案，内置 AB 测试建议与素材位提示。",
    categories: { primary: "内容生成", secondary: "电商" },
    tags: ["多模态", "营销", "脚本", "内容运营"],
    price: {
      type: "subscription",
      label: "订阅 ¥199/月，含 600 调用",
      value: 199,
      billing: "monthly",
      trial: "每日 3 次试跑",
    },
    metrics: {
      rating: 4.7,
      successRate: 92,
      avgLatency: 1.1,
      installs: 3200,
      mau: 2100,
      trend: 0.68,
      growth7d: 0.22,
      enterpriseFit: 0.8,
      freshness: 0.6,
    },
    models: [{ provider: "OpenAI", model: "gpt-4o-mini", context: "128k" }],
    permissions: {
      level: "medium",
      outbound: ["Shopify API", "Slack"],
      data: ["商品资料", "渠道表现"],
      scopes: ["read:products", "write:campaign"],
      risk: "low",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["cloud", "private_cluster"],
    updatedAt: "2024-07-02",
    versions: [
      { version: "1.3.0", changelog: "新增抖音直播模板与成本预算导出", current: true },
      { version: "1.2.1", changelog: "修复 Slack 通知延迟问题" },
      { version: "1.1.0", changelog: "支持多语言配音脚本" },
    ],
    reviews: [
      {
        user: "星河传媒运营团队",
        ratings: { effectiveness: 5, stability: 5, speed: 4, docs: 5 },
        comment: "模板覆盖面广，能快速生成符合各渠道节奏的脚本。",
        createdAt: "2024-06-22",
      },
      {
        user: "南风电商",
        ratings: { effectiveness: 4, stability: 4, speed: 5, docs: 4 },
        comment: "结合历史素材自动生成分镜很实用，希望开放更多 ERP 集成。",
        createdAt: "2024-05-30",
      },
    ],
    sandbox: {
      quota: "匿名 3 次/日，登录 20 次",
      permissions: "将模拟调用 Shopify、Slack，屏蔽真实写入",
    },
    compliance:
      "通过 P2 审核，默认 L2 权限，所有外呼附带 x-run-id 头，支持 GDPR/CCPA 合规导出。",
    developer: "Nebula Studio · 企业认证",
    quality: {
      failureReasons: ["渠道 API 限流", "素材缺失"],
      dependencyStatus: "Shopify 正常 · Slack 正常",
    },
    stats: {
      trialConversion: 0.34,
      checkoutConversion: 0.11,
      refundRate: 0.02,
      mrr: 86_000,
    },
  },
  {
    id: "agent-002",
    name: "自动化-报表生成-多源整合",
    slug: "analytics-report-orchestrator",
    summary: "整合数据库、Excel、API 数据，自动生成可视化报表与洞察。",
    description:
      "支持连接 PostgreSQL、Snowflake、Excel 上传与第三方 API，内置指标异常检测与日报推送。",
    categories: { primary: "数据处理", secondary: "SaaS" },
    tags: ["报表", "数据抽取", "异常检测"],
    price: {
      type: "subscription",
      label: "订阅 ¥299/月，含 800 调用",
      value: 299,
      billing: "monthly",
      trial: "每日 2 次试跑",
    },
    metrics: {
      rating: 4.6,
      successRate: 95,
      avgLatency: 0.9,
      installs: 4200,
      mau: 2800,
      trend: 0.74,
      growth7d: 0.18,
      enterpriseFit: 0.9,
      freshness: 0.7,
    },
    models: [{ provider: "OpenAI", model: "gpt-4o", context: "128k" }],
    permissions: {
      level: "high",
      outbound: ["Tableau", "Slack", "Email"],
      data: ["财务数据", "CRM"],
      scopes: ["read:db", "write:dashboard"],
      risk: "medium",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["cloud", "self_hosted"],
    updatedAt: "2024-06-28",
    versions: [
      { version: "2.0.0", changelog: "引入语义指标配置与多租户隔离", current: true },
      { version: "1.6.2", changelog: "新增 Snowflake 连接器" },
      { version: "1.5.0", changelog: "支持异常检测模板" },
    ],
    reviews: [
      {
        user: "Atlas BI 团队",
        ratings: { effectiveness: 5, stability: 4, speed: 5, docs: 4 },
        comment: "自定义 SQL + 自然语言的混合配置非常高效。",
        createdAt: "2024-06-10",
      },
    ],
    sandbox: {
      quota: "匿名 2 次/日，登录 15 次",
      permissions: "沙箱内使用脱敏数据，仅展示将调用的数据范围",
    },
    compliance:
      "通过 P2 审核，启用细粒度数据库访问控制，支持私有化部署。",
    developer: "DataForge Labs · 企业认证",
    quality: {
      failureReasons: ["数据源不可达", "字段映射缺失"],
      dependencyStatus: "PostgreSQL 正常 · Snowflake 正常",
    },
    stats: {
      trialConversion: 0.41,
      checkoutConversion: 0.14,
      refundRate: 0.03,
      mrr: 112_000,
    },
  },
  {
    id: "agent-003",
    name: "客服-多语言-实时对话",
    slug: "support-live-translator",
    summary: "面向全球客服团队的实时翻译与语境理解 Agent。",
    description:
      "支持 45 种语言实时翻译，结合 FAQ 与知识库，输出合规回复并自动生成跟进任务。",
    categories: { primary: "客户服务", secondary: "出海" },
    tags: ["对话", "翻译", "多语言", "客服"],
    price: {
      type: "subscription",
      label: "订阅 ¥249/月，含 1,000 会话",
      value: 249,
      billing: "monthly",
      trial: "每日 5 次试跑",
    },
    metrics: {
      rating: 4.8,
      successRate: 94,
      avgLatency: 0.8,
      installs: 5100,
      mau: 3400,
      trend: 0.81,
      growth7d: 0.28,
      enterpriseFit: 0.85,
      freshness: 0.8,
    },
    models: [{ provider: "Anthropic", model: "claude-3-sonnet", context: "200k" }],
    permissions: {
      level: "medium",
      outbound: ["Zendesk", "Slack", "Email"],
      data: ["工单", "知识库"],
      scopes: ["read:tickets", "write:reply"],
      risk: "low",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["cloud", "private_cluster"],
    updatedAt: "2024-07-05",
    versions: [
      { version: "3.1.0", changelog: "引入情绪识别和优先级路由", current: true },
      { version: "3.0.1", changelog: "提升韩语与西语翻译准确度" },
    ],
    reviews: [
      {
        user: "GlobalCall",
        ratings: { effectiveness: 5, stability: 5, speed: 5, docs: 4 },
        comment: "多语种对话流畅，审批流也很好用。",
        createdAt: "2024-06-15",
      },
      {
        user: "Ocean 客服中心",
        ratings: { effectiveness: 4, stability: 4, speed: 4, docs: 5 },
        comment: "希望增加 CRM 自定义字段映射。",
        createdAt: "2024-05-20",
      },
    ],
    sandbox: {
      quota: "匿名 4 次/日，登录 30 次",
      permissions: "模拟调用 Zendesk/Slack，屏蔽真实客诉数据",
    },
    compliance:
      "通过 P2 审核，支持数据驻留选项与敏感词过滤，默认 L2 权限。",
    developer: "LinguaFlow",
    quality: {
      failureReasons: ["第三方 API 延迟", "知识库未同步"],
      dependencyStatus: "Zendesk 正常 · Slack 正常",
    },
    stats: {
      trialConversion: 0.46,
      checkoutConversion: 0.16,
      refundRate: 0.015,
      mrr: 138_000,
    },
  },
  {
    id: "agent-004",
    name: "自动化-审批流-合规风控",
    slug: "compliance-review-flow",
    summary: "企业审批与风控自动化，支持多级审批与异常拦截。",
    description:
      "结合企业权限策略、异常检测与审计日志，自动路由审批、生成合规档案并同步至第三方系统。",
    categories: { primary: "自动化办公", secondary: "金融" },
    tags: ["审批", "风控", "自动化"],
    price: { type: "one_time", label: "一次性 ¥6,999", value: 6999 },
    metrics: {
      rating: 4.5,
      successRate: 91,
      avgLatency: 1.3,
      installs: 1800,
      mau: 900,
      trend: 0.52,
      growth7d: 0.12,
      enterpriseFit: 0.94,
      freshness: 0.45,
    },
    models: [{ provider: "OpenAI", model: "gpt-4o", context: "128k" }],
    permissions: {
      level: "high",
      outbound: ["SAP", "Workday", "Slack"],
      data: ["财务", "合同", "HR"],
      scopes: ["read:approval", "write:policy"],
      risk: "medium",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["private_cluster", "self_hosted"],
    updatedAt: "2024-05-26",
    versions: [
      { version: "1.8.0", changelog: "增加支付风控规则引擎", current: true },
      { version: "1.6.3", changelog: "多组织审批节点配置" },
    ],
    reviews: [],
    sandbox: {
      quota: "登录 10 次/日",
      permissions: "模拟调用 SAP/Workday，不落地真实财务数据",
    },
    compliance: "通过 P2 审核，启用 L3 权限需额外人工复核。",
    developer: "ShieldOps",
    quality: {
      failureReasons: ["审批链路超时", "外部系统不可达"],
      dependencyStatus: "SAP 正常 · Workday 正常",
    },
    stats: {
      trialConversion: 0.29,
      checkoutConversion: 0.09,
      refundRate: 0.04,
      mrr: 54_000,
    },
  },
  {
    id: "agent-005",
    name: "研发-代码评审-知识强化",
    slug: "code-review-guardian",
    summary: "自动生成代码评审意见、风险提示与知识库引用。",
    description:
      "使用向量检索 + 大模型，为 PR 自动生成评审建议，并补充相关文档、测试建议与依赖风险。",
    categories: { primary: "研发辅助", secondary: "SaaS" },
    tags: ["代码生成", "检索增强", "自动化"],
    price: { type: "subscription", label: "订阅 ¥129/月，含 1,200 次审查", value: 129, billing: "monthly" },
    metrics: {
      rating: 4.4,
      successRate: 89,
      avgLatency: 0.7,
      installs: 2700,
      mau: 1600,
      trend: 0.58,
      growth7d: 0.16,
      enterpriseFit: 0.72,
      freshness: 0.5,
    },
    models: [{ provider: "Meta", model: "llama3-70b", context: "32k" }],
    permissions: {
      level: "medium",
      outbound: ["GitHub", "GitLab"],
      data: ["代码仓库", "测试报告"],
      scopes: ["read:repo", "write:comment"],
      risk: "medium",
    },
    enterprise: true,
    workflowSupport: false,
    deployment: ["cloud"],
    updatedAt: "2024-06-12",
    versions: [
      { version: "0.9.5", changelog: "新增测试覆盖率建议", current: true },
      { version: "0.9.0", changelog: "支持多仓库订阅" },
    ],
    reviews: [
      {
        user: "NextGen DevOps",
        ratings: { effectiveness: 4, stability: 4, speed: 5, docs: 4 },
        comment: "能提醒潜在安全问题，节约了大量时间。",
        createdAt: "2024-04-18",
      },
    ],
    sandbox: {
      quota: "匿名 1 次/日，登录 8 次",
      permissions: "沙箱只读取示例仓库，禁止写入",
    },
    compliance: "通过 P1 审核，要求仓库权限最小化配置。",
    developer: "StackMinds",
    quality: {
      failureReasons: ["仓库访问失败", "上下文不足"],
      dependencyStatus: "GitHub 正常",
    },
    stats: {
      trialConversion: 0.33,
      checkoutConversion: 0.1,
      refundRate: 0.05,
      mrr: 36_000,
    },
  },
  {
    id: "agent-006",
    name: "财务-对账-异常识别",
    slug: "finance-reconcile-guard",
    summary: "自动对账、识别异常交易并推送审批。",
    description:
      "接入 ERP、支付通道和银行流水，自动对账并生成可追责日志，支持风险分级。",
    categories: { primary: "财务法务", secondary: "企业服务" },
    tags: ["财务", "对账", "风险"],
    price: { type: "subscription", label: "订阅 ¥399/月，含 2,000 条记录", value: 399, billing: "monthly" },
    metrics: {
      rating: 4.3,
      successRate: 93,
      avgLatency: 1.4,
      installs: 1500,
      mau: 1100,
      trend: 0.47,
      growth7d: 0.08,
      enterpriseFit: 0.88,
      freshness: 0.55,
    },
    models: [{ provider: "Alibaba", model: "qwen-max", context: "32k" }],
    permissions: {
      level: "high",
      outbound: ["SAP", "Oracle", "Email"],
      data: ["银行流水", "支付订单"],
      scopes: ["read:finance", "write:alert"],
      risk: "high",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["self_hosted"],
    updatedAt: "2024-05-18",
    versions: [{ version: "1.4.2", changelog: "增加风控得分解释", current: true }],
    reviews: [],
    sandbox: {
      quota: "登录 5 次/日",
      permissions: "模拟 ERP/银行数据，不执行真实写入",
    },
    compliance: "需企业认证方可启用 L3 权限。",
    developer: "LedgerX",
    quality: {
      failureReasons: ["银行接口延迟", "凭证缺失"],
      dependencyStatus: "SAP 波动 · Oracle 正常",
    },
    stats: {
      trialConversion: 0.26,
      checkoutConversion: 0.08,
      refundRate: 0.06,
      mrr: 48_000,
    },
  },
  {
    id: "agent-007",
    name: "教育-学习路径-个性辅导",
    slug: "education-learning-coach",
    summary: "根据学生水平生成个性化学习路径与测评。",
    description:
      "结合学生画像与测评结果，动态规划学习路径，输出任务提醒与报告。",
    categories: { primary: "教育学习", secondary: "教育" },
    tags: ["教育", "个性化", "测评"],
    price: { type: "subscription", label: "订阅 ¥89/月，含 300 任务", value: 89, billing: "monthly" },
    metrics: {
      rating: 4.2,
      successRate: 87,
      avgLatency: 1.0,
      installs: 900,
      mau: 500,
      trend: 0.35,
      growth7d: 0.07,
      enterpriseFit: 0.4,
      freshness: 0.62,
    },
    models: [{ provider: "OpenAI", model: "gpt-4o-mini", context: "64k" }],
    permissions: {
      level: "low",
      outbound: ["Email"],
      data: ["学习记录"],
      scopes: ["read:profile"],
      risk: "low",
    },
    enterprise: false,
    workflowSupport: true,
    deployment: ["cloud"],
    updatedAt: "2024-07-01",
    versions: [{ version: "0.8.4", changelog: "新增家长报告模板", current: true }],
    reviews: [
      {
        user: "慧学教育",
        ratings: { effectiveness: 4, stability: 4, speed: 4, docs: 4 },
        comment: "适合作为学习顾问辅助，期待更多教材同步。",
        createdAt: "2024-06-01",
      },
    ],
    sandbox: {
      quota: "匿名 2 次/日，登录 10 次",
      permissions: "只展示学习计划草稿，不保存真实学生信息",
    },
    compliance: "通过 P2 审核，默认 L1 权限。",
    developer: "BrightClass",
    quality: {
      failureReasons: ["学生画像缺失"],
      dependencyStatus: "Email 正常",
    },
    stats: {
      trialConversion: 0.31,
      checkoutConversion: 0.1,
      refundRate: 0.025,
      mrr: 18_000,
    },
  },
  {
    id: "agent-008",
    name: "运维-观测-智能告警",
    slug: "ops-observability-guardian",
    summary: "自动分析日志与指标，推送异常告警与缓解建议。",
    description:
      "支持 OpenTelemetry、Prometheus、Grafana 数据源，智能识别异常并联动告警渠道。",
    categories: { primary: "运维安全", secondary: "SaaS" },
    tags: ["监控", "告警", "自动化"],
    price: { type: "free", label: "免费，含 1,000 指标" },
    metrics: {
      rating: 4.1,
      successRate: 90,
      avgLatency: 1.6,
      installs: 2500,
      mau: 1700,
      trend: 0.42,
      growth7d: 0.14,
      enterpriseFit: 0.78,
      freshness: 0.6,
    },
    models: [{ provider: "OpenAI", model: "gpt-4o-mini", context: "64k" }],
    permissions: {
      level: "medium",
      outbound: ["PagerDuty", "Slack"],
      data: ["监控指标", "日志"],
      scopes: ["read:metrics", "write:alert"],
      risk: "medium",
    },
    enterprise: true,
    workflowSupport: true,
    deployment: ["cloud"],
    updatedAt: "2024-06-20",
    versions: [
      { version: "1.2.0", changelog: "增加自动缓解建议", current: true },
      { version: "1.1.0", changelog: "集成 OpenTelemetry" },
    ],
    reviews: [
      {
        user: "SkyOps",
        ratings: { effectiveness: 4, stability: 4, speed: 3, docs: 4 },
        comment: "告警噪音比传统方案低不少。",
        createdAt: "2024-05-28",
      },
    ],
    sandbox: {
      quota: "匿名 5 次/日",
      permissions: "使用模拟指标流，展示将推送的渠道",
    },
    compliance: "通过 P2 审核，支持密钥隔离与访问审计。",
    developer: "PulseGrid",
    quality: {
      failureReasons: ["指标缺采样", "Webhook 超时"],
      dependencyStatus: "Prometheus 正常 · PagerDuty 正常",
    },
    stats: {
      trialConversion: 0.37,
      checkoutConversion: 0.08,
      refundRate: 0.01,
      mrr: 12_000,
    },
  },
];

const state = {
  query: "",
  filters: {
    price: "all",
    rating: 0,
    successRate: 0,
    updatedWithin: "all",
    model: "all",
    workflowOnly: false,
    permission: "all",
    enterpriseOnly: false,
    deployment: false,
  },
  sort: "relevance",
  compare: [],
  currentAgent: null,
  currentTab: "overview",
};

const elements = {};

function init() {
  elements.search = document.getElementById("globalSearch");
  elements.searchBtn = document.getElementById("searchBtn");
  elements.filterForm = document.getElementById("filterForm");
  elements.agentResults = document.getElementById("agentResults");
  elements.sortSelect = document.getElementById("sortSelect");
  elements.resultCount = document.getElementById("resultCount");
  elements.comparePanel = document.getElementById("comparePanel");
  elements.compareBody = document.getElementById("compareBody");
  elements.compareHint = document.getElementById("compareHint");
  elements.clearCompare = document.getElementById("clearCompare");
  elements.toast = document.getElementById("toast");
  elements.themeToggle = document.getElementById("themeToggle");
  elements.modal = document.getElementById("agentModal");
  elements.modalClose = document.getElementById("modalClose");
  elements.tabButtons = Array.from(document.querySelectorAll(".modal-tabs .tab"));
  elements.tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
  elements.modalTitle = document.getElementById("modalTitle");
  elements.modalSubtitle = document.getElementById("modalSubtitle");
  elements.modalDescription = document.getElementById("modalDescription");
  elements.modalPermissions = document.getElementById("modalPermissions");
  elements.modalCompliance = document.getElementById("modalCompliance");
  elements.modalPricing = document.getElementById("modalPricing");
  elements.modalDeveloper = document.getElementById("modalDeveloper");
  elements.modalRating = document.getElementById("modalRating");
  elements.modalSuccess = document.getElementById("modalSuccess");
  elements.modalLatency = document.getElementById("modalLatency");
  elements.modalVersions = document.getElementById("modalVersions");
  elements.modalReviews = document.getElementById("modalReviews");
  elements.sandboxForm = document.getElementById("sandboxForm");
  elements.sandboxPrompt = document.getElementById("sandboxPrompt");
  elements.sandboxResult = document.getElementById("sandboxResult");
  elements.sandboxLogs = document.getElementById("sandboxLogs");
  elements.sandboxQuota = document.getElementById("sandboxQuota");
  elements.sandboxPermissions = document.getElementById("sandboxPermissions");
  elements.saveSearch = document.getElementById("saveSearch");
  elements.subscribeUpdates = document.getElementById("subscribeUpdates");
  elements.secondaryChips = Array.from(
    document.querySelectorAll(".secondary-nav .chip[data-secondary]")
  );
  elements.priceChips = Array.from(document.querySelectorAll(".secondary-nav .filters .chip"));
  elements.hints = Array.from(document.querySelectorAll(".search-hints .hint"));
  elements.workflowCanvas = document.getElementById("workflowCanvas");
  elements.workflowRun = document.getElementById("workflowRun");
  elements.workflowPublish = document.getElementById("workflowPublish");
  elements.workflowLogs = document.getElementById("workflowLogs");
  elements.workflowPalette = document.querySelector(".workflow-palette ul");
  elements.workflowTemplateButtons = Array.from(
    document.querySelectorAll(".palette-templates button")
  );
  elements.metricTrialRate = document.getElementById("metricTrialRate");
  elements.metricCheckoutRate = document.getElementById("metricCheckoutRate");
  elements.metricRefundRate = document.getElementById("metricRefundRate");
  elements.metricMRR = document.getElementById("metricMRR");
  elements.qualityStats = document.getElementById("qualityStats");
  elements.contentInsights = document.getElementById("contentInsights");
  elements.newLeaderboard = document.getElementById("newLeaderboard");
  elements.trendingLeaderboard = document.getElementById("trendingLeaderboard");
  elements.enterpriseLeaderboard = document.getElementById("enterpriseLeaderboard");
  elements.ratingLeaderboard = document.getElementById("ratingLeaderboard");

  bindEvents();
  renderAgents();
  updateComparePanel();
  updateAnalytics();
  renderLeaderboards();
}

document.addEventListener("DOMContentLoaded", init);

function bindEvents() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAgents();
  });

  elements.searchBtn.addEventListener("click", () => {
    state.query = elements.search.value;
    renderAgents();
    showToast("已根据关键词更新列表");
  });

  elements.hints.forEach((hint) => {
    hint.addEventListener("click", () => {
      const query = hint.dataset.query;
      elements.search.value = query;
      state.query = query;
      renderAgents();
    });
  });

  elements.filterForm.addEventListener("change", handleFilterChange);
  elements.filterForm.addEventListener("reset", (event) => {
    event.preventDefault();
    elements.filterForm.reset();
    state.filters = {
      price: "all",
      rating: 0,
      successRate: 0,
      updatedWithin: "all",
      model: "all",
      workflowOnly: false,
      permission: "all",
      enterpriseOnly: false,
      deployment: false,
    };
    renderAgents();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderAgents();
  });

  elements.clearCompare.addEventListener("click", () => {
    state.compare = [];
    document.querySelectorAll(".compare-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateComparePanel();
  });

  elements.saveSearch.addEventListener("click", () => {
    showToast("已保存当前检索条件");
  });

  elements.subscribeUpdates.addEventListener("click", () => {
    showToast("已订阅新品与价格变更通知");
  });

  elements.secondaryChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      elements.secondaryChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const mapping = {
        new: "latest",
        trending: "trending",
        top: "rating",
        enterprise: "enterprise_fit",
        workflow: "workflow",
      };
      const sort = mapping[chip.dataset.secondary];
      if (sort === "workflow") {
        state.filters.workflowOnly = true;
        elements.filterForm.querySelector("#workflowFilter").checked = true;
        state.sort = "relevance";
      } else {
        state.sort = sort;
      }
      elements.sortSelect.value = state.sort;
      renderAgents();
    });
  });

  elements.priceChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      elements.priceChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const price = chip.dataset.price;
      state.filters.price = price;
      elements.filterForm.querySelector("#priceFilter").value = price;
      renderAgents();
    });
  });

  elements.themeToggle.addEventListener("click", toggleTheme);

  elements.modalClose.addEventListener("click", closeModal);
  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modal.hasAttribute("hidden")) {
      closeModal();
    }
  });

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  elements.sandboxForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.currentAgent) return;
    runSandbox(state.currentAgent, elements.sandboxPrompt.value.trim());
  });

  elements.workflowRun.addEventListener("click", () => {
    logWorkflow("触发一次手动运行，预计耗时 45s");
    showToast("工作流运行已排队");
  });

  elements.workflowPublish.addEventListener("click", () => {
    logWorkflow("发布工作流版本 v" + new Date().toISOString().slice(11, 16));
    showToast("工作流版本发布成功");
  });

  elements.workflowPalette.querySelectorAll(".palette-item").forEach((item) => {
    item.addEventListener("dragstart", onDragStart);
  });

  elements.workflowCanvas.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  elements.workflowCanvas.addEventListener("drop", onDropNode);

  elements.workflowTemplateButtons.forEach((button) => {
    button.addEventListener("click", () => loadWorkflowTemplate(button.dataset.template));
  });
}

function handleFilterChange(event) {
  const form = event.currentTarget;
  state.filters = {
    price: form.price.value,
    rating: Number(form.rating.value),
    successRate: Number(form.successRate.value),
    updatedWithin: form.updatedWithin.value,
    model: form.model.value,
    workflowOnly: form.querySelector("#workflowFilter").checked,
    permission: form.permission.value,
    enterpriseOnly: form.querySelector("#enterpriseFilter").checked,
    deployment: form.querySelector("#deploymentFilter").checked,
  };
  renderAgents();
}

function renderAgents() {
  const filtered = applyFilters(agents, state);
  const sorted = applySort(filtered, state.sort, state.query);
  elements.agentResults.innerHTML = "";

  sorted.forEach((agent) => {
    const card = document.createElement("article");
    card.className = "agent-card";
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <header>
        <div>
          <h3>${agent.name}</h3>
          <p>${agent.summary}</p>
        </div>
      </header>
      <div class="metrics">
        <div><span>${agent.metrics.rating.toFixed(1)}</span>评分</div>
        <div><span>${agent.metrics.successRate}%</span>成功率</div>
        <div><span>${agent.metrics.avgLatency}s</span>平均耗时</div>
      </div>
      <div class="tags">
        ${agent.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="actions">
        <label class="compare-label"><input type="checkbox" class="compare-checkbox" data-agent="${
          agent.id
        }" ${state.compare.includes(agent.id) ? "checked" : ""}/> 对比</label>
        <button class="ghost-button try-btn" data-agent="${agent.id}">试跑</button>
        <button class="primary-button detail-btn" data-agent="${agent.id}">查看详情</button>
      </div>
      <div class="hover-preview">
        <p><strong>价格：</strong>${agent.price.label}</p>
        <p><strong>权限：</strong>${agent.permissions.level.toUpperCase()} · 风险 ${
      agent.permissions.risk
    }</p>
        <p><strong>近 7 天增长：</strong>${Math.round(agent.metrics.growth7d * 100)}%</p>
      </div>
    `;

    card.querySelector(".detail-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(agent, "overview");
    });

    card.querySelector(".try-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(agent, "sandbox");
    });

    card.addEventListener("click", () => openModal(agent, "overview"));

    card.querySelector(".compare-checkbox").addEventListener("change", (event) => {
      event.stopPropagation();
      toggleCompare(agent.id, event.target.checked);
    });

    elements.agentResults.appendChild(card);
  });

  elements.resultCount.textContent = `共 ${sorted.length} 个 Agent`;
}

function applyFilters(list, state) {
  const queryTokens = parseQuery(state.query);
  const now = new Date();

  return list.filter((agent) => {
    if (queryTokens.terms.length) {
      const text = [
        agent.name,
        agent.summary,
        agent.description,
        agent.categories.primary,
        agent.categories.secondary,
        agent.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matches = queryTokens.terms.every((term) => text.includes(term));
      if (!matches) return false;
    }

    if (queryTokens.filters.price && queryTokens.filters.price !== agent.price.type) {
      if (!(queryTokens.filters.price === "free" && agent.price.type === "free")) {
        return false;
      }
    }

    if (queryTokens.filters.model) {
      const match = agent.models.some((model) =>
        model.provider.toLowerCase().includes(queryTokens.filters.model)
      );
      if (!match) return false;
    }

    if (queryTokens.filters.risk) {
      if (agent.permissions.risk !== queryTokens.filters.risk) return false;
    }

    if (queryTokens.filters.tag) {
      if (!agent.tags.some((tag) => tag.toLowerCase().includes(queryTokens.filters.tag))) {
        return false;
      }
    }

    if (state.filters.price !== "all") {
      if (agent.price.type !== state.filters.price) {
        return false;
      }
    }

    if (state.filters.rating && agent.metrics.rating < state.filters.rating) {
      return false;
    }

    if (state.filters.successRate && agent.metrics.successRate < state.filters.successRate) {
      return false;
    }

    if (state.filters.updatedWithin !== "all") {
      const diffDays = (now - new Date(agent.updatedAt)) / (1000 * 60 * 60 * 24);
      if (diffDays > Number(state.filters.updatedWithin)) {
        return false;
      }
    }

    if (state.filters.model !== "all") {
      const match = agent.models.some((model) =>
        model.provider.toLowerCase().includes(state.filters.model)
      );
      if (!match) return false;
    }

    if (state.filters.workflowOnly && !agent.workflowSupport) {
      return false;
    }

    if (state.filters.permission !== "all") {
      const map = { low: "low", medium: "medium", high: "high" };
      if (agent.permissions.level !== map[state.filters.permission]) {
        return false;
      }
    }

    if (state.filters.enterpriseOnly && !agent.enterprise) {
      return false;
    }

    if (state.filters.deployment && !agent.deployment.includes("self_hosted")) {
      return false;
    }

    return true;
  });
}

function parseQuery(query) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const result = { terms: [], filters: {} };
  tokens.forEach((token) => {
    if (token.includes(":")) {
      const [key, value] = token.split(":");
      if (value) {
        result.filters[key] = value;
      }
    } else {
      result.terms.push(token);
    }
  });
  return result;
}

function applySort(list, sortKey, query) {
  const queryTokens = parseQuery(query);
  const withScore = list.map((agent) => {
    const baseScore =
      0.35 * textRelevance(agent, queryTokens.terms) +
      0.25 * agent.metrics.trend +
      0.2 * (agent.metrics.successRate / 100) +
      0.1 * agent.metrics.freshness +
      0.1 * agent.metrics.enterpriseFit;
    return { agent, baseScore };
  });

  const sorted = withScore.sort((a, b) => {
    switch (sortKey) {
      case "trending":
        return b.agent.metrics.trend - a.agent.metrics.trend;
      case "growth":
        return b.agent.metrics.growth7d - a.agent.metrics.growth7d;
      case "rating":
        return b.agent.metrics.rating - a.agent.metrics.rating;
      case "latest":
        return new Date(b.agent.updatedAt) - new Date(a.agent.updatedAt);
      case "enterprise_fit":
        return b.agent.metrics.enterpriseFit - a.agent.metrics.enterpriseFit;
      default:
        return b.baseScore - a.baseScore;
    }
  });

  return sorted.map((item) => item.agent);
}

function textRelevance(agent, terms) {
  if (!terms.length) return 1;
  const text = [agent.name, agent.summary, agent.description, agent.tags.join(" ")]
    .join(" ")
    .toLowerCase();
  let hits = 0;
  terms.forEach((term) => {
    if (text.includes(term)) hits += 1;
  });
  return hits / terms.length || 0.2;
}

function toggleCompare(agentId, checked) {
  if (checked) {
    if (state.compare.length >= 3) {
      showToast("最多可对比 3 个 Agent");
      const checkbox = document.querySelector(`.compare-checkbox[data-agent="${agentId}"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
    if (!state.compare.includes(agentId)) {
      state.compare.push(agentId);
    }
  } else {
    state.compare = state.compare.filter((id) => id !== agentId);
  }
  updateComparePanel();
}

function updateComparePanel() {
  const slots = [null, null, null];
  state.compare.forEach((id, index) => {
    slots[index] = agents.find((agent) => agent.id === id) || null;
  });

  const rows = [
    { label: "名称", value: (agent) => agent?.name || "-" },
    { label: "价格", value: (agent) => agent?.price.label || "-" },
    { label: "评分", value: (agent) => (agent ? agent.metrics.rating.toFixed(1) : "-") },
    { label: "成功率", value: (agent) => (agent ? `${agent.metrics.successRate}%` : "-") },
    { label: "月活", value: (agent) => (agent ? agent.metrics.mau : "-") },
    { label: "权限", value: (agent) => (agent ? agent.permissions.level.toUpperCase() : "-") },
    { label: "风险", value: (agent) => (agent ? agent.permissions.risk : "-") },
    { label: "支持工作流", value: (agent) => (agent ? (agent.workflowSupport ? "是" : "否") : "-") },
  ];

  elements.compareBody.innerHTML = rows
    .map((row) => {
      const cells = slots
        .map((agent) => `<td>${row.value(agent)}</td>`)
        .join("");
      return `<tr><th scope="row">${row.label}</th>${cells}</tr>`;
    })
    .join("");

  elements.compareHint.textContent = state.compare.length
    ? `已选择 ${state.compare.length} 个 Agent`
    : "可勾选 ≤ 3 个 Agent 对比关键指标。";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  elements.themeToggle.textContent = isDark ? "☀️" : "🌙";
}

function openModal(agent, tab) {
  state.currentAgent = agent;
  switchTab(tab || "overview");
  elements.modalTitle.textContent = agent.name;
  elements.modalSubtitle.textContent = `${agent.categories.primary} · ${agent.categories.secondary}`;
  elements.modalDescription.textContent = agent.description;
  elements.modalCompliance.textContent = agent.compliance;
  elements.modalPricing.textContent = agent.price.label;
  elements.modalDeveloper.textContent = agent.developer;
  elements.modalRating.textContent = agent.metrics.rating.toFixed(1);
  elements.modalSuccess.textContent = `${agent.metrics.successRate}%`;
  elements.modalLatency.textContent = `${agent.metrics.avgLatency}s`;

  elements.modalPermissions.innerHTML = `
    <li>权限级别：${agent.permissions.level.toUpperCase()}</li>
    <li>外呼：${agent.permissions.outbound.join(", ")}</li>
    <li>数据范围：${agent.permissions.data.join(", ")}</li>
    <li>Scopes：${agent.permissions.scopes.join(", ")}</li>
  `;

  elements.modalVersions.innerHTML = agent.versions
    .map(
      (version) => `
        <li>
          <strong>${version.version}</strong>
          ${version.current ? '<span class="badge">当前</span>' : ""}
          <p>${version.changelog}</p>
        </li>
      `
    )
    .join("");

  if (agent.reviews.length) {
    elements.modalReviews.innerHTML = agent.reviews
      .map((review) => `
        <article class="review-card">
          <h4>${review.user}</h4>
          <p>效果 ${review.ratings.effectiveness} · 稳定 ${review.ratings.stability} · 速度 ${review.ratings.speed} · 文档 ${review.ratings.docs}</p>
          <p>${review.comment}</p>
          <small>${review.createdAt}</small>
        </article>
      `)
      .join("");
  } else {
    elements.modalReviews.innerHTML = "<p>暂无评价，欢迎成为首位体验者。</p>";
  }

  elements.sandboxQuota.textContent = agent.sandbox.quota;
  elements.sandboxPermissions.textContent = agent.sandbox.permissions;
  elements.sandboxPrompt.value = "";
  elements.sandboxResult.textContent = "等待运行...";
  elements.sandboxLogs.textContent = "";

  elements.modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modal.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

function switchTab(tab) {
  state.currentTab = tab;
  elements.tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  elements.tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tab}`);
  });
}

function runSandbox(agent, prompt) {
  if (!prompt) {
    showToast("请输入 Prompt 再试跑");
    return;
  }
  elements.sandboxResult.textContent = "运行中...";
  elements.sandboxLogs.textContent = "";
  const start = Date.now();
  const logs = [];
  logs.push(`[${new Date().toLocaleTimeString()}] 接收试跑请求`);
  logs.push(`[沙箱] 权限模拟：${agent.permissions.outbound.join(", ")}`);
  setTimeout(() => {
    logs.push(`[${new Date().toLocaleTimeString()}] 模型响应耗时 ${(
      Date.now() - start
    ).toFixed(0)}ms`);
    logs.push("完成并返回结构化结果");
    const nextStep = agent.workflowSupport ? "可加入工作流节点" : "适合单次调用";
    const result = `【试跑结果】\nAgent：${agent.name}\n输入摘要：${prompt.slice(
      0,
      120
    )}\n建议下一步：${nextStep}`;
    elements.sandboxResult.textContent = result;
    elements.sandboxLogs.textContent = logs.join("\n");
  }, 600 + Math.random() * 600);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.removeAttribute("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.setAttribute("hidden", "");
  }, 2800);
}

function onDragStart(event) {
  event.dataTransfer.setData(
    "application/json",
    JSON.stringify({ label: event.target.textContent.trim(), type: event.target.dataset.type })
  );
}

function onDropNode(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("application/json");
  if (!data) return;
  const payload = JSON.parse(data);
  addWorkflowNode(payload);
}

function addWorkflowNode(payload) {
  const placeholder = elements.workflowCanvas.querySelector(".canvas-placeholder");
  if (placeholder) placeholder.remove();
  const node = document.createElement("div");
  node.className = "workflow-node";
  node.innerHTML = `
    <header>${payload.label}</header>
    <p>类型：${payload.type}</p>
    <button type="button" class="ghost-button remove-node">移除</button>
  `;
  node.querySelector(".remove-node").addEventListener("click", () => {
    node.remove();
    if (!elements.workflowCanvas.querySelector(".workflow-node")) {
      const placeholder = document.createElement("p");
      placeholder.className = "canvas-placeholder";
      placeholder.textContent = "将节点拖拽到此处开始编排";
      elements.workflowCanvas.appendChild(placeholder);
    }
  });
  elements.workflowCanvas.appendChild(node);
  logWorkflow(`新增节点：${payload.label}`);
}

function loadWorkflowTemplate(template) {
  elements.workflowCanvas.innerHTML = "";
  const templateNodes = {
    content: [
      { label: "Webhook 触发", type: "trigger" },
      { label: "营销内容生成 Agent", type: "agent" },
      { label: "Google Sheets 工具", type: "tool" },
      { label: "Slack 通知", type: "tool" },
    ],
    support: [
      { label: "Webhook 触发", type: "trigger" },
      { label: "客服多语言 Agent", type: "agent" },
      { label: "Zendesk 工单更新", type: "tool" },
      { label: "Slack 通知", type: "tool" },
    ],
    analytics: [
      { label: "定时触发", type: "trigger" },
      { label: "自动化报表 Agent", type: "agent" },
      { label: "Tableau 推送", type: "tool" },
    ],
  };
  const nodes = templateNodes[template] || [];
  if (!nodes.length) return;
  nodes.forEach(addWorkflowNode);
  showToast("已载入模板，可继续增删节点");
}

function logWorkflow(message) {
  const item = document.createElement("li");
  item.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  elements.workflowLogs.prepend(item);
}

function updateAnalytics() {
  const totals = agents.reduce(
    (acc, agent) => {
      acc.trials += agent.stats.trialConversion;
      acc.checkout += agent.stats.checkoutConversion;
      acc.refund += agent.stats.refundRate;
      acc.mrr += agent.stats.mrr;
      agent.quality.failureReasons.forEach((reason) => acc.failureReasons.add(reason));
      return acc;
    },
    { trials: 0, checkout: 0, refund: 0, mrr: 0, failureReasons: new Set() }
  );
  const count = agents.length;
  elements.metricTrialRate.textContent = `${((totals.trials / count) * 100).toFixed(1)}%`;
  elements.metricCheckoutRate.textContent = `${((totals.checkout / count) * 100).toFixed(1)}%`;
  elements.metricRefundRate.textContent = `${((totals.refund / count) * 100).toFixed(1)}%`;
  elements.metricMRR.textContent = `¥${(totals.mrr / 1000).toFixed(1)}k`;

  elements.qualityStats.innerHTML = agents
    .map(
      (agent) => `
        <li><strong>${agent.name}</strong>：成功率 ${agent.metrics.successRate}% · 失败原因 Top：${agent.quality.failureReasons.join(
        " / "
      )} · 依赖：${agent.quality.dependencyStatus}</li>
      `
    )
    .join("");

  const categoryMap = new Map();
  agents.forEach((agent) => {
    const key = agent.categories.primary;
    categoryMap.set(key, (categoryMap.get(key) || 0) + 1);
  });
  elements.contentInsights.innerHTML = Array.from(categoryMap.entries())
    .map(([category, count]) => `<li>${category} · ${count} 个 Agent</li>`)
    .join("");
}

function renderLeaderboards() {
  const newest = [...agents]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);
  const trending = [...agents].sort((a, b) => b.metrics.trend - a.metrics.trend).slice(0, 5);
  const enterprise = agents
    .filter((agent) => agent.enterprise)
    .sort((a, b) => b.metrics.enterpriseFit - a.metrics.enterpriseFit)
    .slice(0, 5);
  const rating = [...agents].sort((a, b) => b.metrics.rating - a.metrics.rating).slice(0, 5);

  elements.newLeaderboard.innerHTML = newest
    .map((agent) => `<li>${agent.name} · 更新 ${agent.updatedAt}</li>`)
    .join("");
  elements.trendingLeaderboard.innerHTML = trending
    .map((agent) => `<li>${agent.name} · 趋势 ${Math.round(agent.metrics.trend * 100)}%</li>`)
    .join("");
  elements.enterpriseLeaderboard.innerHTML = enterprise
    .map((agent) => `<li>${agent.name} · 权限 ${agent.permissions.level.toUpperCase()}</li>`)
    .join("");
  elements.ratingLeaderboard.innerHTML = rating
    .map((agent) => `<li>${agent.name} · 评分 ${agent.metrics.rating.toFixed(1)}</li>`)
    .join("");
}
