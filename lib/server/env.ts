// lib/server/env.ts

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function optionalEnv(name: string, defaultValue?: string): string | undefined {
  return process.env[name] ?? defaultValue;
}

function requireNumber(name: string, defaultValue?: string): number {
  const raw = defaultValue === undefined ? requireEnv(name) : optionalEnv(name, defaultValue);
  const n = Number(raw);
  if (!Number.isFinite(n)) throw new Error(`${name} must be a valid number`);
  return n;
}

function requireBoolean(name: string, defaultValue = "false"): boolean {
  const raw = optionalEnv(name, defaultValue);
  return raw === "true";
}

function assertUrl(name: string, value?: string) {
  if (!value) return;
  try {
    const u = new URL(value);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      throw new Error();
    }
  } catch {
    throw new Error(`${name} must be a valid http(s) URL`);
  }
}

// If you’re EVM; replace with your chain’s address validator if not.
function assertEvmAddress(name: string, value?: string) {
  if (!value) return;
  if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
    throw new Error(`${name} must be a valid EVM address`);
  }
}

/**
 * Public (safe-to-expose) configuration
 * These values may be referenced by the client.
 */
export const publicEnv = {
  chainId: requireNumber("NEXT_PUBLIC_CHAIN_ID"),
  rpcUrl: optionalEnv("NEXT_PUBLIC_RPC_URL"),
  rpcFallbackUrl: optionalEnv("NEXT_PUBLIC_RPC_URL_FALLBACK"),
  rpcTimeoutMs: requireNumber("NEXT_PUBLIC_RPC_TIMEOUT_MS", "10000"),

  defaultSlippageBps: requireNumber("NEXT_PUBLIC_DEFAULT_SLIPPAGE_BPS", "50"),
  txDeadlineSeconds: requireNumber("NEXT_PUBLIC_TX_DEADLINE_SECONDS", "120"),

  feeEnabled: requireBoolean("NEXT_PUBLIC_FEE_ENABLED", "false"),
  feeBps: requireNumber("NEXT_PUBLIC_FEE_BPS", "0"),
  treasuryAddress: optionalEnv("NEXT_PUBLIC_TREASURY_ADDRESS"),

  tokenListUrl: optionalEnv("NEXT_PUBLIC_TOKENLIST_URL"),
  appUrl: optionalEnv("NEXT_PUBLIC_APP_URL"),
};

/**
 * Server-only secrets and infrastructure config
 * NEVER import these into client components.
 */
export const serverEnv = {
  explorerApiBase: optionalEnv("EXPLORER_API_BASE"),
  explorerApiKey: optionalEnv("EXPLORER_API_KEY"),
};

/**
 * Sanity checks (fail fast)
 */
assertUrl("NEXT_PUBLIC_RPC_URL", publicEnv.rpcUrl);
assertUrl("NEXT_PUBLIC_RPC_URL_FALLBACK", publicEnv.rpcFallbackUrl);
assertUrl("NEXT_PUBLIC_TOKENLIST_URL", publicEnv.tokenListUrl);
assertUrl("NEXT_PUBLIC_APP_URL", publicEnv.appUrl);

if (!publicEnv.rpcUrl && !publicEnv.rpcFallbackUrl) {
  throw new Error("Provide NEXT_PUBLIC_RPC_URL or NEXT_PUBLIC_RPC_URL_FALLBACK");
}

if (publicEnv.defaultSlippageBps < 0 || publicEnv.defaultSlippageBps > 5000) {
  throw new Error("NEXT_PUBLIC_DEFAULT_SLIPPAGE_BPS must be between 0 and 5000");
}

if (publicEnv.txDeadlineSeconds <= 0 || publicEnv.txDeadlineSeconds > 3600) {
  throw new Error("NEXT_PUBLIC_TX_DEADLINE_SECONDS must be between 1 and 3600");
}

if (publicEnv.rpcTimeoutMs < 1000 || publicEnv.rpcTimeoutMs > 120000) {
  throw new Error("NEXT_PUBLIC_RPC_TIMEOUT_MS must be between 1000 and 120000");
}

if (publicEnv.feeEnabled) {
  if (!publicEnv.treasuryAddress) {
    throw new Error("NEXT_PUBLIC_TREASURY_ADDRESS is required when protocol fees are enabled");
  }
  if (publicEnv.feeBps < 0 || publicEnv.feeBps > 1000) {
    throw new Error("NEXT_PUBLIC_FEE_BPS must be between 0 and 1000");
  }
  assertEvmAddress("NEXT_PUBLIC_TREASURY_ADDRESS", publicEnv.treasuryAddress);
}
