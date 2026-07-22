# Screenshot Status And Capture Checklist

## Current Status

The previous public screenshots showed an older Skills/Profile/Terminal interface. They do not represent the current product convergence and are no longer used as current evidence.

The latest implementation source contains older audit captures, but no fresh screenshot set for the current RC candidate at `1a92fb01`. New screenshots must be captured after a clean RC promotion and authenticated product validation.

## Required Capture Set

Capture at 1440 x 900 or higher. Use one consistent authenticated test account with no private data, credentials, wallet addresses, personal messages, internal endpoints, or debug overlays.

1. `01-home-current-work.png`
   Show the signed-in Home surface with current work, next action, App readiness, and recent result state.

2. `02-chat-goal-to-result.png`
   Show a real, safe goal in Chat with a useful result and no internal runtime terminology.

3. `03-workspace-continuity.png`
   Show the same work in Workspace with tasks, active agent, artifact, memory, and execution-history references.

4. `04-app-center.png`
   Show Apps grouped by work type with clear installed, connected, setup-required, and unavailable states.

5. `05-account-connections.png`
   Show Account ownership and connection status using sanitized data only.

## Optional Workflow Captures

- Document analysis with a public sample file.
- Research result with visible public sources.
- GitHub monitor result for a public repository.
- Read-only market analysis with timestamp and source.
- Daily work brief produced from safe sample inputs.

## Acceptance Rules

- The screenshot commit/build must match the documented RC candidate or later verified promotion.
- No screenshot may imply production availability from local or candidate-only behavior.
- Remove emails, account IDs, tokens, addresses, private repository names, and private infrastructure details.
- Do not use terminal-only screenshots as the product cover.
- Do not repeat the same screen with minor state changes.
- Prefer complete product surfaces with readable text and a clear user outcome.
