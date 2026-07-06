# API Examples

    This repository is a public showcase package. It does not expose a live product API. The examples below show how reviewers can fetch public artifacts and how the platform API boundary is intended to be discussed.

    ## Public Artifact Requests

    README request:

    ```bash
    curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/README.md"
    ```

    Architecture document request:

    ```bash
    curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/docs/ARCHITECTURE.md"
    ```

    Career mapping request:

    ```bash
    curl -L "https://raw.githubusercontent.com/0xChrisSKR/trace-ai-platform-showcase/master/docs/CAREER_MAPPING.md"
    ```

    Representative response shape:

    ```json
    {
      "repository": "trace-ai-platform-showcase",
      "artifact": "public engineering showcase",
      "source": "https://github.com/0xChrisSKR/trace-ai-platform-showcase",
      "claimBoundary": "verifiable public material only"
    }
    ```


## Platform Boundary Example

Request:

```bash
curl -X POST "https://example.invalid/agent-workflow/run" \
  -H "Content-Type: application/json" \
  -d '{"workflow":"review-artifact","humanApprovalRequired":true}'
```

Response shape:

```json
{
  "workflowState": "waiting-for-review",
  "humanApprovalRequired": true,
  "artifactVisible": true,
  "claimBoundary": "public-showcase"
}
```

This is a platform boundary example, not a deployed public API claim.
