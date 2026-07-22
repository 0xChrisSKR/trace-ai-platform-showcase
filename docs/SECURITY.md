# Security And Public Boundary

## Repository Boundary

This showcase must not contain:

- Private implementation source.
- Environment files or credentials.
- Private keys, tokens, wallet secrets, or exchange credentials.
- Internal hostnames, IP addresses, service names, or deployment topology.
- Private repository paths or local workstation paths.
- Unsanitized account, message, wallet, or connection data.

## Product Boundary

- The TRACE Account owns work and history.
- External services are connections, not identity providers for product ownership.
- Missing permission, setup, or provider health must fail visibly.
- Wallet and exchange paths remain read-only in the current public claim.
- Consequential actions require explicit approval and separate validation.
- No security-audit claim is made.

## Publication Review

Before publication, run the repository validator and scan Markdown, text, configuration, and diagram sources for local paths, private endpoints, secret-shaped values, internal topology, and unsupported production language.
