# Current Mainline Status

This note keeps the public TRACE story aligned with current evidence without exposing private infrastructure, runtime code, deployment details, secrets, or RC1 internals.

## Public-Safe Direction

TRACE is moving toward a Chat-first AI Agent Operating System.

The public-safe architecture is:

```text
Conversation
  -> Planner
  -> LangGraph Runtime
  -> Capability Router
  -> OSS Kernels
  -> Skills
  -> Memory
  -> Proof
  -> Conversation
```

The goal is not to turn TRACE into another dashboard, exchange UI, or architecture-document collection. Conversation is the operating surface. The runtime composes existing kernels and private infrastructure capabilities behind that surface.

## OSS Kernels Mentioned Publicly

- `assistant-ui` for the conversation UI direction.
- LangGraph for runtime, planning, and workflow orchestration.
- CCXT for exchange / market data abstraction.
- WalletConnect / Reown for wallet session boundaries.
- AgentKit for an approval-gated execution provider.
- VPS-E-style durable memory / proof concept, without hostnames, IPs, topology, or private endpoint details.
- Windows I5 as an engineering workstation / control point, without private network details.

## Completed

- Public-safe TRACE AI Platform showcase exists.
- LangGraph is activated in the RC1 chat runtime path.
- CCXT exchange kernel has been promoted as an OSS kernel direction.
- WalletConnect / Reown wallet session kernel has been promoted as a wallet-boundary kernel direction.
- AgentKit execution provider has been promoted with a human approval boundary.
- Windows I5 SSH bastion was repaired and verified as an engineering control point.
- Existing OSS kernels were found across the Windows I5 and VPS ecosystem.
- Windows I5 / VPS capability recovery direction is documented here only as public-safe architecture.

## In Progress

- Capability Router.
- Kernel Composer.
- BoxyHQ membership integration.
- RIG persona integration.
- mem0 / VPS-E memory consolidation decision.
- Public site promotion.
- Continuing the shift from hand-built RC1 surfaces toward OSS-kernel-backed Agent OS composition.

## Current Product Boundary

- RC1 remains an integration lab.
- `c-chain.org` production remains public/stable and should not be described as fully replaced.
- TRACE direction is Chat-first Agent OS, not dashboard-first product, exchange-first product, or random architecture pages.

## Not Claimed

- Finished trading execution.
- Autonomous wallet mutation.
- Completed GO2 ROS2 integration.
- Production robotics deployment.
- Low-altitude logistics deployment.
- Public site fully replaced.
- Production users, revenue, TVL, uptime, security audit, filed patent, or granted patent.
