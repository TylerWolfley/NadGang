# NadGang Roadmap

This roadmap outlines current intent, not fixed timelines or guarantees.

Progression depends on system stability, real-world usage, and contributor capacity. Scope is intentionally constrained to avoid premature complexity.

---

## Phase 1 – Swap Interface and Network Visibility

**Objective:**  
Deliver a reliable, non-custodial interface for interacting with existing Monad liquidity while making network performance observable and verifiable.

Phase 1 is considered complete only when the system is stable under real usage.

**Status:** In progress

### Core Deliverables
- Wallet connection (EVM-compatible)
- Token swap interface
- Integration with a single Monad DEX
- Accurate quoting with clear route disclosure
- Explicit fee breakdown, including optional protocol fee
- Network statistics page:
  - gas estimates
  - confirmation timing
  - recent activity indicators
- Defensive error handling and user feedback
- Safe transaction construction and execution

### Phase 1 Exit Criteria
Phase 1 will not be considered complete until:
- Swaps execute reliably under normal network conditions
- Quote discrepancies are understood and documented
- The UI communicates failures clearly and safely
- Real users are actively using the interface

---

## Phase 2 – Conditional Expansion

Phase 2 is exploratory and contingent on Phase 1 success. No Phase 2 work is prioritized until Phase 1 is stable and in use.

**Objective:**  
Improve utility and flexibility without increasing system risk or opacity.

### Areas of Potential Expansion
- Validator information pages and delegation user experience
- Additional DEX integrations using the existing adapter pattern
- More advanced routing logic, evaluated incrementally
- Expanded network analytics and historical views

Each addition must:
- Be independently justifiable
- Preserve transparency and auditability
- Avoid introducing custodial or opaque behavior

---

## Explicitly Out of Scope (Current and Near-Term)

The following are intentionally excluded until the project demonstrates sustained value and stability:

- Token launches or distributions
- Governance systems or DAOs
- Yield products or liquid staking
- Custodial services or fund management

These exclusions are strategic, not ideological.

---

## Guiding Principle

NadGang prioritizes correctness, transparency, and user trust over speed or feature count.

Expansion is earned through usage, not assumed.
