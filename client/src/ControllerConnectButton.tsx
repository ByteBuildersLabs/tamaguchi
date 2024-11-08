import { useConnect, useAccount } from "@starknet-react/core";

const ControllerConnectButton = () => {
  const { connect, connectors } = useConnect();
  const { address, status } = useAccount();

  if (status === "connected" && address) {
    return <div>Connected: {address}</div>;
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="connect-btn button w-100"
        >
          Connect
        </button>
      ))}
    </div>
  );
};

export default ControllerConnectButton;
