# Agent 开发规范

## 总体目标
- 构建一个现代化、可维护且具有拓展性的网页应用。
- 将易用性、性能和可测试性作为核心指标。
- 在整个开发过程中保持良好的协作与知识沉淀。

## 技术栈约定
- **语言**：TypeScript 为默认语言，避免使用裸 JavaScript。
- **构建工具**：优先使用 Vite + pnpm；如需调整需提前在技术例会上评审。
- **框架**：前端默认使用 React 18 + React Router；后端 API 如有需要优先考虑基于 Node.js（NestJS/Express）。
- **样式**：采用 Tailwind CSS 或 CSS Modules，禁止在生产代码中直接书写全局样式覆盖。
- **状态管理**：优先使用 React Query 处理异步数据，局部状态使用 React 内置状态或 Zustand。

## 分支与版本控制
1. 主分支 (`main`) 保持随时可发布状态。
2. 功能开发在 `feature/<issue-编号>-<描述>` 分支完成；Bug 修复使用 `fix/<issue-编号>-<描述>`。
3. 严格使用 [Conventional Commits](https://www.conventionalcommits.org/) 编写提交信息，例如：
   ```
   feat(ui): add breadcrumb navigation for dashboard
   fix(api): correct pagination parameter validation
   ```
4. 合并采用 squash merge；合并前必须通过全部自动化检查。

## 需求与任务流程
1. 为每个需求创建 Issue，描述背景、目标、验收标准以及非功能性要求。
2. Product/Design 在 Figma/PRD 中明确用户流程，并在 Issue 中附带链接。
3. 开发接手任务前需完成：
   - 技术评审：拆分为可交付的子任务，识别风险点；
   - 估算人日并更新到 Issue。
4. 开发过程中保持 Issue 状态同步（`Todo → In Progress → In Review → Done`）。
5. 每日 stand-up 更新个人进度与阻塞项。

## Pull Request 规范
- PR 模板：
  1. **背景**：链接相关 Issue，概述变更。
  2. **变更点**：分条列出功能、性能、重构等内容。
  3. **测试结果**：列出运行过的命令与截图（如涉及 UI）。
  4. **风险与回滚策略**：描述潜在影响以及回滚步骤。
- PR 必须至少获得一名同级开发与一名 QA 的 Approve。
- 代码评审关注点：
  - 是否满足设计与业务需求；
  - 是否有充分的错误处理与空状态；
  - 是否具备测试覆盖；
  - 是否遵守编码规范与项目结构。

## 代码结构与组件范式
1. **目录结构**：
   ```
   src/
     api/          # 与后端交互的请求封装
     app/          # 路由、布局与全局配置
     components/   # 可复用基础组件
     features/     # 按业务域划分的功能模块
     hooks/        # 自定义 Hooks
     stores/       # 状态管理
     utils/        # 工具函数
     styles/       # 全局样式、Tailwind 配置
   ```
2. **组件设计原则**：
   - 遵循原子化设计（Atoms → Molecules → Organisms → Templates → Pages）。
   - 组件必须支持可访问性（ARIA 属性、键盘导航、语义标签）。
   - Props 需强类型定义，避免使用 `any`。
   - 组件逻辑复杂时拆分为 UI 组件与容器组件。
   - 内部状态对外暴露事件，避免直接操作 DOM。
3. **Hook 约定**：
   - Hook 以 `use` 开头，描述行为（如 `useFetchUsers`）。
   - Hook 内部负责缓存、错误处理与 loading 状态；对外返回明确的数据结构。

## 数据与网络层
- 所有 API 请求使用统一的 `apiClient` 封装，内置错误拦截、鉴权与重试机制。
- 请求与响应类型必须通过 TypeScript 接口定义。
- 对关键接口（登录、支付等）编写契约测试，确保前后端同步。
- 请求失败需提供用户可理解的提示，同时记录到监控系统。

## 状态与副作用管理
- React Query：
  - 使用 `queryKey` 模型化数据结构，禁止在组件中手写字符串。
  - Mutation 完成后显式地 `invalidateQueries`。
- 全局状态（如用户 Session、主题等）放置在 `stores/`，配合 Zustand 的 `immer` 中间件确保不可变数据。
- 副作用（事件监听、定时器）需在 `useEffect` 中正确清理。

## 样式与设计规范
- Tailwind：编写类名时遵循 `结构 → 视觉 → 状态` 的排列方式，例如 `flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900`。
- 自定义样式统一放在 `styles/variables.css`，通过 CSS 变量管理颜色、间距、字体。
- 深浅主题支持通过 `data-theme` 属性切换，组件需兼容。
- 所有组件必须提供移动端适配，优先设计移动端布局。

## 文档与知识沉淀
- 每个业务模块在 `docs/` 下建立同名目录，记录：架构图、数据流、接口说明、测试策略。
- 复杂功能需撰写 ADR（Architecture Decision Record），格式遵循 `docs/adr/YYYYMMDD-<title>.md`。
- README 需始终保持最新的启动说明与依赖。

## 测试策略
- 单元测试：使用 Vitest + Testing Library，覆盖率目标 ≥ 80%。
- 端到端测试：使用 Playwright，至少覆盖关键用户路径（登录、下单、支付等）。
- 可视化回归：对关键页面使用 Percy/Screener 做视觉 Diff。
- 提交前运行 `pnpm lint && pnpm test`，CI 中增加 `pnpm build` 校验。

## 质量保障与监控
- 生产环境开启 Sentry 监控；异常需有告警通知到 Slack `#alert` 频道。
- 前端埋点采用自研 SDK，记录核心行为（PV、点击、异常）。
- Lighthouse 性能得分需 ≥ 90；如低于此值需在 PR 中说明原因和优化计划。

## 发布与回滚
1. 合并到 `main` 后自动触发 CI/CD，部署到 Staging。
2. QA 在 Staging 完成验收后手动触发生产部署。
3. 部署使用滚动更新，保持零停机；如出现重大问题，可通过回滚到上一个发布版本。
4. 发布说明需记录在 `docs/releases/<version>.md`，包括改动列表和已知问题。

## 沟通与协作
- 需求变更必须在每日同步会或专门的设计评审中确认，避免私下改动。
- 重要决策在 Slack 中使用线程讨论并整理到 Wiki。
- 鼓励 Pair Programming 与 Code Review 轮换，促进知识共享。

## 安全与合规
- 所有第三方依赖需通过 License 审核。
- 对用户数据进行最小化采集与脱敏展示，遵守 GDPR/隐私政策。
- 定期运行安全扫描（`pnpm audit`, `npm audit` 替代）并及时修复高危漏洞。

## 附录
- 模板
  - Issue 模板：`docs/templates/issue.md`
  - PR 模板：`docs/templates/pr.md`
  - ADR 模板：`docs/templates/adr.md`
- 常用命令
  ```bash
  pnpm install
  pnpm dev
  pnpm lint
  pnpm test
  pnpm build
  ```
