# NadGang – Monad Swap and Network Data Hub (Phase 1)

NadGang is an early-stage, open-source interface for interacting with liquidity and on-chain data on the Monad network.

It is intended for developers and early Monad users who want a transparent, non-custodial way to interact with existing liquidity and observe real network performance.

Phase 1 focuses on delivering a reliable swap experience and clear, verifiable network statistics using existing Monad infrastructure. The goal is to ship a useful product first and expand only after it demonstrates value through real usage.

**Project status:** early development. APIs, interfaces, and scope may change as the product stabilizes.

---

## Project Scope (Phase 1)

This repository contains the initial implementation of NadGang. The scope is intentionally narrow to prioritize correctness, clarity, and stability.

### Included
- Wallet connection (EVM-compatible)
- Token swap interface using an existing Monad DEX
- Quote and routing transparency
- Optional, clearly disclosed protocol fee
- Network statistics dashboard (gas, confirmation timing, activity)

### Explicitly Excluded
- Validators or staking
- Launchpads or token issuance
- Governance systems
- Custodial components
- Complex multi-route aggregation

These features are out of scope until the core product is stable and in active use.

---

## Technical Stack

- Next.js (App Router)
- Tailwind CSS
- viem for blockchain interaction
- Public Monad RPC and explorer APIs

The project favors simplicity, readability, and explicit behavior over abstraction.

---

## Local Development

### Installation
```bash
pnpm install
# or npm install / yarn install
