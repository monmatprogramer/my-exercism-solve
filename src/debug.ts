/**
 * @module debug
 *
 * Backwards-compatible barrel that re-exports the split, production-ready
 * modules. This file intentionally has no side effects (no auto-running
 * demos, no console.log on import).
 *
 * Prefer importing from the specific modules directly:
 *   - ./context   - AsyncLocalStorage request context
 *   - ./logger    - Winston logger with correlation id + redaction
 *   - ./tokens    - Token create / expire / normalize helpers
 */

export {
  type RequestContext,
  requestContext,
  getRequestContext,
  getCorrelationId,
  createRequestContext,
  runWithContext,
} from "./context";

export {
  type TokenPayload,
  type NormalizedToken,
  ACCESS_TOKEN_LIFETIME_SECONDS,
  REFRESH_TOKEN_LIFETIME_SECONDS,
  createAccessToken,
  createRefreshToken,
  isTokenExpired,
  normalizeToken,
} from "./tokens";

export {
  LOG_DIR,
  ensureLogDir,
  logger,
  consoleFormat,
  fileFormat,
} from "./logger";
