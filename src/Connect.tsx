import * as React from "react";
import { injectDevTools } from "jacdac-ts";
import { useBus, useChange } from "react-jacdac";

/**
 * A barebone connect button for Jacdac. Rewrite to your taste.
 */
export default function Connect() {
  // fetch the bus from the jacdac context
  const bus = useBus();
  // fetch the connect state, useChange will trigger a re-render when connected changes
  const connected = useChange(bus, (_) => _.connected);
  // connect or disconnect in a handler
  const handleConnect = () => (connected ? bus.disconnect() : bus.connect());
  // inject dev tools window
  const handleDevTools = () => injectDevTools(bus);

  return (
    <div>
      <button onClick={handleConnect}>
        jacdac {connected ? "disconnect" : "connect"}
      </button>
      <button onClick={handleDevTools} className="button-clear">
        dev tools
      </button>
    </div>
  );
}
