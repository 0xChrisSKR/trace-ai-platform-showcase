# AI Adoption Model

TRACE treats AI adoption as a product workflow, not a model-selection exercise.

## Adoption Path

```text
Goal
  -> guided conversation
  -> suitable work path
  -> required Apps and connections
  -> configured Workspace
  -> bounded execution
  -> saved result and history
```

## What Exists In The Current Candidate

- Goal-led Chat and onboarding.
- Work-path selection for several implemented task types.
- Workspace persistence for conversation, tasks, results, memory, and artifacts.
- App Center with lifecycle, readiness, and connection states.
- Account-level ownership and permission boundaries.
- Bounded execution with explicit blockers and approvals.

## What Remains In Development

- General solution recommendation across open-ended business goals.
- Automatic assembly of a complete workspace from a recommended solution.
- One-step installation and configuration across every App and connector.
- A uniform acceptance standard across every background workflow.

## Design Principle

The user should understand the work being done, not the internal machinery used to do it. Planner, runtime graph, capability registry, manifests, provider routing, and persistence adapters remain implementation details unless a technical reviewer opens the architecture documentation.

## Adoption Without Overclaiming

An App is described as available only when the relevant account, connection, adapter, permission, and persistence path can be resolved. Source code or registry metadata alone is not treated as a completed user capability.
