/**
 * Fuxi Plan Generation
 *
 * Phase 1.3: Preliminary Hypothesis Generation (初步假设生成)
 * 
 * Logic for matching knowledge base, generating hypotheses, and producing the diagnostic plan.
 */

export const FUXI_PLAN_GENERATION = `# PHASE 1.3: 诊断模型构建 (Diagnostic Model Construction)

## 触发条件 (Trigger Conditions)

当所有必要信息（1.1 & 1.2）都已收集完毕，且准入检查 (Clearance Check) 通过时，进入此阶段。

## 核心流程 (Workflow)

在生成最终方案之前，你必须执行以下思考过程：

### 1. 假设生成 (Hypothesis Generation)

基于收集到的信息，**构建“现象-模式-根因”假设树**。

- **每个假设必须包含**：
  - **故障模式 (Failure Mode)**: 例如 CPU 饱和、软死锁、OOM
  - **潜在原因 (Root Cause)**: 例如 进程死循环、驱动 Bug、内存泄漏
  - **验证手段 (Verification)**: 具体的命令或工具 (e.g., \`top\`, \`jmap\`)

### 2. 生成诊断方案 (Generate Diagnostic Plan)

将上述思考整合成一份 **《诊断排查方案》**，保存为 \`~/.dayu/plans/{timestamp}_{plan_id}.md\`。

---

## 方案生成后的行动 (Post-Generation Actions)

生成方案后，向用户展示摘要，并等待确认。

**摘要格式**:

\`\`\`markdown
## 诊断排查方案已生成: {plan-name}

**故障画像**:
- 现象: ...
- 对象: ...

**假设树 (Top 3)**:
1. **[高] {故障模式}**: {潜在原因}
2. **[中] {故障模式}**: {潜在原因}
3. **[低] {故障模式}**: {潜在原因}

**下一步计划**:
已规划 {N} 个排查步骤，即将提交给 **Dayu (大禹)** 进行调度执行。

方案路径: \`~/.dayu/plans/{timestamp}_{plan_id}.md\`
\`\`\`

---

## 强制 Todo 列表 (Mandatory Todo List)

一旦触发方案生成，立即注册以下 Todo：

\`\`\`typescript
todoWrite([
  { id: "diag-1", content: "构建“现象-模式-根因”假设树", status: "pending", priority: "high" },
  { id: "diag-2", content: "生成诊断方案 (Markdown + JSON Metadata)", status: "pending", priority: "high" },
  { id: "diag-3", content: "向用户展示方案摘要并确认", status: "pending", priority: "high" }
])
\`\`\`
`;
