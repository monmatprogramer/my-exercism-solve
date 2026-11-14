import { AsyncLocalStorage } from "node:async_hooks";
import { v4 as uuidv4 } from "uuid";

/**
 * Context propagated across asynchronous continuations for a single logical
 * request (e.g. an HTTP request or a background job).
 */
export interface RequestContext {
  /** Unique identifier for the request, useful for log correlation. */
  requestId: string;
  /** Optional identifier of the authenticated user (absent for anonymous users). */
  userId?: string;
}

/**
 * AsyncLocalStorage that holds the active request context. Use the helper
 * functions below rather than interacting with the store directly.
 */
const requestContext = new AsyncLocalStorage<RequestContext>();

export { requestContext };

/** Returns the context for the current asynchronous execution, or undefined. */
export function getRequestContext(): RequestContext | undefined {
  return requestContext.getStore();
}

/** Returns the correlation (request) id for the current execution, if any. */
export function getCorrelationId(): string | undefined {
  return getRequestContext()?.requestId;
}

/** Builds a fresh request context. */
export function createRequestContext(userId?: string): RequestContext {
  return {
    requestId: uuidv4(),
    userId,
  };
}

/**
 * Runs `work` within the given request context so that async operations
 * spawned inside can read the context via {@link getRequestContext}.
 */
export function runWithContext<T>(
  context: RequestContext,
  work: () => T,
): T {
  return requestContext.run(context, work);
}
