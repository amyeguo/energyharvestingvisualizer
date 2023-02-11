import { createWebBus } from "jacdac-ts";

/**
 * The Jacdac bus singleton.
 *
 * Declare this instance in a separate file from your components, to avoid
 * reloading the bus in the development hot-reload cycles.
 */
export const bus = createWebBus();
