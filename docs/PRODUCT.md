# Product

## Product Definition

TRACE is an AI adoption platform in development. It helps a user move from a goal to a saved, reviewable result without requiring the user to assemble models, agents, tools, and workflow infrastructure first.

The current RC candidate is best understood as a personal AI work environment with four primary surfaces: Chat, Workspace, Apps, and Account.

## The User Problem

AI tools can answer questions, but work usually continues beyond the first response. Users need to provide files, connect services, review a plan, approve sensitive actions, keep intermediate state, find previous results, and resume later.

When each concern lives in a different tool, AI adoption becomes an integration project. TRACE brings those concerns into one product flow.

## Current User Flow

1. The user describes a goal in Chat.
2. TRACE clarifies missing information and selects an available work path.
3. If the task needs a file, service connection, or approval, TRACE asks for that specific input.
4. The work runs through a bounded task graph.
5. The result returns to the conversation and is saved to Workspace.
6. Relevant context, artifacts, and execution history remain available for follow-up work.

## Current Work Areas

The latest source candidate contains work paths for:

- Document extraction and analysis.
- Public-source research.
- Market analysis and read-only financial context.
- Account-owned Gmail and Telegram workflows.
- GitHub project monitoring.
- Scheduled research, portfolio monitoring, and daily work summaries.
- Artifact generation and proof recap.

These work areas do not all have the same readiness. Connection-dependent and scheduled workflows still require clean RC promotion and authenticated product validation.

## Product Boundary

TRACE currently emphasizes analysis, organization, reviewable results, and bounded automation. It does not claim autonomous trading, wallet mutation, active payment processing, production robot control, or a completed public rollout of the latest candidate.

## Public Evidence

- Product flow and architecture diagrams in `assets/`.
- Implementation status in `docs/CURRENT_MAINLINE_STATUS.md`.
- Source/showcase comparison in `docs/TRACE_SYNCHRONIZATION_REPORT.md`.
- Claim boundaries in `docs/WHAT_THIS_DOES_NOT_CLAIM.md`.
