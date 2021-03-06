import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const Injected = new InjectedConnector({
  supportedNetworks: [1, 3, 4, 5, 42],
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "web3-react-demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors = {
  injected: Injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};
