# TRACE

[![CI](https://github.com/0xChrisSKR/trace-ai-platform-showcase/actions/workflows/ci.yml/badge.svg)](https://github.com/0xChrisSKR/trace-ai-platform-showcase/actions/workflows/ci.yml)
![Release](https://img.shields.io/badge/Release-RC3D%20validated-22c55e?style=flat-square)
![Focus](https://img.shields.io/badge/Focus-Persistent%20AI%20Workspace-3b82f6?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-TypeScript%20%7C%20Next.js-111827?style=flat-square)

![TRACE RC3D goal-first home](assets/screenshots/rc3d-goal-home-desktop.png)

## 1. Introduction

TRACE is a persistent AI workspace for turning goals into organized, reviewable work. Instead of ending at a chat response, it connects a goal to the Apps, capabilities, permissions, memory, activity, and next actions needed to continue the work over time.

This repository is the public engineering showcase for TRACE. It contains product screenshots, public-safe architecture, release history, and technical decisions. The private implementation, credentials, deployment topology, and production configuration are intentionally excluded.

**Validated source:** RC3D Workspace Engine at `28ee0684`, reviewed on 2026-07-22.

## 2. Why TRACE

AI adoption becomes difficult when users must choose models, assemble tools, manage prompts, reconnect context, and decide which outputs are trustworthy. TRACE moves that integration burden into the product:

- Start with the outcome the user wants.
- Recommend a suitable way to begin.
- Show the Apps, connections, and permissions involved before setup.
- Keep tasks, results, memory, and activity inside one workspace.
- Resume or extend existing work instead of starting over.
- Surface blockers when a required connection or approval is missing.

## 3. Product Vision

TRACE is designed as an AI adoption platform where people describe work in ordinary language and receive a durable workspace that can continue across sessions, Apps, and execution paths.

The product is not positioned as a chatbot or a GPT wrapper. Conversation is the entry point; the workspace is the operating context.

## 4. Core Features

| Capability | What it gives the user | RC3D status |
| --- | --- | --- |
| Goal Engine | Interprets an outcome and recommends a suitable solution | Validated |
| Persistent Workspace | Reopens or extends account-owned work without duplicating stores | Validated |
| Apps | Packages recognizable work with lifecycle and readiness states | Validated |
| Capabilities | Connects Apps to bounded execution paths | Validated foundation |
| Permissions | Requires explicit confirmation before installation or change | Validated |
| Connections | Shows connected, optional, or required resources | Validated projection |
| Memory | Preserves starting context and reusable workspace knowledge | Validated workspace path |
| Activity Timeline | Records workspace creation, extension, and recent progress | Validated |
| Recommendations | Keeps a next step attached to the active workspace | Validated |
| Responsive Product UI | Supports desktop and mobile product flows | UAT passed |

Full detail: [Feature Matrix](docs/FEATURE_MATRIX.md)

## 5. RC3D Workspace Engine

RC3D closes the gap between a one-time AI response and continuing work.

When a user selects a recommended solution, TRACE can create an account-owned workspace containing:

- the original goal and workspace type;
- the Apps and capabilities required for that goal;
- starter tasks and saved results;
- required or optional connections;
- permission boundaries;
- workspace memory and operating context;
- recent activity and next-step recommendations.

The engine can reopen an existing workspace or extend it with another solution while preserving the same owner and store. That continuity is the central RC3D contribution.

Engineering validation completed for deployment, production build, TypeScript, acceptance, regression, desktop UAT, mobile UAT, authenticated UAT, and guest UAT. The repository retains a legacy ESLint baseline of 354 findings; RC3D introduced zero new lint errors.

Technical review: [RC3D Workspace Engine](docs/RC3D_WORKSPACE_ENGINE.md)

## 6. Product Architecture

![TRACE RC3D system overview](assets/architecture/rc3d-system-overview.png)

The recruiter-level product model is:

```text
Goal
  -> Workspace
  -> Capabilities
  -> Apps
  -> Memory
  -> Timeline
  -> Recommendations
  -> Execution
```

The implementation separates product experience, workspace state, orchestration, and execution boundaries. This allows the UI to stay goal-focused while the underlying system resolves Apps, permissions, connections, and runtime capabilities.

Architecture review: [Product Architecture](docs/ARCHITECTURE.md)

## 7. Screenshots

### Goal-first product entry

![TRACE goal-first home](assets/screenshots/rc3d-goal-home-desktop.png)

### Solution recommendation before workspace creation

![TRACE company operations recommendation](assets/screenshots/rc3d-solution-recommendation-desktop.png)

The screenshots were captured from a production build of the validated RC3D commit. The product copy is shown in Traditional Chinese because that is the current verified interface.

## 8. Technical Highlights

- **Persistent state model:** workspace profile, tasks, results, memory, context, activity, and recommendations share one account-owned workspace identity.
- **Goal-first orchestration:** the Goal Engine resolves a solution before the system asks the user to install or configure anything.
- **Manifest-based product layer:** Apps and Solutions declare the capabilities, resources, permissions, starter tasks, and workspace type they require.
- **Safe extension:** an existing workspace can be continued or extended without creating a competing state store.
- **Explicit failure boundaries:** missing devices, connections, permissions, or adapters return a blocker instead of simulated success.
- **Hybrid AI boundary:** inference is treated as a replaceable account-owned resource; provider choice does not redefine workspace ownership or product flow.
- **Responsive system:** desktop and mobile share the same product hierarchy and state model.

## 9. AI Adoption

TRACE treats AI adoption as a workflow design problem, not a model-selection problem. The system hides internal runtime vocabulary and presents a smaller set of user concepts: goal, recommendation, workspace, App, connection, task, result, and next step.

For enterprise use, this matters because AI work must remain understandable, permission-aware, and resumable even when the underlying model or execution provider changes.

More context: [AI Adoption Model](docs/AI_ADOPTION.md)

## 10. Roadmap

**Completed in RC3A-RC3D**

- App product layer and safe package lifecycle.
- Product experience and responsive design system.
- Goal-first solution recommendation and setup preview.
- Persistent workspace creation, reopening, and extension.

**Next validation direction**

- Broaden solution coverage without weakening capability readiness checks.
- Continue workspace state across more verified execution paths.
- Consolidate hybrid inference and durable memory choices behind one product boundary.
- Promote the validated experience only when public-site parity is confirmed.

See [Release Showcase](docs/RELEASE_SHOWCASE.md) and [Roadmap](docs/ROADMAP.md).

## 11. Future Vision

The long-term direction is a workspace that helps a person or organization adopt AI without turning every new use case into a separate integration project. Goals should remain connected to the context, permissions, tools, decisions, and results that produced them.

The public claim remains conservative: RC3D is a validated release candidate and workspace architecture, not evidence of production users, audited security, autonomous financial execution, or completed robotics deployment.

## Project Navigation

- [Portfolio Description](docs/PORTFOLIO.md)
- [Feature Matrix](docs/FEATURE_MATRIX.md)
- [RC3D Workspace Engine](docs/RC3D_WORKSPACE_ENGINE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Release Showcase](docs/RELEASE_SHOWCASE.md)
- [Current Status](docs/CURRENT_MAINLINE_STATUS.md)
- [Screenshots](docs/SCREENSHOTS.md)
- [Claim Boundary](docs/WHAT_THIS_DOES_NOT_CLAIM.md)

## My Role

I define the product direction, user workflows, system boundaries, and release criteria. I use AI coding systems during implementation, then read, review, modify, test, and validate the result. I am responsible for deciding what is complete, what remains experimental, and what can be stated publicly.
