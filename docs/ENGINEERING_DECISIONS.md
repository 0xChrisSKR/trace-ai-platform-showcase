# Engineering Decisions

## Begin With The Goal

The product home asks what the user wants to accomplish. Solution and App selection happen after the goal is understood, so infrastructure choices do not become the first product decision.

## Make Workspace The Continuity Boundary

Conversation is an entry point, but the workspace owns continuing work. Tasks, results, memory, context, activity, recommendations, Apps, capabilities, and resource references remain connected to one account-owned workspace identity.

## Extend The Existing Store

RC3D extends the existing workspace store instead of introducing a new database or parallel product. The release regression verifies persist, reopen, and extend behavior without duplicate stores.

## Keep Account Ownership Separate From Connections

The TRACE Account owns the workspace. External services, devices, wallets, and inference providers remain replaceable connections or resources. Replacing a provider must not replace the owner of previous work.

## Treat Apps As Usable Work, Not Registry Metadata

An App must resolve its capabilities, resources, permissions, and persistence path. A manifest or source file alone does not qualify as a completed user workflow.

## Preview Before Change

The recommendation surface shows the proposed workspace, starter tasks, Apps, required resources, and permissions before installation. Confirmation remains a product boundary, not an implementation detail.

## Fail With A Blocker

Missing connections, devices, permissions, or healthy adapters return a visible setup requirement. The product does not convert incomplete execution into a success state.

## Keep Hybrid AI Behind One Contract

Inference is an account-owned resource behind the product workflow. Native, local, bring-your-own, and enterprise providers can be changed without redefining workspace ownership or user navigation.

## Separate Validation From Production Adoption

RC3D passed release-candidate engineering validation. That result is reported separately from public-site promotion, production users, scale, and audited-security claims.
