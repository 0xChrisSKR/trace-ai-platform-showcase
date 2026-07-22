# Architecture

TRACE is designed around a simple product promise: start with a goal, use the right connected capability, preserve the work, and make the result reviewable.

![TRACE architecture](../assets/architecture.png)

## Product Layer

| Surface | Responsibility |
| --- | --- |
| Chat | Capture intent, clarify requirements, show progress, and return results |
| Workspace | Preserve current work, tasks, artifacts, memory, and history |
| Apps | Show usable capabilities, connection requirements, and lifecycle state |
| Account | Own identity, permissions, plans, sessions, and external connections |

The product is intentionally smaller than the underlying route inventory. Historical dashboards and implementation-oriented pages are not the default user journey.

## Orchestration Layer

The implementation converts a conversation into bounded work through:

1. Intent and entity understanding.
2. Workflow planning and task-graph selection.
3. Account, connection, and capability resolution.
4. Human approval when a consequential action is requested.
5. Adapter-based execution.
6. Result, memory, artifact, and execution-history persistence.

LangGraph is used in the orchestration path. A Kernel Composer and capability routing layer coordinate workflows without exposing those implementation concepts in the primary UI.

## App And Integration Layer

Apps represent work users recognize: document analysis, research, market analysis, Gmail work, Telegram channels, GitHub monitoring, portfolio review, wallet observation, and scheduled briefs.

Each App may require one or more of the following:

- An authenticated TRACE Account.
- An external service connection.
- A healthy data source or runtime adapter.
- Explicit permission or approval.
- A workspace where the result can be saved.

Registry presence alone is not treated as a usable App.

## Continuity Layer

TRACE keeps four forms of continuity:

- **Workspace:** the current task and conversation context.
- **Memory:** reusable facts and preferences associated with the account.
- **Artifacts:** outputs that can be opened and reused.
- **Execution history:** a reviewable record of what happened and what was blocked.

## Public-Safe Deployment View

![TRACE deployment view](../assets/deployment.png)

The public diagram intentionally shows service roles rather than hosts, IP addresses, process names, credentials, or private topology.

## Safety Invariants

- The TRACE Account owns work; wallets and external services are replaceable connections.
- Missing setup or unhealthy dependencies produce a visible blocker, not a success state.
- Wallet and exchange analysis remain read-only unless a separate, approved execution path is explicitly validated.
- Secrets and provider details are not displayed in public surfaces.
- Candidate implementation is not described as deployed production behavior without promotion evidence.

## Current Technology

The inspected RC candidate includes TypeScript, Next.js, React, assistant-ui, LangGraph, CCXT, WalletConnect/Reown, AgentKit, Supabase, Prisma, structured schemas, and adapter-based service integrations.
