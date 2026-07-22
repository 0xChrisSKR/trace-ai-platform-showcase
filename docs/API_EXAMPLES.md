# API Boundary

This repository does not advertise a public production TRACE API. The examples below access public showcase artifacts only.

## Public Showcase Artifacts

README:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/README.md"
```

Product status:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/docs/CURRENT_MAINLINE_STATUS.md"
```

Architecture:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/docs/ARCHITECTURE.md"
```

## RC Candidate Interface Families

Source inspection confirms internal RC candidate interfaces for:

- Conversation runtime.
- Current workspace and conversation recovery.
- Artifacts and execution history.
- App catalog and install/enable/bind/test/invoke/remove lifecycle.
- Active agent status and bounded execution.
- Account connections and readiness.
- Background work and automations.

Route names, request bodies, and response contracts are not published here as a stable external API. They remain implementation interfaces until versioning, authentication, deployment, and public support boundaries are defined.
