# Engineering Decisions

## Make Work The Product Boundary

The primary product surfaces are Chat, Workspace, Apps, and Account. Historical dashboards and runtime pages remain implementation or owner concerns rather than default navigation.

## Keep Account Ownership Separate From Connections

The TRACE Account owns work, memory, artifacts, and history. Wallets, exchanges, Gmail, Telegram, GitHub, and other services are replaceable connections. Disconnecting a service should not change the owner of previous work.

## Treat Apps As Outcomes, Not Metadata

An App is usable only when its account, connection, adapter, permission, and persistence path are resolvable. A registry entry or source file does not qualify as a completed capability.

## Preserve Work Before Expanding Autonomy

The candidate prioritizes workspace continuity, artifacts, memory, and execution history before higher-consequence automation. This makes failures inspectable and follow-up work possible.

## Stop At Explicit Boundaries

Missing connections, unhealthy providers, permission requirements, and consequential actions produce visible blockers or approval requests. The product must not convert uncertainty into a success message.

## Compose Existing Kernels

TRACE uses established libraries and adapters where they already solve the underlying problem: assistant-ui for conversation UI, LangGraph for workflow orchestration, CCXT for market abstraction, WalletConnect/Reown for wallet sessions, and AgentKit for approval-gated execution boundaries.

## Separate Candidate Code From Deployment Claims

Source implementation, automated tests, RC promotion, authenticated browser UAT, and public production are different evidence levels. Public copy names the level being described.
