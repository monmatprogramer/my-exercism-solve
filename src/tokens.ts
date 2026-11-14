/**
 * Utility functions for creating and validating short-lived access tokens and
 * longer-lived refresh tokens.
 */

export interface TokenPayload {
  /** Subject the token was issued for. */
  userId: string;
  /** Unix timestamp (seconds) when the token was issued. */
  issuedAt: number;
  /** Unix timestamp (seconds) when the token expires. */
  exp: number;
}

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;

/** Access tokens live for 15 minutes. */
export const ACCESS_TOKEN_LIFETIME_SECONDS = 15 * SECONDS_PER_MINUTE;

/** Refresh tokens live for 7 days. */
export const REFRESH_TOKEN_LIFETIME_SECONDS = 7 * 24 * SECONDS_PER_HOUR;

/** Current time in Unix seconds. */
function nowSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

/** Creates an access token payload for the given user. */
export function createAccessToken(userId: string): TokenPayload {
  const now = nowSeconds();
  return {
    userId,
    issuedAt: now,
    exp: now + ACCESS_TOKEN_LIFETIME_SECONDS,
  };
}

/** Creates a refresh token payload for the given user. */
export function createRefreshToken(userId: string): TokenPayload {
  const now = nowSeconds();
  return {
    userId,
    issuedAt: now,
    exp: now + REFRESH_TOKEN_LIFETIME_SECONDS,
  };
}

/** Returns true when the given expiration timestamp (seconds) is in the past. */
export function isTokenExpired(exp: number): boolean {
  return nowSeconds() > exp;
}

/** Discriminated result of normalizing a raw refresh token string. */
export type NormalizedToken =
  | { isValid: true; value: string }
  | { isValid: false; value: "null" | "empty string" };

/**
 * Normalizes a raw refresh token extracted from a header/cookie.
 * Rejects null and empty/whitespace-only strings.
 */
export function normalizeToken(rawRefreshToken: string | null): NormalizedToken {
  if (!rawRefreshToken) {
    return { isValid: false, value: "null" };
  }
  const trimmed = rawRefreshToken.trim();
  if (trimmed.length === 0) {
    return { isValid: false, value: "empty string" };
  }
  return { isValid: true, value: trimmed };
}
