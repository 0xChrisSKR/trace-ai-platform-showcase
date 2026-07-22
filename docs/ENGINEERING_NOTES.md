# Engineering Notes

## Problem

The implementation grew through several product eras: social surfaces, finance tools, runtime dashboards, agents, skills, and infrastructure control. The main engineering challenge is not adding another surface. It is converging those capabilities into one understandable work loop.

## Current Convergence

The latest RC candidate narrows the member product to:

- Chat for intent and results.
- Workspace for durable work state.
- Apps for usable capabilities and setup.
- Account for ownership, permissions, and connections.

This convergence changes how the system is described publicly. Runtime, planner, registry, manifest, and provider details remain available for technical review but no longer define the first product explanation.

## Implementation Patterns

- Task graphs model bounded multi-step work.
- Adapter boundaries separate product behavior from external services.
- Account ownership is propagated through workspace, memory, artifacts, and history.
- App readiness combines lifecycle state with connector and runtime health.
- Consequential actions require a separate approval path.
- Public responses are sanitized to remove internal provider and topology language.

## Current Challenges

- The latest candidate is ahead of the historically identified RC base.
- Some work paths are implemented and tested but not yet promoted and browser-validated.
- Several older product routes still exist in source even though they are not part of the canonical journey.
- External App readiness varies by account connection and provider health.
- Fresh screenshots cannot be accepted until the promoted build matches the documented candidate.

## Review Standard

A feature is described as current only when the source path exists and its status is named accurately. Deployment, external connection, and production claims require separate evidence.
