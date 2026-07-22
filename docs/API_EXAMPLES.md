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

## Validated RC3D Interface Families

The validated RC3D implementation contains internal interfaces for:

- Goal recommendation and Solution selection.
- Solution installation and permission review.
- Current workspace creation, reopening, and extension.
- Tasks, results, memory, context, activity, and recommendations.
- App catalog and lifecycle.
- Capability and connection readiness.

Route names, request bodies, and response contracts are not published here as a stable external API. They remain implementation interfaces until versioning, authentication, deployment, and public support boundaries are defined.
