# Contributing to NadGang

Thank you for your interest in contributing to NadGang.

This project is early-stage and intentionally scoped. The priority is to ship a stable, understandable swap interface and reliable network data tools before expanding functionality.

Please read this document before opening a pull request.

---

## Project Focus

Phase 1 is limited to:
- Swap functionality built on existing Monad DEX infrastructure
- Accurate quoting and transparent routing
- Network statistics and performance visibility

Proposals outside this scope may be deferred or declined to keep the project focused and maintainable.

---

## What Makes a Good Contribution

Strong contributions generally:
- Solve a specific, user-facing problem
- Keep changes small and reviewable
- Favor explicit, readable code over abstraction
- Avoid introducing new dependencies unless necessary
- Include a clear explanation of what changed and why

---

## How to Contribute

1. Fork the repository
2. Create a feature branch from `main`
3. Keep changes focused and incremental
4. Open a pull request with a clear description of the problem being solved

If you are unsure whether a change fits the current scope, open an issue before starting work.

---

## When to Open an Issue First

Please open an issue before submitting a pull request if your change:
- Introduces a new dependency
- Modifies swap routing or fee logic
- Affects transaction construction or execution
- Adds a new external integration or data source

This helps avoid wasted effort and review delays.

---

## Contribution Guidelines

- One feature or fix per pull request
- Avoid large refactors without prior discussion
- Keep behavior explicit and easy to reason about
- Prefer correctness and safety over performance optimizations

If a change impacts swap execution or quote accuracy, include basic validation notes or testing details in the pull request description.

---

## Security Considerations

This project interacts with user wallets and on-chain transactions.

Changes that affect:
- Transaction construction
- Signing behavior
- Fund flow or fee handling

will be reviewed more strictly and may require additional discussion before merging.

---

## Review Process

Pull requests are reviewed for:
- Alignment with Phase 1 scope
- Code clarity and maintainability
- Safety and stability

Not all pull requests will be merged. Declined contributions reflect project direction, not contributor quality.

---

## Contributor Expectations

By contributing, you confirm that:
- You have the right to submit the code
- Your contribution may be modified or redistributed as part of the project
- There is no expectation of compensation, ownership, or future claims

---

Thank you for helping build NadGang.

