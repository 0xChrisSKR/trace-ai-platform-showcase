# Lessons Learned

## AI products need workflow design, not only model access

The hardest part is not calling a model. The harder problem is keeping the user's work understandable across multiple steps: what happened, what changed, what is pending review, and what still needs a human decision.

## Shared state is a product feature

When a workflow crosses tools, screens, and assistant actions, shared execution state becomes part of the user experience. If state is unclear, the product feels unreliable even when the underlying model works.

## Review trails matter before scale

For AI systems, reviewability should be designed early. A reviewer should be able to understand why an action exists, what system state it depends on, and what boundary prevents unsafe execution.

## Public packaging has to be selective

Some platform work cannot be exposed as source code. This repository keeps the public parts useful by showing screenshots, architecture, decisions, and claim boundaries without publishing private implementation details.
